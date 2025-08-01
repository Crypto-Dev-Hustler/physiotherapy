"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdultDoctorsSection() {
  const therapies = [
    {
      role: "Therapist",
      name: "Dr. Priyanka Kashyap",
    },
    {
      role: "Speech Therapist",
      name: "Dr. Sheela",
    },
    {
      role: "Therapist",
      name: "Dr. Kajal",
    },
    {
      role: "Therapist",
      name: "Dr. Nirdisha Nirmal",
    },
  ];

  return (
    <section id="adultdoctors" className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Doctors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of doctors and experts to address various
          conditions and help you to achieve your health goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapies.map((therapy, index) => (
          <Card
            key={index}
            className="border-t-4 border-t-gray-900 hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl">{therapy.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600">{therapy.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
