"use client";

import Image from "next/image";
import { Check, Droplets, Dumbbell, Zap, Waves } from "lucide-react";
import ScrollFloat from "./scrollFloat";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import HorizontalScrollCarousel, { CardType } from "./scroll-photo";

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
        "Rebuild strength and restore movement after orthopedic or other surgeries.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Other Treatments",
      description:
        "Tailored interventions for arthritis, balance issues, and chronic pain.",
    },
  ];

  const cardData: CardType[] = [
    {
      id: 1,
      title: "",
      url: "/scroll1.jpg",
      description: "HelloWorld",
    },
    {
      id: 2,
      title: "",
      url: "/d02.jpg",
      description: "",
    },

    {
      id: 3,
      title: "",
      url: "/scroll2.jpg",
      description: "",
    },
    {
      id: 4,
      title: "",
      url: "/scroll3.jpg",
      description: "",
    },
    {
      id: 5,
      title: "",
      url: "/scroll4.jpg",
      description: "",
    },
    {
      id: 6,
      title: "",
      url: "/scroll5.jpg",
      description: "",
    },
    {
      id: 7,
      title: "",
      url: "/scroll6.jpg",
      description: "",
    },
    {
      id: 7,
      title: "",
      url: "/scroll6.jpg",
      description: "",
    },
  ];

  return (
    <>
      {/* Intro content */}
      <section
        id="adult"
        className="relative flex flex-col lg:flex-row w-full min-h-[calc(var(--vh)*100)] bg-white pb-10 "
      >
        <Image
          alt="Abstract background pattern"
          src="/download (8).jpeg"
          // src="/main3.jpeg"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute inset-0 z-0"
        />
        {/* Blur Overlay */}
        <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/10" />

        <section className="relative my-1 ">
          <div className="relative z-50 max-w-4xl bg-white/10 mx-auto text-center backdrop-blur-sm">
            <ScrollFloat
              animationDuration={2}
              ease="back.inOut(5)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.05}
            >
              Adult Therapies
            </ScrollFloat>

            <p className="">
              Our adult physiotherapy services focus on rehabilitation, pain
              management, and improving mobility for various conditions. Our
              experienced therapists develop personalized treatment plans to
              help you recover and regain your quality of life.
            </p>
          </div>
        </section>

        {/* Horizontal Carousel */}

        {/* Rest of therapy content */}
        <section className="bg-white/10 py-[-10] px-4 text-center z-15 backdrop-blur-sm">
          <HorizontalScrollCarousel cards={cardData} />
          <h2 className="text-3xl z-5 font-bold mb-6">
            Explore More Therapies
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-gray-600">
            We offer a wide range of evidence-based physiotherapy treatments...
          </p>

          {/* Your therapy cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="space-y-3 mb-8">
              {[
                "Personalized treatment plans tailored to your specific needs",
                "Advanced techniques for pain management and mobility improvement",
                "Rehabilitation for injuries, surgeries, and chronic conditions",
                "Specialized programs for seniors and athletes",
                "Evidence-based approaches for optimal recovery outcomes",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            {/* Therapy Cards */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Therapies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of evidence-based physiotherapy treatments
                to address various conditions and help you achieve your health
                goals.
              </p>
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

            {/* CTA Button */}
            <div className="text-center">
              <Button
                className="my-6 bg-white/50 hover:bg-white/70 text-[#81b342] border border-[#81b342]/50 backdrop-blur-sm
           px-8 py-3 rounded-full text-lg font-medium transition-all duration-700 hover:scale-105"
              >
                Know more
              </Button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
