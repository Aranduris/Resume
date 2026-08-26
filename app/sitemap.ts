import type { MetadataRoute } from "next";

import { siteRoot } from "./config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteRoot,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
