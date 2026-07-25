import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/menu",
    "/menu/today",
    "/family-meals",
    "/greek-deli",
    "/pre-order",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/menu/today" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
