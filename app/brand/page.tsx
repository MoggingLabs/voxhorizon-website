import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand — VoxHorizon",
  description: "VoxHorizon brand identity — logo, colors, type, components, voice.",
  alternates: { canonical: "/brand" },
};

// ── Brand-page-only inline styles (mirrors brand.html <style> block) ──────────
// All styles applied via inline style={{ }} objects; no external class deps beyond .vh-*.

const MINI_GRID_CELLS = [
  "claimed","claimed","open","claimed","claimed","open-hot","claimed","claimed",
  "open","claimed","claimed","claimed","open","claimed","claimed","claimed",
  "open","claimed","claimed","claimed","claimed","claimed","open","open-hot",
  "claimed","claimed","claimed","open","claimed","claimed","claimed","claimed",
] as const;

export default function BrandPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Brand · identity system<em>— v1.0 · Q3 MMXXVI</em>
        </div>
        <h1>
          A console,<br /><em>not a marketplace.</em>
        </h1>
        <p className="lede">
          VoxHorizon looks and reads like a working operator desk — Bloomberg-terminal, navy ground,
          cyan accent, amber for live alerts. <strong>Type does the work; we don't draw
          illustrations.</strong> The brand is a system, not a logo. Below is everything an operator,
          partner, or vendor needs to render it correctly.
        </p>
      </section>

      {/* ── 01 — LOGO ──────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">01 / 06 <span>— Logo</span></span>
          <em>Mark, wordmark, and lockup.</em>
        </div>

        <div className="vh-2" style={{ marginBottom: "18px" }}>
          {/* A · The mark */}
          <div>
            <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>A · The mark</div>
            <div style={{
              padding: "56px 32px",
              border: "1px solid var(--hr)",
              background: "var(--c-bg-deep)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#51B8DC"
                strokeWidth={1.5}
                aria-label="VoxHorizon mark"
                width={144}
                height={144}
              >
                <rect x="2" y="2" width="28" height="28" />
                <line x1="7" y1="19" x2="25" y2="19" />
                <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
              </svg>
            </div>
            <div className="vh-prose" style={{ fontSize: "14px", marginTop: "14px", maxWidth: "none" }}>
              <p>The mark is a console viewport — outer frame, horizon line, signal block. Stroke is
              always <span className="vh-accent">#51B8DC</span>. Use at <strong>16px minimum</strong>;
              below that, the favicon variant takes over.</p>
            </div>
          </div>

          {/* B · The wordmark */}
          <div>
            <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>B · The wordmark</div>
            <div style={{
              padding: "56px 32px",
              border: "1px solid var(--hr)",
              background: "var(--c-bg-deep)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                fontFamily: "var(--f-sans)",
                fontWeight: 600,
                fontSize: "88px",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                color: "var(--c-bone)",
              }}>
                Vox
                <span style={{ color: "var(--c-cyan)", padding: "0 6px", fontWeight: 700 }}>·</span>
                <span style={{ color: "var(--c-cyan)" }}>Horizon</span>
              </div>
            </div>
            <div className="vh-prose" style={{ fontSize: "14px", marginTop: "14px", maxWidth: "none" }}>
              <p>IBM Plex Sans, weight 600, tracking -0.025em. <strong>Vox</strong> in{" "}
              <span className="vh-quiet">bone</span>, <strong>·Horizon</strong> in{" "}
              <span className="vh-accent">cyan</span>. The cyan middle dot is part of the wordmark
              — never remove it.</p>
            </div>
          </div>
        </div>

        {/* C · The lockup */}
        <div className="vh-caps vh-quiet" style={{ padding: "18px 0 10px" }}>C · The lockup</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          padding: "56px 32px",
          border: "1px solid var(--hr)",
          background: "var(--c-bg-deep)",
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="#51B8DC"
            strokeWidth={1.5}
            aria-label=""
            width={80}
            height={80}
            style={{ flex: "0 0 80px" }}
          >
            <rect x="2" y="2" width="28" height="28" />
            <line x1="7" y1="19" x2="25" y2="19" />
            <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
          </svg>
          <div style={{
            fontFamily: "var(--f-sans)",
            fontWeight: 600,
            fontSize: "64px",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            color: "var(--c-bone)",
          }}>
            Vox
            <span style={{ color: "var(--c-cyan)", padding: "0 5px", fontWeight: 700 }}>·</span>
            <span style={{ color: "var(--c-cyan)" }}>Horizon</span>
          </div>
        </div>

        {/* D · Misuse */}
        <div className="vh-caps vh-quiet" style={{ padding: "32px 0 14px" }}>D · Misuse — don&#39;t do these</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
          {/* Don't recolor */}
          <div style={{
            padding: "24px",
            border: "1px solid var(--hr)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minHeight: "200px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--f-sans)", fontWeight: 700, fontSize: "24px", color: "var(--c-amber)" }}>✗</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#51B8DC" strokeWidth={1.5} width={48} height={48}>
              <rect x="2" y="2" width="28" height="28" />
              <line x1="7" y1="19" x2="25" y2="19" />
              <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
            </svg>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-mute)" }}>Don&#39;t recolor the mark</div>
          </div>
          {/* Don't stretch */}
          <div style={{
            padding: "24px",
            border: "1px solid var(--hr)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minHeight: "200px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--f-sans)", fontWeight: 700, fontSize: "24px", color: "var(--c-amber)" }}>✗</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#51B8DC" strokeWidth={1.5} width={48} height={48} style={{ opacity: 0.4, filter: "hue-rotate(40deg) saturate(0)", transform: "scaleX(2)" }}>
              <rect x="2" y="2" width="28" height="28" />
              <line x1="7" y1="19" x2="25" y2="19" />
              <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
            </svg>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-mute)" }}>Don&#39;t stretch / scale unevenly</div>
          </div>
          {/* Don't rotate */}
          <div style={{
            padding: "24px",
            border: "1px solid var(--hr)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minHeight: "200px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--f-sans)", fontWeight: 700, fontSize: "24px", color: "var(--c-amber)" }}>✗</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#51B8DC" strokeWidth={1.5} width={48} height={48} style={{ opacity: 0.4, filter: "hue-rotate(40deg) saturate(0)", transform: "rotate(-15deg)" }}>
              <rect x="2" y="2" width="28" height="28" />
              <line x1="7" y1="19" x2="25" y2="19" />
              <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
            </svg>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-mute)" }}>Don&#39;t rotate the mark</div>
          </div>
          {/* Don't put on warm */}
          <div style={{
            padding: "24px",
            border: "1px solid var(--hr)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            minHeight: "200px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            background: "rgba(255,178,63,0.10)",
          }}>
            <span style={{ fontFamily: "var(--f-sans)", fontWeight: 700, fontSize: "24px", color: "var(--c-amber)" }}>✗</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#51B8DC" strokeWidth={1.5} width={48} height={48} style={{ opacity: 0.4, filter: "hue-rotate(40deg) saturate(0)" }}>
              <rect x="2" y="2" width="28" height="28" />
              <line x1="7" y1="19" x2="25" y2="19" />
              <rect x="19" y="8" width="5" height="5" fill="#51B8DC" stroke="none" />
            </svg>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-mute)" }}>Don&#39;t put cyan on warm surfaces</div>
          </div>
        </div>
      </section>

      {/* ── 02 — COLOR ─────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">02 / 06 <span>— Color</span></span>
          <em>Three surface depths, two accents, four foreground weights.</em>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>A · Surfaces</div>
        <div className="vh-3" style={{ marginBottom: "24px" }}>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#08182A" }} />
            <div className="meta">
              <div className="name">Navy</div>
              <div className="hex">#08182A</div>
              <div className="role">Page ground · default body</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#060F1E" }} />
            <div className="meta">
              <div className="name">Navy deep</div>
              <div className="hex">#060F1E</div>
              <div className="role">Ticker · footer · pressed buttons</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#040A18" }} />
            <div className="meta">
              <div className="name">Navy shadow</div>
              <div className="hex">#040A18</div>
              <div className="role">Terminal · form inputs · text wells</div>
            </div>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>B · Accents</div>
        <div className="vh-2" style={{ marginBottom: "24px" }}>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#51B8DC" }} />
            <div className="meta">
              <div className="name">Cyan · primary</div>
              <div className="hex">#51B8DC</div>
              <div className="role">Brand · links · live data · primary CTA</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#FFB23F" }} />
            <div className="meta">
              <div className="name">Amber · alert</div>
              <div className="hex">#FFB23F</div>
              <div className="role">Live indicator · hot territories · warnings</div>
            </div>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>C · Foreground</div>
        <div className="vh-3">
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#D9E5DC" }} />
            <div className="meta">
              <div className="name">Bone</div>
              <div className="hex">#D9E5DC</div>
              <div className="role">Primary text · headlines</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#A6B5AB" }} />
            <div className="meta">
              <div className="name">Body</div>
              <div className="hex">#A6B5AB</div>
              <div className="role">Long-form prose · descriptions</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#6C8278" }} />
            <div className="meta">
              <div className="name">Mute</div>
              <div className="hex">#6C8278</div>
              <div className="role">Labels · meta · captions</div>
            </div>
          </div>
        </div>
        <div className="vh-3" style={{ marginTop: "14px" }}>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "#3F5950" }} />
            <div className="meta">
              <div className="name">Quiet</div>
              <div className="hex">#3F5950</div>
              <div className="role">Disabled · chart axes · footer text</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "rgba(81,184,220,0.18)" }} />
            <div className="meta">
              <div className="name">Hairline · cyan</div>
              <div className="hex">rgba(81,184,220,0.18)</div>
              <div className="role">Section dividers · borders</div>
            </div>
          </div>
          <div className="vh-swatch">
            <div className="chip" style={{ background: "rgba(81,184,220,0.10)" }} />
            <div className="meta">
              <div className="name">Hairline · soft</div>
              <div className="hex">rgba(81,184,220,0.10)</div>
              <div className="role">Row separators · soft dividers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — TYPE ──────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 06 <span>— Type</span></span>
          <em>Three families. Each has a job.</em>
        </div>

        <div className="vh-3" style={{ marginBottom: "24px" }}>
          <div className="vh-type-spec">
            <div className="label">A · Mono <em>IBM Plex Mono</em></div>
            <div className="sample vh-mono" style={{ fontSize: "48px" }}>Aa·12</div>
            <div className="vh-quiet vh-caps">Labels · code · data · timestamps · ticker</div>
            <div className="vh-prose" style={{ fontSize: "13px" }}>
              <p>The default. Everything wears mono until told otherwise. Weights 400/500/600/700.</p>
            </div>
          </div>
          <div className="vh-type-spec">
            <div className="label">B · Sans <em>IBM Plex Sans</em></div>
            <div className="sample vh-sans" style={{ fontSize: "64px", fontWeight: 600, letterSpacing: "-0.025em" }}>Aa</div>
            <div className="vh-quiet vh-caps">Headlines · large numbers · brand wordmark</div>
            <div className="vh-prose" style={{ fontSize: "13px" }}>
              <p>Display weight. Always 600 weight, always tight tracking. Never used for paragraphs longer than two lines.</p>
            </div>
          </div>
          <div className="vh-type-spec">
            <div className="label">C · Serif <em>Instrument Serif</em></div>
            <div className="sample vh-serif" style={{ fontSize: "64px", color: "var(--c-cyan)" }}>Aa</div>
            <div className="vh-quiet vh-caps">Italic accents · pull-quotes · operator quotes</div>
            <div className="vh-prose" style={{ fontSize: "13px" }}>
              <p>Italic only. Used as a counterpoint to the otherwise mechanical type. Almost always set in <span className="vh-accent">cyan</span>.</p>
            </div>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>Scale</div>
        <div className="vh-block">
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">H1 · 104</div>
            <div className="vh-h1" style={{ fontSize: "64px" }}>Your phone <em>rings.</em></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">H2 · 56</div>
            <div className="vh-h2">30 in 90. Or <em>free.</em></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">H3 · 40</div>
            <div className="vh-h3">The <em>only</em> desk a contractor needs.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">H4 · 22</div>
            <div className="vh-h4">A qualified record.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">Lede · 17</div>
            <div style={{ fontFamily: "var(--f-sans)", fontSize: "17px", lineHeight: 1.55, color: "var(--c-body)" }}>
              VoxHorizon delivers <strong style={{ color: "var(--c-bone)", fontWeight: 500 }}>pre-qualified, pre-scheduled appointments</strong> to established home-improvement contractors.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0", borderBottom: "1px solid var(--hr)" }}>
            <div className="vh-caps vh-quiet">Body · 14</div>
            <div style={{ fontFamily: "var(--f-sans)", fontSize: "14px", lineHeight: 1.55, color: "var(--c-body)" }}>
              Budget verified, ownership confirmed, project specified. We reject 71% of inquiries before you see them.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "18px", padding: "14px 0" }}>
            <div className="vh-caps vh-quiet">Label · 10</div>
            <div className="vh-caps vh-quiet">SEC · 02 / 06 — THE FEED</div>
          </div>
        </div>
      </section>

      {/* ── 04 — COMPONENTS ────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">04 / 06 <span>— Components</span></span>
          <em>Composable. Always bordered, never floating.</em>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>A · Live row · the spine of the system</div>
        <div className="vh-block" style={{ marginBottom: "24px" }}>
          <div className="vh-row">
            <span className="vh-row__ic">L</span>
            <div>
              <div className="vh-row__title">QUAL LEAD · re-roof 24sq</div>
              <div className="vh-row__sub">MITCH · 67501 WICHITA KS · $18–22K</div>
            </div>
            <span className="vh-row__time">+00:02</span>
          </div>
          <div className="vh-row">
            <span className="vh-row__ic kept">K</span>
            <div>
              <div className="vh-row__title">APPT CONF · kitchen remodel</div>
              <div className="vh-row__sub">JONATHAN · 78704 AUSTIN TX · THU 10:00</div>
            </div>
            <span className="vh-row__time">+00:09</span>
          </div>
          <div className="vh-row">
            <span className="vh-row__ic sign">$</span>
            <div>
              <div className="vh-row__title">SIGNED · $34,600 deck</div>
              <div className="vh-row__sub">DECKWORKS · 55410 MINNEAPOLIS MN</div>
            </div>
            <span className="vh-row__time">+00:36</span>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>B · CTA group · segmented, bordered</div>
        <div className="vh-block" style={{ marginBottom: "24px", display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap" }}>
          <div className="vh-cta">
            <a className="p">[ Primary action ]</a>
            <a className="g">Secondary</a>
          </div>
          <div className="vh-cta">
            <a className="p">[ Apply my zip ]</a>
          </div>
          <div className="vh-cta">
            <a className="g">Ghost only</a>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>C · Metric cell · large data</div>
        <div className="vh-strip" style={{ marginBottom: "24px" }}>
          <div className="vh-strip__cell">
            <div className="k">Active operators</div>
            <div className="v"><em>63</em></div>
            <div className="delta">+4 QoQ</div>
          </div>
          <div className="vh-strip__cell">
            <div className="k">Appts · 24h</div>
            <div className="v">187</div>
            <div className="delta">+12% vs 7D</div>
          </div>
          <div className="vh-strip__cell">
            <div className="k">Avg ticket</div>
            <div className="v"><span className="pre">$</span>32.4<span className="pre">K</span></div>
            <div className="delta">+$1.8K MoM</div>
          </div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>D · Terminal block · receipts, audit trails</div>
        <div className="vh-term" style={{ marginBottom: "24px" }}>
          <div><span className="p">vh@operator</span>:~$ <span className="e">guarantee --check</span></div>
          <div>&nbsp;&nbsp;cohort.......... Q2 2026</div>
          <div>&nbsp;&nbsp;contracts....... <span className="e">24 / 30 ✗</span></div>
          <div>&nbsp;&nbsp;status.......... <span className="o">working_free</span><span className="cursor"></span></div>
        </div>

        <div className="vh-caps vh-quiet" style={{ paddingBottom: "10px" }}>E · Territory grid · always 16 wide</div>
        <div style={{ maxWidth: "600px" }}>
          <div className="vh-grid">
            {MINI_GRID_CELLS.map((state, i) => (
              <div key={i} className={`cell ${state}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 — VOICE & TONE ──────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">05 / 06 <span>— Voice &amp; tone</span></span>
          <em>Plain. Audited. No marketing-speak.</em>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
          {/* Do 1 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-cyan)" }}>Do · plain</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Specific verbs, specific numbers.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-bone)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-cyan)" }}>
              &#8220;30 kept appointments in 90 days, or we work for free.&#8221;
            </p>
          </div>
          {/* Don't 1 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-amber)" }}>Don&#39;t · vague</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Marketing puffery, soft adjectives.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-mute)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-amber)", textDecoration: "line-through", textDecorationColor: "var(--c-amber)", textDecorationThickness: "1.5px" }}>
              &#8220;We&#8217;re committed to delivering best-in-class results for our valued partners.&#8221;
            </p>
          </div>
          {/* Do 2 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-cyan)" }}>Do · plain</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Receipts, not adjectives.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-bone)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-cyan)" }}>
              &#8220;63 active operators. 187 appointments in the last 24 hours. Audited.&#8221;
            </p>
          </div>
          {/* Don't 2 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-amber)" }}>Don&#39;t · vague</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Industry words, weasel verbs.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-mute)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-amber)", textDecoration: "line-through", textDecorationColor: "var(--c-amber)", textDecorationThickness: "1.5px" }}>
              &#8220;Optimized to drive synergistic outcomes across the contractor ecosystem.&#8221;
            </p>
          </div>
          {/* Do 3 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-cyan)" }}>Do · plain</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Refuse politely, in writing.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-bone)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-cyan)" }}>
              &#8220;Your zip is taken. The waitlist is nine months. You can walk.&#8221;
            </p>
          </div>
          {/* Don't 3 */}
          <div style={{ border: "1px solid var(--hr)", padding: "24px 28px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-amber)" }}>Don&#39;t · vague</div>
            <h4 style={{ fontFamily: "var(--f-sans)", fontWeight: 600, fontSize: "18px", color: "var(--c-bone)", margin: "8px 0", letterSpacing: "-0.012em" }}>Hedging, soft denials.</h4>
            <p style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "18px", lineHeight: 1.45, color: "var(--c-mute)", margin: "10px 0 0", paddingLeft: "14px", borderLeft: "2px solid var(--c-amber)", textDecoration: "line-through", textDecorationColor: "var(--c-amber)", textDecorationThickness: "1.5px" }}>
              &#8220;At this time we&#8217;re unable to onboard new partners in your geographic area.&#8221;
            </p>
          </div>
        </div>
      </section>

      {/* ── 06 — DOWNLOADS ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">06 / 06 <span>— Downloads</span></span>
          <em>Working files.</em>
        </div>
        <div className="vh-zip">
          <div className="vh-zip__h">
            <span>File · purpose · format</span>
            <em>— click to view</em>
          </div>
          <div className="vh-zip__row">
            <span className="z">MARK</span>
            <span className="city">Mark · primary brand glyph</span>
            <span className="ct">SVG · 0.4kb</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">FAVI</span>
            <span className="city">Favicon · navy ground variant</span>
            <span className="ct">SVG · 0.4kb</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">LOCK</span>
            <span className="city">Lockup · mark + wordmark</span>
            <span className="ct">SVG · 0.6kb</span>
          </div>
          <div className="vh-zip__row">
            <span className="z">CSS</span>
            <span className="city">Stylesheet · all tokens + components</span>
            <span className="ct">CSS · 27kb</span>
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">Brand book v1.0 · maintained by the desk</div>
        <h2>
          The brand is<br />a <em>working desk.</em>
        </h2>
        <p className="vh-prose" style={{ marginTop: "8px" }}>
          Questions, exceptions, or special-use requests — write to brand@voxhorizon.io.
        </p>
        <div className="vh-cta">
          <a href="mailto:brand@voxhorizon.io" className="p">[ brand@voxhorizon.io ]</a>
          <Link href="/" className="g">Back to home</Link>
        </div>
        <div className="meta">
          <span>v1.0 · MMXXVI</span>
          <span>Maintained by <em>Erin K.</em></span>
        </div>
      </div>
    </>
  );
}
