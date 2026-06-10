import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ApplyFlow } from "@/components/forms/ApplyFlow";

export const metadata: Metadata = {
  title: "Apply for a strategy call",
  description:
    "See if your territory is open. Tell us about your business and book a strategy call with VoxHorizon.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <div className="v2">
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="vh-pintro">
        <div className="crumb">
          Apply · operator desk<em>— 48-hour response, every applicant</em>
        </div>
        <h1>
          See if your territory
          <br />
          is <em>open.</em>
        </h1>
        <p className="lede">
          Answer a few quick questions. If we&#8217;re a fit, you&#8217;ll book a strategy call on the next
          step. One operator per zip — <strong>if your zip is claimed, we tell you straight.</strong>
        </p>
      </section>

      {/* ── 01 — THE FORM ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 01 <span>— Application form</span>
          </span>
          <em>30 kept appointments in 90 days — or we work for free.</em>
        </div>
        {/* useSearchParams (zip deep-link) requires a Suspense boundary on a static page */}
        <Suspense fallback={null}>
          <ApplyFlow />
        </Suspense>

        {/* Fallback path for visitors not ready to apply */}
        <div className="vh-applyfall">
          <span className="t">Not ready to apply?</span>
          <Link href="/faq">Read the FAQ →</Link>
          <Link href="/system">How the system works →</Link>
          <a href="mailto:operators@voxhorizon.io">operators@voxhorizon.io</a>
        </div>
      </section>
    </div>
  );
}
