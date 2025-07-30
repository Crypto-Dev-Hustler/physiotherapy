"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavigationMenu from "@/components/navigation-menu"; // Adjusted import path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* FIXED header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden mx-4 mt-4">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="PhysioHealth rehabilitation center"
              width={500}
              height={500}
              style={{ width: "20%", height: "auto" }}
              priority
            />
          </div>
          {/* Hamburger (already fixed before; now it can just be normal inside the fixed header) */}
          <button
            onClick={() => setIsOpen(true)}
            className={`flex flex-col justify-center items-center w-12 h-12 rounded-lg transition-all duration-300
            ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <span className="w-6 h-0.5 bg-[#81b342] mb-1.5 transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#81b342] mb-1.5 transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#81b342] transition-all duration-300" />
          </button>
        </div>
      </header>
      {/* Spacer so page content isn't hidden behind the fixed header */}
      <div className="h-[80px]" />
      {/* Full-screen overlay */}
      <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
