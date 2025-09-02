"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export function ChildFooter() {
  const router = useRouter();

  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      content: (
        <a
          href="https://maps.app.goo.gl/BhftUaJ6eUeTrdeGA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          House No. 1655, Basement, Sector-45
          <br />
          Near Doordarshan Apartment, Gurugram
        </a>
      ),
    },
    {
      icon: Phone,
      content: (
        <a
          href="tel:+917078571204"
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          +91 7078571204
        </a>
      ),
    },
    {
      icon: Mail,
      content: (
        <a
          href="mailto:painfreephysiodrpriyanka@gmail.com"
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          painfreephysiodrpriyanka@gmail.com
        </a>
      ),
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61579095523663",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/god_gift_child45?utm_source=qr&igsh=cHNxOWVwMWNrYmI=",
    },
  ];

  // Quick links
  const quickLinks = [
    { label: "Home", href: "#childhome" },
    { label: "Details", href: "#childdetails" },
    { label: "Child Services", href: "#childservices" },
    { label: "Child Doctors", href: "#childdoctors" },
    { label: "Adult Physiotherapies", href: "/adultCenter" },
    { label: "Take Appointment", href: "#booking" },
    { label: "Privacy Policy", href: "#footer" },
    { label: "Terms of Service", href: "#" },
  ];

  // Opening hours
  const openingHours = [
    { day: "Monday - Saturday", time: "9:00 AM - 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Painfree Rehab & Physiotherapy Center
            </h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Empowering children to discover their strengths and achieve their
              fullest potential in a safe and supportive environment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>{contact.content}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-300">
              {openingHours.map((schedule, index) => (
                <li key={index} className="flex justify-between">
                  <span>{schedule.day}</span>
                  <span className="font-medium">{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Admin Access */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex items-center justify-center flex-wrap gap-2">
            <p>
              &copy; {new Date().getFullYear()} Painfree Rehab & Physiotherapy
              Center. All rights reserved.
            </p>
            <button
              onClick={() => router.push("/adminBoard")}
              className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer p-1"
              aria-label="Admin access"
            >
              <Lock className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
