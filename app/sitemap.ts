import type { MetadataRoute } from "next";

const siteUrl = "https://radhika.design"; // [REPLACE] production URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
