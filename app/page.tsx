import type { Metadata } from "next";
import Link from "next/link";
import {
  cohort,
  industries,
  metrics,
  openZips,
  stats,
  territoryCells,
  territoryCounts,
} from "@/lib/content";
import { CountUp } from "@/components/motion/CountUp";
import { LiveFeed } from "@/components/motion/LiveFeed";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "Operator Desk",
  description:
    "Pre-qualified, pre-scheduled appointments for established home-improvement contractors. One operator per zip code.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="v2">
      {/* ── HERO (never motion-wrapped — SSR-visible) ─────── */}
      <section className="vh-hero">
        <div className="eye">Desk · Last 24 hours</div>
        <h1 className="vh-h1">
          Your phone rings.<br />
          <span className="mut">You sit.</span> <em>You sign.</em>
        </h1>
        <p className="lede">
          VoxHorizon delivers <strong>pre-qualified, pre-scheduled appointments</strong> to
          established home-improvement contractors. <strong>One operator per zip code.</strong>{" "}
          Every event below is real.
        </p>
        <div className="vh-cta">
          <Link href="/apply" className="p">[ Check my zip ]</Link>
          <Link href="/system" className="g">How the system works</Link>
        </div>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        <div className="vh-strip__cell">
          <div className="k">Active operators</div>
          <div className="v">
            <em>
              <CountUp value={cohort.activeOperators} />
            </em>
          </div>
          <div className="delta">{metrics.operatorsDelta}</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Appts · 24h</div>
          <div className="v">
            <CountUp value={metrics.apptsPerDay} />
          </div>
          <div className="delta">{metrics.apptsDelta}</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Avg ticket · signed</div>
          <div className="v">
            <span className="pre">$</span>
            <CountUp value={32.4} decimals={1} />
            <span className="pre">K</span>
          </div>
          <div className="delta">{metrics.avgTicketDelta}</div>
        </div>
      </div>

      {/* ── HERO PANELS (live feed + chart) ───────────────── */}
      <div className="vh-panels">
        <div className="vh-panels__pane">
          <div className="vh-pane-head">
            <span>Live feed · last 24h</span>
            <em>● streaming</em>
          </div>
          <LiveFeed limit={4} />
        </div>

        <div className="vh-panels__pane">
          <div className="vh-pane-head">
            <span>Network appts · 20-week</span>
            <em>WK20 · 104</em>
          </div>
          <div className="vh-chart-head">
            <span className="k">Appts / week</span>
            <span className="v"><em>104</em> · +18 WoW</span>
          </div>
          <div className="vh-chart">
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
              <polyline className="area" points="0,60 0.000,97.115 5.263,96.154 10.526,94.231 15.789,92.308 21.053,89.423 26.316,86.538 31.579,82.692 36.842,78.846 42.105,73.077 47.368,67.308 52.632,61.538 57.895,54.808 63.158,50.000 68.421,44.231 73.684,38.462 78.947,30.769 84.211,23.077 89.474,15.385 94.737,7.692 100.000,0.000 100,60" />
              <polyline className="line" points="0.000,97.115 5.263,96.154 10.526,94.231 15.789,92.308 21.053,89.423 26.316,86.538 31.579,82.692 36.842,78.846 42.105,73.077 47.368,67.308 52.632,61.538 57.895,54.808 63.158,50.000 68.421,44.231 73.684,38.462 78.947,30.769 84.211,23.077 89.474,15.385 94.737,7.692 100.000,0.000" />
              <circle className="dot" cx="100" cy="0" r="1.8" />
            </svg>
          </div>
          <div className="vh-chart-foot">
            <span>WK 01</span>
            <span>WK 20</span>
          </div>
        </div>
      </div>

      {/* ── 01 — WHAT YOU RECEIVE ─────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">01 / 05 <span>— What you receive</span></span>
          <em>Every record is a real homeowner, in your zip.</em>
        </div>
        <Stagger className="vh-recv">
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 01 · Lead<span className="n">L</span>
            </div>
            <div className="vh-recv__mid">
              <h3>A qualified record, not a form-fill.</h3>
              <p>
                Budget verified, ownership confirmed, project specified. We reject{" "}
                <strong>{metrics.rejectRate}%</strong> of inquiries before you see them.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>Homeowner</span><span>M. &amp; K. Liu</span></div>
              <div className="vh-field"><span>Project</span><span>Master bath, full gut</span></div>
              <div className="vh-field"><span>Budget</span><span>$28–34K · verified</span></div>
              <div className="vh-field"><span>Zip</span><span>74105 · Tulsa OK</span></div>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 02 · Appt<span className="n">K</span>
            </div>
            <div className="vh-recv__mid">
              <h3>Confirmed, calendared, reminded.</h3>
              <p>
                Two-touch confirmation by SMS + voice. <strong>{metrics.keptRate}%</strong> of
                booked appointments are kept — homeowner present, scope in writing.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>When</span><span>Thu · 23 Oct · 10:00</span></div>
              <div className="vh-field"><span>Address</span><span>4421 S Quaker Ave</span></div>
              <div className="vh-field"><span>Present</span><span>Both owners</span></div>
              <div className="vh-field"><span>Confirmed</span><span>SMS · 18h ago</span></div>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 03 · Sign<span className="n">$</span>
            </div>
            <div className="vh-recv__mid">
              <h3>You sign, or you walk clean.</h3>
              <p>
                We don&#8217;t close for you. You bring the contract.{" "}
                <strong>{metrics.signedRate90d}%</strong> sign within 90 days at an avg ticket of{" "}
                <strong>$32,400</strong>.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>Contract</span><span>$31,800 · master bath</span></div>
              <div className="vh-field"><span>Deposit</span><span>33% on signature</span></div>
              <div className="vh-field"><span>Start</span><span>Nov 12 · 3 wks out</span></div>
              <div className="vh-field"><span>Op fee</span><span>$540 · on signature</span></div>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── 02 — PROOF ────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">02 / 05 <span>— Proof</span></span>
          <em>Receipts, not impressions.</em>
        </div>
        <div className="vh-feed">
          <div className="vh-feed__intro">
            <Reveal>
              <h2 className="vh-h3">
                Booked projects,<br />not <em>promises.</em>
              </h2>
              <p className="vh-feed__sub">
                Audited outcomes from the network. First names protect operator exclusivity —{" "}
                <strong>the numbers are real and current.</strong>
              </p>
            </Reveal>
            <Stagger className="vh-ledger">
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
            <Link href="/results" className="vh-more">
              View the full ledger →
            </Link>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Qualified → Kept</div>
              <div className="v">
                <em>
                  <CountUp value={metrics.keptRate} />
                </em>
                %
              </div>
              <div className="row"><span>industry avg</span><span>{metrics.keptRateIndustry}%</span></div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Kept → Signed · 90D</div>
              <div className="v">
                <em>
                  <CountUp value={metrics.signedRate90d} />
                </em>
                %
              </div>
              <div className="row"><span>industry avg</span><span>{metrics.signedRateIndustry}%</span></div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Reject · Applicants</div>
              <div className="v">
                <em>
                  <CountUp value={metrics.rejectRate} />
                </em>
                %
              </div>
              <div className="row"><span>we say no a lot</span><span>—</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — TERRITORY ────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 05 <span>— Territory</span></span>
          <em>One operator per zip code. No exceptions.</em>
        </div>
        <div className="vh-terr">
          <Reveal>
            <h2 className="vh-h3">
              {territoryCounts.total} territories.<br />
              <em>{cohort.slotsOpen} open</em> through {cohort.closesOn}.
            </h2>
            <div className="vh-grid">
              {territoryCells.map((state, i) => (
                <div key={i} className={`cell ${state}`} />
              ))}
            </div>
            <div className="vh-legend">
              <span>
                <span className="sw" style={{ background: "rgba(81,184,220,0.14)" }} />
                Claimed · {territoryCounts.claimed}
              </span>
              <span>
                <span className="sw" style={{ background: "rgba(217,229,220,0.20)" }} />
                Open · {territoryCounts.open}
              </span>
              <span>
                <span className="sw" style={{ background: "#FFB23F" }} />
                Closing · {territoryCounts.hot}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vh-zip">
              <div className="vh-zip__h">
                <span>Open · closing {cohort.quarter}</span>
                <em>— applicants</em>
              </div>
              {openZips
                .filter((z) => z.featured)
                .map((z) => (
                  <Link key={z.zip} href="/territory" className="vh-zip__row">
                    <span className="z">{z.zip}</span>
                    <span className="city">{`${z.city} ${z.abbr}`}</span>
                    <span className="ct">
                      <em>{z.applicants}</em> appl
                    </span>
                  </Link>
                ))}
            </div>
            <Link href="/territory" className="vh-more">
              Open the live map →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 04 — INDUSTRIES ───────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">04 / 05 <span>— Industries</span></span>
          <em>Three trades. One desk each.</em>
        </div>
        <Stagger className="vh-3">
          {industries.map((industry) => (
            <StaggerItem key={industry.key}>
              <Link href={industry.href} className="vh-indcard">
                <span className="t">{industry.name}</span>
                <p>{industry.blurb}</p>
                <span className="go">View the {industry.name.toLowerCase()} desk →</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 05 — HOW IT WORKS ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">05 / 05 <span>— How it works</span></span>
          <em>Four steps, two weeks, then the phone rings.</em>
        </div>
        <Stagger className="vh-how">
          <StaggerItem className="vh-how__row">
            <div className="n">01</div>
            <div className="ts">T+<em>0H</em><br />APPLY</div>
            <div>
              <h4>Apply your zip</h4>
              <p>Two-minute form. We verify license, bond, and recent signed work.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">02</div>
            <div className="ts">T+<em>48H</em><br />INTERVIEW</div>
            <div>
              <h4>Operator interview</h4>
              <p>45-minute call with Erin or a senior liaison about capacity and ticket range.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">03</div>
            <div className="ts">T+<em>10D</em><br />CALIBRATION</div>
            <div>
              <h4>Demand calibration</h4>
              <p>10 business days tuning intake to your zip&#8217;s signal.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">04</div>
            <div className="ts">T+<em>14D</em><br />LIVE</div>
            <div>
              <h4>First appointment</h4>
              <p>Median operator hits 30 kept appointments by week 11.</p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        eyebrow="30 kept appointments in 90 days — or we work for free"
        primary={{ label: "Apply my zip", href: "/apply" }}
        secondary={{ label: "View open territories", href: "/territory" }}
      >
        Check your zip.<br />
        If it&#8217;s <em>open</em>, you have 48 hours.
      </CtaBlock>
    </div>
  );
}
