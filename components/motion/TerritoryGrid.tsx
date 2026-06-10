"use client";

import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { territoryCells, territoryCounts, type CellState } from "@/lib/content";

const LABEL: Record<CellState, string> = {
  claimed: "Claimed",
  open: "Open",
  "open-hot": "Closing · 48h",
};

/**
 * The live territory grid, now interactive: hovering a cell scales it up and
 * drives a terminal-style readout line under the grid. The grid itself is a
 * single described image for assistive tech (96 individually focusable
 * decorative cells would be keyboard noise — the open-zip table next to it
 * is the accessible, actionable view of the same data).
 */
export function TerritoryGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div>
      <div
        className="vh-grid vh-grid--live"
        role="img"
        aria-label={`Territory grid: ${territoryCounts.claimed} claimed, ${territoryCounts.open} open, and ${territoryCounts.hot} closing within 48 hours, of ${territoryCounts.total} zip codes.`}
        onMouseLeave={() => setHovered(null)}
      >
        {territoryCells.map((state, i) => (
          <m.div
            key={i}
            className={`cell ${state}`}
            onMouseEnter={() => setHovered(i)}
            whileHover={reduced ? undefined : { scale: 1.4 }}
            transition={{ duration: 0.12 }}
          />
        ))}
      </div>
      <div className="vh-grid__readout" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          {hovered === null ? (
            <m.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <span className="p">vh@desk</span>:~$ hover a cell<span className="cursor" />
            </m.span>
          ) : (
            <m.span
              key={hovered}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <span className="p">vh@desk</span>:~$ cell {String(hovered + 1).padStart(2, "0")} ·{" "}
              <span className={`s ${territoryCells[hovered]}`}>
                {LABEL[territoryCells[hovered]].toUpperCase()}
              </span>
            </m.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
