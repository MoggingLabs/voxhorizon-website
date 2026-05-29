import { NextResponse, type NextRequest } from "next/server";

/**
 * TEMPORARY PUBLIC GATE — two-step hold.
 * --------------------------------------
 * Unauthenticated visitors first see a styled, on-brand "under construction"
 * page (HTTP 200, so the container healthcheck on "/" stays green). A
 * "Team access" button leads to a SEPARATE login screen at /__access; a correct
 * password (posted to /api/gate) sets an httpOnly cookie and drops you into the
 * real (WIP) site to review your work.
 *
 * Only the SHA-256 of the password is committed (safe — not reversible); the
 * matching plaintext is shared privately.
 *
 * TO LIFT THE GATE: delete this file and app/api/gate/route.ts, then redeploy.
 */

const COOKIE = "vh_gate";
// Cookie token == SHA-256 of the gate password (set by /api/gate after login).
const GATE_TOKEN =
  "60321312434f637b94aef936e76cde9faaae9bbcbf8e347b9310ee891861ae5e";
const LOGIN_PATH = "/__access";

export function middleware(req: NextRequest) {
  // Authenticated preview → straight through to the real site.
  if (req.cookies.get(COOKIE)?.value === GATE_TOKEN) {
    return NextResponse.next();
  }
  const denied = req.nextUrl.searchParams.get("gate") === "denied";
  const body =
    req.nextUrl.pathname === LOGIN_PATH ? loginBody(denied) : constructionBody();
  return new NextResponse(page(body), {
    status: 200, // keep the Docker HEALTHCHECK on "/" green while gated
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export const config = {
  // Gate page routes; leave Next assets and API routes (incl. /api/gate) alone.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|api).*)"],
};

const MARK =
  '<svg viewBox="0 0 32 32" fill="none" stroke="#51B8DC" stroke-width="1.5" width="26" height="26"><rect x="2" y="2" width="28" height="28"/><line x1="7" y1="19" x2="25" y2="19"/><rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none"/></svg>';

function constructionBody(): string {
  return `<div class="top"><span class="mark">${MARK}</span><span class="wm"><b>Vox</b><i>&middot;</i><s>Horizon</s></span></div>
  <div class="status"><span class="dot"></span> System offline &middot; maintenance</div>
  <h1>Under <em>construction</em>.</h1>
  <p class="lede">We&#39;re rebuilding the operator desk. The network is live and running &mdash; the public site will be back online shortly.</p>
  <div class="bar"><span></span></div>
  <pre class="term"><span class="c">&gt; vh deploy --site voxhorizon</span>
  compiling components ........ <span class="c">ok</span>
  optimizing assets ........... <span class="c">ok</span>
  wiring territory map ........ <span class="c">ok</span>
  finalizing layout ........... <span class="a">in progress</span><span class="caret"></span></pre>
  <div class="actions"><a class="btn" href="${LOGIN_PATH}">Team access &#8594;</a></div>`;
}

function loginBody(denied: boolean): string {
  const errBlock = denied
    ? '<p class="err">Incorrect password — try again.</p>'
    : "";
  return `<div class="top"><span class="mark">${MARK}</span><span class="wm"><b>Vox</b><i>&middot;</i><s>Horizon</s></span></div>
  <div class="status"><span class="dot dim"></span> Restricted &middot; operator access</div>
  <h1>Team <em>access</em>.</h1>
  <p class="lede">Enter the operator password to preview the work in progress.</p>
  <form class="login open" method="post" action="/api/gate">
    <label for="pw">Operator password</label>
    <div class="row">
      <input id="pw" type="password" name="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" autocomplete="current-password" autofocus />
      <button class="btn primary" type="submit">Enter &#8594;</button>
    </div>
    ${errBlock}
  </form>
  <div class="actions"><a class="btn ghost" href="/">&#8592; Back to site</a></div>`;
}

function page(inner: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>VoxHorizon — Under construction</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<style>
  :root{
    --bg:#08182A;--deep:#060F1E;--bone:#D9E5DC;--body:#A6B5AB;--mute:#6C8278;--quiet:#3F5950;--cyan:#51B8DC;--amber:#FFB23F;
    --mono:"IBM Plex Mono",ui-monospace,Menlo,monospace;--sans:"IBM Plex Sans",system-ui,sans-serif;--serif:"Instrument Serif",Georgia,serif;
  }
  *{box-sizing:border-box}
  html,body{margin:0;min-height:100%}
  body{background:var(--bg);color:var(--bone);font-family:var(--mono);font-size:13px;line-height:1.5;-webkit-font-smoothing:antialiased;min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow-x:hidden}
  body::before{content:"";position:fixed;inset:0;background-image:linear-gradient(rgba(81,184,220,.03) 1px,transparent 1px);background-size:100% 24px;pointer-events:none;z-index:0}
  .wrap{position:relative;z-index:1;width:100%;max-width:660px;padding:48px 28px}
  .top{display:flex;align-items:center;gap:12px;margin-bottom:42px}
  .mark{width:26px;height:26px;display:inline-flex}
  .wm{font-family:var(--sans);font-weight:600;font-size:16px;letter-spacing:-.01em}
  .wm b{color:var(--bone);font-weight:600}
  .wm i{color:var(--cyan);font-style:normal;font-weight:700;padding:0 3px}
  .wm s{color:var(--cyan);text-decoration:none}
  .status{display:flex;align-items:center;gap:10px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--amber)}
  .dot{width:7px;height:7px;border-radius:50%;background:var(--amber);box-shadow:0 0 8px var(--amber);animation:blink 1.4s infinite}
  .dot.dim{background:var(--cyan);box-shadow:0 0 8px var(--cyan);animation:none}
  .status:has(.dim){color:var(--cyan)}
  h1{font-family:var(--sans);font-weight:600;font-size:54px;line-height:.98;letter-spacing:-.03em;margin:22px 0 0}
  h1 em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--cyan)}
  .lede{font-family:var(--sans);font-size:16px;line-height:1.55;color:var(--body);max-width:470px;margin:18px 0 0}
  .bar{position:relative;height:2px;background:rgba(81,184,220,.14);overflow:hidden;margin:32px 0}
  .bar span{position:absolute;top:0;height:100%;width:38%;left:-38%;background:linear-gradient(90deg,transparent,var(--cyan),transparent);animation:sweep 1.8s ease-in-out infinite}
  .term{font-family:var(--mono);font-size:12px;line-height:1.85;color:var(--mute);background:var(--deep);border:1px solid rgba(81,184,220,.18);padding:16px 18px;margin:0;white-space:pre-wrap}
  .term .c{color:var(--cyan)}
  .term .a{color:var(--amber)}
  .caret::after{content:"▍";color:var(--amber);animation:blink2 1s steps(1) infinite}
  .actions{margin-top:30px;display:flex;gap:12px;flex-wrap:wrap}
  .btn{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--bone);background:transparent;border:1px solid rgba(81,184,220,.22);padding:12px 20px;cursor:pointer;transition:background .12s;display:inline-block;text-decoration:none}
  .btn:hover{background:rgba(81,184,220,.08)}
  .btn.primary{background:var(--cyan);color:var(--deep);font-weight:600;border-color:var(--cyan)}
  .btn.primary:hover{background:var(--bone)}
  .btn.ghost{color:var(--mute)}
  .login{margin-top:26px}
  .login label{display:block;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--mute);margin-bottom:8px}
  .login .row{display:flex;max-width:430px;border:1px solid rgba(81,184,220,.22)}
  .login input{flex:1;background:var(--deep);border:0;color:var(--bone);font-family:var(--mono);font-size:13px;padding:12px 14px;outline:none}
  .login input:focus{box-shadow:inset 0 0 0 1px var(--cyan)}
  .login .btn.primary{border:0;white-space:nowrap}
  .err{color:var(--amber);font-size:11px;letter-spacing:.04em;margin:12px 0 0}
  .foot{margin-top:48px;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--quiet)}
  @keyframes blink{0%,60%,100%{opacity:1}80%{opacity:.25}}
  @keyframes blink2{50%{opacity:0}}
  @keyframes sweep{0%{left:-38%}100%{left:100%}}
  @media(max-width:560px){h1{font-size:40px}}
</style>
</head>
<body>
<main class="wrap">
  ${inner}
  <div class="foot">&copy; MMXXVI VoxHorizon LLC &middot; operators@voxhorizon.io</div>
</main>
</body>
</html>`;
}
