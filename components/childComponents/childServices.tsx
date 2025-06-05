"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Puzzle, Users, Ribbon, CircleDot, Origami, Settings2, Hand, Speech, Shapes, Group, AlignHorizontalJustifyStart } from "lucide-react"

export function ChildTherapiesSection() {
  const therapies = [
    {
      icon: <Puzzle className="h-8 w-8 text-blue-600" />,
      title: "Autism Education",
      description: "Focuses on supporting individuals with Autism Spectrum Disorder (ASD) to learn and thrive.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Counselling Services",
      description: "Can help to find new ways and insights to understand problems, allowing the negative impact to be reduced.",
    },
    {
      icon: <Ribbon className="h-8 w-8 text-blue-600" />,
      title: "Cerebral Palsy Treatment",
      description: "Provides emotional and phychlogical support for individuals with cerebral palsy.",
    },
    {
      icon: <CircleDot className="h-8 w-8 text-blue-600" />,
      title: "Dyslexia Treatment",
      description: "Focuses on helping individuals with dyslexia to improve their reading and writing skills.",
    },
    {
      icon: <Origami className="h-8 w-8 text-blue-600" />,
      title: "Occupational Therapy",
      description: "Helps them to improve their ability to perform everyday activities.",
    },
    {
      icon: <Settings2 className="h-8 w-8 text-blue-600" />,
      title: "Sensory Integration Therapy",
      description: "Helps children with sensory processing issues to better understand and respond to sensory information.",
    },
    {
      icon: <Hand className="h-8 w-8 text-blue-600" />,
      title: "ABA Therapy",
      description: "Focuses on improving specific behaviors, such as social skills, communication, and learning.",
    },
    {
      icon: <Speech className="h-8 w-8 text-blue-600" />,
      title: "Speech Therapy",
      description: "Helps children with speech and language disorders to improve their communication skills.",
    },
    {
      icon: <Shapes className="h-8 w-8 text-blue-600" />,
      title: "Play Therapy",
      description: "Uses play to help children express their feelings and experiences in a safe environment.",
    },
    {
      icon: <Group className="h-8 w-8 text-blue-600" />,
      title: "Group Therapy",
      description: "Therapy where a therapist workd with multiple individuals in a group setting.",
    },
    {
      icon: <AlignHorizontalJustifyStart className="h-8 w-8 text-blue-600" />,
      title: "Other Therapy...",
      description: "Like:- Early Intervention, Epilepsy Therapy, ADHD, Brain Gym/Cogination, Writing and Many more.",
    },
  ]

  return (
    <section id="childservices" className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Therapies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of evidence-based physiotherapy treatments to address various conditions and help your child to
          achieve their health goals.
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
