"use client";

import { useRef, useState } from "react";
import { QualifyingForm } from "@/components/forms/QualifyingForm";
import { BookingEmbed } from "@/components/booking/BookingEmbed";
import { getAttribution } from "@/lib/utm";
import { track } from "@/lib/analytics";
import type { LeadInput, LeadResult } from "@/lib/types/lead";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto mb-8 flex max-w-xs items-center justify-center gap-3">
        <Dot active label="1" />
        <span className="h-px w-10 bg-surface-border" />
        <Dot active={step === "booking"} label="2" />
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

function Dot({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
        active
          ? "border-brand-cobalt bg-brand-cobalt text-white"
          : "border-surface-border bg-surface-elevated text-content-muted",
      )}
    >
      {label}
    </span>
  );
}
