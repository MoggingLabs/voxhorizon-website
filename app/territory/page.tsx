import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Territory",
  description:
    "VoxHorizon territory map — 96 zip codes, 73 claimed, 19 open, 4 closing this quarter. One operator per zip code.",
  alternates: { canonical: "/territory" },
};

// The live grid — 16 wide × 6 tall = 96 cells. Sequence ported verbatim from
// the design handoff (project/territory.html): 73 claimed, 19 open, 4 closing.
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

// Open territory · Q3. zip / city / applicant count (count em = highlighted number).
const OPEN_ZIPS: { z: string; city: string; ct: React.ReactNode }[] = [
  { z: "67501", city: "Wichita, Kansas", ct: <><em>2</em> appl · hot</> },
  { z: "28207", city: "Charlotte, North Carolina", ct: <><em>3</em> appl · hot</> },
  { z: "89509", city: "Reno, Nevada", ct: <><em>1</em> appl</> },
  { z: "05401", city: "Burlington, Vermont", ct: <>quiet</> },
  { z: "83702", city: "Boise, Idaho", ct: <><em>4</em> appl · hot</> },
  { z: "53703", city: "Madison, Wisconsin", ct: <><em>2</em> appl</> },
  { z: "97402", city: "Eugene, Oregon", ct: <>quiet</> },
  { z: "78704", city: "Austin, Texas", ct: <><em>6</em> appl · hot</> },
  { z: "87505", city: "Santa Fe, New Mexico", ct: <><em>1</em> appl</> },
  { z: "14618", city: "Rochester, New York", ct: <><em>2</em> appl</> },
  { z: "68114", city: "Omaha, Nebraska", ct: <><em>1</em> appl</> },
  { z: "37205", city: "Nashville, Tennessee", ct: <><em>3</em> appl</> },
  { z: "29401", city: "Charleston, South Carolina", ct: <><em>2</em> appl</> },
  { z: "99205", city: "Spokane, Washington", ct: <>quiet</> },
  { z: "03801", city: "Portsmouth, New Hampshire", ct: <><em>1</em> appl</> },
  { z: "04401", city: "Bangor, Maine", ct: <>quiet</> },
  { z: "59715", city: "Bozeman, Montana", ct: <><em>2</em> appl</> },
  { z: "82001", city: "Cheyenne, Wyoming", ct: <>quiet</> },
  { z: "57104", city: "Sioux Falls, South Dakota", ct: <><em>1</em> appl</> },
];

export default function TerritoryPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Territory · live map<em>— refreshed nightly</em>
        </div>
        <h1>
          96 territories.
          <br />
          <em>19 open</em>, <span className="mut">4 closing.</span>
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
            <em>73</em>
          </div>
          <div className="delta">+9 YTD</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Open · Q3</div>
          <div className="v">19</div>
          <div className="delta">closing Sept 30</div>
        </div>
        <div className="vh-strip__cell">
          <div className="k">Hot · 48-hour</div>
          <div className="v">
            <em>4</em>
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
          <em>Each cell is one zip. 16 wide, 6 tall.</em>
        </div>
        <div className="vh-terr">
          <div>
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
                Closing 48h · 4
              </span>
            </div>
          </div>
          <div className="vh-side">
            <div className="vh-side__stat">
              <div className="k">Network footprint</div>
              <div className="v">
                <em>96</em> zips
              </div>
              <div className="row">
                <span>states</span>
                <span>27</span>
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
            02 / 03 <span>— Open zips · Q3</span>
          </span>
          <em>Take one, or we’ll take you off the list.</em>
        </div>
        <div className="vh-zip">
          <div className="vh-zip__h">
            <span>Open territory · 19 zips · closing Sept 30</span>
            <em>— applicants in queue</em>
          </div>
          {OPEN_ZIPS.map((row) => (
            <Link key={row.z} href="/apply" className="vh-zip__row">
              <span className="z">{row.z}</span>
              <span className="city">{row.city}</span>
              <span className="ct">{row.ct}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 03 — POLICY ────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Territory policy</span>
          </span>
          <em>The rules, plain.</em>
        </div>
        <div className="vh-how">
          <div className="vh-how__row">
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
          </div>
          <div className="vh-how__row">
            <div className="n">B.</div>
            <div className="ts">
              No
              <br />
              <em>overlap</em>
            </div>
            <div>
              <h4>We don’t book the same homeowner with two operators.</h4>
              <p>
                Cross-zip lead routing is by the homeowner’s address, not their phone. Multi-zip
                operators get full coverage of each zip they hold.
              </p>
            </div>
          </div>
          <div className="vh-how__row">
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
          </div>
          <div className="vh-how__row">
            <div className="n">D.</div>
            <div className="ts">
              New
              <br />
              <em>zips</em>
            </div>
            <div>
              <h4>We add 12 new territories per quarter, on average.</h4>
              <p>
                Adds are decided by demand signal in the zip, not by who applies. We won’t open a
                zip we can’t keep at ≥30 K per 90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">Q3 closes Sept 30 · 12 of 24 slots remain</div>
        <h2>
          Pick your zip.
          <br />
          Before <em>someone else</em> does.
        </h2>
        <div className="vh-cta">
          <Link href="/apply" className="p">
            [ Apply my zip ]
          </Link>
          <Link href="/system" className="g">
            Read the system
          </Link>
        </div>
        <div className="meta">
          <span>Response · 48h</span>
          <span>
            <em>4 zips</em> closing this week
          </span>
        </div>
      </div>
    </>
  );
}
