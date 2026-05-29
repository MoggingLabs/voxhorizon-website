import type { Metadata } from "next";
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
          Answer a few quick questions. If we’re a fit, you’ll book a strategy call on the next
          step. One operator per zip — <strong>if your zip is claimed, we tell you straight.</strong>
        </p>
      </section>

      {/* ── 01 — THE FORM ─────────────────────────────────── */}
      <section className="vh-sect">
        <div className="vh-seclabel">
          <span className="id">
            01 / 01 <span>— Application form</span>
          </span>
          <em>Plain fields, no warm-up dance.</em>
        </div>
        <ApplyFlow />
      </section>
    </>
  );
}
