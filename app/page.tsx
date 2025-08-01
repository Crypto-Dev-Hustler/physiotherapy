"use client";

// import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
// import { Details } from "@/components/details";
import { ChildSection } from "@/components/child";
import { AdultSection } from "@/components/adult";
import Book from "@/components/appoinment";
import { Footer } from "@/components/footer";
import AdultDoctorsSection from "@/components/about";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AdultSection />
      <ChildSection />
      <AdultDoctorsSection/>
      <Book />
      <Footer />
    </div>
  );
}
