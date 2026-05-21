import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VoxHorizon collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24">
        <Container className="max-w-3xl">
          <article className="prose prose-invert max-w-none prose-headings:font-display prose-a:text-brand-cyan">
            <p className="text-sm text-content-muted">
              Last updated: {new Date().getFullYear()}. This template is a
              starting point — have it reviewed by legal counsel before launch.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit our application form, we collect the information you
              provide: your name, company, email, phone number, the market(s) you
              serve, and your revenue range. We also automatically collect basic
              technical and attribution data (such as referring URL and campaign
              parameters) to understand how visitors find us.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use your information to evaluate fit, contact you about a strategy
              call, deliver our services, and improve our marketing. We may share
              your details with service providers (such as our CRM and email
              providers) strictly to operate our business.
            </p>

            <h2>Data retention &amp; security</h2>
            <p>
              We retain your information for as long as necessary to provide our
              services and meet legal obligations, and we apply reasonable
              safeguards to protect it.
            </p>

            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information. To make a request, contact us using the
              details below.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Contact {company.name} at{" "}
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
