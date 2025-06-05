"use client"

import Image from "next/image"

export function HeroSection() {
  

  return (
    <section id="home" className="relative h-48 lg:h-screen w-screen">
      <div className="absolute z-0 bg-gray-900 ">
        <Image src={"/d11.jpg"} alt="center" width={1600} height={200}/>
      </div>
      <div className="absolute z-10 flex flex-col mt-16 lg:mt-40 items-center w-full text-white">
        <h1 className="text-4xl lg:text-8xl font-bold">Welcome to PhysioHealth</h1>
        <p className="text-lg lg:text-2xl text-blue-600 mt-2 text-center">
          Your partner in rehabilitation and wellness
        </p>
      </div>
    </section>
  )
}