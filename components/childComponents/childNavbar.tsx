"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavigationMenu from "@/components/navigation-menu";
import { motion } from "framer-motion"; // Import motion

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navbarAppearDelay = 2; // Adjust this value as needed

  return (
    <>
      {/* FIXED header */}
      <motion.header
        initial={{ opacity: 0, y: -100 }} // Start hidden above the screen
        animate={{ opacity: 1, y: 0 }} // Animate to visible position
        transition={{ duration: 0.2, delay: navbarAppearDelay }} // Delay appearance
        className="fixed inset-x-0 top-0 z-50 bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden mx-4 mt-4" // Added mt-4
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="PhysioHealth rehabilitation center"
              width={300}
              height={300}
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
            <span className="w-6 h-0.5 bg-[#000000] mb-1.5 transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#000000] mb-1.5 transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#000000] mb-1.5 transition-all duration-300" />
          </button>
        </div>
      </motion.header>
      {/* Full-screen overlay */}
      <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
