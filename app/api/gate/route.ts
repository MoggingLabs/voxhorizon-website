import { NextResponse, type NextRequest } from "next/server";
import { createHash } from "node:crypto";

/**
 * Login endpoint for the temporary "under construction" gate (see middleware.ts).
 * POST a correct password → set the preview cookie and drop into the real site.
 * GET ?logout → clear the cookie and return to the hold page.
 */

const COOKIE = "vh_gate";
// SHA-256 of the gate password (plaintext shared privately, never committed).
const GATE_PASS_SHA256 =
  "60321312434f637b94aef936e76cde9faaae9bbcbf8e347b9310ee891861ae5e";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const hash = createHash("sha256").update(password).digest("hex");

  if (hash === GATE_PASS_SHA256) {
    const res = NextResponse.redirect(new URL("/", req.url), 303);
    res.cookies.set(COOKIE, GATE_PASS_SHA256, cookieOptions(MAX_AGE));
    return res;
  }
  return NextResponse.redirect(new URL("/?gate=denied", req.url), 303);
}

export async function GET(req: NextRequest) {
  // Logout: clear the cookie so the hold page shows again.
  const res = NextResponse.redirect(new URL("/", req.url), 303);
  if (req.nextUrl.searchParams.has("logout")) {
    res.cookies.set(COOKIE, "", cookieOptions(0));
  }
  return res;
}
