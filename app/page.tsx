"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { Details } from "@/components/details";
import { ChildSection } from "@/components/child";
import { AdultSection } from "@/components/adult";
import Book from "@/components/appoinment";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Details />
      <AdultSection />
      <ChildSection />
      <Book />
      <Footer />
    </div>
  );
}
