import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import { siteMeta } from "@/content/site";
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
  metadataBase: new URL(siteMeta.canonical),
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: {
    canonical: siteMeta.canonical,
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.canonical,
    siteName: "LINQ by Raghava",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "LINQ by Raghava Four Towers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/images/hero-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
