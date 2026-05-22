import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FounderBio } from "@/components/sections/FounderBio";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "VoxHorizon is the growth partner for established home-improvement operators — exclusive territory and pre-qualified, pre-scheduled projects measured in signed work, not shared leads.",
  alternates: { canonical: "/about" },
};

const fit = {
  yes: [
    "Established operators doing $50K/mo or more",
    "Kitchen and bath remodelers, roofers, and deck builders",
    "Owners ready to sit and sign a steady flow of projects",
  ],
  no: [
    "Subcontractors or independent sales reps",
    "Brand-new businesses without crew capacity to deliver",
    "Anyone shopping for shared, low-cost lead lists",
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We don't sell leads. We schedule revenue."
        description="Shared leads, empty promises, spray-and-pray ad spend. We replaced all three with a data-driven program that delivers exclusive, pre-qualified projects measured in signed work."
      />

      <FounderBio />

      <section className="py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-surface-border bg-surface-elevated p-8">
              <h3 className="font-display text-xl font-normal text-content-primary">
                Who we work with
              </h3>
              <ul className="mt-5 space-y-3">
                {fit.yes.map((x) => (
                  <li key={x} className="flex gap-3 text-content-secondary">
                    <span className="mt-1 text-brand-cobalt">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-surface-border bg-surface-elevated p-8">
              <h3 className="font-display text-xl font-normal text-content-primary">
                Who we don&apos;t
              </h3>
              <ul className="mt-5 space-y-3">
                {fit.no.map((x) => (
                  <li key={x} className="flex gap-3 text-content-secondary">
                    <span className="mt-1 text-content-secondary">✕</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />
      <FinalCTA />
    </>
  );
}
