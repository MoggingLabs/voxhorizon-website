import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryCta } from "@/lib/content";

export type IndustryStat = { value: string; label: string };

export function IndustryLayout({
  industry,
  headline,
  subhead,
  stats,
  bullets,
}: {
  industry: string;
  headline: string;
  subhead: string;
  stats: IndustryStat[];
  bullets: string[];
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(56,176,227,0.5) 0%, transparent 70%)",
          }}
        />
        <Container className="text-center">
          <p className="eyebrow mb-4">{industry}</p>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-content-primary sm:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-content-secondary">
            {subhead}
          </p>
          <div className="mt-8">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-surface-border bg-surface-elevated p-7 text-center"
              >
                <p className="font-display text-4xl font-bold text-gradient-brand">{s.value}</p>
                <p className="mt-2 text-sm text-content-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-content-primary sm:text-3xl">
            Why contractors choose us for {industry.toLowerCase()}
          </h2>
          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-content-secondary">
                <span className="mt-1 shrink-0 text-brand-cyan">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
