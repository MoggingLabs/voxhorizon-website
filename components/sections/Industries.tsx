import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for high-ticket home improvement"
          description="Proven across the trades where one good project changes the month."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.key}
              href={industry.href}
              className="group rounded-2xl border border-surface-border bg-surface-elevated p-7 transition-colors hover:border-brand-cyan/50"
            >
              <h3 className="font-display text-xl font-semibold text-content-primary">
                {industry.name}
              </h3>
              <p className="mt-3 text-content-secondary">{industry.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-cyan">
                Explore
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
