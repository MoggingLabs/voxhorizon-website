import { z } from "zod";

/**
 * THE DATA CONTRACT.
 *
 * Shared by the Claude Design form UI (components/forms/QualifyingForm.tsx) and
 * the Claude Code backend (app/api/lead/route.ts). Freeze these shapes early; any
 * change must be made on both sides at once.
 *
 * Note: client/API payloads use camelCase. The Supabase columns are snake_case;
 * the mapping happens inside the API route (see app/api/lead/route.ts).
 */

export const REVENUE_TIERS = [
  "under_50k",
  "50k_100k",
  "100k_250k",
  "250k_500k",
  "500k_plus",
] as const;

export const MARKET_SEGMENTS = ["kitchen_bath", "roofing", "decking"] as const;

export const revenueTierSchema = z.enum(REVENUE_TIERS);
export const marketSegmentSchema = z.enum(MARKET_SEGMENTS);

export type RevenueTier = z.infer<typeof revenueTierSchema>;
export type MarketSegment = z.infer<typeof marketSegmentSchema>;

/** Human labels for the UI (presentational layer reads these). */
export const REVENUE_TIER_LABELS: Record<RevenueTier, string> = {
  under_50k: "Less than $50K/mo",
  "50k_100k": "$50K – $100K/mo",
  "100k_250k": "$100K – $250K/mo",
  "250k_500k": "$250K – $500K/mo",
  "500k_plus": "$500K/mo+",
};

export const MARKET_LABELS: Record<MarketSegment, string> = {
  kitchen_bath: "Kitchen & Bath",
  roofing: "Roofing",
  decking: "Decking",
};

/** What the form collects and POSTs to /api/lead. */
export const leadInputSchema = z.object({
  markets: z.array(marketSegmentSchema).min(1, "Select at least one market"),
  revenueTier: revenueTierSchema,
  fullName: z.string().trim().min(2, "Please enter your name").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  // attribution — filled client-side from lib/utm.ts; all optional
  sourcePage: z.string().max(200).optional(),
  referrer: z.string().max(500).optional(),
  utm: z.record(z.string(), z.string()).optional(),
  // spam / idempotency controls
  honeypot: z.string().max(0, "Bot detected").optional(),
  captchaToken: z.string().optional(),
  clientRequestId: z.string().uuid().optional(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;

/** What /api/lead returns. */
export type LeadResult =
  | { ok: true; leadId: string; bookingUrl: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

/**
 * Presentational form contract. Claude Design builds QualifyingForm.tsx against
 * this exact signature; Claude Code injects the real `onSubmit`. Do not change.
 */
export type QualifyingFormProps = {
  defaultValues?: Partial<LeadInput>;
  onSubmit: (values: LeadInput) => Promise<LeadResult>;
  isSubmitting: boolean;
  fieldErrors?: Record<string, string>;
};
