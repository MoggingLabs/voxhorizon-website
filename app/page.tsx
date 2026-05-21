import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ResultsHighlights } from "@/components/sections/ResultsHighlights";
import { Industries } from "@/components/sections/Industries";
import { Differentiators } from "@/components/sections/Differentiators";
import { FounderBio } from "@/components/sections/FounderBio";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqs } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <ResultsHighlights />
      <Industries />
      <Differentiators />
      <FounderBio />
      <FAQAccordion items={faqs.slice(0, 4)} />
      <FinalCTA />
    </>
  );
}
