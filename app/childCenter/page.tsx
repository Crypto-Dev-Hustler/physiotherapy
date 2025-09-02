"use client";

import { ChildTherapiesSection } from "@/components/childComponents/childServices";
import { ChildDoctorsSection } from "@/components/childComponents/childDoctors";
import { ChildFooter } from "@/components/childComponents/childFooter";
import { ChildDetailSection } from "@/components/childComponents/childDetails";
import { ChildHero } from "@/components/childComponents/childHero";
import Navbar from "@/components/childComponents/childNavbar";
import Head from "next/head";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const LazyComponent = dynamic(() => import("@/components/appoinment"), {
  ssr: false,
});

export default function Adult() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  return (
    <div>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Navbar />
      <ChildHero />
      <ChildDetailSection />
      <ChildTherapiesSection />
      <ChildDoctorsSection />
      <LazyComponent />
      <ChildFooter />
    </div>
  );
}
