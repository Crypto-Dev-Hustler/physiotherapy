"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface Doctor {
  role: string;
  name: string;
}

export default function AdultDoctorsSection() {
  const doctors: Doctor[] = [
    { role: "Therapist", name: "Dr. Priyanka Kashyap" },
    { role: "Speech Therapist", name: "Dr. Sheela" },
    { role: "Therapist", name: "Dr. Kajal" },
    { role: "Therapist", name: "Dr. Nirdisha Nirmal" },
  ];
  const pathname = usePathname().replace(/\/$/, "") || "/"; // Dynamically get current path
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  return (
    <section
      id="adultdoctors"
      className="relative w-full px-4 py-12 bg-white text-gray-800"
      aria-labelledby="adult-doctors-heading"
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="text-center mb-12">
        <h2
          id="adult-doctors-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Doctors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of doctors and experts to address various
          conditions and help you achieve your health goals.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {doctors.map(({ name, role }, index) => (
          <Card
            key={index}
            className="border-t-4 border-t-blue-600 hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 font-medium">{role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
