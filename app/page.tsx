import type { Metadata } from "next";
import Link from "next/link";
import { cohort, industries, metrics } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ZipChecker } from "@/components/motion/ZipChecker";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "Operator Desk",
  description:
    "Pre-qualified, pre-scheduled appointments for established home-improvement contractors. One operator per zip code.",
  alternates: { canonical: "/" },
};

const STAGES = [
  {
    n: "01",
    label: "The lead",
    title: "A verified homeowner, not a form-fill.",
    body: "Budget verified, ownership confirmed, project specified — before anything reaches you. Most inquiries don't make it past us.",
  },
  {
    n: "02",
    label: "The appointment",
    title: "Confirmed, calendared, reminded.",
    body: "Homeowner present, decision-makers in the room, scope in writing. Confirmed twice before you drive anywhere.",
  },
  {
    n: "03",
    label: "The signature",
    title: "You sign, or you walk clean.",
    body: "You bring the contract; we don't close for you. A flat fee per signed contract — nothing for leads, nothing for appointments.",
  },
];

export default function HomePage() {
  return (
    <div className="v2">
      {/* ── HERO — the claim, then the device ─────────────── */}
      <section className="vh-hero">
        <span className="eye">For home-improvement contractors doing $50K+/month</span>
        <h1 className="vh-h1">
          We book the jobs.
          <br />
          <em>You build them.</em>
        </h1>
        <p className="lede">
          One operator per zip code. Pre-qualified homeowners, confirmed on your calendar.
          Paid per signed contract — <strong>never per lead.</strong>
        </p>
        <ZipChecker />
      </section>

      {/* ── WHAT YOU RECEIVE ──────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id" />
          <em>What you receive</em>
        </div>
        <Stagger className="vh-recv vh-recv--calm">
          {STAGES.map((stage) => (
            <StaggerItem key={stage.n} className="vh-recv__row">
              <div className="vh-recv__badge">
                {stage.label}
                <span className="n">{stage.n}</span>
              </div>
              <div className="vh-recv__mid">
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── THE BIG CLAIM — guarantee at full size ────────── */}
      <section className="vh-bigclaim">
        <Reveal>
          <span className="k">The guarantee · in writing</span>
          <h2>
            30 kept appointments in 90 days, or{" "}
            <em>we work for free.</em>
          </h2>
          <p>
            A kept appointment means the homeowner is present, the decision-makers are in the
            room, and the scope is in writing. No proration, no asterisks.
          </p>
        </Reveal>
      </section>

      {/* ── VILLAIN TABLE ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id" />
          <em>Why we exist</em>
        </div>
        <Reveal>
          <h2 className="vh-h3" style={{ maxWidth: 880, marginBottom: 48 }}>
            The marketplaces sell your lead to four contractors.
            <br />
            <em>We sell your zip to you.</em>
          </h2>
          <div className="vh-versus">
            <div className="vh-versus__col them">
              <div className="h">Shared-lead marketplaces</div>
              <ul>
                <li>The same homeowner sold to four contractors, racing on price</li>
                <li>Pay per lead — form-fills, wrong numbers, renters included</li>
                <li>Lead costs rising every year as private equity bids up the market</li>
                <li>No commitment to outcomes; volume is the product</li>
              </ul>
            </div>
            <div className="vh-versus__col us">
              <div className="h">VoxHorizon</div>
              <ul>
                <li>
                  <strong>One operator per zip code</strong> — your territory, secured for the
                  year
                </li>
                <li>
                  <strong>Pay per signed contract</strong> — $0 for leads, $0 for appointments
                </li>
                <li>
                  <strong>Appointments, not leads</strong> — confirmed twice, scope in writing
                </li>
                <li>
                  <strong>30 kept appointments in 90 days</strong> — guaranteed, in writing
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PROOF ─────────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id" />
          <em>Proof</em>
        </div>
        <Reveal>
          <blockquote className="vh-proof__quote">
            &#8220;The phone rings, I drive, I sign. I haven&#8217;t run a Google ad in fourteen
            months.&#8221;
            <footer>Deckworks · Minneapolis · 14 months on the desk</footer>
          </blockquote>
          <div className="vh-proof__row">
            <div className="vh-proof__cell">
              <div className="n">$170K</div>
              <div className="l">signed in his first 60 days — Mitch, remodeler, Wichita</div>
            </div>
            <div className="vh-proof__cell">
              <div className="n">{metrics.keptRate}%</div>
              <div className="l">of booked appointments are kept, network-wide</div>
            </div>
          </div>
          <Link href="/results" className="vh-more">
            View the full ledger
          </Link>
        </Reveal>
      </section>

      {/* ── INDUSTRIES — void index ───────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id" />
          <em>Three trades. One desk each.</em>
        </div>
        <Stagger className="vh-index">
          {industries.map((industry) => (
            <StaggerItem key={industry.key}>
              <Link href={industry.href}>
                <span className="t">{industry.name}</span>
                <span className="sub">{industry.blurb}</span>
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id" />
          <em>Apply to live in fourteen days</em>
        </div>
        <Stagger className="vh-how">
          <StaggerItem className="vh-how__row">
            <div className="n">01</div>
            <div className="ts">Day zero</div>
            <div>
              <h4>Apply your zip</h4>
              <p>Two-minute form. We verify license, bond, and recent signed work.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">02</div>
            <div className="ts">Within 48 hours</div>
            <div>
              <h4>Operator interview</h4>
              <p>
                A 45-minute call with Erin — a senior operator, not an SDR — about capacity and
                ticket range. The territory analysis is yours whether we work together or not.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">03</div>
            <div className="ts">Ten business days</div>
            <div>
              <h4>Demand calibration</h4>
              <p>We tune intake to your zip&#8217;s signal before going live.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">04</div>
            <div className="ts">Week two</div>
            <div>
              <h4>First appointment</h4>
              <p>The median operator hits 30 kept appointments by week 11.</p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        eyebrow={`${cohort.slotsOpen} of ${cohort.slotsTotal} ${cohort.quarter} territories remain`}
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "How the system works", href: "/system" }}
      >
        If your zip is <em>open,</em>
        <br />
        you have 48 hours.
      </CtaBlock>
    </div>
  );
}
