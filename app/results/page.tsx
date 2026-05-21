import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ResultsHighlights } from "@/components/sections/ResultsHighlights";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "Real outcomes from VoxHorizon partners: booked projects, qualified appointments, and measurable ROI across kitchen & bath, roofing, and decking.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Booked projects, not promises"
        description="A sample of what happens when established contractors get exclusive, pre-qualified demand."
      />
      <ResultsHighlights />
      <FinalCTA />
    </>
  );
}
