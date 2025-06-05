"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Zap, Waves, Thermometer, HandMetal, Droplets } from "lucide-react"

export function AdultTherapiesSection() {
  const therapies = [
    {
      icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
      title: "Pain Management",
      description: "Customized exercise programs to improve strength, mobility, and function.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Mannual Therapy",
      description: "Using electrical stimulation to reduce pain and promote healing.",
    },
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      title: "Exercise Therapy",
      description: "Deep heat treatment to reduce pain and increase circulation.",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-blue-600" />,
      title: "Orthopedic Therapy",
      description: "Thermal treatments to reduce inflammation and relieve pain.",
    },
    {
      icon: <HandMetal className="h-8 w-8 text-blue-600" />,
      title: "Cupping Therapy",
      description: "Hands-on techniques to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Wax Therapy",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Neuro Therapy",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "ISTM Therapy",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Post Surgical Rehab",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Physiotherapy (Neurological Disorder)",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Other Treatments...",
      description: "Water-based exercises to improve mobility and reduce pain.",
    },
  ]

  return (
    <section id="adultservices" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Therapies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of evidence-based physiotherapy treatments to address various conditions and help you
          achieve your health goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapies.map((therapy, index) => (
          <Card key={index} className="border-t-4 border-t-gray-900 hover:shadow-lg transition-shadow">
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
    </section>
  )
}
