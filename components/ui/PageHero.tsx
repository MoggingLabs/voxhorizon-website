import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Editorial page header — light, serif, with a horizon-line + pip motif. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <Container className="text-center">
        <Reveal>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-normal leading-[1.05] tracking-tight text-content-primary sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-content-secondary">{description}</p>
          )}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2" aria-hidden>
            <span className="h-px w-16 bg-surface-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cobalt" />
            <span className="h-px w-16 bg-surface-border" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
