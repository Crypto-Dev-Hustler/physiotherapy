"use client";

import Image from "next/image";

export function AdultHero() {
  return (
    <section id="adulthome" className="relative">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/d11.jpg"
            alt="Painfree Rehab and Physiotherapy Center"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6">
              Painfree Rehab and Physiotherapy Center
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Your partner in rehabilitation and wellness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
