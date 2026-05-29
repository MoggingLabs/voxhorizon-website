import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the VoxHorizon website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Legal · terms<em>— service agreement</em>
        </div>
        <h1>
          Terms of <em>Service.</em>
        </h1>
        <p className="lede">
          The terms governing your use of the VoxHorizon website.{" "}
          <strong>Last updated: 2026. This template is a starting point — have it reviewed by legal
          counsel before launch.</strong>
        </p>
      </section>

      {/* ── BODY ──────────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">01 / 05 <span>— Acceptance of terms</span></span>
          <em>Using the site means you agree.</em>
        </div>
        <div className="vh-prose">
          <p>
            By accessing or using the VoxHorizon website, you agree to these Terms of Service. If
            you do not agree, please do not use the site.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">02 / 05 <span>— Use of the site</span></span>
          <em>Lawful purposes only.</em>
        </div>
        <div className="vh-prose">
          <p>
            You agree to use this site only for lawful purposes and not to submit false information
            through our forms. We reserve the right to decline or discontinue service at our
            discretion.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 05 <span>— No guarantee of results</span></span>
          <em>Results reflect specific partners, not guarantees.</em>
        </div>
        <div className="vh-prose">
          <p>
            Outcomes described on this site reflect the experiences of specific partners and are not
            a guarantee of future results. Individual results vary by market, capacity, and
            execution.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">04 / 05 <span>— Intellectual property</span></span>
          <em>Our content, our mark, our system.</em>
        </div>
        <div className="vh-prose">
          <p>
            All content, branding, and materials on this site are the property of VoxHorizon and
            may not be reproduced without permission.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">05 / 05 <span>— Contact</span></span>
          <em>Questions about these terms.</em>
        </div>
        <div className="vh-prose">
          <p>
            Questions about these terms? Contact VoxHorizon at{" "}
            <a href="mailto:diogosilvaenterprise@gmail.com" className="vh-accent">
              diogosilvaenterprise@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
