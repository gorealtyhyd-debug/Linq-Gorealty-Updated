import type { Metadata } from "next";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Development } from "@/components/Development";
import { WelcomeHome } from "@/components/WelcomeHome";
import { PriceOverview } from "@/components/PriceOverview";
import { PricingSavings } from "@/components/PricingSavings";
import { Amenities } from "@/components/Amenities";
import { SiteMap } from "@/components/SiteMap";
import { FloorPlans } from "@/components/FloorPlans";
import { VisualJourney } from "@/components/VisualJourney";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/EnquiryModal";
import { EnquireFab } from "@/components/EnquireFab";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { absoluteUrl } from "@/lib/seo";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: siteMeta.title,
  },
  description: siteMeta.description,
  alternates: {
    canonical: "https://linq.gorealtyprophub.com/",
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: "https://linq.gorealtyprophub.com/",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteMeta.ogImage),
        width: 1200,
        height: 630,
        alt: "LINQ by Raghava Four Towers in Kokapet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [absoluteUrl(siteMeta.ogImage)],
  },
};

export default function HomePage() {
  return (
    <EnquiryProvider>
      <HomeJsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Development />
        <WelcomeHome />
        <PriceOverview />
        <PricingSavings />
        <Amenities />
        <SiteMap />
        <FloorPlans />
        <VisualJourney />
        <Location />
        <Contact />
      </main>
      <Footer />
      <EnquireFab />
      <EnquiryModal />
    </EnquiryProvider>
  );
}
