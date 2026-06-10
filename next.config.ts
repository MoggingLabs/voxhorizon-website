import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Apex -> www is handled at the Caddy/domain layer; add app-level redirects here if needed.
      // /operators merged into /results in the v2 redesign.
      { source: "/operators", destination: "/results", permanent: true },
    ];
  },
};

export default nextConfig;
