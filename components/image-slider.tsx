"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  src: string;
  alt: string;
  id: string;
}

interface ImageSliderProps {
  images: ImageItem[]; // Required prop - images must be passed from parent
  maxWidthClass?: string;
  heightClass?: string;
  autoSlideInterval?: number;
  showNavigation?: boolean;
  showIndicators?: boolean;
}

export default function ImageSlider({
  images,
  maxWidthClass = "max-w-4xl",
  heightClass = "h-[400px] md:h-[500px] lg:h-[600px]",
  autoSlideInterval = 4000,
  showNavigation = true,
  showIndicators = true,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [imageErrors, setImageErrors] = React.useState<Set<string>>(new Set());

  // Reset index when images change
  React.useEffect(() => {
    setCurrentIndex(0);
    setImageErrors(new Set());
  }, [images]);

  // Navigation functions
  const goToNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = React.useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = React.useCallback(
    (index: number) => {
      const newDirection = index > currentIndex ? 1 : -1;
      setDirection(newDirection);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-slide effect
  React.useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoSlideInterval, isAutoPlaying, images.length]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Handle image load errors
  const handleImageError = React.useCallback((imageSrc: string) => {
    setImageErrors((prev) => new Set([...prev, imageSrc]));
  }, []);

  // Preload next images for better performance
  React.useEffect(() => {
    if (images.length <= 1) return;

    const preloadImages = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;

      [nextIndex, prevIndex].forEach((index) => {
        const img = new window.Image();
        img.src = images[index].src;
      });
    };

    preloadImages();
  }, [currentIndex, images]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  // Filter out images that failed to load
  const validImages = images.filter((img) => !imageErrors.has(img.src));
  const currentImage = validImages[currentIndex] || images[0];

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full ${maxWidthClass} mx-auto ${heightClass} rounded-xl bg-gray-200 flex items-center justify-center`}
      >
        <p className="text-gray-500">No images provided</p>
      </div>
    );
  }

  if (validImages.length === 0) {
    return (
      <div
        className={`relative w-full ${maxWidthClass} mx-auto ${heightClass} rounded-xl bg-gray-200 flex items-center justify-center`}
      >
        <p className="text-gray-500">Images failed to load</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${maxWidthClass} mx-auto group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main slider container */}
      <div
        className={`relative w-full ${heightClass} overflow-hidden rounded-xl shadow-lg bg-gray-100`}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentImage.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 500, damping: 50 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover object-center"
              sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px`}
              priority={currentIndex === 0}
              quality={85}
              onError={() => handleImageError(currentImage.src)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showNavigation && validImages.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {currentIndex + 1} / {validImages.length}
      </div>
    </div>
  );
}
