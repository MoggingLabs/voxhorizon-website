import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { finalCta, primaryCta } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(56,176,227,0.25) 0%, transparent 60%)",
            }}
          />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-content-primary sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-content-secondary">
            {finalCta.body}
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
