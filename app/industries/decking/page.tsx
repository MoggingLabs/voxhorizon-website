import type { Metadata } from "next";
import { IndustryLayout } from "@/components/sections/IndustryLayout";

export const metadata: Metadata = {
  title: "Decking & Outdoor Living Leads",
  description:
    "Exclusive, pre-qualified decking and outdoor-living appointments for established builders. Booked on your calendar — never shared.",
  alternates: { canonical: "/industries/decking" },
};

export default function DeckingPage() {
  return (
    <IndustryLayout
      slug="decking"
      industry="Decking"
      image="/images/industry-decking.jpg"
      headline="Outdoor-living projects from motivated homeowners"
      subhead="Pre-qualified decking and outdoor-living appointments from homeowners in your area who are ready to build."
      stats={[
        { value: "25 → 17", label: "leads to decking appointments in 1 week" },
        { value: "Exclusive", label: "one builder per market" },
        { value: "8–12", label: "booked projects a month" },
      ]}
      bullets={[
        "Outdoor-living projects from homeowners ready to invest this season.",
        "Pre-qualified for budget, scope, and timeline before they reach you.",
        "Exclusive territory — never shared with another deck builder.",
        "A consistent pipeline you can plan your build schedule around.",
      ]}
    />
  );
}
