import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ResultsHighlights } from "@/components/sections/ResultsHighlights";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "Real outcomes from VoxHorizon partners: booked projects, qualified appointments, and measurable ROI across kitchen & bath, roofing, and decking.",
  alternates: { canonical: "/results" },
};

const cases = [
  {
    name: "Mitch",
    trade: "Remodeling",
    headline: "$170,000 in new jobs in 60 days",
    body: "Mitch came to us tired of shared leads that went nowhere. With an exclusive territory and pre-qualified appointments, he booked six figures of new work in his first two months.",
  },
  {
    name: "Jonathan",
    trade: "Remodeling",
    headline: "100 qualified appointments in 60 days",
    body: "A consistent flow of vetted, pre-scheduled appointments meant Jonathan's calendar stayed full — without him chasing a single cold lead.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Booked projects, not promises"
        description="A sample of what happens when established contractors get exclusive, pre-qualified demand."
      />

      <ResultsHighlights />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <div
                key={c.name}
                className="rounded-3xl border border-surface-border bg-surface-elevated p-8"
              >
                <p className="eyebrow mb-3">{c.trade}</p>
                <h3 className="font-display text-2xl font-bold text-gradient-brand">
                  {c.headline}
                </h3>
                <p className="mt-4 text-content-secondary">{c.body}</p>
                <p className="mt-5 text-sm font-medium uppercase tracking-wider text-content-muted">
                  — {c.name}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-content-muted">
            Results shown are real outcomes from VoxHorizon partners. First names
            are used to protect the exclusivity of their territories. Individual
            results vary by market and capacity.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
