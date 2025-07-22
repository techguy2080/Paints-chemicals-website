import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AC Company Limited - Premium Paints & Soaps",
  description: "AC Company Limited offers premium quality paints, soaps, and training services in South Sudan.",
  keywords: [
    "paints",
    "soaps",
    "South Sudan",
    "training",
    "AC Company Limited",
    "chemical supply",
    "paint manufacturing",
    "soap manufacturing"
  ],
  openGraph: {
    title: "AC Company Limited - Premium Paints & Soaps",
    description: "Premium quality paints, soaps, and training services in South Sudan.",
    url: "https://acinvestsf.org",
    siteName: "AC Company Limited",
    images: [
      {
        url: "https://acinvestsf.org/images/logo%20(2).png", // or /images/logo.png if you rename it
        width: 512,
        height: 512,
        alt: "AC Company Limited Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Company Limited - Premium Paints & Soaps",
    description: "Premium quality paints, soaps, and training services in South Sudan.",
    images: ["https://acinvestsf.org/images/logo%20(2).png"], // or /images/logo.png
  },
  alternates: {
    canonical: "https://acinvestsf.org",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AC Company Limited",
    url: "https://acinvestsf.org",
    logo: "https://acinvestsf.org/images/logo%20(2).png",
    description: "AC Company Limited offers premium quality paints, soaps, and training services in South Sudan.",
    sameAs: [
      "https://facebook.com/acpaints"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+211911011236",
        contactType: "customer service",
        areaServed: "SS",
        availableLanguage: ["en"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+211918558844",
        contactType: "customer service",
        areaServed: "SS",
        availableLanguage: ["en"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Juba Central Equatoria State",
      addressLocality: "Juba",
      addressRegion: "Central Equatoria",
      addressCountry: "South Sudan"
    },
    email: "acpaintltd@gmail.com"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
