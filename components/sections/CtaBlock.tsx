import Link from "next/link";
import { cohort } from "@/lib/content";

type Cta = { label: string; href: string };

/** Cohort urgency line — one fact, rendered on every funnel page via CtaBlock. */
export function UrgencyMeta() {
  return (
    <div className="meta">
      <span>
        <em>
          {cohort.slotsOpen} of {cohort.slotsTotal}
        </em>{" "}
        {cohort.quarter} slots open
      </span>
      <span>closes {cohort.closesOn}</span>
    </div>
  );
}

function CtaLink({ cta, kind }: { cta: Cta; kind: "p" | "g" }) {
  const label = kind === "p" ? `[ ${cta.label} ]` : cta.label;
  if (cta.href.startsWith("mailto:")) {
    return (
      <a href={cta.href} className={kind}>
        {label}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={kind}>
      {label}
    </Link>
  );
}

type CtaBlockProps = {
  /** Amber eyebrow; defaults to the live cohort urgency line. */
  eyebrow?: string;
  /** Headline content (rendered inside the closing h2). */
  children: React.ReactNode;
  primary: Cta;
  secondary?: Cta;
};

/**
 * Standardized closing CTA section: eyebrow → headline → segmented CTA pair
 * → cohort urgency meta. Every page closes with one of these so the funnel
 * always has a next step and the scarcity numbers stay consistent.
 */
export function CtaBlock({ eyebrow, children, primary, secondary }: CtaBlockProps) {
  return (
    <div className="vh-closing">
      <div className="eye">
        {eyebrow ?? `One operator per zip · ${cohort.quarter} closes ${cohort.closesOn}`}
      </div>
      <h2>{children}</h2>
      <div className="vh-cta">
        <CtaLink cta={primary} kind="p" />
        {secondary && <CtaLink cta={secondary} kind="g" />}
      </div>
      <UrgencyMeta />
    </div>
  );
}
