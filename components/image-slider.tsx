"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
// Removed ChevronLeft, ChevronRight imports as they are no longer used

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const images: ImageItem[] = [
  {
    src: "/d04.jpg?height=300&width=600",
    alt: "Abstract landscape",
    width: 600,
    height: 300,
  },
  {
    src: "/d03.jpg?height=300&width=600",
    alt: "Cityscape at night",
    width: 600,
    height: 300,
  },
  {
    src: "/d02.jpg?height=300&width=600",
    alt: "Forest path",
    width: 600,
    height: 300,
  },
];

interface ImageSliderProps {
  maxWidthClass?: string; // e.g., "max-w-2xl", "max-w-md"
  heightClass?: string; // e.g., "h-[300px]", "h-[200px]"
}

export default function ImageSlider({
  maxWidthClass = "max-w-4xl", // Default to original size
  heightClass = "h-[300px]", // Default to original size
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // 0: initial, 1: next, -1: prev

  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  // handlePrev and handleDotClick are no longer needed as manual navigation is removed
  // const handlePrev = React.useCallback(() => {
  //   setDirection(-1)
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  // }, [])

  // const handleDotClick = React.useCallback(
  //   (index: number) => {
  //     setDirection(index > currentIndex ? 1 : -1)
  //     setCurrentIndex(index)
  //   },
  //   [currentIndex],
  // )

  // Automatic slide transition
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className={`relative w-full ${maxWidthClass} mx-auto overflow-hidden rounded-lg shadow-lg`}
    >
      <div className={`relative w-full ${heightClass}`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="object-cover w-full h-full"
              priority={currentIndex === 0} // Prioritize the first image for LCP
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons (removed) */}
      {/* Dot Indicators (removed) */}
    </div>
  );
}
