import type { Metadata } from "next";
import Link from "next/link";
import { stats, finalCta, primaryCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "Real outcomes from VoxHorizon partners: booked projects, qualified appointments, and measurable ROI across kitchen & bath, roofing, and decking.",
  alternates: { canonical: "/results" },
};

type CaseStudy = {
  name: string;
  trade: string;
  zip: string;
  metricLabel: string;
  metricValue: React.ReactNode;
  quote: string;
};

const cases: CaseStudy[] = [
  {
    name: "Mitch",
    trade: "Remodeling",
    zip: "New jobs · 60D",
    metricLabel: "Signed · first 60 days",
    metricValue: (
      <>
        <em>$170K</em>
      </>
    ),
    quote:
      "Tired of shared leads that went nowhere. With an exclusive territory and pre-qualified appointments, he booked six figures of new work in his first two months.",
  },
  {
    name: "Jonathan",
    trade: "Remodeling",
    zip: "Appts · 60D",
    metricLabel: "Qualified appointments · 60 days",
    metricValue: (
      <>
        <em>100</em>
      </>
    ),
    quote:
      "A steady flow of vetted, pre-scheduled appointments kept his calendar full — without chasing a single cold lead.",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Results · the ledger<em>— signed work only</em>
        </div>
        <h1>
          Booked projects,
          <br />
          not <em>promises.</em>
        </h1>
        <p className="lede">
          A sample of what happens when established contractors get exclusive, pre-qualified
          demand. <strong>The numbers speak quietly, but clearly.</strong>
        </p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        {stats.map((s) => (
          <div key={s.label} className="vh-strip__cell">
            <div className="k">{s.label}</div>
            <div className="v">
              {s.count != null ? (
                <em>
                  {s.prefix}
                  {s.count.toLocaleString("en-US")}
                  {s.suffix}
                </em>
              ) : (
                <em>{s.value}</em>
              )}
            </div>
            {s.attribution && <div className="delta">— {s.attribution}</div>}
          </div>
        ))}
      </div>

      {/* ── 01 — CASE STUDIES ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 02 <span>— Case studies</span>
          </span>
          <em>First names only — exclusivity cuts both ways.</em>
        </div>
        <div className="vh-2">
          {cases.map((c) => (
            <div key={c.name} className="vh-op">
              <div className="vh-op__head">
                <span className="id">
                  {c.name}
                  <span className="z">{c.trade}</span>
                </span>
                <span className="tag">{c.zip}</span>
              </div>
              <blockquote className="vh-op__quote">{c.quote}</blockquote>
              <div className="vh-op__stats">
                <div className="s">
                  <div className="k">{c.metricLabel}</div>
                  <div className="v">{c.metricValue}</div>
                </div>
                <div className="s">
                  <div className="k">Trade</div>
                  <div className="v">{c.trade}</div>
                </div>
                <div className="s">
                  <div className="k">Operator</div>
                  <div className="v">{c.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 — METHOD / DISCLOSURE ──────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 02 <span>— How we report</span>
          </span>
          <em>Real outcomes from real partners.</em>
        </div>
        <div className="vh-prose">
          <p>
            Results shown are <strong>real outcomes from VoxHorizon partners.</strong> First
            names protect the exclusivity of their territories. Individual results vary by market
            and capacity.
          </p>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">{finalCta.heading}</div>
        <h2>
          Put your zip
          <br />
          on the <em>ledger.</em>
        </h2>
        <p className="vh-prose" style={{ marginBottom: 8 }}>
          {finalCta.body}
        </p>
        <div className="vh-cta">
          <Link href={primaryCta.href} className="p">
            [ {primaryCta.label} ]
          </Link>
          <Link href="/territory" className="g">
            See open territory
          </Link>
        </div>
        <div className="meta">
          <span>Measured in · signed work</span>
          <span>
            <em>One operator</em> per zip
          </span>
        </div>
      </div>
    </>
  );
}
