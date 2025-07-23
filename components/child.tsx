"use client"

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react"


export function ChildSection() {
    return(
        <section id="child" className="flex flex-col lg:flex-row-reverse w-full h-full lg:h-screen bg-gray-900 pb-10 lg:pb-0">
            <div className="w-full lg:w-1/2 flex justify-center items-center h-full lg:h-screen">
                <div className="bg-red-500 rounded-lg">
                    <Image src={"/d01.jpg"} alt="Child Therapies" width={"700"} height={10} className="rounded-lg" />
                </div>
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 pl-5 pr-8">
                <div className="lg:text-4xl text-3xl font-bold text-white pb-4 pt-4">
                    Child Therapies
                </div>
                <div className="pb-8 text-white">
                    Our pediatric physiotherapy services are designed to address the unique needs of children with developmental, neurological, or orthopedic conditions. We use play-based therapy techniques to make sessions engaging and effective for young patients.
                </div>
                <div className="flex flex-col h-80 lg:h-60 gap-6 text-white">
                    
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Child-friendly environment with specialized equipment</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Play-based therapy techniques for effective engagement</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Treatment for developmental delays and pediatric conditions</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Support for children with special needs</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Collaboration with parents for continued home exercises</div>
                    </div>
                </div>
                <button className="w-32 h-10 rounded-lg text-gray-900 bg-white mt-2">
                    <Link href={"/childCenter"}>
                        know more
                    </Link>
                </button>
            </div>
        </section>
        
    )
}