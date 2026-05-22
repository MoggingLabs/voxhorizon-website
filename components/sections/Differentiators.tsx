import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="border-y border-surface-border bg-surface py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why VoxHorizon"
            title={
              <>
                Not another <span className="vh-em">lead vendor</span>
              </>
            }
            description="The difference between buying contacts and being handed booked projects."
          />
        </Reveal>

        {/* Comparison */}
        <Reveal
          delay={0.05}
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border shadow-card md:grid-cols-2"
        >
          <div className="bg-surface-elevated p-8">
            <p className="eyebrow text-content-muted">The shared-lead trap</p>
            <ul className="mt-5 space-y-3.5 text-content-secondary">
              <li className="flex gap-3">
                <span className="select-none text-content-muted" aria-hidden>✕</span>
                Same homeowner sold to five contractors
              </li>
              <li className="flex gap-3">
                <span className="select-none text-content-muted" aria-hidden>✕</span>
                You fight on price
              </li>
              <li className="flex gap-3">
                <span className="select-none text-content-muted" aria-hidden>✕</span>
                Cold, unqualified contacts
              </li>
            </ul>
          </div>
          <div className="bg-surface-elevated p-8">
            <p className="eyebrow">VoxHorizon</p>
            <ul className="mt-5 space-y-3.5 text-content-primary">
              <li className="flex gap-3">
                <span className="select-none text-brand-cobalt" aria-hidden>✓</span>
                Exclusive to you, in your territory
              </li>
              <li className="flex gap-3">
                <span className="select-none text-brand-cobalt" aria-hidden>✓</span>
                Pre-qualified &amp; pre-scheduled
              </li>
              <li className="flex gap-3">
                <span className="select-none text-brand-cobalt" aria-hidden>✓</span>
                Booked appointments, not contacts
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Differentiators grid */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="bg-surface-elevated p-7">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand-cobalt" />
              <h3 className="font-display text-xl font-normal tracking-tight text-content-primary">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-content-secondary">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
