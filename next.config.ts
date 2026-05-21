import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Apex → www is handled at the Vercel/domain layer; add app-level redirects here if needed.
    ];
  },
};

export default nextConfig;
