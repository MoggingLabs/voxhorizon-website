#!/usr/bin/env node

/**
 * Route smoke tests.
 *
 * Boots the site locally (mock mode, like smoke-api.mjs) and verifies every
 * public route renders: HTTP 200 + an <h1> in the HTML. Also asserts
 * configured redirects and that unknown paths 404.
 *
 * The preview gate (middleware.ts) is passed by sending the vh_gate cookie
 * directly — the cookie value equals the committed SHA-256 gate token, which
 * the script reads out of middleware.ts. When the gate is lifted (middleware
 * deleted), the cookie is simply omitted.
 */

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.SMOKE_PORT ?? "3101");
const providedBaseUrl = process.env.SMOKE_BASE_URL;
const baseUrl = new URL(providedBaseUrl ?? `http://127.0.0.1:${port}`);
const shouldStartServer = !providedBaseUrl && process.env.SMOKE_START_SERVER !== "0";
const readyTimeoutMs = Number(process.env.SMOKE_READY_TIMEOUT_MS ?? "90000");
const requestTimeoutMs = Number(process.env.SMOKE_REQUEST_TIMEOUT_MS ?? "8000");

/** Every route that must render (200 + <h1>). */
const ROUTES = [
  "/",
  "/system",
  "/territory",
  "/operators",
  "/apply",
  "/about",
  "/results",
  "/faq",
  "/industries/kitchen-bath",
  "/industries/roofing",
  "/industries/decking",
  "/brand",
  "/privacy",
  "/terms",
];

/** Permanent redirects that must hold (source → destination). */
const REDIRECTS = {
  // "/operators": "/results",  ← lands with the proof-merge PR
};

let server;
let logTail = "";

function log(message) {
  console.log(`[smoke:routes] ${message}`);
}

