import type { Metadata } from "next";
import Link from "next/link";
import { founder, press, finalCta, primaryCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "VoxHorizon is the growth partner for established home-improvement operators — exclusive territory and pre-qualified, pre-scheduled projects measured in signed work, not shared leads.",
  alternates: { canonical: "/about" },
};

const fit = {
  yes: [
    "Established operators doing $50K/mo or more",
    "Kitchen and bath remodelers, roofers, and deck builders",
    "Owners ready to sit and sign a steady flow of projects",
  ],
  no: [
    "Subcontractors or independent sales reps",
    "Brand-new businesses without crew capacity to deliver",
    "Anyone shopping for shared, low-cost lead lists",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          About · the desk<em>— who runs it</em>
        </div>
        <h1>
          We don’t sell leads.
          <br />
          We schedule <em>revenue.</em>
        </h1>
        <p className="lede">
          Shared leads, empty promises, spray-and-pray ad spend. We replaced all three with a
          data-driven program that delivers <strong>exclusive, pre-qualified projects measured
          in signed work.</strong>
        </p>
      </section>

      {/* ── 01 — FOUNDER ──────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— Founder</span>
          </span>
          <em>Why this desk exists.</em>
        </div>
        <div className="vh-prose-split">
          <div className="lab">
            {founder.name}
            <br />
            {founder.role}
          </div>
          <div className="vh-prose">
            <p>“{founder.bio}”</p>
            <p>
              <strong>{founder.name}</strong> · {founder.role}
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 — WHO IT'S FOR ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— The fit</span>
          </span>
          <em>We say no a lot.</em>
        </div>
        <div className="vh-2">
          <div className="vh-block">
            <h3 className="vh-h4">
              Who we <em>work with</em>
            </h3>
            <div style={{ marginTop: 20 }}>
              {fit.yes.map((x) => (
                <div key={x} className="vh-field">
                  <span className="vh-accent" style={{ flex: "0 0 auto" }}>
                    ●
                  </span>
                  <span style={{ flex: 1, paddingLeft: 14, textAlign: "left" }}>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="vh-block">
            <h3 className="vh-h4">
              Who we <em>don’t</em>
            </h3>
            <div style={{ marginTop: 20 }}>
              {fit.no.map((x) => (
                <div key={x} className="vh-field">
                  <span className="vh-alert" style={{ flex: "0 0 auto" }}>
                    ●
                  </span>
                  <span style={{ flex: 1, paddingLeft: 14, textAlign: "left" }}>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — PRESS / TRUST ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— On the record</span>
          </span>
          <em>Recognized by industry-leading media.</em>
        </div>
        <div className="vh-feed">
          <div className="vh-feed__intro">
            <h2 className="vh-h3">
              Featured across <em>400+</em> news outlets.
            </h2>
            <p className="vh-feed__sub">
              The program has been covered by the financial and trade press as it reshapes how
              established contractors source demand. <strong>A sample of the coverage.</strong>
            </p>
            <div className="vh-feedlist">
              {press.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vh-row"
                >
                  <span className="vh-row__ic kept">●</span>
                  <div>
                    <div className="vh-row__title">{p.name}</div>
                    <div className="vh-row__sub">Press · external coverage</div>
                  </div>
                  <span className="vh-row__time">read →</span>
                </a>
              ))}
            </div>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Press footprint</div>
              <div className="v">
                <em>400+</em> outlets
              </div>
              <div className="row">
                <span>named here</span>
                <span>5</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Model</div>
              <div className="v">
                <em>1</em> op / zip
              </div>
              <div className="row">
                <span>never shared</span>
                <span>—</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Measured in</div>
              <div className="v">signed work</div>
              <div className="row">
                <span>not impressions</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">{finalCta.heading}</div>
        <h2>
          See if your territory is
          <br />
          <em>still open.</em>
        </h2>
        <p className="vh-prose" style={{ marginBottom: 8 }}>
          {finalCta.body}
        </p>
        <div className="vh-cta">
          <Link href={primaryCta.href} className="p">
            [ {primaryCta.label} ]
          </Link>
          <Link href="/results" className="g">
            View results
          </Link>
        </div>
        <div className="meta">
          <span>One operator · per zip</span>
          <span>
            <em>Secured</em> for the year
          </span>
        </div>
      </div>
    </>
  );
}
