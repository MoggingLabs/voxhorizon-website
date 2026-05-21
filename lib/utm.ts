/**
 * Client-side attribution capture. Use in the form/ApplyFlow to populate the
 * optional attribution fields on LeadInput before submitting.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type Attribution = {
  sourcePage: string;
  referrer: string;
  utm: Record<string, string>;
};

export function getAttribution(): Attribution {
  if (typeof window === "undefined") {
    return { sourcePage: "", referrer: "", utm: {} };
  }
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return {
    sourcePage: window.location.pathname,
    referrer: document.referrer || "",
    utm,
  };
}
