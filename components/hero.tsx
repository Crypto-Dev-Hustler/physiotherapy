"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/d11.jpg"
            alt="PhysioHealth rehabilitation center"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-3 sm:mb-4 lg:mb-6">
              Welcome to PhysioHealth
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-400 font-medium max-w-3xl mx-auto leading-relaxed">
              Your partner in rehabilitation and wellness
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
