"use client";
import { cubicBezier } from "framer-motion";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import StatCard from "./info-card";

const AnimatedText = ({
  text,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  as: Component = "div",
  delayOffset = 0, // New prop for additional delay
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delayOffset?: number;
}) => {
  const characters = Array.from(text); // Convert string to array of characters

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delayOffset + 0.1 * i,
      }, // Add delayOffset here
    }),
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      // as={Component}
    >
      {characters.map((char, index) => (
        <motion.span
          key={char + "-" + index}
          variants={item}
          className={cn(
            "inline-block",
            char === "&" ? "text-xl px-1" : "" // Removed align-middle, increased size for better visibility
          )}
        >
          {char === " " ? "\u00A0" : char}{" "}
          {/* Use non-breaking space for actual spaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const logoAnimationDuration = 0.8;
  const logoAnimationDelay = 0.5;

  const welcomeAnimationDuration = 0.8;
  const welcomeAnimationDelay =
    logoAnimationDelay + logoAnimationDuration + 0.2; // Welcome starts after logo

  const textStartDelay = welcomeAnimationDelay + welcomeAnimationDuration + 0.2; // Main text starts after welcome

  return (
    <div
      id="home"
      className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        alt="Abstract background pattern"
        src="/na.jpeg"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-[1] bg-white/20 backdrop-blur-xl" />

      <div className="relative z-10 flex flex-col items-center justify-center pt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: logoAnimationDuration,
            delay: logoAnimationDelay,
          }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Abstract glowing logo"
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: welcomeAnimationDuration,
            delay: welcomeAnimationDelay,
          }}
          className="mb-4 text-4xl font-bold text-logo-yellow md:text-5xl lg:text-6xl"
        >
          Welcome To
        </motion.div>
        <h1 className="text-center max-w-5xl leading-tight">
          <AnimatedText
            text="Painfree Rehab"
            className="text-3xl font-bold text-[#363636] md:text-4xl lg:text-5xl block"
            as="span"
            delayOffset={textStartDelay}
          />
          <AnimatedText
            text="&"
            className="text-3xl font-bold text-[#363636] md:text-lg lg:text-2xl block"
            as="span"
            delayOffset={textStartDelay + 0.5}
          />
          <AnimatedText
            text="Physiotherapy Center"
            className="text-3xl font-bold text-[#363636] md:text-4xl lg:text-5xl block mt-2"
            as="span"
            delayOffset={textStartDelay + 0.8}
          />
        </h1>

        {/* New section for stat cards */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 px-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: textStartDelay,
              },
            },
          }}
        >
          <StatCard value="5yrs +" label="Experience" />
          <StatCard value="50+" label="Therapies" />
          <StatCard value="4000+" label="Satisfied Patients" />
        </motion.div>
      </div>
    </div>
  );
}
