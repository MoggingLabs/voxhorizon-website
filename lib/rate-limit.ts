import "server-only";

/**
 * Lightweight per-key sliding-window rate limiter.
 *
 * In-memory by default (per serverless instance — adequate as a first line of
 * defense). For durable limiting across Vercel lambdas, swap the store for
 * Upstash Redis (@upstash/ratelimit) keyed by UPSTASH_REDIS_REST_URL/TOKEN.
 */

type Hit = { count: number; resetAt: number };
const store = new Map<string, Hit>();

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  if (existing.count > limit) {
    return {
      success: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }
  return {
    success: true,
    remaining: limit - existing.count,
    retryAfterSeconds: 0,
  };
}

/** Best-effort client IP from common proxy headers. */
export function clientIpFromHeaders(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
