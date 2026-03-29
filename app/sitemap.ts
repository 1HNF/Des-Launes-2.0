import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now },
    { url: `${siteUrl}/about`, lastModified: now },
    { url: `${siteUrl}/location`, lastModified: now },
    { url: `${siteUrl}/investment`, lastModified: now },
    { url: `${siteUrl}/contact`, lastModified: now }
  ];
}

