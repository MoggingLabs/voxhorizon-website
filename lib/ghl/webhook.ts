import "server-only";
import { serverEnv } from "@/lib/env";
import type { LeadInput } from "@/lib/types/lead";
import { MARKET_LABELS, REVENUE_TIER_LABELS } from "@/lib/types/lead";

export type GhlSyncResult =
  | { ok: true; contactId?: string }
  | { ok: false; error: string };

/**
 * Push a lead to a GoHighLevel inbound webhook (a workflow trigger URL).
 * Best-effort: callers must not let a failure here block the user's submission.
 */
export async function syncLeadToGhl(
  lead: LeadInput & { leadId: string },
): Promise<GhlSyncResult> {
  const { GHL_WEBHOOK_URL } = serverEnv();
  if (!GHL_WEBHOOK_URL) return { ok: false, error: "GHL_WEBHOOK_URL not set" };

  const [firstName, ...rest] = lead.fullName.trim().split(/\s+/);
  const lastName = rest.join(" ");

  const payload = {
    leadId: lead.leadId,
    firstName,
    lastName,
    name: lead.fullName,
    email: lead.email,
    phone: lead.phone,
    companyName: lead.company || undefined,
    // Human-readable extras for GHL custom fields / workflow logic
    markets: lead.markets.map((m) => MARKET_LABELS[m]),
    marketKeys: lead.markets,
    revenueTier: REVENUE_TIER_LABELS[lead.revenueTier],
    revenueTierKey: lead.revenueTier,
    source: lead.sourcePage || "website",
    utm: lead.utm || {},
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Don't hang the request forever if GHL is slow.
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      return { ok: false, error: `GHL responded ${res.status}` };
    }
    // Inbound webhooks usually return no useful body; try to read a contactId.
    let contactId: string | undefined;
    try {
      const data = (await res.json()) as { contact_id?: string; id?: string };
      contactId = data.contact_id ?? data.id;
    } catch {
      /* no JSON body — fine */
    }
    return { ok: true, contactId };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "GHL request failed",
    };
  }
}
