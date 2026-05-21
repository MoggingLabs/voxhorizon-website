import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the VoxHorizon website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="pb-24">
        <Container className="max-w-3xl">
          <article className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-brand-cyan">
            <p className="text-sm text-content-muted">
              Last updated: {new Date().getFullYear()}. This template is a
              starting point — have it reviewed by legal counsel before launch.
            </p>

            <h2>Acceptance of terms</h2>
            <p>
              By accessing or using the {company.name} website, you agree to these
              Terms of Service. If you do not agree, please do not use the site.
            </p>

            <h2>Use of the site</h2>
            <p>
              You agree to use this site only for lawful purposes and not to
              submit false information through our forms. We reserve the right to
              decline or discontinue service at our discretion.
            </p>

            <h2>No guarantee of results</h2>
            <p>
              Outcomes described on this site reflect the experiences of specific
              partners and are not a guarantee of future results. Individual
              results vary by market, capacity, and execution.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content, branding, and materials on this site are the property
              of {company.name} and may not be reproduced without permission.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact {company.name} at{" "}
              <a href="mailto:diogosilvaenterprise@gmail.com">
                diogosilvaenterprise@gmail.com
              </a>
              .
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
