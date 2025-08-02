"use client";

import { useMemo } from "react";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import StatCard from "./info-card";
import { usePathname } from "next/navigation";
import Head from "next/head";

// Animation Variants (moved outside for optimization)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1 * i,
    },
  }),
};

const itemVariants = {
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
  const characters = useMemo(() => Array.from(text), [text]);
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delayOffset}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={itemVariants}
          className={`inline-block ${char === "&" ? "text-xl px-1" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default function Home() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in/${pathname}`;
  const logoAnimationDuration = 0.8;
  const logoAnimationDelay = 0.5;
  const welcomeAnimationDuration = 0.8;
  const welcomeAnimationDelay =
    logoAnimationDelay + logoAnimationDuration + 0.2;
  const textStartDelay = welcomeAnimationDelay + welcomeAnimationDuration + 0.2;

  return (
    <div
      id="home"
      className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden"
    >
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {/* Background Image */}
      <Image
        alt="Abstract background pattern"
        src="/na.jpeg"
        fill
        priority
        placeholder="empty"
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 z-0"
      />

      {/* Overlay Blur */}
      <div className="absolute inset-0 z-[1] bg-white/20 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-[80px]">
        {/* Logo */}
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
            alt="Logo"
            width={200}
            height={200}
            priority
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Welcome Text */}
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

        {/* Animated Titles */}
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

        {/* Stat Cards */}
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
