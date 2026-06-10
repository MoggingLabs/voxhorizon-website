"use client";

import { m, useScroll, useSpring } from "framer-motion";

/**
 * Thin blue scroll-progress light across the top of the viewport —
 * the one persistent motion signature (after phantom.land's rail).
 */
export function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return <m.div className="vh-rail" style={{ scaleX }} aria-hidden="true" />;
}
