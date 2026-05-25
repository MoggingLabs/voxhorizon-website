"use client";

import { useRef, useState } from "react";
import { QualifyingForm } from "@/components/forms/QualifyingForm";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { getAttribution } from "@/lib/utm";
import { track } from "@/lib/analytics";
import type { LeadInput, LeadResult } from "@/lib/types/lead";

type Step = "form" | "booking";

export function ApplyFlow() {
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

      {step === "form" ? (
        <QualifyingForm
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          fieldErrors={fieldErrors}
        />
      ) : (
        <BookingEmbed bookingUrl={bookingUrl} name={name} />
      )}
    </div>
  );
}
