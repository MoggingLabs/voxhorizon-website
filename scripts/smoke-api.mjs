#!/usr/bin/env node

import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.SMOKE_PORT ?? "3100");
const providedBaseUrl = process.env.SMOKE_BASE_URL;
const baseUrl = new URL(providedBaseUrl ?? `http://127.0.0.1:${port}`);
const shouldStartServer = !providedBaseUrl && process.env.SMOKE_START_SERVER !== "0";
const readyTimeoutMs = Number(process.env.SMOKE_READY_TIMEOUT_MS ?? "90000");
const requestTimeoutMs = Number(process.env.SMOKE_REQUEST_TIMEOUT_MS ?? "8000");

let server;
let logTail = "";

function log(message) {
  console.log(`[smoke:api] ${message}`);
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

function nextBin() {
  return path.join(
    rootDir,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "next.cmd" : "next",
  );
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
  const args = [
    mode,
    "--hostname",
    "127.0.0.1",
    "--port",
    String(port),
  ];

  server = spawn(nextBin(), args, {
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
      if (response.status < 500) {
        return;
      }
    } catch {
      // Keep polling until the timeout; Next may still be compiling.
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for ${baseUrl.origin}.`);
}

async function postJson(pathname, body) {
  const response = await fetch(new URL(pathname, baseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": "127.0.0.1",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    throw new Error(`${pathname} returned non-JSON response: ${text.slice(0, 200)}`);
  }
  return { response, data };
}

async function assertMockMode() {
  const response = await fetch(new URL("/api/booking-webhook", baseUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "not-json",
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  const text = await response.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  assert(
    response.ok && data?.ok === true && data?.skipped === "mock mode",
    "Target server is not confirmed to be in LEAD_API_MODE=mock; refusing live smoke test.",
  );
  log("confirmed mock mode");
}

async function smokeLead() {
  const { response, data } = await postJson("/api/lead", {
    markets: ["kitchen_bath"],
    revenueTier: "100k_250k",
    fullName: "Smoke Test",
    company: "VoxHorizon Smoke",
    email: `smoke+${Date.now()}@example.com`,
    phone: "5551234567",
    sourcePage: "/smoke",
    referrer: "",
    utm: { utm_source: "smoke" },
    honeypot: "",
    clientRequestId: randomUUID(),
  });

  assert(response.ok, `/api/lead returned HTTP ${response.status}: ${JSON.stringify(data)}`);
  assert(data?.ok === true, `/api/lead did not return ok=true: ${JSON.stringify(data)}`);
  assert(
    typeof data.leadId === "string" && data.leadId.startsWith("mock-"),
    `/api/lead did not return a mock lead id: ${JSON.stringify(data)}`,
  );
  assert(
    typeof data.bookingUrl === "string",
    `/api/lead returned an invalid bookingUrl: ${JSON.stringify(data)}`,
  );

  log("passed /api/lead");
}

async function smokeBookingWebhook() {
  const { response, data } = await postJson("/api/booking-webhook", {
    event_id: `smoke-${Date.now()}`,
    email: "smoke@example.com",
    name: "Smoke Test",
    scheduled_at: "2026-01-01T15:00:00.000Z",
    provider: "smoke",
  });

  assert(
    response.ok,
    `/api/booking-webhook returned HTTP ${response.status}: ${JSON.stringify(data)}`,
  );
  assert(
    data?.ok === true && data?.skipped === "mock mode",
    `/api/booking-webhook did not return the mock skip response: ${JSON.stringify(data)}`,
  );

  log("passed /api/booking-webhook");
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

  await assertMockMode();
  await smokeLead();
  await smokeBookingWebhook();
  log("all checks passed");
}

main()
  .catch((error) => {
    console.error(`[smoke:api] ${error instanceof Error ? error.message : String(error)}`);
    if (logTail) {
      console.error("[smoke:api] recent Next output:");
      console.error(logTail.trim());
    }
    process.exitCode = 1;
  })
  .finally(shutdown);
