/**
 * VoxHorizon "Imprint" design tokens — Apex palette (source of truth, mirrors
 * tailwind.config.ts + app/globals.css). Prefer Tailwind token classes in
 * components; use these raw values for canvas/OG/inline SVG only.
 */

export const brand = {
  cobalt: "#2D4ADE", // primary accent — the pip, CTA, one underline
  cobaltDark: "#1F35A8", // pressed / hover
  carbon: "#15171C", // ink
  ember: "#C9633D", // rare accent — never CTA
} as const;

export const cobaltRamp = {
  50: "#EEF1FE", 100: "#DCE2FC", 200: "#B9C5F9", 300: "#8FA3F4", 400: "#5A77EC",
  500: "#2D4ADE", 600: "#1F35A8", 700: "#182780", 800: "#111B5C", 900: "#0A1140",
} as const;

export const emberRamp = {
  50: "#FBF1EB", 100: "#F4DBC9", 200: "#E9B69A", 300: "#DD8E68", 400: "#D17549",
  500: "#C9633D", 600: "#A14E2C", 700: "#793A20", 800: "#4F2615", 900: "#2A140B",
} as const;

export const neutralRamp = {
  50: "#FAF8F2",
  100: "#EFEBE2", // Vapor
  200: "#E2DCCE",
  300: "#D9D5CB", // Mist
  400: "#B8B3A6",
  500: "#8E8B82",
  600: "#5E6470", // Steel
  700: "#3F4451",
  800: "#22252D",
  900: "#15171C", // Carbon
  950: "#0A0B0E", // Onyx
} as const;

export const surface = {
  base: "#EFEBE2", // Vapor
  elevated: "#FFFFFF", // Daylight
  border: "#D9D5CB", // Mist
  sunk: "#E2DCCE",
} as const;

export const content = {
  primary: "#15171C", // Carbon
  secondary: "#5E6470", // Steel
  muted: "#8E8B82",
} as const;

export const semantic = {
  success: "#2F7E5A", // Forest
  warning: "#C99237", // Amber
  danger: "#B23A48", // Burgundy
  info: "#4A6FE5", // Sky
} as const;

export const gradients = {
  apex: "linear-gradient(135deg, #2D4ADE 0%, #1F35A8 100%)",
  horizon: "linear-gradient(180deg, #2D4ADE 0%, #15171C 100%)",
  quiet: "linear-gradient(180deg, #FFFFFF 0%, #EFEBE2 50%, #D9D5CB 100%)",
} as const;

export const fonts = {
  display: "Instrument Serif", // headings
  body: "Newsreader", // body
  mono: "JetBrains Mono", // labels / eyebrows
} as const;

export const tokens = {
  brand, cobaltRamp, emberRamp, neutralRamp, surface, content, semantic, gradients, fonts,
};
export default tokens;
