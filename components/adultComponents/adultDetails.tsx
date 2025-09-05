"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import ImageSlider from "@/components/image-slider";
import { Button } from "@/components/ui/button";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
}

const adultTherapyImages: ImageItem[] = [
  {
    id: "adult-therapy-1",
    src: "/adult/adult.jpg",
    alt: "Rehabilitation exercises during adult therapy",
  },
  {
    id: "adult-therapy-2",
    src: "/adult/scroll2.jpg",
    alt: "Strength training guided by therapist",
  },
  {
    id: "adult-therapy-3",
    src: "/adult/scroll3.jpg",
    alt: "Mobility enhancement session",
  },
  {
    id: "adult-therapy-4",
    src: "/adult/scroll4.jpg",
    alt: "Physical conditioning routine",
  },
  {
    id: "adult-therapy-5",
    src: "/adult/scroll5.jpg",
    alt: "Targeted therapy exercises",
  },
  {
    id: "adult-therapy-6",
    src: "/adult/scroll6.jpg",
    alt: "Balance and stability training",
  },
  // {
  //   id: "adult-therapy-7",
  //   src: "/adult/scroll.jpg",
  //   alt: "Assisted stretching techniques",
  // },
  {
    id: "adult-therapy-8",
    src: "/adult/scroll8.jpg",
    alt: "Functional movement practice",
  },
];

const features: string[] = [
  "Personalized treatment plans tailored to your specific needs",
  "Advanced techniques for pain management and mobility improvement",
  "Rehabilitation for injuries, surgeries, and chronic conditions",
  "Specialized programs for seniors and athletes",
  "Evidence-based approaches for optimal recovery outcomes",
];

export function AdultDetailSection() {
  return (
    <section
      id="adult"
      aria-labelledby="adult-therapies-heading"
      className="w-full bg-white font-sans"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full">
              <ImageSlider images={adultTherapyImages} />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <header className="mb-4 sm:mb-6 lg:mb-8">
              <h2
                id="adult-therapies-heading"
                className="text-pretty text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900"
              >
                Adult Therapies
              </h2>
            </header>

            <p className="text-pretty text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              Our adult physiotherapy services focus on rehabilitation, pain
              management, and improving mobility for various conditions. Our
              experienced therapists develop personalized treatment plans to
              help you recover and regain your quality of life.
            </p>

            <ul
              className="mb-8 sm:mb-10 lg:mb-12 space-y-4 sm:space-y-5 lg:space-y-6"
              role="list"
            >
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 sm:gap-4"
                  role="listitem"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link
                href="/adultCenter"
                aria-label="Learn more about Adult Therapies"
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
