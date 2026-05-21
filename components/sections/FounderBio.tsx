import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { founder, photosReady } from "@/lib/content";

export function FounderBio() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal className="grid items-center gap-10 rounded-3xl border border-surface-border bg-surface-elevated p-8 md:grid-cols-[300px_1fr] md:p-12">
          <div className="mx-auto w-full max-w-[300px]">
            <div className="rounded-3xl bg-gradient-brand p-px shadow-glow">
              <Photo
                src={photosReady ? founder.image : undefined}
                alt={founder.name}
                label="Founder"
                aspect="aspect-square"
                className="rounded-[1.45rem]"
                sizes="300px"
              />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">Founder</p>
            <blockquote className="font-display text-2xl font-semibold leading-snug text-content-primary sm:text-[1.75rem]">
              &ldquo;{founder.bio}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-content-muted">
              {founder.name} · {founder.role}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
