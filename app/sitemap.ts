import type { MetadataRoute } from "next";
import { publicEnv } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/apply", priority: 0.9 },
    { path: "/results", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/industries/kitchen-bath", priority: 0.7 },
    { path: "/industries/roofing", priority: 0.7 },
    { path: "/industries/decking", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
