import type { Metadata } from "next";
import Link from "next/link";
import { operatorProfiles, operatorRoster } from "@/lib/content";

export const metadata: Metadata = {
  title: "Operators",
  description:
    "63 active VoxHorizon operators across 27 states. Audited stats, no testimonials, plain receipts.",
  alternates: { canonical: "/operators" },
};

export default function OperatorsPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Operators · the network<em>— 63 desks, 27 states</em>
        </div>
        <h1>
          The roster.
          <br />
          <em>Not testimonials.</em> <span className="mut">Receipts.</span>
        </h1>
        <p className="lede">
          Below is every active VoxHorizon operator, with their audited Q3 numbers.{" "}
          <strong>No selected quotes, no curated success stories.</strong> A profile only appears
          here once an operator has crossed thirty signed contracts; before that, the desk is
          calibrating and the numbers don&apos;t mean much.
        </p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        <div className="vh-strip__cell">
          <div className="k">Network · YTD revenue</div>
          <div className="v">
            <span className="pre">$</span>
            <em>184</em>
            <span className="pre">M</span>
          </div>
          <div className="delta">+22% YoY</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Median op · revenue / yr</div>
          <div className="v">
            <span className="pre">$</span>1.4<span className="pre">M</span>
          </div>
          <div className="delta">+$180K YoY</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Top quartile · revenue / yr</div>
          <div className="v">
            <span className="pre">$</span>
            <em>3.2</em>
            <span className="pre">M</span>
          </div>
          <div className="delta">+$420K YoY</div>
        </div>
      </div>

      {/* ── 01 — OPERATOR CARDS ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— Operator profiles</span>
          </span>
          <em>Six of sixty-three. Roll the page for more.</em>
        </div>

        <div className="vh-ops-grid">
          {operatorProfiles.map((op) => (
            <div key={op.zip} className="vh-op">
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
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 — NETWORK ROSTER ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— Network roster · Q3</span>
          </span>
          <em>Audited numbers, alphabetical.</em>
        </div>
        <div className="vh-zip">
          <div className="vh-zip__h">
            <span>Operator · Zip · Trade · Q3 signed · Q3 revenue</span>
            <em>— 18 of 63 shown</em>
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
      </section>

      {/* ── 03 — LIAISON ───────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Your liaison</span>
          </span>
          <em>One person, on the phone, plain answers.</em>
        </div>
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
              we&apos;ll have to refuse. She has fourteen years in remodel sales — she&apos;s been
              on your side of the kitchen table. <strong>No SDRs, no AEs, no warm-up dance.</strong>
            </p>
            <p className="vh-grnt__body">
              She picks up the phone Monday through Thursday, 8am to 5pm Mountain, and answers
              every applicant within 48 hours — including the no&apos;s.
            </p>
          </div>
          <div className="vh-term">
            <div>
              <span className="c">{"// erin · operator liaison"}</span>
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
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">Apply to join the roster · Q3 closes Sept 30</div>
        <h2>
          Twelve of these desks
          <br />
          opened up this <em>quarter.</em>
        </h2>
        <div className="vh-cta">
          <Link href="/apply" className="p">
            [ Apply my zip ]
          </Link>
          <Link href="/territory" className="g">
            See open zips
          </Link>
        </div>
        <div className="meta">
          <span>63 active operators</span>
          <span>
            <em>12 of 24</em> Q3 slots open
          </span>
        </div>
      </div>
    </>
  );
}
