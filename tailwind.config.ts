import type { Config } from "tailwindcss";

/**
 * VoxHorizon design tokens.
 * The token NAMES here are the frozen contract shared with the frontend
 * workstream. Do not rename without updating docs/frontend-design-prompts.md
 * and lib/design-tokens.ts.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#38B0E3",
          blue: "#1E63C8",
          indigo: "#2E2A8C",
        },
        surface: {
          DEFAULT: "#0A0E1A", // page background  -> bg-surface
          elevated: "#111726", // cards            -> bg-surface-elevated
          border: "#1E2536", // hairline borders   -> border-surface-border
        },
        content: {
          primary: "#F5F7FA", // text-content-primary
          secondary: "#A8B2C5", // text-content-secondary
          muted: "#6B7689", // text-content-muted
        },
        success: "#34D399",
        danger: "#F87171",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #38B0E3 0%, #1E63C8 50%, #2E2A8C 100%)",
        "gradient-brand-subtle":
          "linear-gradient(135deg, rgba(56,176,227,0.14) 0%, rgba(46,42,140,0.14) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(56,176,227,0.45)",
        "glow-lg": "0 0 80px -20px rgba(56,176,227,0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
