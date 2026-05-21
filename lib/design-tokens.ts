/**
 * VoxHorizon design tokens — source of truth for brand values.
 *
 * These mirror tailwind.config.ts and app/globals.css. Prefer the Tailwind token
 * classes in components (e.g. `bg-surface`, `text-brand-cyan`); use these raw
 * values only where a class won't do (canvas, inline SVG gradients, OG images).
 */

export const brand = {
  cyan: "#38B0E3", // primary accent, "VOX", gradient top
  blue: "#1E63C8", // gradient mid
  indigo: "#2E2A8C", // gradient bottom, deep accents
} as const;

export const surface = {
  base: "#0A0E1A", // page background
  elevated: "#111726", // cards / elevated surfaces
  border: "#1E2536", // hairline borders
} as const;

export const content = {
  primary: "#F5F7FA",
  secondary: "#A8B2C5",
  muted: "#6B7689",
} as const;

export const state = {
  success: "#34D399",
  danger: "#F87171",
} as const;

export const gradients = {
  brand: "linear-gradient(135deg, #38B0E3 0%, #1E63C8 50%, #2E2A8C 100%)",
  brandSubtle:
    "linear-gradient(135deg, rgba(56,176,227,0.14) 0%, rgba(46,42,140,0.14) 100%)",
} as const;

export const fonts = {
  display: "Space Grotesk", // headings  -> var(--font-display)
  body: "Inter", // body              -> var(--font-sans)
} as const;

export const tokens = { brand, surface, content, state, gradients, fonts };
export default tokens;
