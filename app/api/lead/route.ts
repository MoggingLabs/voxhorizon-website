import { NextResponse } from "next/server";
import { createHash, randomUUID } from "crypto";
import { leadInputSchema, type LeadInput, type LeadResult } from "@/lib/types/lead";
import { serverEnv, publicEnv, assertLiveEnv } from "@/lib/env";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { sendLeadNotification } from "@/lib/email/resend";
import { syncLeadToGhl } from "@/lib/ghl/webhook";
import { rateLimit, clientIpFromHeaders } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(body: LeadResult, status = 200) {
  return NextResponse.json(body, { status });
}

function firstErrors(
  fieldErrors: Record<string, string[] | undefined>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(fieldErrors)) {
    if (v && v.length) out[k] = v[0];
  }
  return out;
}

function dedupeKey(input: LeadInput): string {
  if (input.clientRequestId) return input.clientRequestId;
  const day = new Date().toISOString().slice(0, 10);
  return createHash("sha256").update(`${input.email.toLowerCase()}|${day}`).digest("hex");
}

function buildBookingUrl(input: Pick<LeadInput, "fullName" | "email" | "phone">): string {
  const base = publicEnv.NEXT_PUBLIC_BOOKING_URL;
  if (!base) return "";
  try {
    const url = new URL(base);
    const [firstName, ...rest] = input.fullName.trim().split(/\s+/);
    url.searchParams.set("first_name", firstName);
    if (rest.length) url.searchParams.set("last_name", rest.join(" "));
    url.searchParams.set("email", input.email);
    url.searchParams.set("phone", input.phone);
    return url.toString();
  } catch {
    return base;
  }
}

async function verifyCaptcha(token: string | undefined): Promise<boolean> {
  const { HCAPTCHA_SECRET } = serverEnv();
  if (!HCAPTCHA_SECRET) return true; // captcha disabled
  if (!token) return false;
  try {
    const res = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: HCAPTCHA_SECRET, response: token }),
      signal: AbortSignal.timeout(6000),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  // 1. Parse JSON
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // 2. Validate
  const parsed = leadInputSchema.safeParse(raw);
  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "Please fix the highlighted fields.",
        fieldErrors: firstErrors(parsed.error.flatten().fieldErrors),
      },
      422,
    );
  }
  const input = parsed.data;

  // 3a. Honeypot — silently accept but drop (don't tip off bots)
  if (input.honeypot && input.honeypot.length > 0) {
    return json({ ok: true, leadId: "dropped", bookingUrl: buildBookingUrl(input) });
  }

  // 3b. Rate limit by IP
  const ip = clientIpFromHeaders(request.headers);
  const rl = rateLimit(`lead:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.success) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } },
    );
  }

  // 3c. Captcha (only if configured)
  if (!(await verifyCaptcha(input.captchaToken))) {
    return json({ ok: false, error: "Captcha verification failed." }, 400);
  }

  const bookingUrl = buildBookingUrl(input);

  // 4. Mock mode — skip all side effects
  const env = serverEnv();
  if (env.LEAD_API_MODE !== "live") {
    return json({ ok: true, leadId: `mock-${randomUUID()}`, bookingUrl });
  }

  // 5. Live mode — persist + side effects
  try {
    assertLiveEnv(env);
  } catch (err) {
    console.error("[lead] live env misconfigured:", err);
    return json({ ok: false, error: "Server is not configured. Please try again later." }, 500);
  }

  const supabase = getSupabaseAdmin();
  const key = dedupeKey(input);
  const utm = input.utm ?? {};

  const row = {
    markets: input.markets,
    revenue_tier: input.revenueTier,
    full_name: input.fullName,
    company: input.company ? input.company : null,
    email: input.email,
    phone: input.phone,
    source_page: input.sourcePage ?? null,
    referrer: input.referrer ?? null,
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
    utm_term: utm.utm_term ?? null,
    utm_content: utm.utm_content ?? null,
    dedupe_key: key,
  };

  // Idempotent insert: reuse existing row on dedupe collision, skip side effects.
  const insert = await supabase.from("leads").insert(row).select("id").single();

  if (insert.error) {
    if (insert.error.code === "23505") {
      const existing = await supabase
        .from("leads")
        .select("id")
        .eq("dedupe_key", key)
        .single();
      if (existing.data) {
        return json({ ok: true, leadId: existing.data.id, bookingUrl });
      }
    }
    console.error("[lead] insert failed:", insert.error);
    return json({ ok: false, error: "Something went wrong. Please try again." }, 500);
  }

  const leadId = insert.data.id;

  // 6. Best-effort side effects — never block the user.
  const [emailRes, ghlRes] = await Promise.allSettled([
    sendLeadNotification({
      fullName: input.fullName,
      company: input.company,
      email: input.email,
      phone: input.phone,
      markets: input.markets,
      revenueTier: input.revenueTier,
      sourcePage: input.sourcePage,
      utm,
      leadId,
    }),
    syncLeadToGhl({ ...input, leadId }),
  ]);

  const patch: {
    email_sent_at?: string;
    ghl_synced_at?: string;
    ghl_contact_id?: string;
  } = {};
  if (emailRes.status === "fulfilled" && emailRes.value.ok) {
    patch.email_sent_at = new Date().toISOString();
  } else {
    console.error("[lead] email side-effect failed:", emailRes);
  }
  if (ghlRes.status === "fulfilled" && ghlRes.value.ok) {
    patch.ghl_synced_at = new Date().toISOString();
    if (ghlRes.value.contactId) patch.ghl_contact_id = ghlRes.value.contactId;
  } else {
    console.error("[lead] GHL side-effect failed:", ghlRes);
  }
  if (Object.keys(patch).length) {
    await supabase.from("leads").update(patch).eq("id", leadId);
  }

  return json({ ok: true, leadId, bookingUrl });
}
