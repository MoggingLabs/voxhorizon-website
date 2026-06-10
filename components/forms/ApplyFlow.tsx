"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { QualifyingForm } from "@/components/forms/QualifyingForm";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { openZips } from "@/lib/content";
import { getAttribution } from "@/lib/utm";
import { track } from "@/lib/analytics";
import type { LeadInput, LeadResult } from "@/lib/types/lead";

type Step = "form" | "booking";

export function ApplyFlow() {
  const searchParams = useSearchParams();
  const zipParam = (searchParams.get("zip") ?? "").trim().slice(0, 10);
  const zipInfo = openZips.find((z) => z.zip === zipParam);

  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>();
  const [bookingUrl, setBookingUrl] = useState("");
  const [name, setName] = useState("");
  const requestId = useRef<string>(
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  );

  async function onSubmit(values: LeadInput): Promise<LeadResult> {
    setIsSubmitting(true);
    setFieldErrors(undefined);
    track("form_submit");
    const attribution = getAttribution();
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: attribution.sourcePage,
          referrer: attribution.referrer,
          utm: attribution.utm,
          clientRequestId: requestId.current,
        }),
      });
      const data = (await res.json()) as LeadResult;
      if (data.ok) {
        track("lead_created");
        setName(values.fullName);
        setBookingUrl(data.bookingUrl);
        setStep("booking");
        track("booking_view");
      } else {
        setFieldErrors({
          ...(data.fieldErrors ?? {}),
          ...(data.error ? { form: data.error } : {}),
        });
      }
      return data;
    } catch {
      const failure: LeadResult = {
        ok: false,
        error: "Network error. Please try again.",
      };
      setFieldErrors({ form: failure.ok ? "" : failure.error });
      return failure;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      {/* Zip context — carried in from the territory page's open-zip rows */}
      {zipParam && (
        <div className="vh-zipctx">
          <span className="p">vh@desk</span>:~$ applying for zip <em>{zipParam}</em>
          {zipInfo ? ` · ${zipInfo.city}, ${zipInfo.abbr}` : ""} ·{" "}
          {zipInfo ? (zipInfo.hot ? "closing 48h" : "open") : "status checked on the call"}
        </div>
      )}

      {/* Progress */}
      <div
        className="vh-pane-head"
        style={{ borderBottom: "1px solid var(--hr)", marginBottom: 28 }}
      >
        <span>
          Step{" "}
          <em style={{ color: "var(--c-cyan)" }}>{step === "booking" ? "02" : "01"}</em> / 02
        </span>
        <span>{step === "booking" ? "Book your call" : "Qualify"}</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === "form" ? (
          <m.div
            key="form"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <QualifyingForm
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              fieldErrors={fieldErrors}
            />
          </m.div>
        ) : (
          <m.div
            key="booking"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <BookingEmbed bookingUrl={bookingUrl} name={name} />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
