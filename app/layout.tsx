import type { Metadata } from "next";
import {
  Instrument_Serif,
  Newsreader,
  JetBrains_Mono,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
// Carbon Trader system — ported design stylesheet (loaded after globals so its
// un-layered body rules win the cascade). See app/voxhorizon.css.
import "./voxhorizon.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { publicEnv } from "@/lib/env";

// Display — Instrument Serif (weight 400, roman + italic; italic carries emphasis).
// Drives --f-serif in the Carbon Trader system as well.
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Body — Newsreader (variable serif, optical size). Legacy editorial pages.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

// Mono — JetBrains Mono (labels, eyebrows, metadata). Legacy editorial pages.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// Carbon Trader workhorse — IBM Plex Mono (body, ticker, labels). Drives --f-mono.
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
});

// Carbon Trader display weight — IBM Plex Sans (headlines, big numbers). Drives --f-sans.
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "VoxHorizon — The end of the shared lead",
    template: "%s | VoxHorizon",
  },
  description:
    "VoxHorizon is the growth partner for established home-improvement operators. Exclusive territory, pre-qualified appointments, signed work on the books — not shared leads.",
  openGraph: {
    type: "website",
    siteName: "VoxHorizon",
    url: publicEnv.NEXT_PUBLIC_SITE_URL,
    title: "VoxHorizon — The end of the shared lead",
    description:
      "Exclusive territory. Pre-qualified, pre-scheduled projects. One operator per market.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxHorizon — The end of the shared lead",
    description: "Exclusive territory. Pre-qualified projects. One operator per market.",
    images: ["/og-default.png"],
  },
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = publicEnv.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      {/* Dark terminal shell. Background, body font and antialiasing are owned by
          voxhorizon.css `body` — no bg/font utilities here so they aren't overridden. */}
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  );
}
