"use client";

import {
  MapPinned,
  Award,
  Badge,
  BookmarkCheck,
  Users,
  Star,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSlider from "@/components/image-slider";

interface ImageItem {
  src: string;
  alt: string;
  id: string;
}

export const childTherapyImages: ImageItem[] = [
  {
    id: "child-therapy-1",
    src: "/child/child-therapy-session-1.jpg",
    alt: "Therapy session with therapist guiding child",
  },
  {
    id: "child-therapy-2",
    src: "/child/child-therapy-session-2.jpg",
    alt: "Child practicing movement exercises",
  },
  {
    id: "child-therapy-3",
    src: "/child/child-therapy-session-3.jpg",
    alt: "Rehabilitation activity for motor skills",
  },
  {
    id: "child-therapy-4",
    src: "/child/child-therapy-session-4.jpg",
    alt: "Physical development training",
  },
  {
    id: "child-therapy-5",
    src: "/child/child-therapy-session-5.jpg",
    alt: "Motor skills training activity",
  },
  {
    id: "child-therapy-6",
    src: "/child/child-therapy-session-6.jpg",
    alt: "Therapist working on coordination",
  },
  {
    id: "child-therapy-7",
    src: "/child/child-therapy-session-7.jpg",
    alt: "Sensory integration exercises",
  },
  {
    id: "child-therapy-8",
    src: "/child/child-therapy-session-8.jpg",
    alt: "Fine motor skill activity",
  },
  {
    id: "child-therapy-9",
    src: "/child/child-therapy-session-9.jpg",
    alt: "Child and therapist in play-based therapy",
  },
  {
    id: "child-therapy-10",
    src: "/child/child-therapy-session-10.jpg",
    alt: "Group therapy session",
  },
];

export function ChildDetailSection() {
  return (
    <section
      id="childdetails"
      className="min-h-screen w-full flex flex-col lg:flex-row bg-background"
    >
      {/* Left: Copy */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">
          <header className="mb-6 lg:mb-8">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Child Development Center
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Specialized care for children with developmental needs, autism,
              ADHD, cerebral palsy, and speech delays. Our expert team provides
              personalized therapy programs in a nurturing environment.
            </p>
          </header>

          {/* Key Stats */}
          <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
            <div className="flex items-start sm:items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <Award
                className="text-blue-600 mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                1500+ satisfied patients & families
              </span>
            </div>
            <div className="flex items-start sm:items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <Badge
                className="text-blue-600 mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                3+ years specialized pediatric experience
              </span>
            </div>
            <div className="flex items-start sm:items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <BookmarkCheck
                className="text-blue-600 mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                40+ evidence-based therapies & techniques
              </span>
            </div>
            <div className="flex items-start sm:items-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <Users
                className="text-blue-600 mr-3 sm:mr-4 mt-1 sm:mt-0 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                Ages 0–18 • Individual & group sessions
              </span>
            </div>
          </div>

          {/* Services (semantic list) */}
          <section
            className="bg-white p-4 sm:p-5 rounded-lg shadow-sm mb-6"
            aria-labelledby="services-heading"
          >
            <h3
              id="services-heading"
              className="font-bold text-gray-900 mb-3 text-base sm:text-lg"
            >
              Specialized Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 list-disc pl-5">
              <li>Speech Therapy</li>
              <li>Occupational Therapy</li>
              <li>Behavioral Therapy</li>
              <li>Autism Support</li>
              <li>ADHD Management</li>
              <li>Sensory Integration</li>
            </ul>
          </section>

          {/* Contact */}
          <div className="space-y-4 mb-6 lg:mb-8">
            <div className="flex items-start">
              {/* Keeping icon blue to maintain 3-color palette: blue + white + gray */}
              <MapPinned
                className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                size={18}
              />
              <div className="flex-1">
                <a
                  href="https://maps.app.goo.gl/BhftUaJ6eUeTrdeGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="text-gray-900 text-sm sm:text-base leading-relaxed block hover:underline">
                    House No. 1655, Basement, Sector-45
                    <br />
                    Near Doordarshan Apartment, Gurugram
                  </span>
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="text-blue-600 mr-3 flex-shrink-0" size={18} />
              <a
                href="tel:+917078571204"
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base font-medium hover:underline"
              >
                +91 7078571204
              </a>
            </div>

            <div className="flex items-start">
              <Mail
                className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                size={18}
              />
              <a
                href="mailto:painfreephysiodrpriyanka@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base hover:underline break-all"
              >
                painfreephysiodrpriyanka@gmail.com
              </a>
            </div>
          </div>

          {/* CTA: shadcn Button */}
          <div className="mb-6 lg:mb-0">
            <Button
              asChild
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-medium"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onClick={(e) => {
                // Note: onClick fires even with asChild. Prevent default handled on anchor.
              }}
            >
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  const booking = document.getElementById("booking");
                  if (booking) {
                    booking.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    history.replaceState(null, "", "#booking");
                  }
                }}
              >
                <span className="inline-flex items-center">
                  <Calendar className="mr-2" size={20} />
                  Book Appointment
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Media */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[calc(100vh-2rem)] p-4 lg:p-8">
          <ImageSlider images={childTherapyImages} />

          {/* Overlay badge (kept within palette) */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center">
              <Star
                className="text-blue-600 mr-1"
                size={14}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                4.9/5 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
