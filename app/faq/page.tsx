import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about VoxHorizon: lead exclusivity, qualification, pricing approach, guarantees, and how fast you can expect booked appointments.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <div className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          FAQ · the brief<em>— before you apply</em>
        </div>
        <h1>
          Questions,
          <br />
          <em>answered.</em>
        </h1>
        <p className="lede">
          Everything contractors ask before partnering with us — <strong>exclusivity,
          qualification, guarantees, and how fast the phone rings.</strong> For the full
          mechanics, read the <Link href="/system">operator handbook</Link>.
        </p>
      </section>

      {/* ── 01 — THE QUESTIONS ────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 01 <span>— Common questions</span>
          </span>
          <em>Tap a question to expand.</em>
        </div>
        <Stagger className="vh-faq">
          {faqs.map((item, i) => (
            <StaggerItem key={item.q}>
              <details open={i === 0}>
                <summary>
                  <span className="q">{item.q}</span>
                  <span className="ix">
                    {String(i + 1).padStart(2, "0")} / {String(faqs.length).padStart(2, "0")}
                    <span className="disc" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <p className="a">{item.a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/system" className="vh-more">
          Want the full mechanics? Read the handbook →
        </Link>
      </section>

      {/* ── CLOSING ───────────────────────────────────────── */}
      <CtaBlock
        eyebrow="Anything else — ask Erin on the call"
        primary={{ label: "Check my zip", href: "/apply" }}
        secondary={{ label: "operators@voxhorizon.io", href: "mailto:operators@voxhorizon.io" }}
      >
        Still have a
        <br />
        <em>question?</em>
      </CtaBlock>
    </div>
  );
}
