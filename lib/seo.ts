/**
 * Central SEO / site URL helpers for Phase 2 technical SEO.
 * Production canonical host matches the live marketing site.
 */

export const SITE_URL = "https://linq.gorealtyprophub.com";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalized}`;
}

export const indexableRoutes = [
  {
    path: "/",
    title: "The Linq by GoRealty | LINQ by Raghava Kokapet",
    description:
      "The Linq by GoRealty — four signature towers of refined residences in Kokapet, set on 9.2 acres. Premium lakeview 3 BHK residences one minute from Neopolis.",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
] as const;

/** In-page section anchors used for crawlable internal discovery */
export const sectionAnchors = [
  {
    href: "/#offerings",
    label: "LINQ by Raghava project overview",
    shortLabel: "Overview",
  },
  {
    href: "/#pricing",
    label: "LINQ Kokapet price overview",
    shortLabel: "Pricing",
  },
  {
    href: "/#amenities",
    label: "LINQ Kokapet amenities and lifestyle",
    shortLabel: "Amenities",
  },
  {
    href: "/#sitemap",
    label: "LINQ Kokapet master site plan",
    shortLabel: "Site Map",
  },
  {
    href: "/#floorplans",
    label: "View LINQ Kokapet floor plans",
    shortLabel: "Floor Plans",
  },
  {
    href: "/#journey",
    label: "LINQ visual journey gallery",
    shortLabel: "Gallery",
  },
  {
    href: "/#location",
    label: "LINQ Kokapet location advantages",
    shortLabel: "Location",
  },
  {
    href: "/#contact",
    label: "Contact LINQ by GoRealty sales team",
    shortLabel: "Contact",
  },
] as const;

export const organization = {
  name: "GoRealty",
  legalName: "GoRealty",
  brand: "LINQ by Raghava",
  url: SITE_URL,
  logo: absoluteUrl("/images/linq-logo.png"),
  telephone: "+919989860099",
  // TODO: VERIFY email local-part — live site mailto appears incomplete
  email: "gorealtyprophub.com",
  areaServed: "Kokapet, Hyderabad",
  sameAs: [] as string[],
};
