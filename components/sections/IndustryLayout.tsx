import Link from "next/link";

export type IndustryStat = { value: string; label: string };

// The full industry roster — used to render cross-links to the other two trades.
const INDUSTRIES: { slug: string; name: string; blurb: string }[] = [
  {
    slug: "kitchen-bath",
    name: "Kitchen & Bath",
    blurb:
      "High-ticket remodel projects, pre-qualified on scope and budget, matched to your crew’s capacity.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    blurb:
      "Re-roof and repair appointments at volume, cleared on budget and timeline before they reach you.",
  },
  {
    slug: "decking",
    name: "Decking",
    blurb:
      "Outdoor-living projects from homeowners ready to build, inside your exact service area.",
  },
];

export function IndustryLayout({
  slug,
  industry,
  headline,
  subhead,
  stats,
  bullets,
}: {
  slug: string;
  industry: string;
  headline: string;
  subhead: string;
  stats: IndustryStat[];
  bullets: string[];
  // `image` is still accepted for prop compatibility but is no longer rendered —
  // the framed terminal panel below replaces the old photo placeholder.
  image?: string;
}) {
  const others = INDUSTRIES.filter((i) => i.slug !== slug);
  const trade = industry.toLowerCase();

  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Industries · {industry}
          <em>— one operator per market</em>
        </div>
        <h1>{headline}</h1>
        <p className="lede">{subhead}</p>
      </section>

      {/* ── METRICS STRIP ─────────────────────────────────── */}
      <div className="vh-strip">
        {stats.map((s) => (
          <div className="vh-strip__cell" key={s.label}>
            <div className="k">{s.label}</div>
            <div className="v">
              <em>{s.value}</em>
            </div>
          </div>
        ))}
      </div>

      {/* ── 01 — WHY OPERATORS CHOOSE US ──────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— Why operators choose us</span>
          </span>
          <em>What an exclusive {trade} pipeline gets you.</em>
        </div>
        <div className="vh-how">
          {bullets.map((b, i) => (
            <div className="vh-how__row" key={b}>
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="ts">
                {industry}
                <br />
                <em>edge {String(i + 1).padStart(2, "0")}</em>
              </div>
              <div>
                <p>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 — THE DESK ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— The desk</span>
          </span>
          <em>Every record is a real homeowner, in your zip.</em>
        </div>
        <div className="vh-grnt">
          <div>
            <div className="vh-grnt__title">
              Not leads.
              <br />
              <em>{industry} appointments.</em>
            </div>
            <p className="vh-grnt__body">
              {subhead} You show up, sit, and sign — no chasing, no shared pool,
              no race to the bottom on price.
            </p>
          </div>
          <div className="vh-term">
            <div>
              <span className="p">vh@operator</span>:~$ <span className="e">desk --trade {slug}</span>
            </div>
            <div className="c">{"// next on the calendar"}</div>
            <div>
              &nbsp;&nbsp;trade.......... <span className="e">{industry}</span>
            </div>
            <div>
              &nbsp;&nbsp;territory...... <span className="e">exclusive · 1 per market</span>
            </div>
            <div>
              &nbsp;&nbsp;status......... <span className="o">pre-qualified</span>
            </div>
            <div>
              &nbsp;&nbsp;state.......... <span className="e">booked · ready to sign</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 — OTHER TRADES ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Other trades</span>
          </span>
          <em>Same desk. Different work.</em>
        </div>
        <div className="vh-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className="vh-block">
              <div className="vh-caps vh-accent">{o.name} →</div>
              <p className="vh-prose" style={{ marginTop: 14 }}>
                {o.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <div className="vh-closing">
        <div className="eye">One operator per zip · check yours before it fills</div>
        <h2>
          See if your {trade} <em>territory</em> is open.
        </h2>
        <div className="vh-cta">
          <Link href="/apply" className="p">
            [ Check my zip ]
          </Link>
          <Link href="/territory" className="g">
            See open zips
          </Link>
        </div>
        <div className="meta">
          <span>Response · 48h</span>
          <span>
            <em>One operator</em> per market
          </span>
        </div>
      </div>
    </>
  );
}
