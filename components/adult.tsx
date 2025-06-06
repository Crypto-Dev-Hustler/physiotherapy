"use client"

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react"

export function AdultSection() {
    return(
        <section id="adult" className="flex flex-col lg:flex-row w-full h-full lg:h-screen bg-white pb-10 lg:pb-0">
            <div className="w-full lg:w-1/2 flex justify-center items-center h-full lg:h-screen">
                <div className="bg-red-500 rounded-lg">
                    <Image src={"/d04.jpg"} alt="hi" width={"700"} height={10} className="rounded-lg" />
                </div>
            </div>
            <div className="flex flex-col justify-center lg:w-1/2 pl-5 pr-8">
                <div className="lg:text-4xl text-3xl font-bold text-gray-900 pb-4 pt-4">
                    Adult Therapies
                </div>
                <div className="pb-8">
                    Our adult physiotherapy services focus on rehabilitation, pain management, and improving mobility for various conditions. Our experienced therapists develop personalized treatment plans to help you recover and regain your quality of life.
                </div>
                <div className="flex flex-col h-80 lg:h-60 gap-6">
                    
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Personalized treatment plans tailored to your specific needs</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Advanced techniques for pain management and mobility improvement</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Rehabilitation for injuries, surgeries, and chronic conditions</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Specialized programs for seniors and athletes</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <Check className="h-4 w-4 text-blue-500"/>
                        <div>Evidence-based approaches for optimal recovery outcomes</div>
                    </div>
                </div>
                <button className="w-32 h-10 rounded-lg text-white bg-gray-900 mt-2">
                    <Link href={"/adultCenter"}>
                    know more
                    </Link>
                </button>
            </div>
            
        </section>
        
    )
}