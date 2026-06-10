"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { feedEvents, type FeedEvent } from "@/lib/content";

function icClass(kind: FeedEvent["kind"]) {
  return kind === "K" ? "vh-row__ic kept" : kind === "$" ? "vh-row__ic sign" : "vh-row__ic";
}

type LiveFeedProps = {
  events?: FeedEvent[];
  /** Rows visible at once. */
  limit?: number;
  /** Rotate a new event in every few seconds (off under reduced motion). */
  cycle?: boolean;
};

/**
 * The desk feed. SSR renders the first `limit` events; on the client a new
 * event fades in at the top every 6 seconds, like a live log. Cycling stops
 * entirely under prefers-reduced-motion.
 */
export function LiveFeed({ events = feedEvents, limit = 4, cycle = true }: LiveFeedProps) {
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!cycle || reduced) return;
    const id = setInterval(() => {
      setOffset((o) => (o + 1) % events.length);
    }, 6000);
    return () => clearInterval(id);
  }, [cycle, reduced, events.length]);

  const visible = Array.from(
    { length: Math.min(limit, events.length) },
    (_, i) => events[(events.length - offset + i) % events.length],
  );

  return (
    <div>
      <AnimatePresence initial={false}>
        {visible.map((event) => (
          <m.div
            key={event.title}
            className="vh-row"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className={icClass(event.kind)}>{event.kind}</span>
            <div>
              <div className="vh-row__title">{event.title}</div>
              <div className="vh-row__sub">{event.sub}</div>
            </div>
            <span className="vh-row__time">{event.time}</span>
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
