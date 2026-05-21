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
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient aurora + horizon motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute left-1/2 top-[-12%] h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,176,227,0.55), rgba(46,42,140,0.25) 55%, transparent 75%)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.34, 0.46, 0.34] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 top-[58%] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-12">
        {/* Left: editorial copy */}
        <motion.div
          className="lg:col-span-7"
          variants={group}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-elevated/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-content-secondary backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-content-primary sm:text-6xl"
          >
            {hero.headline}{" "}
            <span className="text-gradient-brand">{hero.headlineAccent}</span>{" "}
            <span className="text-content-secondary">{hero.headlineRest}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-content-secondary"
          >
            {hero.subhead}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-content-muted">
              Featured in
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
              {press.slice(0, 3).map((p) => (
                <span key={p.name} className="text-sm font-medium text-content-secondary">
                  {p.name}
                </span>
              ))}
              <span className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-content-muted">
                + 400 news sites
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: framed visual + floating proof card */}
        <motion.div
          className="relative lg:col-span-5"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          {/* Gradient-bordered frame */}
          <div className="rounded-[1.75rem] bg-gradient-brand p-px shadow-glow-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-surface-elevated">
              {/*
                REAL PHOTO SLOT — drop a wide remodel shot at /public/images/hero.jpg
                and replace this block with:
                  <Image src="/images/hero.jpg" alt="Kitchen remodel by a VoxHorizon partner" fill priority className="object-cover" />
              */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 0%, rgba(56,176,227,0.35), transparent 55%), radial-gradient(120% 90% at 0% 100%, rgba(46,42,140,0.5), transparent 60%), #0d1322",
                }}
              />
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-[0.18em] text-content-muted">
                Your next project →
              </span>
            </div>
          </div>

          {/* Floating glass proof card */}
          <motion.div
            style={{ y: cardY }}
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-[15.5rem] rounded-2xl border border-surface-border bg-surface-elevated/85 p-5 shadow-glow backdrop-blur-md"
          >
            <p className="font-display text-3xl font-bold text-gradient-brand">
              <AnimatedNumber value={170000} prefix="$" />
            </p>
            <p className="mt-1 text-sm text-content-secondary">
              in new jobs · first 60 days
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-content-muted">
              — Mitch, remodeler
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
