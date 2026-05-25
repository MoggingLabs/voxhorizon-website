import type { Metadata } from "next";
import Link from "next/link";
import { faqs, finalCta, primaryCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about VoxHorizon: lead exclusivity, qualification, pricing approach, guarantees, and how fast you can expect booked appointments.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          FAQ · the brief<em>— before you apply</em>
        </div>
        <h1>
          Questions,
          <br />
          <em>answered.</em>
        </h1>
        <p className="lede">
          Everything contractors ask before partnering with us — <strong>exclusivity,
          qualification, guarantees, and how fast the phone rings.</strong>
        </p>
      </section>

      {/* ── 01 — THE QUESTIONS ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 01 <span>— Common questions</span>
          </span>
          <em>Tap a question to expand.</em>
        </div>
        <div className="vh-recv">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="vh-recv__row"
              style={{ display: "block", padding: 0 }}
              open={i === 0}
            >
              <summary
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 24,
                  padding: "24px 32px",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                <span
                  className="vh-sans"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    letterSpacing: "-0.012em",
                    color: "var(--c-bone)",
                  }}
                >
                  {item.q}
                </span>
                <span
                  className="vh-accent vh-mono"
                  style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
                </span>
              </summary>
              <p
                className="vh-sans"
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--c-body)",
                  margin: 0,
                  padding: "0 32px 24px",
                  maxWidth: 760,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">{finalCta.heading}</div>
        <h2>
          Still have a
          <br />
          <em>question?</em>
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
          <span>Answer · on the call</span>
          <span>
            <em>One operator</em> per zip
          </span>
        </div>
      </div>
    </>
  );
}
