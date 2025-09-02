"use client";

import Image from "next/image";
import { Check, Puzzle, Users, Ribbon, CircleDot, Origami } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageSlider from "./image-slider";
import { Button } from "./ui/button";
import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";

import { childTherapyImages } from "./childComponents/childDetails";

const therapies = [
  {
    icon: <Puzzle className="h-8 w-8 text-blue-600" />,
    title: "Autism Education",
    description:
      "Supports individuals with Autism Spectrum Disorder (ASD) to learn and thrive.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Counselling Services",
    description:
      "Helps develop new insights and approaches to reduce the impact of psychological issues.",
  },
  {
    icon: <Ribbon className="h-8 w-8 text-blue-600" />,
    title: "Cerebral Palsy Treatment",
    description:
      "Provides emotional and psychological support for individuals with cerebral palsy.",
  },
  {
    icon: <CircleDot className="h-8 w-8 text-blue-600" />,
    title: "Dyslexia Treatment",
    description:
      "Helps improve reading and writing skills for individuals with dyslexia.",
  },
  {
    icon: <Origami className="h-8 w-8 text-blue-600" />,
    title: "Occupational Therapy",
    description:
      "Improves ability to perform everyday activities using engaging techniques.",
  },
];

const features = [
  "Personalized treatment plans tailored to your specific needs",
  "Advanced techniques for pain management and mobility improvement",
  "Rehabilitation for injuries, surgeries, and chronic conditions",
  "Specialized programs for children and teens",
  "Evidence-based approaches for optimal recovery outcomes",
];

export function ChildSection() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  return (
    <section
      id="child"
      className="relative flex flex-col lg:flex-row w-full min-h-[calc(var(--vh)*100)] bg-white pb-10 lg:pb-0 overflow-hidden"
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
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

      <div className="relative z-20 w-full text-center py-10 lg:py-16">
        <div className="text-[50px] font-bold">Child Therapies</div>
        <div className="mt-10 flex justify-center">
          <ImageSlider
            images={childTherapyImages}
            heightClass="h-[300px] md:h-[400px]"
            maxWidthClass="max-w-5xl"
          />
        </div>
        {/* Description & Features */}
        <div className="mt-8 max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed text-left px-4 sm:px-0">
          <p className="mb-6">
            Our pediatric physiotherapy services address the unique needs of
            children with developmental, neurological, or orthopedic conditions.
            We use play-based therapy to keep sessions engaging and effective.
          </p>

          <div className="space-y-3 mb-8">
            {features.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Therapy Cards */}
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

          {/* Call to Action */}
          <div className="text-center py-5">
            <Button
              asChild // Use asChild to render the Link component as the button
              className="my-6 bg-white/50 hover:bg-white/70 text-[#81b342] border border-[#81b342]/50 backdrop-blur-sm
                  px-8 py-3 rounded-full text-lg font-medium transition-all duration-700 hover:scale-105"
            >
              <Link href={"/childCenter"}>Know More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
