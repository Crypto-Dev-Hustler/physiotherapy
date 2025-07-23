// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title:
//     "Physiotherapy Center|best Physiotherapist in Gurgaon ",
//   description:
//     "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
//   verification: {
//     google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
//   },
//   other: {
//     keywords: "physiotherapy, Meerut, pain relief, physical therapy, injury recovery, Back Pain Physiotherapy | PainFree Rehab Center | Painfree in Gurgaon | Painmukit in Gurgaon| best pain center in gurgaon |Best Physiotherapist for back pain ,   "
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`antialiased`}>{children}</body>
//     </html>
//   );
// }





import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import type { WithContext, LocalBusiness } from "schema-dts" // Import for JSON-LD

// Define your website's base URL for absolute URLs in metadata
const WEBSITE_URL = "https://yourwebsite.com" // IMPORTANT: Replace with your actual website URL

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL), // Set metadataBase for absolute URLs
  title: {
    default: "PainFree Rehab Center | Best Physiotherapy in Gurgaon",
    template: "%s | PainFree Rehab Center",
  },
  description:
    "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
  verification: {
    google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
  },
  openGraph: {
    title: "PainFree Rehab Center | Best Physiotherapy in Gurgaon",
    description:
      "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
    url: WEBSITE_URL,
    siteName: "PainFree Rehab Center",
    images: [
      {
        url: `${WEBSITE_URL}/opengraph-image.jpg`, // Placeholder for your Open Graph image
        width: 1200,
        height: 630,
        alt: "PainFree Rehab Center - Physiotherapy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PainFree Rehab Center | Best Physiotherapy in Gurgaon",
    description:
      "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
    images: [`${WEBSITE_URL}/twitter-image.jpg`], // Placeholder for your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: WEBSITE_URL, // Set canonical URL for the homepage
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD for LocalBusiness schema
  const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PainFree Rehab Center",
    image: `${WEBSITE_URL}/favicon.png`, // IMPORTANT: Replace with your actual logo URL
    url: WEBSITE_URL,
    telephone: "+91-7078571204", // IMPORTANT: Replace with your actual phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street", // IMPORTANT: Replace with your actual street address
      addressLocality: "Gurgaon",
      addressRegion: "HR",
      postalCode: "122001", // IMPORTANT: Replace with your actual postal code
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$", // Adjust based on your pricing
    hasMap: "https://maps.app.goo.gl/your-map-link", // IMPORTANT: Replace with your Google Maps link
  }

  return (
    <html lang="en">
      <head>
        {/* Add JSON-LD to your page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
