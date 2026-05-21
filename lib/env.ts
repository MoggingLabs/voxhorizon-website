import { z } from "zod";

/**
 * Environment validation. Public vars (NEXT_PUBLIC_*) are inlined at build time.
 * Backend secrets are validated lazily and treated as optional here so the app
 * still builds/runs in `mock` mode without real credentials; the lead route
 * enforces that the required live-mode secrets are present when LEAD_API_MODE=live.
 *
 * Empty strings (e.g. `FOO=` in .env.local) are treated as unset.
 */

const emptyToUndef = (v: unknown) => (v === "" ? undefined : v);
const optUrl = z.preprocess(emptyToUndef, z.string().url().optional());
const optStr = z.preprocess(emptyToUndef, z.string().optional());

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.preprocess(
    emptyToUndef,
    z.string().url().default("http://localhost:3000"),
  ),
  NEXT_PUBLIC_BOOKING_URL: optUrl,
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: optStr,
  NEXT_PUBLIC_HCAPTCHA_SITE_KEY: optStr,
});

// NEXT_PUBLIC_* must be referenced statically for Next.js to inline them.
export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_BOOKING_URL: process.env.NEXT_PUBLIC_BOOKING_URL,
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  NEXT_PUBLIC_HCAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY,
});

const serverSchema = z.object({
  LEAD_API_MODE: z
    .preprocess(emptyToUndef, z.enum(["live", "mock"]).default("mock")),
  SUPABASE_URL: optUrl,
  SUPABASE_SERVICE_ROLE_KEY: optStr,
  RESEND_API_KEY: optStr,
  LEAD_NOTIFY_TO: optStr,
  LEAD_NOTIFY_FROM: optStr,
  GHL_WEBHOOK_URL: optUrl,
  HCAPTCHA_SECRET: optStr,
  UPSTASH_REDIS_REST_URL: optUrl,
  UPSTASH_REDIS_REST_TOKEN: optStr,
});

export type ServerEnv = z.infer<typeof serverSchema>;

let cached: ServerEnv | null = null;

/** Server-only. Never import into a "use client" module. */
export function serverEnv(): ServerEnv {
  if (cached) return cached;
  cached = serverSchema.parse({
    LEAD_API_MODE: process.env.LEAD_API_MODE,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    LEAD_NOTIFY_TO: process.env.LEAD_NOTIFY_TO,
    LEAD_NOTIFY_FROM: process.env.LEAD_NOTIFY_FROM,
    GHL_WEBHOOK_URL: process.env.GHL_WEBHOOK_URL,
    HCAPTCHA_SECRET: process.env.HCAPTCHA_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  return cached;
}

/** Throws if a required live-mode secret is missing. Call from the lead route. */
export function assertLiveEnv(env: ServerEnv): asserts env is ServerEnv & {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
} {
  const missing: string[] = [];
  if (!env.SUPABASE_URL) missing.push("SUPABASE_URL");
  if (!env.SUPABASE_SERVICE_ROLE_KEY) missing.push("SUPABASE_SERVICE_ROLE_KEY");
  if (missing.length) {
    throw new Error(
      `LEAD_API_MODE=live but missing required env: ${missing.join(", ")}`,
    );
  }
}
