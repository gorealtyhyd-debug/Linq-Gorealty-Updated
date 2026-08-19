import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import { siteMeta } from "@/content/site";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.siteName}`,
  },
  description: siteMeta.description,
  applicationName: siteMeta.siteName,
  authors: [{ name: "GoRealty" }],
  creator: "GoRealty",
  publisher: "GoRealty",
  category: "real estate",
  keywords: [
    "LINQ",
    "LINQ by Raghava",
    "The Linq by GoRealty",
    "Kokapet",
    "Hyderabad",
    "3 BHK",
    "Neopolis",
    "GoRealty",
  ],
  alternates: {
    // Self-referencing absolute HTTPS canonical (homepage)
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: `${SITE_URL}/`,
    siteName: siteMeta.siteName,
    locale: siteMeta.locale,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "color-scheme": "light only",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
