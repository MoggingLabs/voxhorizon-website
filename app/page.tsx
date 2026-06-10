import type { Metadata } from "next";
import Link from "next/link";
import { cohort, industries, metrics, territoryCounts } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
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
    label: "Qualified lead",
    title: "A verified homeowner, not a form-fill.",
    body: "Budget verified, ownership confirmed, project specified — before anything reaches you. Most inquiries don't make it.",
  },
  {
    n: "02",
    label: "Kept appointment",
    title: "Confirmed, calendared, reminded.",
    body: "Real appointments on your calendar — homeowner present, decision-makers in the room, scope in writing. Confirmed twice before you drive.",
  },
  {
    n: "03",
    label: "Signed contract",
    title: "You sign, or you walk clean.",
    body: "You bring the contract; we don't close for you. You pay a flat fee per signed contract — nothing for leads, nothing for appointments.",
  },
];

export default function HomePage() {
  return (
    <div className="v2">
      {/* ── HERO — the brand statement ────────────────────── */}
      <section className="vh-hero">
        <span className="eye">Growth partner for home-improvement contractors</span>
        <h1 className="vh-h1">
          The end of the
          <br />
          <em>shared lead.</em>
        </h1>
        <p className="lede">
          Pre-qualified, pre-scheduled appointments for established contractors.{" "}
          <strong>One operator per zip code — your phone rings, you sit, you sign.</strong>
        </p>
        <div className="vh-cta">
          <Link href="/apply" className="p">Check my zip</Link>
          <Link href="/system" className="g">How the system works</Link>
        </div>
        <div className="vh-factline">
          <span>{cohort.activeOperators} operators</span>
          <span>{territoryCounts.states} states</span>
          <span>One operator per zip</span>
          <span>Paid per signed contract</span>
        </div>
      </section>

      {/* ── WHAT YOU RECEIVE — split with sticky kicker ───── */}
      <section className="vh-sect">
        <div className="vh-split">
          <div className="vh-split__kicker">What you receive</div>
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
        </div>
      </section>

      {/* ── THE GUARANTEE — statement band ────────────────── */}
      <section className="vh-sect">
        <Reveal>
          <div className="vh-band">
            <span className="k">The guarantee</span>
            <h2>
              30 kept appointments in your first 90 days —{" "}
              <em>or we work for free.</em>
            </h2>
            <p>
              In writing, no asterisks. You pay a flat fee per signed contract — never for
              leads, never for appointments.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── PROOF — one voice, two facts ──────────────────── */}
      <section className="vh-sect">
        <div className="vh-split">
          <div className="vh-split__kicker">Proof</div>
          <Reveal>
            <blockquote className="vh-proof__quote">
              &#8220;The phone rings, I drive, I sign. I haven&#8217;t run a Google ad in
              fourteen months.&#8221;
              <footer>Deckworks · Minneapolis</footer>
            </blockquote>
            <div className="vh-proof__row">
              <div className="vh-proof__cell">
                <div className="n">$170K</div>
                <div className="l">signed in his first 60 days — Mitch, remodeler</div>
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
        </div>
      </section>

      {/* ── INDUSTRIES — editorial index ───────────────────── */}
      <section className="vh-sect">
        <div className="vh-split">
          <div className="vh-split__kicker">Industries</div>
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
        </div>
      </section>

      {/* ── HOW IT WORKS — open columns ───────────────────── */}
      <section className="vh-sect">
        <div className="vh-split">
          <div className="vh-split__kicker">How it works</div>
          <Stagger className="vh-how">
            <StaggerItem className="vh-how__row">
              <div className="n">01</div>
              <div className="ts">Day 0</div>
              <h4>Apply your zip</h4>
              <p>Two-minute form. We verify license, bond, and recent signed work.</p>
            </StaggerItem>
            <StaggerItem className="vh-how__row">
              <div className="n">02</div>
              <div className="ts">Within 48 hours</div>
              <h4>Operator interview</h4>
              <p>A 45-minute call with Erin about capacity and ticket range.</p>
            </StaggerItem>
            <StaggerItem className="vh-how__row">
              <div className="n">03</div>
              <div className="ts">Ten business days</div>
              <h4>Demand calibration</h4>
              <p>We tune intake to your zip&#8217;s signal before going live.</p>
            </StaggerItem>
            <StaggerItem className="vh-how__row">
              <div className="n">04</div>
              <div className="ts">Week two</div>
              <h4>First appointment</h4>
              <p>The median operator hits 30 kept appointments by week 11.</p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ── CLOSING — blue band ───────────────────────────── */}
      <CtaBlock
        eyebrow="One operator per zip"
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "View open territories", href: "/territory" }}
      >
        If your zip is <em>open,</em>
        <br />
        you have 48 hours.
      </CtaBlock>
    </div>
  );
}
