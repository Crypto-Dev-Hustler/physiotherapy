"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Lock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-black/100 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhysioHealth</h3>
            <p className="mb-4 text-gray-300">
              Providing expert physiotherapy care for all ages. Our team of
              experienced therapists is dedicated to helping you achieve optimal
              health and wellness.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              <Link
                href="https://www.instagram.com/god_gift_child45?utm_source=qr&igsh=cHNxOWVwMWNrYmI="
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/3RqwvJ7sJ5TYwimp6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-400 underline">
                    pain free rehab and physiotherapy center <br /> 2781 ground
                    floor nearby Amity global school sector 46
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+917078571204" className="text-blue-400 underline">
                  <span>+91 7078571204</span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:painfreephysiodrpriyanka@gmail.com"
                  className="text-blue-400 underline"
                >
                  <span>painfreephysiodrpriyanka@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              {/* <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="#home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#About"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#child"
                  className="hover:text-white transition-colors"
                >
                  Child physiotherapies
                </Link>
              </li>
              <li>
                <Link
                  href="#adult"
                  className="hover:text-white transition-colors"
                >
                  Adult Physiotherapies
                </Link>
              </li>
              <li>
                <Link
                  href="#booking"
                  className="hover:text-white transition-colors"
                >
                  Take Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} PhysioHealth. All rights reserved.
            <button
              onClick={() => router.push("/adminBoard")}
              className="ml-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <Lock className="h-4 w-4" />
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
