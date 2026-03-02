"use client";

import Image from "next/image";
import { Check, Droplets, Dumbbell, Zap, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoSection from "./LogoSection";

export function AdultSection() {
  const therapies = [
    {
      icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
      title: "Pain Management",
      description:
        "Customized exercise programs to improve strength, mobility, and function.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Manual Therapy",
      description:
        "Hands-on techniques to relieve pain, restore motion, and improve circulation.",
    },
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      title: "Exercise Therapy",
      description:
        "Targeted routines to restore flexibility and build muscle endurance.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Neurological Rehab",
      description:
        "Focused support for stroke, Parkinson’s, and spinal cord injury recovery.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Post-Surgical Rehab",
      description:
        "Rebuild strength and restore movement after orthopedic surgeries.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Other Treatments",
      description:
        "Tailored interventions for arthritis, balance issues, and chronic pain.",
    },
  ];

  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in${pathname}`;

  return (
    <>
      {/* lightweight canonical */}
      <link rel="canonical" href={canonicalUrl} />

      <section
        id="adult"
        className="relative w-full min-h-screen bg-white pb-10 overflow-hidden"
      >
        {/* Background Image (optimized) */}
        <Image
          alt="Adult physiotherapy background"
          src="/images/download (8).jpeg"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />

        {/* Optimized Blur Layer (static) */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 max-lg: mx-auto text-center py-12 px-4">
          <h2 className="text-5xl font-bold mb-4">Adult Therapies</h2>
          <LogoSection />
          <p>
            Our adult physiotherapy services focus on rehabilitation, pain
            management, and improving mobility for various conditions.
          </p>
        </div>

        {/* Content */}
        <section className="relative z-10 px-4 mt-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="space-y-2">
              {[
                "Personalized care for faster recovery",
                "Safe and effective pain relief",
                "Expert help after injury or surgery",
                "Special programs for seniors and athletes",
                "Modern techniques backed by science",
                "Hands-on therapy by skilled professionals",
                "Improve movement, strength, and balance",
                "Correct posture and daily habits",
                "Get back to your active lifestyle",
                "Friendly, one-on-one therapy sessions",
                "Individualized physiotherapy treatment plans",
                "Evidence-based pain management protocols",
                "Post-operative and injury rehabilitation",
                "Musculoskeletal and neurological care",
                "Geriatric and sports physiotherapy programs",
                "Manual therapy and advanced modalities",
                "Mobility, strength, and flexibility training",
                "Postural assessment and correction",
                "Functional movement restoration",
                "Clinically supervised recovery sessions",
              ].map((point, i) => (
                <div key={i} className="flex gap-2">
                  <Check className="h-5 w-5 text-blue-600 mt-1" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {therapies.map((therapy, index) => (
                <Card
                  key={index}
                  className="border-t-4 border-t-gray-900 hover:shadow-md transition-shadow duration-300"
                >
                  <CardHeader>
                    {therapy.icon}
                    <CardTitle>{therapy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{therapy.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-white/60 hover:bg-white/80 text-[#81b342]
              border border-[#81b342]/50 px-8 py-3 rounded-full text-lg
              transition-transform duration-300 hover:scale-105"
            >
              <Link href="/adultCenter">Know More</Link>
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
