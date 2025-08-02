"use client";

import { easeOut, motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-md bg-gradient-to-br from-white/70 to-blue-100/50 backdrop-blur-lg min-w-[150px] text-center"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-3xl font-bold text-[#81b342] mb-1">{value}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </motion.div>
  );
};

export default StatCard;
