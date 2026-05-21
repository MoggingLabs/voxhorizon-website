import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="border-y border-surface-border bg-surface-elevated/30 py-24">
      <Container>
        <SectionHeading
          eyebrow="Why VoxHorizon"
          title="Not another lead vendor"
          description="The difference between buying contacts and being handed booked projects."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="bg-surface p-7">
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-brand" />
              <h3 className="font-display text-lg font-semibold text-content-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-content-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
