import { NextResponse, type NextRequest } from "next/server";

/**
 * TEMPORARY PUBLIC GATE
 * ---------------------
 * Locks the public site behind HTTP Basic Auth while the Carbon Trader frontend
 * is being finished. Public visitors get a browser password prompt; entering the
 * shared credentials reveals the real site (the auth header is sent on every
 * subsequent same-origin request, so assets load normally once authenticated).
 *
 * Credentials: username "vox" + a password shared out-of-band. Only the SHA-256
 * digest of the password lives here — safe to commit, the plaintext is not
 * derivable from it.
 *
 * TO LIFT THE GATE: delete this file and revert the Dockerfile HEALTHCHECK back
 * to "/", then redeploy.
 */

const GATE_USER = "vox";
// SHA-256 of the gate password (plaintext shared privately, never committed).
const GATE_PASS_SHA256 =
  "60321312434f637b94aef936e76cde9faaae9bbcbf8e347b9310ee891861ae5e";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(req: NextRequest) {
  const header = req.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const idx = decoded.indexOf(":");
      const user = decoded.slice(0, idx);
      const pass = decoded.slice(idx + 1);
      if (user === GATE_USER && (await sha256Hex(pass)) === GATE_PASS_SHA256) {
        return NextResponse.next();
      }
    } catch {
      // malformed header → fall through to the challenge
    }
  }
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="VoxHorizon preview", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Gate every route except the container healthcheck endpoint (/healthz).
  matcher: ["/((?!healthz).*)"],
};
