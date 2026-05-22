"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FAQAccordion({
  items,
  withHeading = true,
}: {
  items: FaqItem[];
  withHeading?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        {withHeading && (
          <SectionHeading eyebrow="FAQ" title="Questions, answered" align="center" className="mb-12" />
        )}
        <div className="divide-y divide-surface-border overflow-hidden rounded-3xl border border-surface-border bg-surface-elevated shadow-card">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-normal leading-snug text-content-primary">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-brand-cobalt transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 font-sans leading-relaxed text-content-secondary">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
