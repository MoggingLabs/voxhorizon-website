import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about VoxHorizon: lead exclusivity, qualification, pricing approach, guarantees, and how fast you can expect booked appointments.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything contractors ask before partnering with us."
      />
      <FAQAccordion items={faqs} withHeading={false} />
      <FinalCTA />
    </>
  );
}
