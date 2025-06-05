"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export function ChildFooter() {
  const router = useRouter();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhysioHealth</h3>
            <p className="mb-4 text-gray-300">
              Providing expert physiotherapy care for children. Our team of experienced therapists is dedicated to
              helping your child achieve optimal health and wellness.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <span>1655p basement (Near by Doordarshan Appartment), Sector-45, Gurugram</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>info@physiohealth.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#childhome" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#childservices" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#childtherapies" className="hover:text-white transition-colors">
                  Therapies
                </Link>
              </li>
              <li>
                <Link href="#childdoctors" className="hover:text-white transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} PhysioHealth. All rights reserved.
            <button
              onClick={() => router.push('/adminBoard')}
              className="ml-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
                <Lock className="h-4 w-4" />
            </button>

          </p>
        </div>
      </div>
    </footer>
  )
}
