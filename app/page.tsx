"use client";

// import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
// import { Details } from "@/components/details";
import { ChildSection } from "@/components/child";
import { AdultSection } from "@/components/adult";
// import Book from "@/components/appoinment";
import { Footer } from "@/components/footer";
import AdultDoctorsSection from "@/components/about";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Head from "next/head";
const LazyComponent = dynamic(() => import("@/components/appoinment"), {
  ssr: false,
});

// import DesktopAlert from "@/components/DesktopAlert";

export default function Home() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapist",
    name: "PainFree Rehab and Physiotherapy Center",
    image: "https://www.painfreerehabcenter.in/logo.png",
    "@id": "https://www.painfreerehabcenter.in",
    url: "https://www.painfreerehabcenter.in",
    telephone: "+91 7078571204",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "pain free rehab and physiotherapy center 2781 ground floor nearby Amity global school sector 46",
      addressLocality: "Gurugram",
      addressRegion: "Gurugram, Haryana",
      postalCode: "120001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "250₹",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.436647653555376",
      longitude: " 77.06351859666862",
    },
    sameAs: [
      "https://facebook.com/motioncareclinic",
      "https://instagram.com/motioncareclinic",
    ],
  };

  return (
    <div className="">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="google-site-verification"
          content="GzssgWMeoX8k9oOCItGPin-uxa5nMdZmEOLT3IIgLXw"
        />
        <meta
          property="og:title"
          content="Painfree Rehab Center – Heal, Strengthen, Thrive"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.painfreerehabcenter.in" />
        <meta
          property="og:image"
          content="https://www.painfreerehabcenter.in/logo.png"
        />
        <meta
          property="og:description"
          content="Expert physiotherapy care in Gurugram. Book appointments online and begin your journey to recovery."
        />
        <meta property="og:site_name" content="Painfree Rehab Clinic" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <HeroSection />
      {/* <DesktopAlert /> */}
      <AdultSection />
      <ChildSection />
      <AdultDoctorsSection />
      <LazyComponent />
      {/* <Book /> */}
      <Footer />
    </div>
  );
}
