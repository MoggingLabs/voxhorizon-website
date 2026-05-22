import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { industries, photosReady } from "@/lib/content";

export function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title={
              <>
                Built for <span className="vh-em">high-ticket</span> home improvement
              </>
            }
            description="Proven across the trades where one good project changes the month."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.key} delay={i * 0.08}>
              <Link
                href={ind.href}
                className="group block h-full overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated transition-colors duration-300 hover:border-brand-cobalt hover:shadow-card"
              >
                <Photo
                  src={photosReady ? ind.image : undefined}
                  alt={`${ind.name} project`}
                  label={ind.name}
                  aspect="aspect-[4/3]"
                />
                <div className="border-t border-surface-border p-6">
                  <h3 className="font-display text-2xl font-normal tracking-tight text-content-primary">
                    {ind.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-content-secondary">{ind.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-brand-cobalt">
                    Explore
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
