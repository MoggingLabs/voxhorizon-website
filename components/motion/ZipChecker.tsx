"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { openZips } from "@/lib/content";

type Result =
  | { kind: "open"; zip: string; city: string; abbr: string; applicants: number; hot: boolean }
  | { kind: "claimed"; zip: string }
  | { kind: "invalid" };

/**
 * The signature device: a live territory check in the hero. Open zips
 * resolve against the published open-territory list; anything else in a
 * valid zip format reads as claimed/waitlist — which is honest: if it's
 * not on the open list, it isn't open. The CTA carries the zip into the
 * application either way.
 */
export function ZipChecker() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function check(ev: React.FormEvent) {
    ev.preventDefault();
    const zip = value.trim();
    if (!/^\d{5}$/.test(zip)) {
      setResult({ kind: "invalid" });
      return;
    }
    const match = openZips.find((z) => z.zip === zip);
    if (match) {
      setResult({
        kind: "open",
        zip: match.zip,
        city: match.city,
        abbr: match.abbr,
        applicants: match.applicants,
        hot: Boolean(match.hot),
      });
    } else {
      setResult({ kind: "claimed", zip });
    }
  }

  return (
    <div className="vh-zipcheck">
      <span className="k">Check your territory</span>
      <form onSubmit={check}>
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="00000"
          aria-label="Your zip code"
          value={value}
          onChange={(e) => {
            setValue(e.target.value.replace(/\D/g, ""));
            setResult(null);
          }}
        />
        <button type="submit">Check</button>
      </form>
      <AnimatePresence mode="wait">
        {result && (
          <m.div
            key={result.kind + ("zip" in result ? result.zip : "")}
            className="vh-zipcheck__result"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="status"
          >
            {result.kind === "open" && (
              <>
                <span className="s open">
                  {result.zip} · {result.city}, {result.abbr} — OPEN
                </span>
                {result.applicants > 0
                  ? ` with ${result.applicants} applicant${result.applicants > 1 ? "s" : ""} in queue${result.hot ? ", closing within 48 hours" : ""}. `
                  : ". "}
                <Link href={`/apply?zip=${result.zip}`}>Claim this zip</Link>
              </>
            )}
            {result.kind === "claimed" && (
              <>
                <span className="s claimed">{result.zip} — not on the open list.</span>{" "}
                It&#8217;s either claimed or not yet served. We&#8217;ll confirm on the call and
                hold your place if it frees up.{" "}
                <Link href={`/apply?zip=${result.zip}`}>Join the waitlist</Link>
              </>
            )}
            {result.kind === "invalid" && <>Enter a five-digit zip code.</>}
          </m.div>
        )}
      </AnimatePresence>
      {!result && (
        <div className="vh-zipcheck__hint">
          One operator per zip code. If yours is open, you have 48 hours.
        </div>
      )}
    </div>
  );
}
