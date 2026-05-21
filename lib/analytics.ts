/**
 * Thin, privacy-friendly analytics wrapper. No-ops unless an analytics provider
 * (e.g. Plausible) is present on the page. Safe to call from client components.
 */

export type AnalyticsEvent =
  | "form_start"
  | "form_submit"
  | "lead_created"
  | "booking_view"
  | "booking_scheduled";

type Plausible = (
  event: string,
  options?: { props?: Record<string, string | number | boolean> },
) => void;

export function track(
  event: AnalyticsEvent,
  props?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;
  const plausible = (window as unknown as { plausible?: Plausible }).plausible;
  if (typeof plausible === "function") {
    plausible(event, props ? { props } : undefined);
  }
}
