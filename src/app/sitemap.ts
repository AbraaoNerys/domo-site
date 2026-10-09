import type { MetadataRoute } from "next";

const siteUrl =
  process.env.SITE_URL || "https://domo-site-theta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", siteUrl).toString(),
    },
  ];
}
