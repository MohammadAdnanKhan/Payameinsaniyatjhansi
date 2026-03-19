import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://payameinsaniyatjhansi.in",
      lastModified: new Date(),
    },
    {
      url: "https://payameinsaniyatjhansi.in/about",
      lastModified: new Date(),
    },
  ];
}