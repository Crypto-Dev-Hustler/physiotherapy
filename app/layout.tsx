// ✅ DO NOT include "use client" here

import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper"; // Client logic moved here

export const metadata: Metadata = {
  title: "Physiotherapy Center | Best Physiotherapist in Gurgaon",
  description:
    "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
  verification: {
    google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
  },
  other: {
    keywords:
      "physiotherapy, Meerut, pain relief, physical therapy, injury recovery, Back Pain Physiotherapy | PainFree Rehab Center | Painfree in Gurgaon | Painmukit in Gurgaon| best pain center in gurgaon |Best Physiotherapist for back pain",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
