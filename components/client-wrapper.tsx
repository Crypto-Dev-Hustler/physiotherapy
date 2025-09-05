"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import DesktopAlert from "./DesktopAlert";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/adminBoard");
  const isChildPage = pathname.startsWith("/childCenter");

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <>
      <DesktopAlert />
      {!isAdminPage && !isChildPage && <Navbar />}
      {children}
    </>
  );
}
