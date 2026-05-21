import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { publicEnv } from "@/lib/env";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "VoxHorizon — The Remodeler Growth Partner",
    template: "%s | VoxHorizon",
  },
  description:
    "VoxHorizon delivers exclusive, pre-qualified remodeling projects to established home-improvement contractors. 8–12 booked projects a month. Performance-backed.",
  openGraph: {
    type: "website",
    siteName: "VoxHorizon",
    url: publicEnv.NEXT_PUBLIC_SITE_URL,
    title: "VoxHorizon — The Remodeler Growth Partner",
    description:
      "Exclusive, pre-qualified remodeling projects booked on your calendar. Not bought from a shared pool.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxHorizon — The Remodeler Growth Partner",
    description:
      "Exclusive, pre-qualified remodeling projects booked on your calendar.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = publicEnv.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-surface font-sans text-content-primary antialiased">
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
