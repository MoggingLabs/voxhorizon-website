import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/content";

// One brand icon per step — territory mapped, AI engine finds, appointment booked.
const stepIcons = ["territory", "ai", "appointment"];

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
                <span className="vh-em">not your spam folder</span>
              </>
            }
            description="Three steps from territory to booked appointment. No junk leads, no shared contacts, no guesswork."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Mist connecting hairline across the three steps */}
          <div
            aria-hidden
            className="absolute inset-x-12 top-12 hidden h-px bg-surface-border md:block"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.1}
                className="relative rounded-2xl border border-surface-border bg-surface-elevated p-8 shadow-card"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-6xl font-normal leading-none tracking-tight text-brand-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={`/brand/icons/vh-${stepIcons[i % stepIcons.length]}.svg`}
                    alt=""
                    width={28}
                    height={28}
                    aria-hidden
                    className="text-content-primary opacity-80"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-normal tracking-tight text-content-primary">
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
