import type { Metadata } from "next";
import "./globals.css";

import ClientWrapper from "@/components/client-wrapper";

export const metadata: Metadata = {
  title: "PainFree Rehab & Physiotherapy Center | Gurgaon",
  description:
    "Dr. Priyanka Kashyap – Trusted physiotherapy in Gurgaon for adults & children.",
  keywords:
    "physiotherapy gurgaon, best physiotherapist near me, pain free rehab center",
  verification: {
    google: "gKoDb2boaAkFO_lnt6v_Tx1sGgFl4V5V29-6bihQlJc",
  },
  openGraph: {
    title: "PainFree Rehab & Physiotherapy Center",
    description:
      "Expert physiotherapy care in Gurugram. Book appointments online.",
    url: "https://www.painfreerehabcenter.in",
    siteName: "PainFree Rehab & Physiotherapy Center",
    images: [
      {
        url: "https://www.painfreerehabcenter.in/logo.png",
        width: 800,
        height: 600,
        alt: "PainFree Rehab Center Logo",
      },
    ],
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
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
