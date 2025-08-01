"use client";

import Image from "next/image";
// import Link from "next/link";
import { Check } from "lucide-react";
import ScrollFloat from "./scrollFloat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Users, Ribbon, CircleDot, Origami } from "lucide-react";

import ImageSlider from "./image-slider";
import { Button } from "./ui/button";

export function ChildSection() {
  const therapies = [
    {
      icon: <Puzzle className="h-8 w-8 text-blue-600" />,
      title: "Autism Education",
      description:
        "Focuses on supporting individuals with Autism Spectrum Disorder (ASD) to learn and thrive.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Counselling Services",
      description:
        "Can help to find new ways and insights to understand problems, allowing the negative impact to be reduced.",
    },
    {
      icon: <Ribbon className="h-8 w-8 text-blue-600" />,
      title: "Cerebral Palsy Treatment",
      description:
        "Provides emotional and phychlogical support for individuals with cerebral palsy.",
    },
    {
      icon: <CircleDot className="h-8 w-8 text-blue-600" />,
      title: "Dyslexia Treatment",
      description:
        "Focuses on helping individuals with dyslexia to improve their reading and writing skills.",
    },
    {
      icon: <Origami className="h-8 w-8 text-blue-600" />,
      title: "Occupational Therapy",
      description:
        "Helps them to improve their ability to perform everyday activities.",
    },
  ];
  return (
    <section
      id="adult"
      className="relative flex flex-col lg:flex-row w-full min-h-[calc(var(--vh)*100)] bg-white pb-10 lg:pb-0 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        alt="Abstract background pattern"
        src="/main3.jpeg"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 z-0"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-xl bg-white/30" />

      {/* Floating Heading */}
      <div className="relative z-20 w-full text-center py-10 lg:py-16">
        <ScrollFloat
          animationDuration={2}
          ease="back.inOut(5)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.05}
        >
          Child Therapies
        </ScrollFloat>
        <div className="mt-10 flex justify-center">
          <ImageSlider maxWidthClass="max-w-xl" heightClass="h-[275px]" />
        </div>
        <div className="mt-8 max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed text-left px-4 sm:px-0">
          <p className="mb-6">
            Our pediatric physiotherapy services are designed to address the
            unique needs of children with developmental, neurological, or
            orthopedic conditions. We use play-based therapy techniques to make
            sessions engaging and effective for young patients.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                Personalized treatment plans tailored to your specific needs
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                Advanced techniques for pain management and mobility improvement
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                Rehabilitation for injuries, surgeries, and chronic conditions
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>Specialized programs for seniors and athletes</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                Evidence-based approaches for optimal recovery outcomes
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapies.map((therapy, index) => (
              <Card
                key={index}
                className="border-t-4 border-t-gray-900 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mb-2">{therapy.icon}</div>
                  <CardTitle>{therapy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{therapy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center py-5">
            <Button
              className={`bg-white/50 hover:bg-white/70 text-[#81b342] border  border-[#81b342]/50 backdrop-blur-sm
              px-8 py-3 rounded-full text-lg font-medium transition-all duration-700 hover:scale-105`}
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
