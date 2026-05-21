import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ApplyFlow } from "@/components/forms/ApplyFlow";

export const metadata: Metadata = {
  title: "Apply for a strategy call",
  description:
    "See if your territory is open. Tell us about your business and book a strategy call with VoxHorizon.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply"
        title="See if your territory is open"
        description="Answer a few quick questions. If we're a fit, you'll book a strategy call on the next step."
      />
      <section className="pb-24">
        <Container>
          <ApplyFlow />
        </Container>
      </section>
    </>
  );
}
