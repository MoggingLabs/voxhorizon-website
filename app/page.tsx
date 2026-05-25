import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operator Desk",
  description:
    "Pre-qualified, pre-scheduled appointments for established home-improvement contractors. One operator per zip code.",
  alternates: { canonical: "/" },
};

const CELLS = [
  "claimed", "open", "claimed", "claimed", "claimed", "claimed", "open", "claimed",
  "claimed", "open-hot", "open", "claimed", "open-hot", "open", "claimed", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "open",
  "open", "claimed", "open", "open", "claimed", "claimed", "open", "claimed",
  "claimed", "claimed", "claimed", "open", "open", "claimed", "open-hot", "open",
  "open", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "claimed", "claimed", "claimed", "open", "claimed", "open", "open-hot", "claimed",
  "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed", "claimed",
  "open", "claimed", "open", "claimed", "claimed", "claimed", "claimed", "claimed",
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
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
          <Link href="/system" className="g">View demo desk</Link>
        </div>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
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
          <div className="k">Avg ticket · signed</div>
          <div className="v"><span className="pre">$</span>32.4<span className="pre">K</span></div>
          <div className="delta">+$1.8K MoM</div>
        </div>
      </div>

      {/* ── HERO PANELS (feed + chart) ────────────────────── */}
      <div className="vh-panels">
        <div className="vh-panels__pane">
          <div className="vh-pane-head">
            <span>Live feed · last 24h</span>
            <em>● streaming</em>
          </div>

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

          <div className="vh-row">
            <span className="vh-row__ic">L</span>
            <div>
              <div className="vh-row__title">QUAL LEAD · loft conversion</div>
              <div className="vh-row__sub">NADIA · 03110 NH BUILD SVCS</div>
            </div>
            <span className="vh-row__time">+00:52</span>
          </div>
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

      {/* ── 02 — THE FEED ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">02 / 06 <span>— The feed</span></span>
          <em>What&#8217;s coming in, right now.</em>
        </div>
        <div className="vh-feed">
          <div className="vh-feed__intro">
            <h2 className="vh-h3">
              The <em>only</em> desk a contractor needs:<br />signed work, in order.
            </h2>
            <p className="vh-feed__sub">
              Every operator sees the same desk. Three event types —{" "}
              <strong>L</strong> qualified lead, <strong>K</strong> kept appointment,{" "}
              <strong>$</strong> signed contract.
            </p>
            <div className="vh-feedlist">
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
                  <div className="vh-row__title">SIGNED · $34,600 composite deck</div>
                  <div className="vh-row__sub">DECKWORKS · 55410 MINNEAPOLIS MN</div>
                </div>
                <span className="vh-row__time">+00:36</span>
              </div>
              <div className="vh-row">
                <span className="vh-row__ic">L</span>
                <div>
                  <div className="vh-row__title">QUAL LEAD · loft conversion</div>
                  <div className="vh-row__sub">NADIA · 03110 NH BUILD SVCS</div>
                </div>
                <span className="vh-row__time">+00:52</span>
              </div>
              <div className="vh-row">
                <span className="vh-row__ic kept">K</span>
                <div>
                  <div className="vh-row__title">APPT CONF · 14 windows</div>
                  <div className="vh-row__sub">STERLING · 49503 GRAND RAPIDS MI</div>
                </div>
                <span className="vh-row__time">+01:14</span>
              </div>
              <div className="vh-row">
                <span className="vh-row__ic sign">$</span>
                <div>
                  <div className="vh-row__title">SIGNED · $21,200 master bath</div>
                  <div className="vh-row__sub">HALLORAN · 83702 BOISE ID</div>
                </div>
                <span className="vh-row__time">+02:03</span>
              </div>
              <div className="vh-row">
                <span className="vh-row__ic">L</span>
                <div>
                  <div className="vh-row__title">QUAL LEAD · whole-house siding</div>
                  <div className="vh-row__sub">WILL · 74105 TULSA OK · $42–58K</div>
                </div>
                <span className="vh-row__time">+03:27</span>
              </div>
              <div className="vh-row">
                <span className="vh-row__ic sign">$</span>
                <div>
                  <div className="vh-row__title">SIGNED · $62,000 kitchen</div>
                  <div className="vh-row__sub">GREENWAY · 28207 CHARLOTTE NC</div>
                </div>
                <span className="vh-row__time">+07:09</span>
              </div>
            </div>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Qualified → Kept</div>
              <div className="v"><em>83</em>%</div>
              <div className="row"><span>industry avg</span><span>34%</span></div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Kept → Signed · 90D</div>
              <div className="v"><em>61</em>%</div>
              <div className="row"><span>industry avg</span><span>22%</span></div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Reject · Applicants</div>
              <div className="v"><em>71</em>%</div>
              <div className="row"><span>we say no a lot</span><span>—</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — WHAT YOU RECEIVE ─────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 06 <span>— What you receive</span></span>
          <em>Every record is a real homeowner, in your zip.</em>
        </div>
        <div className="vh-recv">
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 01 · Lead<span className="n">L</span>
            </div>
            <div className="vh-recv__mid">
              <h3>A qualified record, not a form-fill.</h3>
              <p>
                Budget verified, ownership confirmed, project specified. We reject{" "}
                <strong>71%</strong> of inquiries before you see them.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>Homeowner</span><span>M. &amp; K. Liu</span></div>
              <div className="vh-field"><span>Project</span><span>Master bath, full gut</span></div>
              <div className="vh-field"><span>Budget</span><span>$28–34K · verified</span></div>
              <div className="vh-field"><span>Zip</span><span>74105 · Tulsa OK</span></div>
            </div>
          </div>
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 02 · Appt<span className="n">K</span>
            </div>
            <div className="vh-recv__mid">
              <h3>Confirmed, calendared, reminded.</h3>
              <p>
                Two-touch confirmation by SMS + voice. <strong>83%</strong> of booked
                appointments are kept — homeowner present, scope in writing.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>When</span><span>Thu · 23 Oct · 10:00</span></div>
              <div className="vh-field"><span>Address</span><span>4421 S Quaker Ave</span></div>
              <div className="vh-field"><span>Present</span><span>Both owners</span></div>
              <div className="vh-field"><span>Confirmed</span><span>SMS · 18h ago</span></div>
            </div>
          </div>
          <div className="vh-recv__row">
            <div className="vh-recv__badge">
              Stage 03 · Sign<span className="n">$</span>
            </div>
            <div className="vh-recv__mid">
              <h3>You sign, or you walk clean.</h3>
              <p>
                We don&#8217;t close for you. You bring the contract. <strong>61%</strong> sign
                within 90 days at an avg ticket of <strong>$32,400</strong>.
              </p>
            </div>
            <div className="vh-recv__sample">
              <div className="vh-field"><span>Contract</span><span>$31,800 · master bath</span></div>
              <div className="vh-field"><span>Deposit</span><span>33% on signature</span></div>
              <div className="vh-field"><span>Start</span><span>Nov 12 · 3 wks out</span></div>
              <div className="vh-field"><span>Op fee</span><span>$540 · on signature</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 — TERRITORY ────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">04 / 06 <span>— Territory</span></span>
          <em>One operator per zip code. No exceptions.</em>
        </div>
        <div className="vh-terr">
          <div>
            <h2 className="vh-h3">
              96 territories.<br /><em>12 open</em> through Sept 30.
            </h2>
            <div className="vh-grid">
              {CELLS.map((state, i) => (
                <div key={i} className={`cell ${state}`} />
              ))}
            </div>
            <div className="vh-legend">
              <span>
                <span className="sw" style={{ background: "rgba(81,184,220,0.14)" }} />
                Claimed · 73
              </span>
              <span>
                <span className="sw" style={{ background: "rgba(217,229,220,0.20)" }} />
                Open · 19
              </span>
              <span>
                <span className="sw" style={{ background: "#FFB23F" }} />
                Closing · 4
              </span>
            </div>
          </div>
          <div className="vh-zip">
            <div className="vh-zip__h">
              <span>Open · closing Q3</span>
              <em>— applicants</em>
            </div>
            <Link href="/territory" className="vh-zip__row">
              <span className="z">67501</span>
              <span className="city">Wichita KS</span>
              <span className="ct"><em>2</em> appl</span>
            </Link>
            <Link href="/territory" className="vh-zip__row">
              <span className="z">28207</span>
              <span className="city">Charlotte NC</span>
              <span className="ct"><em>3</em> appl</span>
            </Link>
            <Link href="/territory" className="vh-zip__row">
              <span className="z">89509</span>
              <span className="city">Reno NV</span>
              <span className="ct"><em>1</em> appl</span>
            </Link>
            <Link href="/territory" className="vh-zip__row">
              <span className="z">83702</span>
              <span className="city">Boise ID</span>
              <span className="ct"><em>4</em> appl</span>
            </Link>
            <Link href="/territory" className="vh-zip__row">
              <span className="z">78704</span>
              <span className="city">Austin TX</span>
              <span className="ct"><em>6</em> appl</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 05 — GUARANTEE ────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">05 / 06 <span>— Guarantee</span></span>
          <em>If we don&#8217;t deliver, we don&#8217;t get paid.</em>
        </div>
        <div className="vh-grnt">
          <div>
            <div className="vh-grnt__title">
              30 kept appointments in 90 days. Or <em>we work for free</em> until you get them.
            </div>
            <p className="vh-grnt__body">
              In writing. <strong>You pay per signed contract, not per lead.</strong> If we fail,
              every fee from #30 onward is waived until your 30th sit-down. No proration, no
              asterisks.
            </p>
          </div>
          <div className="vh-term">
            <div><span className="p">vh@operator</span>:~${" "}<span className="e">guarantee --check</span></div>
            <div>{"  "}cohort.......... Q2 2026</div>
            <div>{"  "}contracts....... <span className="e">24 / 30 ✗</span></div>
            <div>{"  "}status.......... <span className="o">working_free</span></div>
            <div>{"  "}resumes_at...... <span className="e">contract #31</span><span className="cursor"></span></div>
          </div>
        </div>
      </section>

      {/* ── 06 — HOW IT WORKS ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">06 / 06 <span>— How it works</span></span>
          <em>Four steps, two weeks, then the phone rings.</em>
        </div>
        <div className="vh-how">
          <div className="vh-how__row">
            <div className="n">01</div>
            <div className="ts">T+<em>0H</em><br />APPLY</div>
            <div>
              <h4>Apply your zip</h4>
              <p>Two-minute form. We verify license, bond, and recent signed work.</p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">02</div>
            <div className="ts">T+<em>48H</em><br />INTERVIEW</div>
            <div>
              <h4>Operator interview</h4>
              <p>45-minute call with Erin or a senior liaison about capacity and ticket range.</p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">03</div>
            <div className="ts">T+<em>10D</em><br />CALIBRATION</div>
            <div>
              <h4>Demand calibration</h4>
              <p>10 business days tuning intake to your zip&#8217;s signal.</p>
            </div>
          </div>
          <div className="vh-how__row">
            <div className="n">04</div>
            <div className="ts">T+<em>14D</em><br />LIVE</div>
            <div>
              <h4>First appointment</h4>
              <p>Median operator hits 30 kept appointments by week 11.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">Q3 · closes when 12 territories fill</div>
        <h2>
          Check your zip.<br />
          If it&#8217;s <em>open</em>, you have 48 hours.
        </h2>
        <div className="vh-cta">
          <Link href="/apply" className="p">[ Apply my zip ]</Link>
          <Link href="/operators" className="g">Speak with Erin</Link>
        </div>
        <div className="meta">
          <span>63 active operators</span>
          <span><em>12 of 24</em> Q3 slots open</span>
        </div>
      </div>
    </>
  );
}
