"use client";
import {
  X,
  ArrowRight,
  Instagram,
  Mail,
  Phone,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { MouseEvent } from "react";

type NavigationMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

type NavItem = { label: string; href: `#${string}` }; // enforce #hash

export default function NavigationMenu({
  isOpen,
  onClose,
}: NavigationMenuProps) {
  // EDIT your section targets here (ids must exist in the page)
  const navigationItems: NavItem[] = [
    { label: "Home.", href: "#home" },
    { label: " Adults.", href: "#adult" },
    { label: "Childern.", href: "#child" },
    { label: "About.", href: "#adultdoctors" }, // NOTE: if your section id is "appointment", update both places
  ];

  const socialIcons = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/god_gift_child45?utm_source=qr&igsh=cHNxOWVwMWNrYmI=",
    },
    { icon: Facebook, href: "#" },
    { icon: Mail, href: "mailto:painfreephysiodrpriyanka@gmail.com" },
    { icon: Phone, href: "tel:+917078571204" },
  ];

  // Smooth-scroll to in-page anchors and close overlay
  const handleAnchorClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return; // ignore non-hash links (not used here)
    e.preventDefault();
    const id = href.replace(/^#/, ""); // support "#id" or "id"
    const el = document.getElementById(id);
    // Close menu first (lets your exit animation start)
    onClose();
    if (el) {
      // Smooth scroll after the next frame so the overlay can begin closing
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      // Update the URL hash without causing a jump
      history.replaceState(null, "", `#${id}`);
    }
  };

  // Optional: smooth scrolling via CSS if you haven't set it globally
  // You can also put `className="scroll-smooth"` on <html> in app/layout.tsx
  if (typeof document !== "undefined") {
    const html = document.documentElement;
    if (!html.style.scrollBehavior) {
      html.style.scrollBehavior = "smooth";
    }
  }

  return (
    // Full-screen overlay to capture clicks outside the menu content
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      role="dialog"
      aria-modal={isOpen ? true : undefined}
      aria-hidden={!isOpen}
      onClick={onClose} // Close menu when clicking anywhere on this overlay
    >
      {/* Actual menu content, positioned and styled */}
      <div
        className={`absolute top-0 right-0 left-25 bottom-30 bg-white/70 rounded-3xl shadow-xl backdrop-blur-sm
        transition-all duration-500 ease-in-out transform
        ${isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on menu content from closing the menu
      >
        {/* Header with close + logo */}
        <div className="flex justify-between items-end p-6">
          {/* Exchanged positions: Close button first, then Logo */}
          <button
            onClick={onClose}
            className={`relative z-20 text-[#81b342] hover:text-gray-700 transition-all duration-500 delay-100
            ${
              isOpen
                ? "opacity-100 translate-y-0 rotate-0"
                : "opacity-0 -translate-y-4 rotate-180"
            }`}
            aria-label="Close navigation menu"
          >
            <X size={32} />
          </button>
          <Image
            src="/logo.png"
            alt="Company logo"
            width={48}
            height={48}
            priority
          />
        </div>

        {/* Main navigation */}
        <div className="flex flex-col justify-center items-start px-12 h-full -mt-20">
          <nav className="space-y-4">
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`block text-4xl md:text-5xl lg:text-6xl font-bold text-[#81b342] hover:text-gray-900
                transition-all duration-700 leading-tight
                ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{
                  transitionDelay: isOpen ? `${100 + index * 100}ms` : "0ms",
                }}
                aria-label={`Go to ${item.label.replace(".", "")} section`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="fixed left-6 bottom-8 space-y-6">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={`${social.href}-${index}`}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block text-[#81b342] hover:text-gray-900 transition-all duration-700
                ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isOpen ? `${600 + index * 100}ms` : "0ms",
                }}
                onClick={onClose}
                aria-label="Open social link"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="fixed bottom-8 right-8">
          <a
            href="#booking" // ✅ native hash link
            onClick={onClose} // ✅ close menu
            aria-label="Go to appointment section"
          >
            <Button
              className={`bg-white/50 hover:bg-white/70 text-[#81b342] border border-[#81b342]/50 backdrop-blur-sm
              px-8 py-3 rounded-full text-lg font-medium transition-all duration-700 hover:scale-105
              ${
                isOpen
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              Schedule a Visit
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
