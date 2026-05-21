import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A system that fills your calendar,{" "}
                <span className="text-gradient-brand">not your spam folder</span>
              </>
            }
            description="Three steps from territory to booked appointment. No junk leads, no shared contacts, no guesswork."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* connecting hairline across the three steps */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent md:block"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.1}
                className="group relative rounded-2xl border border-surface-border bg-surface-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40"
              >
                <span className="font-display text-5xl font-bold text-gradient-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-content-primary">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-content-secondary">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
