import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A system that fills your calendar — not your spam folder"
          description="Three steps from territory to booked appointment. No junk leads, no shared contacts, no guesswork."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-surface-border bg-surface-elevated p-7"
            >
              <span className="font-display text-5xl font-bold text-gradient-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-content-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-content-secondary">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
