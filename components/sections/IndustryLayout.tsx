import Link from "next/link";
import { industries } from "@/lib/content";
import { publicEnv } from "@/lib/env";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";

export type IndustryStat = { value: string; label: string };

export function IndustryLayout({
  slug,
  industry,
  headline,
  subhead,
  bullets,
}: {
  slug: string;
  industry: string;
  headline: string;
  subhead: string;
  // `stats` and `image` are still accepted for prop compatibility but no longer
  // rendered — the calm pass dropped the metrics strip; the terminal panel
  // replaced the old photo placeholder.
  stats?: IndustryStat[];
  bullets: string[];
  image?: string;
}) {
  const others = industries.filter((i) => i.key !== slug);
  const trade = industry.toLowerCase();
  const site = publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry} appointments — VoxHorizon`,
    serviceType: `Exclusive ${trade} appointment generation for contractors`,
    description: subhead,
    url: `${site}/industries/${slug}`,
    areaServed: "United States",
    provider: {
      "@type": "Organization",
      name: "VoxHorizon",
      url: site,
    },
  };

  return (
    <div className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Industries · {industry}
          <em>— one operator per market</em>
        </div>
        <h1>{headline}</h1>
        <p className="lede">{subhead}</p>
      </section>

      {/* ── 01 — WHY OPERATORS CHOOSE US ──────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 03 <span>— Why operators choose us</span>
          </span>
          <em>What an exclusive {trade} pipeline gets you.</em>
        </div>
        <Stagger className="vh-how">
          {bullets.map((b, i) => (
            <StaggerItem className="vh-how__row" key={b}>
              <div className="n">{String(i + 1).padStart(2, "0")}</div>
              <div className="ts">
                {industry}
                <br />
                <em>edge {String(i + 1).padStart(2, "0")}</em>
              </div>
              <div>
                <p>{b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── 02 — THE DESK ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            02 / 03 <span>— The desk</span>
          </span>
          <em>Every record is a real homeowner, in your zip.</em>
        </div>
        <Reveal>
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
            <div className="vh-block">
              <p className="vh-proof__quote" style={{ fontSize: "clamp(19px, 2.2vw, 25px)" }}>
                30 kept appointments in your first 90 days — <em className="vh-accent">or we
                work for free</em> until you get them. In writing.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 03 — OTHER TRADES ─────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            03 / 03 <span>— Other trades</span>
          </span>
          <em>Same desk. Different work.</em>
        </div>
        <Stagger className="vh-2">
          {others.map((o) => (
            <StaggerItem key={o.key}>
              <Link href={o.href} className="vh-indcard">
                <span className="t">{o.name}</span>
                <p>{o.blurb}</p>
                <span className="go">View the {o.name.toLowerCase()} desk →</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        eyebrow={`One operator per zip · check yours before it fills`}
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: `See ${trade} results`, href: "/results" }}
      >
        See if your {trade} <em>territory</em> is open.
      </CtaBlock>
    </div>
  );
}
