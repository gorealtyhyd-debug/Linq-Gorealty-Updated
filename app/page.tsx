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

export default function HomePage() {
  return (
    <EnquiryProvider>
      <Header />
      <main>
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
