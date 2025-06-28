"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export function AdultSection() {
  return (
    <section
      id="adult"
      className="flex flex-col lg:flex-row w-full min-h-screen bg-white pb-10 lg:pb-0"
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center h-64 sm:h-80 md:h-96 lg:h-screen p-4 sm:p-6 lg:p-8">
        <div className="bg-red-500 rounded-lg relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[4/3]">
          <Image
            src="/d04.jpg"
            alt="Adult physiotherapy treatment"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center lg:w-1/2 px-4 sm:px-6 lg:pl-5 lg:pr-8">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 pb-3 sm:pb-4 pt-3 sm:pt-4">
          Adult Therapies
        </div>

        <div className="pb-6 sm:pb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Our adult physiotherapy services focus on rehabilitation, pain
          management, and improving mobility for various conditions. Our
          experienced therapists develop personalized treatment plans to help
          you recover and regain your quality of life.
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
          <div className="flex flex-row items-center gap-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
            <div className="text-sm sm:text-base lg:text-lg">
              Personalized treatment plans tailored to your specific needs
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
            <div className="text-sm sm:text-base lg:text-lg">
              Advanced techniques for pain management and mobility improvement
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
            <div className="text-sm sm:text-base lg:text-lg">
              Rehabilitation for injuries, surgeries, and chronic conditions
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
            <div className="text-sm sm:text-base lg:text-lg">
              Specialized programs for seniors and athletes
            </div>
          </div>

          <div className="flex flex-row items-center gap-3">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
            <div className="text-sm sm:text-base lg:text-lg">
              Evidence-based approaches for optimal recovery outcomes
            </div>
          </div>
        </div>

        <button className="w-32 sm:w-36 lg:w-40 h-10 sm:h-12 rounded-lg text-white bg-gray-900 mt-2 text-sm sm:text-base hover:bg-gray-800 transition-colors">
          <Link href="/adultCenter">know more</Link>
        </button>
      </div>
    </section>
  );
}
