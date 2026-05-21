import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[680px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,176,227,0.5), rgba(46,42,140,0.2) 55%, transparent 75%)",
        }}
      />
      <Container className="text-center">
        <Reveal>
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-content-primary sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-content-secondary">{description}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
