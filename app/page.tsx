"use client";

import Script from "next/script";
import dynamic from "next/dynamic";

import HeroSection from "@/components/hero";
import { AdultSection } from "@/components/adult";


import { ChildSection } from "@/components/child";
import AdultDoctorsSection from "@/components/about";
import { Footer } from "@/components/footer";

// Lazy load heavy component (lag fix)
const Appointment = dynamic(() => import("@/components/appoinment"), {
  ssr: false,
  loading: () => <p className="text-center">Loading...</p>,
});

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "PainFree Rehab and Physiotherapy Center",
    url: "https://www.painfreerehabcenter.in",
    telephone: "+91 7078571204",
    image: "https://www.painfreerehabcenter.in/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2781 Ground Floor, Near Amity Global School, Sector 46",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-21:00, Su 09:00-19:00",
    priceRange: "₹250",
  };

  return (
    <>
      {/* ✅ Schema without lag */}
      <Script
        id="physio-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HeroSection />
      <AdultSection />
      <ChildSection />
      <AdultDoctorsSection />
      <Appointment />
      <Footer />
    </>
  );
}
