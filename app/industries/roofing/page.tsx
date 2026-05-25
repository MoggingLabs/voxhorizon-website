import type { Metadata } from "next";
import { IndustryLayout } from "@/components/sections/IndustryLayout";

export const metadata: Metadata = {
  title: "Roofing Leads & Appointments",
  description:
    "Exclusive, pre-qualified re-roof and repair appointments at volume for established roofing contractors. Booked on your calendar — never shared.",
  alternates: { canonical: "/industries/roofing" },
};

export default function RoofingPage() {
  return (
    <IndustryLayout
      slug="roofing"
      industry="Roofing"
      image="/images/industry-roofing.jpg"
      headline="Re-roof and repair appointments at volume"
      subhead="A steady flow of pre-qualified roofing appointments from homeowners in your exact service area — ready for budget and timeline."
      stats={[
        { value: "263 → 134", label: "leads to reroof appointments in 3 months" },
        { value: "Exclusive", label: "one roofer per market" },
        { value: "8–12", label: "booked projects a month" },
      ]}
      bullets={[
        "Volume re-roof and repair appointments without the shared-lead race to the bottom.",
        "Pre-qualified for budget, urgency, and homeowner intent.",
        "Exclusive to your company in your territory.",
        "Built to keep crews busy through the season.",
      ]}
    />
  );
}
