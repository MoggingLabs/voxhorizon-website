import type { Metadata } from "next";
import Link from "next/link";
import {
  cohort,
  metrics,
  operatorProfiles,
  operatorRoster,
  stats,
} from "@/lib/content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "Results & Operators",
  description:
    "The VoxHorizon ledger: audited operator results, case studies, and the full network roster. 63 operators, 27 states, measured in signed work.",
  alternates: { canonical: "/results" },
};

type CaseStudy = {
  name: string;
  trade: string;
  tag: string;
  metricLabel: string;
  metricValue: React.ReactNode;
  quote: string;
};

const cases: CaseStudy[] = [
  {
    name: "Mitch",
    trade: "Remodeling",
    tag: "New jobs · 60D",
    metricLabel: "Signed · first 60 days",
    metricValue: (
      <em>
        $<CountUp value={170} suffix="K" />
      </em>
    ),
    quote:
      "Tired of shared leads that went nowhere. With an exclusive territory and pre-qualified appointments, he booked six figures of new work in his first two months.",
  },
  {
    name: "Jonathan",
    trade: "Remodeling",
    tag: "Appts · 60D",
    metricLabel: "Qualified appointments · 60 days",
    metricValue: (
      <em>
        <CountUp value={100} />
      </em>
    ),
    quote:
      "A steady flow of vetted, pre-scheduled appointments kept his calendar full — without chasing a single cold lead.",
  },
];

