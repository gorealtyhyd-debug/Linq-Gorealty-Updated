import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do not block CSS, JS, images, or public assets
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: "linq.gorealtyprophub.com",
  };
}
