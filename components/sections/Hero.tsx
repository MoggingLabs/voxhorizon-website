"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { hero, press, primaryCta, secondaryCta } from "@/lib/content";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // A single, very subtle scroll fade on the visual column — no parallax.
  const visualOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduce ? 1 : 0.55],
  );

  return (
    <section ref={ref} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        {/* Left: editorial copy */}
        <motion.div
          className="lg:col-span-7"
          variants={group}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="eyebrow">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl font-display text-[2.9rem] font-normal leading-[1.02] tracking-tight text-content-primary sm:text-6xl"
          >
            {hero.headline}{" "}
            <span className="vh-em">{hero.headlineAccent}</span>{" "}
            <span className="text-content-secondary">{hero.headlineRest}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-content-secondary"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          </motion.div>

          {/* Featured in press row */}
          <motion.div variants={item} className="mt-12">
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-content-muted">
              Featured in
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
              {press.slice(0, 3).map((p) => (
                <span key={p.name} className="text-sm text-content-secondary">
                  {p.name}
                </span>
              ))}
              <span className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-content-muted">
                + 400 news sites
              </span>
            </div>
          </motion.div>

          {/* Pip motif — the brand signature */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-2"
            aria-hidden
          >
            <span className="h-px w-16 bg-surface-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cobalt" />
            <span className="h-px w-16 bg-surface-border" />
          </motion.div>
        </motion.div>

        {/* Right: framed editorial visual + floating proof card */}
        <motion.div
          className="relative lg:col-span-5"
          style={{ opacity: visualOpacity }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          {/* Framed photo: white, Mist border, soft card elevation */}
          <div className="rounded-3xl border border-surface-border bg-surface-elevated p-2 shadow-card">
            <Photo
              aspect="aspect-[4/5]"
              label="Your next project →"
              alt="Recent remodel by a VoxHorizon partner"
              className="rounded-2xl"
              priority
            />
          </div>

          {/* Floating white proof card */}
          <div className="absolute -bottom-6 -left-6 w-[15.5rem] rounded-2xl border border-surface-border bg-surface-elevated p-5 shadow-card">
            <p className="font-display text-4xl font-normal leading-none text-brand-cobalt">
              <AnimatedNumber value={170000} prefix="$" />
            </p>
            <p className="mt-2 text-sm text-content-secondary">
              in new jobs · first 60 days — Mitch
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
