import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero, primaryCta, secondaryCta } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient glow + horizon motif echoing the logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,176,227,0.5) 0%, rgba(46,42,140,0.25) 45%, transparent 70%)",
        }}
      />
      <Container className="relative text-center">
        <p className="eyebrow mb-5 animate-fade-up">{hero.eyebrow}</p>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-content-primary animate-fade-up sm:text-6xl">
          {hero.headline}{" "}
          <span className="text-gradient-brand">{hero.headlineAccent}</span>{" "}
          {hero.headlineRest}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-content-secondary animate-fade-up">
          {hero.subhead}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary" size="lg">
            {secondaryCta.label}
          </Button>
        </div>
        <p className="mt-8 text-sm text-content-muted animate-fade-up">{hero.trustLine}</p>
      </Container>
    </section>
  );
}
