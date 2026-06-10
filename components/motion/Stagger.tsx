"use client";

import { m, type Variants } from "framer-motion";

const parentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.6, 0.35, 1] },
  },
};

/**
 * Staggered list entrance. Wrap the list in <Stagger>, each row/card in
 * <StaggerItem>. Same SSR caveat as Reveal: below-the-fold only.
 */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={parentVariants}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div className={className} variants={itemVariants}>
      {children}
    </m.div>
  );
}
