"use client";

import LogoLoop from "./LogoLoop";

const rehabImages = [
  {
    src: "/adult/adult.jpg",
    alt: "Cupping therapy for lower back pain relief",
    title: "Cupping Therapy",
    href: "/adult/adult.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll1.jpg",
    alt: "Physiotherapist assisting shoulder resistance exercise",
    title: "Shoulder Rehabilitation",
    href: "/adult/scroll1.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll2.jpg",
    alt: "Knee physiotherapy treatment on therapy table",
    title: "Knee Physiotherapy",
    href: "/adult/scroll2.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll3.jpg",
    alt: "Balance training exercise with physiotherapist support",
    title: "Balance & Gait Training",
    href: "/adult/scroll3.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll4.jpg",
    alt: "Elderly patient performing arm strengthening exercise",
    title: "Geriatric Physiotherapy",
    href: "/adult/scroll4.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll5.jpg",
    alt: "Upper limb rehabilitation using resistance band",
    title: "Upper Limb Rehab",
    href: "/adult/scroll5.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll6.jpg",
    alt: "Manual therapy technique applied on lower back",
    title: "Manual Therapy",
    href: "/adult/scroll6.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll7.jpg",
    alt: "Physiotherapist consulting patient for shoulder pain",
    title: "Posture & Pain Assessment",
    href: "/adult/scroll7.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll8.jpg",
    alt: "Spinal mobilization therapy session",
    title: "Spine Rehabilitation",
    href: "/adult/scroll8.jpg",
    width: 120,
    height: 120,
  },
  {
    src: "/adult/scroll9.jpg",
    alt: "Kinesio taping for back and shoulder support",
    title: "Kinesio Taping",
    href: "/adult/scroll9.jpg",
    width: 120,
    height: 120,
  },
];

export default function LogoSection() {
  return (
    <div
      style={{
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LogoLoop
        logos={rehabImages}
        speed={100}
        direction="left"
        logoHeight={400}
        gap={10}
        hoverSpeed={1}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="rehab"
      />
    </div>
  );
}
