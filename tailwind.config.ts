import type { Config } from "tailwindcss";

/**
 * VoxHorizon — Tailwind config.
 * The design system is CSS-driven: see app/voxhorizon.css (the `.vh-*` classes
 * and tokens). Tailwind is kept only for Preflight (the base reset) and a couple
 * of core utilities on <body>; no custom theme tokens remain. The old "Imprint"
 * editorial palette/fonts/scale were removed with the Carbon Trader reskin.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
