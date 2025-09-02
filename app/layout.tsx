// ✅ DO NOT include "use client" here

import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper"; // Client logic moved here

export const metadata: Metadata = {
  title: "PainFree Rehab & Physiotherapy Center | Meerut & Gurgaon",
  description:
    "Expert physiotherapy services for pain relief, injury recovery, and rehabilitation. Certified physiotherapists offering personalized treatment for back pain, neck pain, sports injuries, and more in Meerut and Gurgaon.",
  verification: {
    google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
  },
  other: {
    keywords:
      "physiotherapy, pain relief, injury recovery, physical therapy, Meerut physiotherapy, Gurgaon physiotherapy, back pain treatment, neck pain therapy, shoulder pain rehab, slip disc therapy, sports physiotherapy, post-surgery rehabilitation, neurological physiotherapy, home physiotherapy services, best physiotherapist Meerut, best physiotherapist Gurgaon, pain free rehab center, PainFree clinic , physiotherapy near me,physiotherapy gurgaon,physiotherapist near me,painfree rehab & physiotherapy center – dr. priyanka kashyap,physiotherapy in sector 46 gurgaon,physiotherapist gurgaon,physiotherapist in gurgaon,physiotherapy clinic in gurgaon,physio rehab centre near me,best physiotherapist near me,female physiotherapist in gurgaon,rehab in gurgaon,dr priyanka physiotherapist,best child physiotherapist near me,painfree physiotherapy and sports injuries clinic,top physiotherapy near me,lower back pain physiotherapy",
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
