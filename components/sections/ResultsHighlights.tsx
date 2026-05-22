import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { stats, photosReady } from "@/lib/content";

type CaseStudy = {
  name: string;
  trade: string;
  headline: React.ReactNode;
  body: string;
  image: string;
};

const cases: CaseStudy[] = [
  {
    name: "Mitch",
    trade: "Remodeling",
    headline: (
      <>
        $170,000 in new jobs, <span className="vh-em">in sixty days</span>
      </>
    ),
    body: "Tired of shared leads that went nowhere. With an exclusive territory and pre-qualified appointments, he booked six figures of new work in his first two months.",
    image: "/images/results-1.jpg",
  },
  {
    name: "Jonathan",
    trade: "Remodeling",
    headline: (
      <>
        100 qualified appointments, <span className="vh-em">calendar full</span>
      </>
    ),
    body: "A steady flow of vetted, pre-scheduled appointments kept his calendar full — without chasing a single cold lead.",
    image: "/images/results-2.jpg",
  },
];

export function ResultsHighlights() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Results"
            title={
              <>
                The numbers speak quietly,{" "}
                <span className="vh-em">but clearly</span>
              </>
            }
            description="Real outcomes from real partners. First names only — exclusivity cuts both ways."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="rounded-2xl border border-surface-border bg-surface-elevated p-7 shadow-card"
            >
              <p className="font-display text-4xl font-normal tracking-tight text-brand-cobalt">
                {s.count != null ? (
                  <AnimatedNumber value={s.count} prefix={s.prefix} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-content-secondary">{s.label}</p>
              {s.attribution && (
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-content-muted">
                  — {s.attribution}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.1}
              className="overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <Photo
                src={photosReady ? c.image : undefined}
                alt={`${c.trade} project — ${c.name}`}
                label={c.trade}
                aspect="aspect-[16/10]"
              />
              <div className="p-7">
                <h3 className="font-display text-2xl font-normal leading-snug tracking-tight text-content-primary">
                  {c.headline}
                </h3>
                <p className="mt-3 leading-relaxed text-content-secondary">{c.body}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-content-muted">
                  — {c.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-content-muted">
          Results shown are real outcomes from VoxHorizon partners. First names protect
          the exclusivity of their territories. Individual results vary by market and capacity.
        </p>
      </Container>
    </section>
  );
}
