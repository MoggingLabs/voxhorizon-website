import type { Config } from "tailwindcss";

/**
 * VoxHorizon — "Imprint" system · Apex palette · light editorial identity.
 * Token NAMES are the frozen contract used across all components:
 *   bg-surface (Vapor) · bg-surface-elevated (white) · border-surface-border (Mist) ·
 *   text-content-{primary,secondary,muted} · text-brand-cobalt / brand-ember ·
 *   bg-gradient-brand · .text-gradient-brand ·
 *   font-display (Instrument Serif) · font-sans (Newsreader) · font-mono (JetBrains Mono)
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cobalt: {
            DEFAULT: "#2D4ADE",
            50: "#EEF1FE",
            100: "#DCE2FC",
            200: "#B9C5F9",
            300: "#8FA3F4",
            400: "#5A77EC",
            500: "#2D4ADE",
            600: "#1F35A8",
            700: "#182780",
            800: "#111B5C",
            900: "#0A1140",
          },
          ember: {
            DEFAULT: "#C9633D",
            50: "#FBF1EB",
            100: "#F4DBC9",
            200: "#E9B69A",
            300: "#DD8E68",
            400: "#D17549",
            500: "#C9633D",
            600: "#A14E2C",
            700: "#793A20",
            800: "#4F2615",
            900: "#2A140B",
          },
          // backward-compat aliases (older components referenced these → now cobalt)
          cyan: "#2D4ADE",
          blue: "#1F35A8",
          indigo: "#111B5C",
        },
        surface: {
          DEFAULT: "#EFEBE2", // Vapor — page background
          elevated: "#FFFFFF", // Daylight — cards
          border: "#D9D5CB", // Mist — hairlines
          sunk: "#E2DCCE",
        },
        content: {
          primary: "#15171C", // Carbon ink
          secondary: "#5E6470", // Steel
          muted: "#8E8B82",
        },
        neutral: {
          50: "#FAF8F2",
          100: "#EFEBE2",
          200: "#E2DCCE",
          300: "#D9D5CB",
          400: "#B8B3A6",
          500: "#8E8B82",
          600: "#5E6470",
          700: "#3F4451",
          800: "#22252D",
          900: "#15171C",
          950: "#0A0B0E",
        },
        carbon: "#15171C",
        onyx: "#0A0B0E",
        vapor: "#EFEBE2",
        success: "#2F7E5A",
        warning: "#C99237",
        danger: "#B23A48",
        info: "#4A6FE5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"], // Instrument Serif
        sans: ["var(--font-sans)", "Iowan Old Style", "Georgia", "serif"], // Newsreader (body)
        serif: ["var(--font-sans)", "Iowan Old Style", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        d1: ["96px", { lineHeight: "0.92", letterSpacing: "-0.025em", fontWeight: "400" }],
        d2: ["72px", { lineHeight: "0.94", letterSpacing: "-0.02em", fontWeight: "400" }],
        h1: ["54px", { lineHeight: "1.0", letterSpacing: "-0.015em", fontWeight: "400" }],
        h2: ["42px", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "400" }],
        h3: ["32px", { lineHeight: "1.15", letterSpacing: "-0.005em", fontWeight: "400" }],
        h4: ["24px", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "400" }],
        lede: ["22px", { lineHeight: "1.45", letterSpacing: "0", fontWeight: "400" }],
        "body-l": ["18px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-s": ["14px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "500" }],
        micro: ["11px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "400" }],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2D4ADE 0%, #1F35A8 100%)", // Apex
        "gradient-horizon": "linear-gradient(180deg, #2D4ADE 0%, #15171C 100%)",
        "gradient-quiet":
          "linear-gradient(180deg, #FFFFFF 0%, #EFEBE2 50%, #D9D5CB 100%)",
      },
      boxShadow: {
        // Soft editorial elevation (kept under legacy names so components don't break)
        glow: "0 1px 2px rgba(21,23,28,0.05), 0 10px 28px -14px rgba(21,23,28,0.18)",
        "glow-lg": "0 2px 4px rgba(21,23,28,0.05), 0 24px 60px -24px rgba(21,23,28,0.22)",
        card: "0 1px 2px rgba(21,23,28,0.04), 0 6px 16px -10px rgba(21,23,28,0.12)",
        cobalt: "0 10px 30px -12px rgba(45,74,222,0.40)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out both" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
