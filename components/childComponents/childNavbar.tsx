"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function ChildNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`sticky top-0 z-50 bg-white w-full shadow-md ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            PhysioHealth
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("childhome")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("childdetails")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Details
          </button>
          <button
            onClick={() => scrollToSection("childservices")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Our Therapies
          </button>
          <button
            onClick={() => scrollToSection("childdoctors")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Our Doctors
          </button>
          <button
            onClick={() => scrollToSection("/#booking")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("childthome")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("childdetails")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Details
            </button>
            <button
              onClick={() => scrollToSection("childservices")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Our Therapies
            </button>
            <button
              onClick={() => scrollToSection("childdoctors")}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Our Doctors
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}