import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How VoxHorizon collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Legal · privacy<em>— policy document</em>
        </div>
        <h1>
          Privacy <em>Policy.</em>
        </h1>
        <p className="lede">
          How VoxHorizon collects, uses, and protects your information.{" "}
          <strong>Last updated: 2026. This template is a starting point — have it reviewed by legal
          counsel before launch.</strong>
        </p>
      </section>

      {/* ── BODY ──────────────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">01 / 05 <span>— Information we collect</span></span>
          <em>What we gather when you submit.</em>
        </div>
        <div className="vh-prose">
          <p>
            When you submit our application form, we collect the information you provide: your name,
            company, email, phone number, the market(s) you serve, and your revenue range. We also
            automatically collect basic technical and attribution data (such as referring URL and
            campaign parameters) to understand how visitors find us.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">02 / 05 <span>— How we use your information</span></span>
          <em>What we do with what you give us.</em>
        </div>
        <div className="vh-prose">
          <p>
            We use your information to evaluate fit, contact you about a strategy call, deliver our
            services, and improve our marketing. We may share your details with service providers
            (such as our CRM and email providers) strictly to operate our business.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">03 / 05 <span>— Data retention &amp; security</span></span>
          <em>How long we keep it, and how we protect it.</em>
        </div>
        <div className="vh-prose">
          <p>
            We retain your information for as long as necessary to provide our services and meet
            legal obligations, and we apply reasonable safeguards to protect it.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">04 / 05 <span>— Your rights</span></span>
          <em>Access, correction, deletion.</em>
        </div>
        <div className="vh-prose">
          <p>
            You may request access to, correction of, or deletion of your personal information. To
            make a request, contact us using the details below.
          </p>
        </div>
      </section>

      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">05 / 05 <span>— Contact</span></span>
          <em>Questions about this policy.</em>
        </div>
        <div className="vh-prose">
          <p>
            Questions about this policy? Contact VoxHorizon at{" "}
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
