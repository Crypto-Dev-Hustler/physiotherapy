"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const images: ImageItem[] = [
  {
    src: "/d04.jpg",
    alt: "Abstract landscape",
    width: 600,
    height: 300,
  },
  {
    src: "/d03.jpg",
    alt: "Cityscape at night",
    width: 600,
    height: 300,
  },
  {
    src: "/d02.jpg",
    alt: "Forest path",
    width: 600,
    height: 300,
  },
];

interface ImageSliderProps {
  maxWidthClass?: string;
  heightClass?: string;
}

export default function ImageSlider({
  maxWidthClass = "max-w-4xl",
  heightClass = "h-[300px]",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(handleNext, 2000); // 5s auto-switch
    return () => clearInterval(interval);
  }, [handleNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className={`relative w-full ${maxWidthClass} mx-auto overflow-hidden rounded-xl shadow-lg`}
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
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="w-full h-full object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
