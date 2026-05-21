import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats } from "@/lib/content";

export function ResultsHighlights() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="The numbers speak quietly, but clearly"
          description="Real outcomes from real partners. First names only — exclusivity cuts both ways."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-surface-border bg-surface-elevated p-7"
            >
              <p className="font-display text-4xl font-bold text-gradient-brand">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-content-secondary">
                {stat.label}
              </p>
              {stat.attribution && (
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-content-muted">
                  — {stat.attribution}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
