import { absoluteUrl, organization, SITE_URL } from "@/lib/seo";
import { siteMeta } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Accurate structured data only — no fake reviews, ratings, awards,
 * or invented availability/coordinates. On-page prices are marketing
 * copy and are not asserted as Offer schema (subject to change).
 */
export function HomeJsonLd() {
  const pageUrl = absoluteUrl("/");

  const org = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: organization.name,
    legalName: organization.legalName,
    url: organization.url,
    logo: {
      "@type": "ImageObject",
      url: organization.logo,
    },
    telephone: organization.telephone,
    areaServed: organization.areaServed,
    brand: {
      "@type": "Brand",
      name: organization.brand,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "LINQ by Raghava",
    description: siteMeta.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "The Linq by GoRealty | LINQ by Raghava Kokapet",
    description: siteMeta.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#residence` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/hero-banner.webp"),
    },
    inLanguage: "en-IN",
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const residence = {
    "@type": "ApartmentComplex",
    "@id": `${SITE_URL}/#residence`,
    name: "LINQ by Raghava",
    alternateName: "The Linq by GoRealty",
    description:
      "Four signature towers of refined residences in Kokapet, set on 9.2 acres. Premium lakeview residences marketed by GoRealty.",
    url: pageUrl,
    image: [
      absoluteUrl("/images/hero-banner.webp"),
      absoluteUrl("/images/towers-mid-level.webp"),
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kokapet",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Indoor Sports Arena" },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fitness & Wellness Studio",
      },
      { "@type": "LocationFeatureSpecification", name: "Kids' Play Area" },
      { "@type": "LocationFeatureSpecification", name: "Private Party Space" },
    ],
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl,
      },
    ],
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [org, website, webpage, residence, breadcrumb],
      }}
    />
  );
}
