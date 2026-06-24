import type { MetadataRoute } from "next";

const siteUrl = "https://radhika.design"; // [REPLACE] production URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
