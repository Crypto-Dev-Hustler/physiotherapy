"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export function AdultDetailSection() {
  return (
    <section id="adult" className="w-full bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6 lg:p-8">
          <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/d04.jpg"
              alt="Adult physiotherapy treatment session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Adult Therapies
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              Our adult physiotherapy services focus on rehabilitation, pain
              management, and improving mobility for various conditions. Our
              experienced therapists develop personalized treatment plans to
              help you recover and regain your quality of life.
            </p>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Personalized treatment plans tailored to your specific needs
                </span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Advanced techniques for pain management and mobility
                  improvement
                </span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Rehabilitation for injuries, surgeries, and chronic conditions
                </span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Specialized programs for seniors and athletes
                </span>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Evidence-based approaches for optimal recovery outcomes
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <Link
              href="/adultCenter"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
