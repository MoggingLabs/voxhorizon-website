"use client";

import { useState } from "react";
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

function ErrorText({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p
      style={{
        marginTop: 8,
        fontSize: 11,
        letterSpacing: "0.04em",
        color: "var(--c-amber)",
      }}
    >
      {msg}
    </p>
  );
}

// Inline styles for the choice-button groups (markets + revenue) — markets and
// revenue tier are multi/single toggle groups, not native inputs, so they get
// vh-token styling here rather than the .vh-form input rules.
const choiceBase: React.CSSProperties = {
  padding: "11px 16px",
  fontSize: 12,
  letterSpacing: "0.02em",
  border: "1px solid var(--hr-deep)",
  background: "var(--c-bg-shadow)",
  color: "var(--c-body)",
  transition: "color 0.12s, border-color 0.12s, background 0.12s",
  textAlign: "left",
};
const choiceActive: React.CSSProperties = {
  borderColor: "var(--c-cyan)",
  background: "rgba(81, 184, 220, 0.08)",
  color: "var(--c-bone)",
};

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
    <form className="vh-form" onSubmit={handleSubmit} noValidate>
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {MARKET_SEGMENTS.map((m) => {
                const active = markets.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMarket(m)}
                    aria-pressed={active}
                    style={{ ...choiceBase, ...(active ? choiceActive : null) }}
                  >
                    {MARKET_LABELS[m]}
                  </button>
                );
              })}
            </div>
            <ErrorText msg={errors.markets} />
          </div>
        </div>
        <div className="vh-form__row" style={{ alignItems: "start" }}>
          <label>
            Monthly revenue <span className="req">*</span>
          </label>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 10,
              }}
            >
              {REVENUE_TIERS.map((t) => {
                const active = revenueTier === t;
                const isLowFit = t === "under_50k";
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setRevenueTier(t)}
                    aria-pressed={active}
                    style={{
                      ...choiceBase,
                      ...(active ? choiceActive : null),
                      ...(isLowFit && !active ? { opacity: 0.7 } : null),
                    }}
                  >
                    {REVENUE_TIER_LABELS[t]}
                    {isLowFit && (
                      <span
                        style={{
                          display: "block",
                          marginTop: 4,
                          fontSize: 10,
                          letterSpacing: "0.06em",
                          color: "var(--c-mute)",
                        }}
                      >
                        Below our typical fit
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <ErrorText msg={errors.revenueTier} />
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
            />
            <ErrorText msg={errors.fullName} />
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
            />
            <ErrorText msg={errors.email} />
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
            />
            <ErrorText msg={errors.phone} />
          </div>
        </div>
      </fieldset>

      {/* Honeypot — visually hidden, must stay empty */}
      <div style={{ position: "absolute", left: -9999 }} aria-hidden>
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
            <span style={{ color: "var(--c-amber)" }}>{errors.form}</span>
          ) : (
            <>
              One operator per zip · <em>No spam, ever.</em>
            </>
          )}
        </div>
        <div className="vh-cta" style={{ marginTop: 0 }}>
          <button
            type="submit"
            className="p"
            disabled={isSubmitting}
            style={{
              padding: "16px 28px",
              fontSize: 11,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              background: "var(--c-cyan)",
              color: "var(--c-bg-deep)",
              fontWeight: 600,
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Submitting…" : "[ See if your territory is open ]"}
          </button>
        </div>
      </div>
    </form>
  );
}
