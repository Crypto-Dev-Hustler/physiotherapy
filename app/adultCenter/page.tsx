"use client"

import { AdultTherapiesSection } from "@/components/adultComponents/adultServices"
import { AdultFooter } from "@/components/adultComponents/adultFooter"
import { AdultDoctorsSection } from "@/components/adultComponents/adultDoctors"
import { AdultDetailSection } from "@/components/adultComponents/adultDetails"
import { AdultHero } from "@/components/adultComponents/adultHero"
import { AdultNavbar } from "@/components/adultComponents/adultNavbar"

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