"use client"

import { ChildTherapiesSection } from "@/components/childComponents/childServices"
import { ChildDoctorsSection } from "@/components/childComponents/childDoctors"
import { ChildFooter } from "@/components/childComponents/childFooter"
import { ChildDetailSection } from "@/components/childComponents/childDetails"
import { ChildHero } from "@/components/childComponents/childHero"
import { ChildNavbar } from "@/components/childComponents/childNavbar"


export default function Adult() {
    return(
        <div>
            <ChildNavbar />
            <ChildHero />
            <ChildDetailSection />
            <ChildTherapiesSection />
            <ChildDoctorsSection />
            <ChildFooter />
        </div>
    )
}