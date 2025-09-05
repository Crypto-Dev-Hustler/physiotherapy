"use client";

import type React from "react";

import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

const textStartDelay = 0.2;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjusted for word timing
      delayChildren: 0.1 * i,
    },
  }),
};

const wordVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: cubicBezier(0.68, -0.55, 0.27, 1.55),
      duration: 0.9,
    },
  },
};

const AnimatedText = ({
  text,
  className,
  as: Component = "div",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
  delayOffset?: number;
}) => {
  const words = useMemo(() => text.split(" "), [text]);
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delayOffset}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block mr-2" // Added margin for spacing between words
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export function AdultHero() {
  return (
    <section id="adultHome" className="pt-20 md:pt-24 scroll-mt-24">
      <div>
        <div className="relative h-48 lg:h-dvh w-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="/adult/scroll7.jpg"
              alt="adult Center"
              width={12000}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center w-full text-black px-4">
            <AnimatedText
              text="Painfree Rehab and Physiotherapy Center"
              className="text-3xl font-bold text-[#00000] md:text-4xl lg:text-5xl block mt-2 text-center"
              as="h1"
              delayOffset={textStartDelay + 0.8}
            />
            <p className="text-md lg:text-2xl text-[#ff0000] mt-2 text-center max-w-2xl">
              Your partner in rehabilitation and wellness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
