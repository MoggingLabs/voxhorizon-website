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
                Built for <span className="text-gradient-brand">high-ticket</span> home
                improvement
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
                className="group block h-full overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40"
              >
                <div className="relative">
                  <Photo
                    src={photosReady ? ind.image : undefined}
                    alt={`${ind.name} project`}
                    label={ind.name}
                    aspect="aspect-[4/3]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-elevated via-surface-elevated/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-content-primary">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-content-secondary">{ind.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-cyan">
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
