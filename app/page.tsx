import type { Metadata } from "next";
import Link from "next/link";
import { cohort, industries, metrics, territoryCounts } from "@/lib/content";
import { CountUp } from "@/components/motion/CountUp";
import { LiveFeed } from "@/components/motion/LiveFeed";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TerritoryGrid } from "@/components/motion/TerritoryGrid";
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
        <div className="eye">Operator desk · live</div>
        <h1 className="vh-h1">
          Your phone rings.<br />
          <span className="mut">You sit.</span> <em>You sign.</em>
        </h1>
        <p className="lede">
          VoxHorizon delivers <strong>pre-qualified, pre-scheduled appointments</strong> to
          established home-improvement contractors. <strong>One operator per zip code.</strong>
        </p>
        <div className="vh-cta">
          <Link href="/apply" className="p">Check my zip</Link>
          <Link href="/system" className="g">How the system works</Link>
        </div>
        <div className="vh-herofeed">
          <LiveFeed limit={3} />
        </div>
      </section>

      {/* ── 01 — WHAT YOU RECEIVE ─────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">01 / 05 <span>— What you receive</span></span>
          <em>Every record is a real homeowner, in your zip.</em>
        </div>
        <Stagger className="vh-recv vh-recv--calm">
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 01 · Lead<span className="n">L</span>
            </div>
            <div className="vh-recv__mid">
              <h3>A qualified record, not a form-fill.</h3>
              <p>
                Budget verified, ownership confirmed, project specified — before anything
                reaches your desk. Most inquiries don&#8217;t make it.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 02 · Appt<span className="n">K</span>
            </div>
            <div className="vh-recv__mid">
              <h3>Confirmed, calendared, reminded.</h3>
              <p>
                Real appointments on your calendar — homeowner present, decision-makers in the
                room, scope in writing. Confirmed twice before you drive.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 03 · Sign<span className="n">$</span>
            </div>
            <div className="vh-recv__mid">
              <h3>You sign, or you walk clean.</h3>
              <p>
                You bring the contract; we don&#8217;t close for you. You pay a flat fee per
                signed contract — nothing for leads, nothing for appointments.
              </p>
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
        <Reveal>
          <h2 className="vh-h3">
            Booked projects,<br />not <em>promises.</em>
          </h2>
          <div className="vh-proof__row">
            <div className="vh-proof__cell">
              <div className="n">
                <CountUp value={170} prefix="$" suffix="K" />
              </div>
              <div className="l">signed in his first 60 days — Mitch, remodeler</div>
            </div>
            <div className="vh-proof__cell">
              <div className="n">
                <CountUp value={metrics.keptRate} suffix="%" />
              </div>
              <div className="l">of booked appointments are kept, network-wide</div>
            </div>
          </div>
          <blockquote className="vh-proof__quote">
            &#8220;The phone rings, I drive, I sign. I haven&#8217;t run a Google ad in fourteen
            months.&#8221;
            <footer>Deckworks · Minneapolis MN</footer>
          </blockquote>
          <Link href="/results" className="vh-more">
            View the full ledger →
          </Link>
        </Reveal>
      </section>

      {/* ── 03 — TERRITORY ────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 05 <span>— Territory</span></span>
          <em>One operator per zip code. No exceptions.</em>
        </div>
        <Reveal>
          <h2 className="vh-h3">
            {territoryCounts.total} territories.<br />
            <em>{cohort.slotsOpen} open</em> through {cohort.closesOn}.
          </h2>
          <div style={{ maxWidth: 760, marginTop: 28 }}>
            <TerritoryGrid />
          </div>
          <Link href="/territory" className="vh-more">
            Open the live map →
          </Link>
        </Reveal>
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
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "View open territories", href: "/territory" }}
      >
        Check your zip.<br />
        If it&#8217;s <em>open</em>, you have 48 hours.
      </CtaBlock>
    </div>
  );
}
