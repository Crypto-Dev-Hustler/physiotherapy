"use client";

import { AdultTherapiesSection } from "@/components/adultComponents/adultServices";
import { AdultDoctorsSection } from "@/components/adultComponents/adultDoctors";
import { Footer } from "@/components/footer";

import { AdultDetailSection } from "@/components/adultComponents/adultDetails";
import { AdultHero } from "@/components/adultComponents/adultHero";
// import { AdultNavbar } from "@/components/adultComponents/adultNavbar";
import Head from "next/head";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const LazyComponent = dynamic(() => import("@/components/appoinment"), {
  ssr: false,
});

// app/about/page.tsx

export default function Adult() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  return (
    <div>
      <Head>
        <link rel="canonical" href={canonicalUrl} />

        <meta
          property="og:title"
          content="PainFree Rehab Center – Adult Physiotherapy in Gurgaon"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.painfreerehabcenter.in/public/scroll1.jpg"
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:description"
          content="Expert adult physiotherapy & rehabilitation in Gurgaon. Book your session at PainFree Rehab Center for pain relief, recovery, and wellness."
        />

        {/* Recommended: Site name for branding */}
        <meta property="og:site_name" content="PainFree Rehab Center" />
      </Head>
      {/* <AdultNavbar /> */}
      <AdultHero />
      <AdultDetailSection />
      <AdultTherapiesSection />
      <AdultDoctorsSection />
      <LazyComponent />
      <Footer />
    </div>
  );
}
