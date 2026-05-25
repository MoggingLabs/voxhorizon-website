// Public health endpoint for the container HEALTHCHECK (see Dockerfile).
// Intentionally exempt from the auth gate in middleware.ts so the orchestrator
// can verify the container is up while the public site is password-gated.
export function GET() {
  return new Response("ok", {
    status: 200,
    headers: { "content-type": "text/plain", "cache-control": "no-store" },
  });
}