function appendLog(chunk) {
  logTail = `${logTail}${chunk.toString()}`.slice(-8000);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function isLocalUrl(url) {
  return ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
}

function gateCookie() {
  const middlewarePath = path.join(rootDir, "middleware.ts");
  if (!existsSync(middlewarePath)) return null;
  const source = readFileSync(middlewarePath, "utf8");
  const token = source.match(/"([0-9a-f]{64})"/)?.[1];
  if (!token) {
    throw new Error("middleware.ts exists but no 64-hex gate token found in it.");
  }
  return `vh_gate=${token}`;
}

function nextBin() {
  // Spawn Next's JS entry with the current Node binary instead of the .bin
  // shim: Node >= 20.12 refuses to spawn .cmd files without a shell (EINVAL),
  // which breaks .bin shims on Windows.
  return path.join(rootDir, "node_modules", "next", "dist", "bin", "next");
}

function hasProductionBuild() {
  return existsSync(path.join(rootDir, ".next", "BUILD_ID"));
}

function smokeEnv() {
  return {
    ...process.env,
    HOSTNAME: "127.0.0.1",
    LEAD_API_MODE: "mock",
    NEXT_PUBLIC_SITE_URL: baseUrl.origin,
    NEXT_PUBLIC_BOOKING_URL:
      process.env.SMOKE_BOOKING_URL ?? "https://booking.example.local/voxhorizon",
    NEXT_TELEMETRY_DISABLED: "1",
    PORT: String(port),
    HCAPTCHA_SECRET: "",
    SUPABASE_URL: "",
    SUPABASE_SERVICE_ROLE_KEY: "",
    RESEND_API_KEY: "",
    GHL_WEBHOOK_URL: "",
    UPSTASH_REDIS_REST_URL: "",
    UPSTASH_REDIS_REST_TOKEN: "",
  };
}

function startServer() {
  const mode = hasProductionBuild() ? "start" : "dev";
  const args = [mode, "--hostname", "127.0.0.1", "--port", String(port)];

  server = spawn(process.execPath, [nextBin(), ...args], {
    cwd: rootDir,
    env: smokeEnv(),
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", appendLog);
  server.stderr.on("data", appendLog);

  log(`started Next ${mode} server in mock mode at ${baseUrl.origin}`);
}

async function waitForServer() {
  const deadline = Date.now() + readyTimeoutMs;
  while (Date.now() < deadline) {
    if (server && server.exitCode !== null) {
      throw new Error(`Next server exited before becoming ready (code ${server.exitCode}).`);
    }
    try {
      const response = await fetch(new URL("/", baseUrl), {
        signal: AbortSignal.timeout(1000),
      });
      if (response.status < 500) return;
    } catch {
      // Keep polling until the timeout; Next may still be compiling.
    }
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${baseUrl.origin}.`);
}

async function fetchPage(pathname, cookie, { followRedirects = true } = {}) {
  return fetch(new URL(pathname, baseUrl), {
    headers: cookie ? { cookie } : {},
    redirect: followRedirects ? "follow" : "manual",
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
}

async function smokeRoutes(cookie) {
  for (const route of ROUTES) {
    if (route in REDIRECTS) continue;
    const response = await fetchPage(route, cookie);
    assert(response.ok, `${route} returned HTTP ${response.status}`);
    const html = await response.text();
    assert(/<h1[\s>]/i.test(html), `${route} rendered without an <h1>`);
    log(`passed ${route}`);
  }
}

async function smokeRedirects(cookie) {
  for (const [source, destination] of Object.entries(REDIRECTS)) {
    const response = await fetchPage(source, cookie, { followRedirects: false });
    assert(
      response.status === 308 || response.status === 301,
      `${source} expected a permanent redirect, got HTTP ${response.status}`,
    );
    const location = response.headers.get("location") ?? "";
    assert(
      location === destination || location.endsWith(destination),
      `${source} redirected to ${location}, expected ${destination}`,
    );
    log(`passed ${source} → ${destination} (${response.status})`);
  }
}

async function smokeNotFound(cookie) {
  const response = await fetchPage("/definitely-not-a-page", cookie);
  assert(
    response.status === 404,
    `/definitely-not-a-page expected HTTP 404, got ${response.status}`,
  );
  log("passed 404 handling");
}

async function smokeGate() {
  const cookie = gateCookie();
  if (!cookie) {
    log("no middleware.ts — gate lifted, skipping gate checks");
    return null;
  }
  // Without the cookie the gate must answer 200 (healthcheck) with the hold
  // page, i.e. NOT the real site.
  const response = await fetchPage("/", null);
  assert(response.ok, `gated / returned HTTP ${response.status}`);
  const html = await response.text();
  assert(
    html.includes("Under <em>construction</em>") || html.includes("Team <em>access</em>"),
    "gate is present but / did not serve the hold page to an anonymous request",
  );
  log("passed gate hold page (anonymous)");
  return cookie;
}

async function shutdown() {
  if (!server || server.exitCode !== null || server.signalCode !== null) return;
  let exited = false;
  server.once("exit", () => {
    exited = true;
  });
  server.kill("SIGTERM");
  await Promise.race([
    new Promise((resolve) => server.once("exit", resolve)),
    delay(5000).then(() => {
      if (!exited) server.kill("SIGKILL");
    }),
  ]);
}

async function main() {
  assert(Number.isInteger(port) && port > 0, `Invalid SMOKE_PORT: ${process.env.SMOKE_PORT}`);
  assert(
    isLocalUrl(baseUrl) || process.env.SMOKE_ALLOW_NON_LOCAL === "1",
    `Refusing to smoke test non-local URL ${baseUrl.origin}.`,
  );

  if (shouldStartServer) {
    startServer();
    await waitForServer();
  } else {
    log(`using existing server at ${baseUrl.origin}`);
  }

  const cookie = await smokeGate();
  await smokeRoutes(cookie);
  await smokeRedirects(cookie);
  await smokeNotFound(cookie);
  log("all checks passed");
}

main()
  .catch((error) => {
    console.error(`[smoke:routes] ${error instanceof Error ? error.message : String(error)}`);
    if (logTail) {
      console.error("[smoke:routes] recent Next output:");
      console.error(logTail.trim());
    }
    process.exitCode = 1;
  })
  .finally(shutdown);
