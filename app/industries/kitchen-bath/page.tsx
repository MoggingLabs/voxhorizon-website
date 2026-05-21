import type { Metadata } from "next";
import { IndustryLayout } from "@/components/sections/IndustryLayout";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Kitchen & Bath Remodeling Leads",
  description:
    "Exclusive, pre-qualified kitchen and bathroom remodeling appointments for established contractors. Booked on your calendar — never shared.",
  alternates: { canonical: "/industries/kitchen-bath" },
};

export default function KitchenBathPage() {
  return (
    <>
      <IndustryLayout
        industry="Kitchen & Bath"
        headline="High-ticket kitchen & bath projects from homeowners ready to invest"
        subhead="We connect established remodelers with local homeowners who are ready to start — pre-qualified for budget, scope, and timeline."
        stats={[
          { value: "53 → 35", label: "leads to remodel appointments in 30 days" },
          { value: "$170,000", label: "in new jobs in 60 days (Mitch)" },
          { value: "8–12", label: "booked projects a month" },
        ]}
        bullets={[
          "Exclusive territory — your leads are never resold to a competitor.",
          "Appointments pre-qualified for high-ticket kitchen and bath budgets.",
          "Vetted and pre-scheduled, so your team only meets serious homeowners.",
          "A predictable pipeline that matches your crew's real capacity.",
        ]}
      />
      <FinalCTA />
    </>
  );
}
