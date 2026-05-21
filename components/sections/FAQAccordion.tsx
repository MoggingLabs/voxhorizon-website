"use client";

import { useState } from "react";
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
    <section className="py-24">
      <Container className="max-w-3xl">
        {withHeading && (
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            align="center"
            className="mb-12"
          />
        )}
        <div className="divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-content-primary">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-brand-cyan transition-transform",
                      isOpen && "rotate-45",
                    )}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 leading-relaxed text-content-secondary">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
