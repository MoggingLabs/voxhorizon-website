import type { Metadata } from "next";
import Link from "next/link";
import { cohort, openZips, territoryCounts, type OpenZip } from "@/lib/content";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TerritoryGrid } from "@/components/motion/TerritoryGrid";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "Territory",
  description:
    "VoxHorizon territory map — 96 zip codes, 73 claimed, 19 open, 4 closing this quarter. One operator per zip code.",
  alternates: { canonical: "/territory" },
};

function zipStatus(z: OpenZip): React.ReactNode {
  if (z.applicants === 0) return <>quiet</>;
  return (
    <>
      <em>{z.applicants}</em> appl{z.hot ? " · hot" : ""}
    </>
  );
}

export default function TerritoryPage() {
  return (
    <div className="v2">
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Territory · live map<em>— refreshed nightly</em>
        </div>
        <h1>
          {territoryCounts.total} territories.
          <br />
          <em>{territoryCounts.open} open</em>, <span className="mut">{territoryCounts.hot} closing.</span>
        </h1>
        <p className="lede">
          One operator per zip code, no exceptions, no shared rosters. The map below is the
          live state of the network — claimed cells in cyan, open cells in bone, and amber
          cells closing this quarter. <strong>If your zip is claimed when you call, we tell you.</strong>
        </p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        <div className="vh-strip__cell">
          <div className="k">Claimed</div>
          <div className="v">
            <em>
              <CountUp value={territoryCounts.claimed} />
            </em>
          </div>
          <div className="delta">+9 YTD</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Open · {cohort.quarter}</div>
          <div className="v">
            <CountUp value={territoryCounts.open} />
          </div>
          <div className="delta">closing {cohort.closesOn}</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Hot · 48-hour</div>
          <div className="v">
            <em>
              <CountUp value={territoryCounts.hot} />
            </em>
          </div>
          <div className="delta">multiple applicants</div>
        </div>
      </div>

      {/* ── 01 — THE MAP ───────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— The grid</span>
          </span>
          <em>Each cell is one zip. Hover to read it.</em>
        </div>
        <div className="vh-terr">
          <div>
            <TerritoryGrid />
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
                Closing 48h · {territoryCounts.hot}
              </span>
            </div>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Network footprint</div>
              <div className="v">
                <em>
                  <CountUp value={territoryCounts.total} />
                </em>{" "}
                zips
              </div>
              <div className="row">
                <span>states</span>
                <span>{territoryCounts.states}</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">Median operator radius</div>
              <div className="v">38mi</div>
              <div className="row">
                <span>from desk</span>
                <span>—</span>
              </div>
            </div>
            <div className="vh-side__stat">
              <div className="k">New zips · 2026</div>
              <div className="v">
                <em>+12</em>
              </div>
              <div className="row">
                <span>per quarter</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 — OPEN ZIPS TABLE ───────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— Open zips · {cohort.quarter}</span>
          </span>
          <em>Pick one — the row takes you to the application.</em>
        </div>
        <Stagger className="vh-zip">
          <div className="vh-zip__h">
            <span>
              Open territory · {territoryCounts.open} zips · closing {cohort.closesOn}
            </span>
            <em>— applicants in queue</em>
          </div>
          {openZips.map((row) => (
            <StaggerItem key={row.zip}>
              <Link href={`/apply?zip=${row.zip}`} className="vh-zip__row">
                <span className="z">{row.zip}</span>
                <span className="city">{`${row.city}, ${row.state}`}</span>
                <span className="ct">{zipStatus(row)}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 03 — POLICY ────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Territory policy</span>
          </span>
          <em>The rules, plain.</em>
        </div>
        <Stagger className="vh-how">
          <StaggerItem className="vh-how__row">
            <div className="n">A.</div>
            <div className="ts">
              One zip
              <br />
              <em>one operator</em>
            </div>
            <div>
              <h4>We will sell your zip to you, and to no one else.</h4>
              <p>
                The first qualified applicant who passes our interview claims the zip. The zip is
                yours until you cancel or fail the operator agreement.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">B.</div>
            <div className="ts">
              No
              <br />
              <em>overlap</em>
            </div>
            <div>
              <h4>We don&#8217;t book the same homeowner with two operators.</h4>
              <p>
                Cross-zip lead routing is by the homeowner&#8217;s address, not their phone. Multi-zip
                operators get full coverage of each zip they hold.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">C.</div>
            <div className="ts">
              If
              <br />
              <em>claimed</em>
            </div>
            <div>
              <h4>If your zip is taken, we say so the same day.</h4>
              <p>
                You can either go on the waitlist, take an adjacent open zip, or walk. We will
                never string you along; the answer comes on the application call.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="vh-how__row">
            <div className="n">D.</div>
            <div className="ts">
              New
              <br />
              <em>zips</em>
            </div>
            <div>
              <h4>We add 12 new territories per quarter, on average.</h4>
              <p>
                Adds are decided by demand signal in the zip, not by who applies. We won&#8217;t open a
                zip we can&#8217;t keep at ≥30 K per 90 days.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        primary={{ label: "Apply for an open zip", href: "/apply" }}
        secondary={{ label: "See operator results", href: "/results" }}
      >
        Pick your zip.
        <br />
        Before <em>someone else</em> does.
      </CtaBlock>
    </div>
  );
}
