import type { Metadata } from "next";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "System",
  description:
    "How the VoxHorizon operator network works — three event types, one zip per operator, paid per signature.",
  alternates: { canonical: "/system" },
};

const TOC = [
  { n: "01", label: "Taxonomy", href: "#taxonomy" },
  { n: "02", label: "Intake", href: "#intake" },
  { n: "03", label: "Audit", href: "#audit" },
  { n: "04", label: "Fees", href: "#fees" },
  { n: "05", label: "Guarantee", href: "#guarantee" },
  { n: "06", label: "Timeline", href: "#timeline" },
  { n: "07", label: "Questions", href: "#questions" },
];

export default function SystemPage() {
  return (
    <div className="v2">
      {/* ── PAGE INTRO ─────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          System · operator handbook<em>— audited, plain-language</em>
        </div>
        <h1>
          Three event types.
          <br />
          <em>One zip per operator.</em> <span className="mut">Paid by signature.</span>
        </h1>
        <p className="lede">
          VoxHorizon is a hand-curated network — not a marketplace, not software. We do the
          qualifying, the calendaring, and the confirming.{" "}
          <strong>You walk in, you sign or you walk out clean.</strong> Below is exactly how the
          system works, in the order you&#8217;d encounter it.
        </p>
      </section>

      {/* ── TOC RAIL (document signature) ─────────────────── */}
      <nav className="vh-toc" aria-label="Handbook contents">
        {TOC.map((item) => (
          <a key={item.href} href={item.href}>
            <span className="n">{item.n}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* ── 01 — THE THREE EVENT TYPES ─────────────────────── */}
      <section className="vh-sect" id="taxonomy">
        <div className="vh-seclabel">
          <span className="id">
            01 / 07 <span>— Event taxonomy</span>
          </span>
          <em>Three events. Nothing else counts.</em>
        </div>
        <div className="vh-recv">
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              L · Qualified lead<span className="n">L</span>
            </div>
            <div className="vh-recv__mid">
              <h3>A verified homeowner with budget, scope, and timing.</h3>
              <p>
                Inbound inquiry → voice screen → parcel check → budget verification → calendar
                held. If any of those fail, the record is rejected.{" "}
                <strong>71%</strong> of inquiries are rejected before they reach an operator's
                desk.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field">
                <span>Required</span>
                <span>Ownership · budget · scope</span>
              </div>
              <div className="vh-field">
                <span>Refused</span>
                <span>Renters · sub-floor budget</span>
              </div>
              <div className="vh-field">
                <span>Latency</span>
                <span>Median 42 min</span>
              </div>
              <div className="vh-field">
                <span>Operator fee</span>
                <span>$0 — included</span>
              </div>
            </div>
          </div>
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              K · Kept appointment<span className="n">K</span>
            </div>
            <div className="vh-recv__mid">
              <h3>Homeowner present, decision-makers in the room, scope in writing.</h3>
              <p>
                An L becomes a K when the homeowner sits down across from you — at the kitchen
                table, with the spouse, with a printed scope sheet. Confirmed twice: SMS the day
                before, voice the morning of. <strong>83%</strong> of booked appointments are
                kept.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field">
                <span>Confirmation</span>
                <span>SMS + voice</span>
              </div>
              <div className="vh-field">
                <span>Show rate</span>
                <span>83% network avg</span>
              </div>
              <div className="vh-field">
                <span>Reschedule</span>
                <span>One free swap</span>
              </div>
              <div className="vh-field">
                <span>Operator fee</span>
                <span>$0 — paid by sig only</span>
              </div>
            </div>
          </div>
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              $ · Signed contract<span className="n">$</span>
            </div>
            <div className="vh-recv__mid">
              <h3>You bring the paper. We don't close for you.</h3>
              <p>
                You arrive with your standard contract, scope sheet, and deposit terms. You close,
                or you walk. <strong>61%</strong> of kept appointments sign within 90 days. We
                collect a fee only when the deposit clears.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field">
                <span>Close rate</span>
                <span>61% · 90-day</span>
              </div>
              <div className="vh-field">
                <span>Avg ticket</span>
                <span>$32,400</span>
              </div>
              <div className="vh-field">
                <span>Operator fee</span>
                <span>$540 fixed · per sig</span>
              </div>
              <div className="vh-field">
                <span>Refund</span>
                <span>If cancelled in 7d · full</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 — INTAKE FUNNEL ─────────────────────────────── */}
      <section className="vh-sect" id="intake">
        <div className="vh-seclabel">
          <span className="id">
            02 / 07 <span>— Intake funnel</span>
          </span>
          <em>Where 71% of inquiries die.</em>
        </div>
        <div className="vh-2">
          <div className="vh-prose">
            <p>
              Every inquiry passes through five gates before an operator sees it. The gates are
              intentionally hostile to under-budgeted, under-decided, or non-owner inquiries.
              They're tuned by zip — we know the local minimum spend.
            </p>
            <p>
              The intake team is six people. Three are licensed in the trade. Two are bilingual.{" "}
              <strong>One is a former remodel sales manager</strong> whose job is to break weak
              quals before they cost an operator an hour.
            </p>
            <p>
              If we ever pass a bad record to a desk, it's audited the same day. We track{" "}
              <em>operator-reported quality</em> on every L, and adjust the gates monthly.
            </p>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Inquiries · 24h</div>
              <div className="v">
                <em>647</em>
              </div>
              <div className="row">
                <span>passed → L</span>
                <span>187</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Reject reason · top</div>
              <div className="v">Sub-budget</div>
              <div className="row">
                <span>34% of rejects</span>
                <span>—</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Gate cost · per L</div>
              <div className="v">
                <em>$32</em>
              </div>
              <div className="row">
                <span>media + intake</span>
                <span>—</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Avg quality score</div>
              <div className="v">
                <em>4.6</em>/5
              </div>
              <div className="row">
                <span>operator-reported</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — THE AUDIT TRAIL ───────────────────────────── */}
      <section className="vh-sect" id="audit">
        <div className="vh-seclabel">
          <span className="id">
            03 / 07 <span>— The audit trail</span>
          </span>
          <em>Every event time-stamped, every claim checkable.</em>
        </div>
        <div className="vh-2">
          <div>
            <h2 className="vh-h3">
              Receipts, not <em>impressions.</em>
            </h2>
            <p className="vh-prose" style={{ marginTop: "18px" }}>
              Every L, K, and $ in the network is time-stamped at creation and immutable
              thereafter. Operators can pull a full audit log of their own zip at any time.
              Network-wide aggregates are published weekly. Numbers on this website refresh
              nightly from the same audit table.
            </p>
            <p className="vh-prose">
              No retouching. No "industry-adjusted" figures. If a number moves, the receipt
              moves with it.
            </p>
          </div>
          <div className="vh-term">
            <div>
              <span className="p">Sample audit · zip 74105</span>
            </div>
            <div>&nbsp;</div>
            <div>
              &nbsp;&nbsp;period.......... <span className="e">Q3 2026 (90 days)</span>
            </div>
            <div>
              &nbsp;&nbsp;zip............. <span className="e">74105 · Tulsa OK</span>
            </div>
            <div>
              &nbsp;&nbsp;leads (L)....... <span className="e">52</span>
            </div>
            <div>
              &nbsp;&nbsp;kept (K)........ <span className="e">43</span>{" "}
              <span className="c">(82.7%)</span>
            </div>
            <div>
              &nbsp;&nbsp;signed ($)...... <span className="e">27</span>{" "}
              <span className="c">(62.8% of K)</span>
            </div>
            <div>
              &nbsp;&nbsp;rev............. <span className="e">$874,200</span>
            </div>
            <div>
              &nbsp;&nbsp;avg ticket...... <span className="e">$32,378</span>
            </div>
            <div>
              &nbsp;&nbsp;fee paid........ <span className="e">$14,580</span>
            </div>
            <div>
              &nbsp;&nbsp;<span className="o">guarantee....... satisfied</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 — FEE STRUCTURE ─────────────────────────────── */}
      <section className="vh-sect" id="fees">
        <div className="vh-seclabel">
          <span className="id">
            04 / 07 <span>— Fee structure</span>
          </span>
          <em>Paid by signature. Not by impression, not by lead.</em>
        </div>
        <div className="vh-how">
          <div className="vh-how__row">
            <div className="n">$0</div>
            <div className="ts">
              Per <em>L</em>
              <br />
              qualified lead
            </div>
            <div>
              <h4>Zero for the lead.</h4>
              <p>
                You see the record, the budget, the scope. If it's worth your drive, you accept.
                If not, decline — no charge, no penalty.
              </p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">$0</div>
            <div className="ts">
              Per <em>K</em>
              <br />
              kept appointment
            </div>
            <div>
              <h4>Zero for the appointment.</h4>
              <p>
                Even if you sit at the kitchen table and the work isn't for you. We bear the cost
                of confirmation. Walk clean.
              </p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">$540</div>
            <div className="ts">
              Per <em>$</em>
              <br />
              signed contract
            </div>
            <div>
              <h4>Fixed fee on signature.</h4>
              <p>
                Flat $540 per signed contract, billed when the deposit clears your account — not
                before. Same fee whether the ticket is $18K or $84K.
              </p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">—</div>
            <div className="ts">Membership</div>
            <div>
              <h4>No retainer, no SaaS bill.</h4>
              <p>
                There is no monthly fee, seat fee, license fee, or subscription. If we deliver
                nothing, you pay nothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 — GUARANTEE MECHANICS ───────────────────────── */}
      <section className="vh-sect" id="guarantee">
        <div className="vh-seclabel">
          <span className="id">
            05 / 07 <span>— Guarantee mechanics</span>
          </span>
          <em>If we miss, we work for free until we don&#8217;t.</em>
        </div>
        <div className="vh-grnt">
          <div>
            <div className="vh-grnt__title">
              30 kept appointments in 90 days. Or <em>we work for free</em> until you get them.
            </div>
            <p className="vh-grnt__body">
              A K is a kept appointment — homeowner present, decision-makers in the room, scope
              in writing. Not a phone call. Not a no-show.{" "}
              <strong>If we deliver 29, every fee from #30 onward is waived</strong> until your
              30th sit-down. No proration, no asterisks.
            </p>
            <p className="vh-grnt__body">
              Of 63 active operators, four have triggered the clause. All four were re-stocked
              within 21 days; the median was fourteen.
            </p>
          </div>
          <div className="vh-term">
            <div>
              <span className="p">2026 guarantee report · all cohorts</span>
            </div>
            <div>&nbsp;</div>
            <div>
              &nbsp;&nbsp;Q1 cohort........ <span className="e">14 / 14 satisfied</span>
            </div>
            <div>
              &nbsp;&nbsp;Q2 cohort........ <span className="e">17 / 18</span>{" "}
              <span className="o">1 working_free</span>
            </div>
            <div>
              &nbsp;&nbsp;Q3 cohort........ <span className="e">12 (active)</span>
            </div>
            <div>&nbsp;</div>
            <div>
              &nbsp;&nbsp;triggers ytd..... <span className="e">4 / 63 (6.3%)</span>
            </div>
            <div>
              &nbsp;&nbsp;re-stock median.. <span className="e">14 days</span>
            </div>
            <div>
              &nbsp;&nbsp;status........... <span className="p">in writing</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 — TIMELINE ──────────────────────────────────── */}
      <section className="vh-sect" id="timeline">
        <div className="vh-seclabel">
          <span className="id">
            06 / 07 <span>— Timeline</span>
          </span>
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

      {/* ── 07 — OPERATIONAL QUESTIONS ─────────────────────── */}
      <section className="vh-sect" id="questions">
        <div className="vh-seclabel">
          <span className="id">
            07 / 07 <span>— Operational questions</span>
          </span>
          <em>
            Mechanics only — objections live on the <Link href="/faq">FAQ</Link>.
          </em>
        </div>
        <div className="vh-recv">
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              Q · 01<span className="n">?</span>
            </div>
            <div className="vh-recv__mid">
              <h3>"What does the application look like?"</h3>
              <p>
                A two-minute form, then a 45-minute call with Erin or a senior liaison. We verify
                license, bond, two references, and three signed jobs from the last 12 months. We
                reject <strong>71%</strong> of applicants.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field">
                <span>Form</span>
                <span>~2 min</span>
              </div>
              <div className="vh-field">
                <span>Interview</span>
                <span>45 min</span>
              </div>
              <div className="vh-field">
                <span>Reject rate</span>
                <span>71%</span>
              </div>
            </div>
          </div>
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              Q · 02<span className="n">?</span>
            </div>
            <div className="vh-recv__mid">
              <h3>"What if a homeowner stiffs me after I show up?"</h3>
              <p>
                That's a no-K. We treat the appointment as un-kept and it doesn't count toward
                your 30. The guarantee clock keeps running until we put a real homeowner across
                from you.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field">
                <span>Un-kept appt</span>
                <span>Doesn't count</span>
              </div>
              <div className="vh-field">
                <span>Repeat homeowner</span>
                <span>Flagged · banned</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/faq" className="vh-more">
          More questions answered on the FAQ →
        </Link>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        eyebrow="Read the operator agreement before you apply"
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "Questions? Read the FAQ", href: "/faq" }}
      >
        The system is plain.
        <br />
        <em>So is the agreement.</em>
      </CtaBlock>
    </div>
  );
}
