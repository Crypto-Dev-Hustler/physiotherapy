/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    fbq: any;
  }
}

const PIXEL_ID = "1059018886065509";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // ✅ Build canonical URL (remove trailing slash safely)
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const canonicalUrl = `https://www.painfreerehabcenter.in${cleanPath}`;

  // ✅ Scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // ✅ vh fix for mobile
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    console.log("📍 Current pathname:", pathname);
  }, [pathname]);
  // ✅ Inject canonical link dynamically
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
    console.log("🔗 Canonical URL set:", canonicalUrl);
  }, [canonicalUrl]);

  // ✅ Track route changes
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
      console.log("📌 Meta Pixel PageView tracked:", pathname);
    } else {
      console.warn("⚠️ fbq not ready yet on route change:", pathname);
    }
  }, [pathname]);

  return (
    <>
      {/* ✅ Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Meta Pixel script loaded");
          if (typeof window.fbq === "function") {
            console.log("✅ fbq is ready");
            window.fbq("track", "PageView");
          } else {
            console.error("❌ fbq not initialized");
          }
        }}
      >
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq) return;
            n=f.fbq=function(){
              n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
            };
            if(!f._fbq) f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>


      {children}
    </>
  );
}
