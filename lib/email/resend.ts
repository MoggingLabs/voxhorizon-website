import "server-only";
import { Resend } from "resend";
import { serverEnv } from "@/lib/env";
import {
  LeadNotificationEmail,
  type LeadNotificationProps,
} from "@/lib/email/templates/lead-notification";

export type EmailResult = { ok: true } | { ok: false; error: string };

let resend: Resend | null = null;
function getResend(): Resend | null {
  const { RESEND_API_KEY } = serverEnv();
  if (!RESEND_API_KEY) return null;
  if (!resend) resend = new Resend(RESEND_API_KEY);
  return resend;
}

/**
 * Notify the team of a new lead. Best-effort — never let a failure block the
 * user's submission; the caller logs/flags the row instead.
 */
export async function sendLeadNotification(
  props: LeadNotificationProps,
): Promise<EmailResult> {
  const client = getResend();
  const { LEAD_NOTIFY_TO, LEAD_NOTIFY_FROM } = serverEnv();

  if (!client) return { ok: false, error: "RESEND_API_KEY not set" };
  if (!LEAD_NOTIFY_TO || !LEAD_NOTIFY_FROM) {
    return { ok: false, error: "LEAD_NOTIFY_TO / LEAD_NOTIFY_FROM not set" };
  }

  try {
    const { error } = await client.emails.send({
      from: `VoxHorizon Leads <${LEAD_NOTIFY_FROM}>`,
      to: LEAD_NOTIFY_TO.split(",").map((s) => s.trim()),
      subject: `New lead: ${props.fullName}${props.company ? ` (${props.company})` : ""}`,
      react: LeadNotificationEmail(props),
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Email send failed",
    };
  }
}