export default function ResultsPage() {
  return (
    <div className="v2">
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Results · the ledger<em>— signed work only</em>
        </div>
        <h1>
          The roster.
          <br />
          <em>Not testimonials.</em> <span className="mut">Receipts.</span>
        </h1>
        <p className="lede">
          Audited outcomes from every corner of the network — case studies, operator profiles,
          and the roster itself. <strong>No selected quotes, no curated success stories.</strong>{" "}
          First names protect territory exclusivity; the numbers are real and current.
        </p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        <div className="vh-strip__cell">
          <div className="k">Network · YTD revenue</div>
          <div className="v">
            <span className="pre">{metrics.networkRevenueYtd.prefix}</span>
            <em>
              <CountUp value={metrics.networkRevenueYtd.value} />
            </em>
            <span className="pre">{metrics.networkRevenueYtd.suffix}</span>
          </div>
          <div className="delta">{metrics.networkRevenueYtd.delta}</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Median op · revenue / yr</div>
          <div className="v">
            <span className="pre">{metrics.medianOpRevenue.prefix}</span>
            <CountUp value={metrics.medianOpRevenue.value} decimals={1} />
            <span className="pre">{metrics.medianOpRevenue.suffix}</span>
          </div>
          <div className="delta">{metrics.medianOpRevenue.delta}</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Top quartile · revenue / yr</div>
          <div className="v">
            <span className="pre">{metrics.topQuartileRevenue.prefix}</span>
            <em>
              <CountUp value={metrics.topQuartileRevenue.value} decimals={1} />
            </em>
            <span className="pre">{metrics.topQuartileRevenue.suffix}</span>
          </div>
          <div className="delta">{metrics.topQuartileRevenue.delta}</div>
        </div>
      </div>

      {/* ── 01 — THE LEDGER ───────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 05 <span>— The ledger</span>
          </span>
          <em>What the desk produced, by the numbers.</em>
        </div>
        <Stagger className="vh-ledger vh-ledger--wide">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="vh-ledger__cell">
              <div className="n">
                {stat.count ? (
                  <CountUp value={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="l">
                {stat.label}
                {stat.attribution ? <em> — {stat.attribution}</em> : null}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 02 — CASE STUDIES ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 05 <span>— Case studies</span>
          </span>
          <em>First names only — exclusivity cuts both ways.</em>
        </div>
        <Stagger className="vh-2">
          {cases.map((c) => (
            <StaggerItem key={c.name} className="vh-op">
              <div className="vh-op__head">
                <span className="id">
                  {c.name}
                  <span className="z">{c.trade}</span>
                </span>
                <span className="tag">{c.tag}</span>
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
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 03 — OPERATOR PROFILES ────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 05 <span>— Operator profiles</span>
          </span>
          <em>Nine of sixty-three. Audited Q3 numbers.</em>
        </div>
        <Stagger className="vh-ops-grid">
          {operatorProfiles.map((op) => (
            <StaggerItem key={op.zip} className="vh-op">
              <div className="vh-op__head">
                <div className="id">
                  {op.name}
                  <span className="z">
                    {op.zip} · {op.abbr}
                  </span>
                </div>
                <div className="tag">{op.tag}</div>
              </div>
              <p className="vh-op__quote">&quot;{op.quote}&quot;</p>
              <div className="vh-op__stats">
                <div className="s">
                  <div className="k">Signed · Q3</div>
                  <div className="v">
                    <em>{op.signedQ3}</em>
                  </div>
                </div>
                <div className="s">
                  <div className="k">Avg ticket</div>
                  <div className="v">{op.avgTicket}</div>
                </div>
                <div className="s">
                  <div className="k">Tenure</div>
                  <div className="v">{op.tenure}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 04 — NETWORK ROSTER ───────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            04 / 05 <span>— Network roster · Q3</span>
          </span>
          <em>Audited numbers, alphabetical.</em>
        </div>
        <Reveal>
          <div className="vh-zip">
            <div className="vh-zip__h">
              <span>Operator · Zip · Trade · Q3 signed · Q3 revenue</span>
              <em>— 18 of {cohort.activeOperators} shown</em>
            </div>
            {operatorRoster.map((row) => (
              <div key={row.zip} className="vh-zip__row">
                <span className="z">{row.zip}</span>
                <span className="city">{row.entry}</span>
                <span className="ct">
                  <em>{row.signedQ3}</em> · {row.revenue}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 05 — LIAISON / HOW WE REPORT ──────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            05 / 05 <span>— Your liaison</span>
          </span>
          <em>One person, on the phone, plain answers.</em>
        </div>
        <Reveal>
          <div className="vh-grnt">
            <div>
              <div className="vh-grnt__title">
                Erin Kassidy.
                <br />
                <em>Operator liaison.</em>
              </div>
              <p className="vh-grnt__body">
                Erin runs every application call. She&apos;ll walk through your zip&apos;s current
                state, your trade fit, the projects she thinks you&apos;ll see, and the projects
                we&apos;ll have to refuse. She has fourteen years in remodel sales — she&apos;s
                been on your side of the kitchen table.{" "}
                <strong>No SDRs, no AEs, no warm-up dance.</strong>
              </p>
              <p className="vh-grnt__body">
                Results shown on this page are real outcomes from VoxHorizon operators. First
                names protect the exclusivity of their territories; individual results vary by
                market and capacity.
              </p>
            </div>
            <div className="vh-term">
              <div>
                <span className="p">Erin Kassidy · operator liaison</span>
              </div>
              <div>&nbsp;</div>
              <div>
                &nbsp;&nbsp;name........... <span className="e">Erin Kassidy</span>
              </div>
              <div>
                &nbsp;&nbsp;role........... <span className="e">Operator Liaison</span>
              </div>
              <div>
                &nbsp;&nbsp;tenure......... <span className="e">VH since 2022</span>
              </div>
              <div>
                &nbsp;&nbsp;prior.......... <span className="e">14 yrs remodel sales</span>
              </div>
              <div>&nbsp;</div>
              <div>
                &nbsp;&nbsp;reach.......... <span className="p">erin@voxhorizon.io</span>
              </div>
              <div>
                &nbsp;&nbsp;hours.......... <span className="e">M–Th · 8a–5p MT</span>
              </div>
              <div>
                &nbsp;&nbsp;response....... <span className="e">&lt; 48h, every applicant</span>
                <span className="cursor"></span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "How the system works", href: "/system" }}
      >
        Put your zip
        <br />
        on the <em>ledger.</em>
      </CtaBlock>
    </div>
  );
}
