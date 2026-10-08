import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const BASE_URL = "https://nygrow.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticRoutes = ["", "/about", "/contact", "/solutions"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
