"use client";

import { AdultTherapiesSection } from "@/components/adultComponents/adultServices";
import { AdultFooter } from "@/components/adultComponents/adultFooter";
import { AdultDoctorsSection } from "@/components/adultComponents/adultDoctors";
import { AdultDetailSection } from "@/components/adultComponents/adultDetails";
import { AdultHero } from "@/components/adultComponents/adultHero";
import { AdultNavbar } from "@/components/adultComponents/adultNavbar";
import Head from "next/head";
import { usePathname } from "next/navigation";
// app/about/page.tsx

export default function Adult() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  return (
    <div>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <AdultNavbar />
      <AdultHero />
      <AdultDetailSection />
      <AdultTherapiesSection />
      <AdultDoctorsSection />
      <AdultFooter />
    </div>
  );
}
