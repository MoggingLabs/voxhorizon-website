import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta, primaryCta } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal className="rounded-[2rem] border border-surface-border bg-surface-elevated px-8 py-16 text-center shadow-card sm:px-16">
          {/* Pip motif — hairline + centered cobalt dot */}
          <div aria-hidden className="mb-8 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-surface-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cobalt" />
            <span className="h-px w-12 bg-surface-border" />
          </div>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-normal leading-[1.1] tracking-tight text-content-primary sm:text-4xl">
            See if your territory is <span className="vh-em">still open</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-lg leading-relaxed text-content-secondary">
            {finalCta.body}
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
