// ✅ DO NOT include "use client" here

import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper"; // Client logic moved here

export const metadata: Metadata = {
  title: "PainFree Rehab & Physiotherapy Center | Gurgaon",
  description:
    "Trusted physiotherapy in Gurgaon for adults and children. Pain relief, injury recovery, child care, and rehab with personalized expert treatment.",
  verification: {
    google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
  },
  other: {
    keywords:
      "physiotherapy, pain relief, injury recovery, physical therapy,Gurgaon physiotherapy, back pain treatment, neck pain therapy, shoulder pain rehab, slip disc therapy, sports physiotherapy, post-surgery rehabilitation, neurological physiotherapy, home physiotherapy services, best physiotherapy, best physiotherapist Gurgaon, pain free rehab center, PainFree clinic , physiotherapy near me,physiotherapy gurgaon,physiotherapist near me,painfree rehab & physiotherapy center – dr. priyanka kashyap,physiotherapy in sector 46 gurgaon,physiotherapist gurgaon,physiotherapist in gurgaon,physiotherapy clinic in gurgaon,physio rehab centre near me,best physiotherapist near me,female physiotherapist in gurgaon,rehab in gurgaon,dr priyanka physiotherapist,best child physiotherapist near me,painfree physiotherapy and sports injuries clinic,top physiotherapy near me,lower back pain physiotherapy",
  },
  openGraph: {
    title: "PainFree Rehab & Physiotherapy Center",
    siteName: "PainFree Rehab & Physiotherapy Center",
    url: "https://www.painfreerehabcenter.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="facebook-domain-verification"
          content="9menx4w53hqi6bbekhigwr37lxyciy"
        />

        <meta
          name="google-site-verification"
          content="GzssgWMeoX8k9oOCItGPin-uxa5nMdZmEOLT3IIgLXw"
        />
        <meta
          property="og:title"
          content="Painfree Rehab Center – Heal, Strengthen, Thrive"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.painfreerehabcenter.in" />
        <meta
          property="og:image"
          content="https://www.painfreerehabcenter.in/logo.png"
        />
        <meta
          property="og:description"
          content="Expert physiotherapy care in Gurugram. Book appointments online and begin your journey to recovery."
        />
        <meta property="og:site_name" content="Painfree Rehab Clinic" />
      </head>
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
