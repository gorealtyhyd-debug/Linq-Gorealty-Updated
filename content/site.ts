export const siteMeta = {
  title: "The Linq by GoRealty",
  description:
    "The Linq by GoRealty — four signature towers of refined residences, set on 9.2 acres.",
  canonical: "https://linq.gorealtyprophub.com/",
  phone: "+919989860099",
  // TODO: VERIFY — live site uses mailto:gorealtyprophub.com (appears incomplete)
  email: "gorealtyprophub.com",
  // TODO: VERIFY RERA number against official records
  rera: "A02500004618",
};

export const navLinks = [
  { href: "#offerings", label: "Overview", section: "offerings" },
  { href: "#pricing", label: "Pricing", section: "pricing" },
  { href: "#amenities", label: "Amenities", section: "amenities" },
  { href: "#sitemap", label: "Site Map", section: "sitemap" },
  { href: "#location", label: "Location", section: "location" },
] as const;

export const mobileNavLinks = [
  { href: "#hero", label: "Home" },
  { href: "#offerings", label: "Overview" },
  { href: "#highlights", label: "Highlights" },
  { href: "#pricing", label: "Price Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#sitemap", label: "Site Map" },
  { href: "#floorplans", label: "Floor Plans" },
  { href: "#journey", label: "Visual Journey" },
  { href: "#location", label: "Location Advantages" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const hero = {
  presents: "PRESENTS",
  badge: "PREMIUM LAKEVIEW",
  title: "3 BHK RESIDENCES",
  subtitle: "ONE MINUTE FROM NEOPOLIS",
  currentLabel: "CURRENT BASE PRICE",
  currentPrice: "₹8,600/SQ.FT.*",
  launchLabel: "LAUNCH PRICE (BASE PRICE)",
  launchPrice: "₹9,750/SQ.FT.*",
  launchSub: "(EFFECTIVE FROM AUGUST 10TH)",
  primaryCta: "Enquire Now",
  secondaryCta: "Explore Amenities",
  image: "/images/hero-banner.webp",
  imageAlt: "LINQ by Raghava Four Towers Sky Residence Background",
};

export const development = {
  eyebrow: "The Development",
  heading: "Premium Offerings for Refined Living",
  cards: [
    {
      src: "/images/towers-mid-level.webp",
      alt: "LINQ by Raghava Four Towers",
      label: "LINQ by Raghava Four Towers",
    },
    {
      src: "/images/clubhouse-night.jpg",
      alt: "Grand Experience Center & Clubhouse",
      label: "Grand Experience Center & Clubhouse",
    },
  ],
  specs: [
    {
      num: "01",
      title: "4 High-Rise Towers",
      body: "Four iconic architectural towers united by a expansive podium level and skybridge connections.",
    },
    {
      num: "02",
      title: "G+58 Floors",
      body: "Elevated sky residences delivering panoramic skyline vistas and uninterrupted lake views.",
    },
    {
      num: "03",
      title: "9.2 Acres Land Area",
      body: "Master-planned land parcel featuring expansive open green space, private gardens, and curated amenities.",
    },
    {
      num: "04",
      title: "Offer Valid Till August 15",
      body: "Exclusive introductory pricing structure available for early expressions of interest.",
    },
  ],
};

export const welcomeHome = {
  eyebrow: "Welcome Home",
  body: "Discover a residence built for the way you actually live. LINQ pairs spacious, light-filled interiors with a curated set of amenities and effortless connectivity — designed for families who expect more from an address than square footage.",
  cta: "Know More →",
  image: "/images/grand-lobby.jpg",
  imageAlt: "Grand Arrival Lobby",
  imageLabel: "Grand Arrival Lobby",
};

export const priceOverview = {
  eyebrow: "Investment",
  heading: "Price Overview",
  cards: [
    {
      label: "Current Price",
      price: "₹ 8,600/Sq.Ft.",
      size: "Size: 1798 - 2388 sq. ft.",
      cta: "Know More",
    },
    {
      label: "Launch Price",
      price: "₹ 9,750/Sq.Ft.",
      size: "Size: 1798 - 2388 sq. ft.",
      cta: "Know More",
    },
  ],
};

export const pricingSavings = {
  eyebrow: "Details",
  heading: "Pricing & Savings",
  rows: [
    { base: "● ₹ 8,600", savings: "₹ 27,53,000" },
    { base: "● ₹ 8,700", savings: "₹ 25,91,700" },
  ],
  cta: "Know More →",
  image: "/images/living-room.jpg",
  imageAlt: "Luxury Residence Interior View",
  imageLabel: "Luxury Residence Interior View",
};

export const amenities = {
  eyebrow: "Lifestyle",
  heading: "Amenities",
  body: "LINQ sits one minute from Neopolis and the central business corridor, with schools, hospitals, and everyday convenience close at hand — so residents get the balance of work, life, and leisure without a long commute.",
  // Image mapping preserved from live site JS (including stock Unsplash sources)
  slides: [
    {
      title: "Indoor Sports Arena",
      desc: "Badminton and squash courts, open to residents year-round.",
      img: "/images/amenity-fitness.jpg",
    },
    {
      title: "Fitness & Wellness Studio",
      desc: "A fully equipped gym with a dedicated yoga and recovery deck.",
      img: "/images/amenity-sports.jpg",
    },
    {
      title: "Kids' Play Area",
      desc: "A supervised outdoor play zone with shaded seating for parents.",
      img: "/images/kids-playzone.jpg",
    },
    {
      title: "Private Party Space",
      desc: "An indoor-outdoor event lawn and lounge for residents' celebrations.",
      img: "/images/amenity-party.jpg",
    },
  ],
};

export const siteMap = {
  eyebrow: "Master Plan",
  heading: "Site Map",
  layoutTitle: "Apartment Layout",
  sizes: "Apartment Sizes — 1,798 – 2,388 sq. ft.",
  cta: "View Plan",
  image: "/images/master-site-plan.jpg",
  imageAlt: "Master Site Plan Layout",
  imageLabel: "Master Site Plan",
};

export const floorPlans = {
  eyebrow: "Configurations",
  heading: "Floor Plans",
  body: "Considered layouts across 3, 4, and 5-bedroom configurations, each oriented to maximise light and cross-ventilation.",
  image: "/images/master-bedroom.jpg",
  imageAlt: "3BHK Residence Layout Bedroom",
  imageLabel: "3BHK Residence Layout",
  sideTitle: "3, 4 & 5 Bedroom Residences",
  sideBody:
    "Carpet areas from 1,798 to 2,388 sq. ft., with select duplex and penthouse layouts available on higher floors.",
  cta: "Request Floor Plans",
};

export const visualJourney = {
  eyebrow: "Gallery",
  heading: "Visual Journey",
  slides: [
    {
      label: "Towers at Dusk — Architectural Marvel",
      img: "/images/towers-mid-level.webp",
    },
    {
      label: "Clubhouse Facade — Private Club Residence",
      img: "/images/gallery-clubhouse.jpg",
    },
    {
      label: "Infinity Pool Deck — Skyline Panorama",
      img: "/images/infinity-pool.webp",
    },
    {
      label: "Sky Lounge — Elevated Entertainment",
      img: "/images/gallery-sky-lounge.jpg",
    },
    {
      label: "Landscaped Podium Garden — Lush Sanctuaries",
      img: "/images/gallery-podium.jpg",
    },
  ],
};

export const location = {
  eyebrow: "Connectivity",
  heading: "Location Advantages",
  subheading:
    "In the heart of the district's growth corridor, just minutes from your everyday life.",
  points: [
    { place: "Corridor Business Park", time: "02 Mins" },
    { place: "Financial District", time: "12 Mins" },
    { place: "Global International School", time: "08 Mins" },
    { place: "Sunrise Multispecialty Hospital", time: "14 Mins" },
    { place: "Tech Circle", time: "16 Mins" },
    { place: "Riverside University", time: "22 Mins" },
    { place: "International Airport", time: "32 Mins" },
  ],
  mapSrc: "/images/location-map.jpg",
  mapAlt: "LINQ by Raghava Kokapet Location Map",
  mapLabel: "LINQ by Raghava — Kokapet Location Map",
};

export const contact = {
  eyebrow: "Get In Touch",
  heading: "Contact Us",
  body: "Speak with our sales team for a private tour, current pricing, and availability across LINQ's signature towers.",
  callCta: "Call Sales Team",
  emailCta: "Email Us",
};

export const enquiryForm = {
  unitTypes: ["2 BHK", "3 BHK", "4 BHK", "Penthouse / Sky Villa"],
  budgetRanges: [
    { value: "Below ₹2 Cr", label: "₹Below ₹2 Cr" },
    { value: "₹2 Cr - ₹3 Cr", label: "₹2 Cr - ₹3 Cr" },
    { value: "₹3 Cr - ₹5 Cr", label: "₹3 Cr - ₹5 Cr" },
    { value: "Above ₹5 Cr", label: "Above ₹5 Cr" },
  ],
  consent:
    "I authorize company representatives to Call, SMS, Email, or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.",
  submit: "Submit Now",
  submitting: "Submitting...",
  success:
    "Thank you! Your enquiry has been received. Our team will contact you shortly.",
};

export const footer = {
  rera: `GoRealty RERA No: ${siteMeta.rera}`,
  copyright:
    "© 2026 LINQ By Raghava. Marketed and represented securely under premium terms by GOREALTY.",
  disclaimer1:
    "Disclaimer - The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.",
  disclaimer2:
    "The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website. Thank you for visiting our website.",
};
