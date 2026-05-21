import { NextResponse } from "next/server";
import { serverEnv } from "@/lib/env";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Inbound webhook for "invitee scheduled" events from GoHighLevel / Calendly.
 * Idempotent on external_event_id. Links to a lead by email and flips the lead
 * status to "booked". Provider payloads vary, so we store the raw payload and
 * best-effort extract common fields.
 *
 * TODO when the provider is wired: verify the webhook signature/secret.
 */
export async function POST(request: Request) {
  const env = serverEnv();
  if (env.LEAD_API_MODE !== "live") {
    return NextResponse.json({ ok: true, skipped: "mock mode" });
  }
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 500 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  const pick = (...keys: string[]): string | undefined => {
    for (const k of keys) {
      const v = payload[k];
      if (typeof v === "string" && v) return v;
    }
    return undefined;
  };

  const externalEventId = pick("event_id", "id", "uuid", "calendar_event_id");
  const attendeeEmail = pick("email", "attendee_email", "contact_email");
  const attendeeName = pick("name", "full_name", "attendee_name", "contact_name");
  const scheduledAt = pick("scheduled_at", "start_time", "startTime", "selected_slot");
  const provider = pick("provider") ?? (payload["calendar"] ? "gohighlevel" : "unknown");

  const supabase = getSupabaseAdmin();

  // Link to lead by email (most recent)
  let leadId: string | null = null;
  if (attendeeEmail) {
    const { data } = await supabase
      .from("leads")
      .select("id")
      .eq("email", attendeeEmail)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    leadId = data?.id ?? null;
  }

  const { error } = await supabase.from("bookings").upsert(
    {
      lead_id: leadId,
      provider,
      external_event_id: externalEventId ?? null,
      scheduled_at: scheduledAt ?? null,
      attendee_email: attendeeEmail ?? null,
      attendee_name: attendeeName ?? null,
      status: "scheduled",
      raw_payload: payload,
    },
    { onConflict: "external_event_id", ignoreDuplicates: false },
  );

  if (error) {
    console.error("[booking-webhook] upsert failed:", error);
    return NextResponse.json({ ok: false, error: "store failed" }, { status: 500 });
  }

  if (leadId) {
    await supabase.from("leads").update({ status: "booked" }).eq("id", leadId);
  }

  return NextResponse.json({ ok: true });
}
