"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * Single motion context for the whole app, mounted once in app/layout.tsx.
 *
 * - LazyMotion + `m.` components keep the core bundle small (~5KB) versus
 *   the full `motion.` API; `strict` throws if anyone imports `motion.`
 *   directly so the discipline holds.
 * - MotionConfig reducedMotion="user" disables transform/layout animations
 *   for users with prefers-reduced-motion; components with non-transform
 *   behavior (count-ups, cycling feeds) additionally check
 *   useReducedMotion().
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
