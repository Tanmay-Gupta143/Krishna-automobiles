import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "@/components/ui/page-transition";

const siteName = "Krishna Automobiles";
const siteDescription =
  "Two-wheeler servicing, diagnostics, genuine-grade parts, insurance guidance, and repair support in Mira Road East.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Two-Wheeler Service in Mira Road East`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  category: "Automotive repair",
  keywords: [
    "two-wheeler service Mira Road",
    "scooter repair Mira Road East",
    "motorcycle mechanic Mira Road",
    "Krishna Automobiles",
    "bike service Hatkesh",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: `${siteName} | Two-Wheeler Service in Mira Road East`,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Two-Wheeler Service in Mira Road East`,
    description: siteDescription,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteName,
  description: siteDescription,
  telephone: "+91-9322245569",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 11, Chintan 11, Hatkesh Road, Phase 4, Gaurav Sankalp",
    addressLocality: "Mira Road East",
    addressRegion: "Maharashtra",
    postalCode: "401107",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-21:30",
  areaServed: "Mira Road East, Thane, Maharashtra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PageTransition />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
