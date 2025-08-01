"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
export interface CardType {
  id: number;
  title: string;
  description: string;
  //   icon: JSX.Element;
  url: string;
}

interface HorizontalScrollCarouselProps {
  cards: CardType[];
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({
  cards,
}) => {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-white/10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[80vw] max-w-[450px] h-[50vh] bg-white/80 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-[100%] w-full">
                <Image
                  src={card.url}
                  alt={card.title}
                  width={400}
                  height={275}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              {/* <div className="h-[0%] p-6 flex flex-col justify-center gap-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description} </p>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
