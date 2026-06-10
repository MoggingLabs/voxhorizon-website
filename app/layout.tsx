import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// Carbon Trader system — split design stylesheet (loaded after globals so its
// un-layered body rules win the cascade). Order matters: tokens → base →
// chrome → components → pages.
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/chrome.css";
import "./styles/components.css";
import "./styles/pages.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VoxHorizon",
  url: publicEnv.NEXT_PUBLIC_SITE_URL,
  logo: `${publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/logo.png`,
  email: "operators@voxhorizon.io",
  description:
    "Growth partner for established home-improvement contractors: exclusive territory, pre-qualified and pre-scheduled appointments, paid per signed contract.",
  founder: { "@type": "Person", name: "Diogo Silva" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = publicEnv.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
    >
      {/* Dark terminal shell. Background, body font and antialiasing are owned by
          styles/base.css `body` — no bg/font utilities here so they aren't overridden. */}
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionProvider>
          <a href="#main" className="vh-skip">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
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
