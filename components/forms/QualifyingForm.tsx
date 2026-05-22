"use client";

import { useState } from "react";
import { ButtonAction } from "@/components/ui/Button";
import {
  MARKET_SEGMENTS,
  REVENUE_TIERS,
  MARKET_LABELS,
  REVENUE_TIER_LABELS,
  type LeadInput,
  type MarketSegment,
  type RevenueTier,
  type QualifyingFormProps,
} from "@/lib/types/lead";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-surface-border bg-surface-elevated px-4 py-3 text-content-primary placeholder:text-content-muted focus:border-brand-cobalt focus:outline-none focus:ring-1 focus:ring-brand-cobalt";

function ErrorText({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 text-sm text-danger">{msg}</p>;
}

export function QualifyingForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  fieldErrors,
}: QualifyingFormProps) {
  const [markets, setMarkets] = useState<MarketSegment[]>(
    defaultValues?.markets ?? [],
  );
  const [revenueTier, setRevenueTier] = useState<RevenueTier | "">(
    defaultValues?.revenueTier ?? "",
  );
  const [fullName, setFullName] = useState(defaultValues?.fullName ?? "");
  const [company, setCompany] = useState(defaultValues?.company ?? "");
  const [email, setEmail] = useState(defaultValues?.email ?? "");
  const [phone, setPhone] = useState(defaultValues?.phone ?? "");
  const [honeypot, setHoneypot] = useState("");
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

  const errors = { ...localErrors, ...fieldErrors };

  function toggleMarket(m: MarketSegment) {
    setMarkets((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (markets.length === 0) e.markets = "Select at least one market.";
    if (!revenueTier) e.revenueTier = "Select your revenue range.";
    if (fullName.trim().length < 2) e.fullName = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = "Enter a valid email.";
    if (phone.trim().length < 7) e.phone = "Enter a valid phone number.";
    setLocalErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate() || !revenueTier) return;
    const values: LeadInput = {
      markets,
      revenueTier,
      fullName: fullName.trim(),
      company: company.trim() || undefined,
      email: email.trim(),
      phone: phone.trim(),
      honeypot,
    };
    await onSubmit(values);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl rounded-3xl border border-surface-border bg-surface-elevated p-6 sm:p-8"
      noValidate
    >
      {/* Markets */}
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium text-content-primary">
          Which market(s) do you serve?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {MARKET_SEGMENTS.map((m) => {
            const active = markets.includes(m);
            return (
              <button
                key={m}
                type="button"
                onClick={() => toggleMarket(m)}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  active
                    ? "border-brand-cobalt bg-brand-cobalt/10 text-content-primary"
                    : "border-surface-border bg-surface-elevated text-content-secondary hover:border-brand-cobalt/50",
                )}
              >
                {MARKET_LABELS[m]}
              </button>
            );
          })}
        </div>
        <ErrorText msg={errors.markets} />
      </fieldset>

      {/* Revenue tier */}
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium text-content-primary">
          Average monthly revenue (last 3 months)
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {REVENUE_TIERS.map((t) => {
            const active = revenueTier === t;
            const isLowFit = t === "under_50k";
            return (
              <button
                key={t}
                type="button"
                onClick={() => setRevenueTier(t)}
                aria-pressed={active}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                  active
                    ? "border-brand-cobalt bg-brand-cobalt/10 text-content-primary"
                    : "border-surface-border bg-surface-elevated text-content-secondary hover:border-brand-cobalt/50",
                  isLowFit && !active && "opacity-70",
                )}
              >
                {REVENUE_TIER_LABELS[t]}
                {isLowFit && (
                  <span className="mt-0.5 block text-xs text-content-muted">
                    Below our typical fit
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <ErrorText msg={errors.revenueTier} />
      </fieldset>

      {/* Contact */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-primary">
            Full name
          </label>
          <input
            className={fieldBase}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Contractor"
            autoComplete="name"
          />
          <ErrorText msg={errors.fullName} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-primary">
            Company <span className="text-content-muted">(optional)</span>
          </label>
          <input
            className={fieldBase}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Remodeling"
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-primary">
            Email
          </label>
          <input
            type="email"
            className={fieldBase}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
          />
          <ErrorText msg={errors.email} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-content-primary">
            Phone
          </label>
          <input
            type="tel"
            className={fieldBase}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
          <ErrorText msg={errors.phone} />
        </div>
      </div>

      {/* Honeypot — visually hidden, must stay empty */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Leave this field empty
          <input
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      {errors.form && <p className="mt-4 text-sm text-danger">{errors.form}</p>}

      <ButtonAction
        type="submit"
        size="lg"
        className="mt-7 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting…" : "See if your territory is open"}
      </ButtonAction>
      <p className="mt-3 text-center text-xs text-content-muted">
        One operator per zip. No spam, ever.
      </p>
    </form>
  );
}
