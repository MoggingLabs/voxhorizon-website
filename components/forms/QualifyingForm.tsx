"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
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

function ErrorText({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="vh-err">
      {msg}
    </p>
  );
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
  const started = useRef(false);

  const errors = { ...localErrors, ...fieldErrors };

  /** One-shot funnel event on the first real interaction with the form. */
  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("form_start");
  }

  function toggleMarket(m: MarketSegment) {
    markStarted();
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
    <form className="vh-form" onSubmit={handleSubmit} onFocusCapture={markStarted} noValidate>
      {/* A · Markets */}
      <fieldset>
        <legend>
          A · Your trade <em>— which markets?</em>
        </legend>
        <div className="vh-form__row" style={{ alignItems: "start" }}>
          <label>
            Markets served <span className="req">*</span>
          </label>
          <div>
            <div className="vh-choices" role="group" aria-label="Markets served">
              {MARKET_SEGMENTS.map((m) => {
                const active = markets.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMarket(m)}
                    aria-pressed={active}
                    className={cn("vh-choice", active && "is-active")}
                  >
                    {MARKET_LABELS[m]}
                  </button>
                );
              })}
            </div>
            <ErrorText id="err-markets" msg={errors.markets} />
          </div>
        </div>
        <div className="vh-form__row" style={{ alignItems: "start" }}>
          <label>
            Monthly revenue <span className="req">*</span>
          </label>
          <div>
            <div className="vh-choices grid" role="group" aria-label="Monthly revenue">
              {REVENUE_TIERS.map((t) => {
                const active = revenueTier === t;
                const isLowFit = t === "under_50k";
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      markStarted();
                      setRevenueTier(t);
                    }}
                    aria-pressed={active}
                    className={cn("vh-choice", active && "is-active", isLowFit && !active && "low")}
                  >
                    {REVENUE_TIER_LABELS[t]}
                    {isLowFit && <span className="sub">Below our typical fit</span>}
                  </button>
                );
              })}
            </div>
            <ErrorText id="err-revenue" msg={errors.revenueTier} />
          </div>
        </div>
      </fieldset>

      {/* B · Contact */}
      <fieldset>
        <legend>
          B · You <em>— how do we reach you?</em>
        </legend>
        <div className="vh-form__row">
          <label htmlFor="fullName">
            Full name <span className="req">*</span>
          </label>
          <div>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jane Contractor"
              autoComplete="name"
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={errors.fullName ? "err-fullName" : undefined}
            />
            <ErrorText id="err-fullName" msg={errors.fullName} />
          </div>
        </div>
        <div className="vh-form__row">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Remodeling"
            autoComplete="organization"
          />
        </div>
        <div className="vh-form__row">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            <ErrorText id="err-email" msg={errors.email} />
          </div>
        </div>
        <div className="vh-form__row">
          <label htmlFor="phone">
            Phone <span className="req">*</span>
          </label>
          <div>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              autoComplete="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "err-phone" : undefined}
            />
            <ErrorText id="err-phone" msg={errors.phone} />
          </div>
        </div>
      </fieldset>

      {/* Honeypot — visually hidden, must stay empty */}
      <div className="vh-hp" aria-hidden>
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

      <div className="vh-form__actions">
        <div className="meta">
          {errors.form ? (
            <span role="alert" className="vh-err" style={{ marginTop: 0 }}>
              {errors.form}
            </span>
          ) : (
            <>
              One operator per zip · <em>No spam, ever.</em>
            </>
          )}
        </div>
        <div className="vh-cta" style={{ marginTop: 0 }}>
          <button type="submit" className="vh-submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "[ See if your territory is open ]"}
          </button>
        </div>
      </div>
    </form>
  );
}
