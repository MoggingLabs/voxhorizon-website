import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="border-y border-surface-border bg-surface-elevated/20 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why VoxHorizon"
            title={
              <>
                Not another <span className="text-gradient-brand">lead vendor</span>
              </>
            }
            description="The difference between buying contacts and being handed booked projects."
          />
        </Reveal>

        {/* Comparison */}
        <Reveal
          delay={0.05}
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border md:grid-cols-2"
        >
          <div className="bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-content-muted">
              Shared lead platforms
            </p>
            <ul className="mt-4 space-y-2.5 text-content-secondary">
              <li className="flex gap-2.5"><span className="text-danger">✕</span> Same lead sold to five contractors</li>
              <li className="flex gap-2.5"><span className="text-danger">✕</span> You fight on price</li>
              <li className="flex gap-2.5"><span className="text-danger">✕</span> Cold, unqualified contacts</li>
            </ul>
          </div>
          <div className="relative bg-surface p-7">
            <div className="absolute inset-0 bg-gradient-brand-subtle" aria-hidden />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                VoxHorizon
              </p>
              <ul className="mt-4 space-y-2.5 text-content-primary">
                <li className="flex gap-2.5"><span className="text-brand-cyan">✓</span> Exclusive to you, in your territory</li>
                <li className="flex gap-2.5"><span className="text-brand-cyan">✓</span> Pre-qualified &amp; pre-scheduled</li>
                <li className="flex gap-2.5"><span className="text-brand-cyan">✓</span> Booked appointments, not contacts</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Differentiators grid */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="bg-surface p-7">
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-brand" />
              <h3 className="font-display text-lg font-semibold text-content-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-content-secondary">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
