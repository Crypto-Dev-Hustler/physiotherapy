import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physiotherapy Center",
  description:
    "Expert physiotherapy services focused on pain relief, injury recovery, and physical wellness. Personalized treatment plans by certified professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
