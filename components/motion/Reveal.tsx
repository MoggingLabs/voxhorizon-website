"use client";

import { m } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger offset in seconds. */
  delay?: number;
  className?: string;
};

/**
 * Scroll-entrance wrapper: fades up 14px when the element scrolls into view.
 * Children are server-rendered and pass through the client boundary.
 *
 * Because whileInView serializes `opacity: 0` into the SSR HTML, NEVER wrap
 * above-the-fold content (hero H1/lede) in this — below-the-fold only.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.6, 0.35, 1], delay }}
    >
      {children}
    </m.div>
  );
}
