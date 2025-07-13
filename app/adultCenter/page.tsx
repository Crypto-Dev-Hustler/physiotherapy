"use client"

import { AdultTherapiesSection } from "@/components/adultComponents/adultServices"
import { AdultFooter } from "@/components/adultComponents/adultFooter"
import { AdultDoctorsSection } from "@/components/adultComponents/adultDoctors"
import { AdultDetailSection } from "@/components/adultComponents/adultDetails"
import { AdultHero } from "@/components/adultComponents/adultHero"
import { AdultNavbar } from "@/components/adultComponents/adultNavbar"
// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adultcenter| PainFree Rehab Center",
  description: "Learn more about our expert physiotherapy services in Meerut and how we help patients recover fast.",
};


export default function Adult() {
    return(
        <div>
            <AdultNavbar />
            <AdultHero />
            <AdultDetailSection />
            <AdultTherapiesSection />
            <AdultDoctorsSection />
            <AdultFooter />
        </div>
    )
}