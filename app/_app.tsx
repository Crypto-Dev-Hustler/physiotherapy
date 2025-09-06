/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../next-seo.config";
import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    fbq: any;
  }
}

const PIXEL_ID = "1059018886065509"; // <-- Replace with your Pixel ID

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("✅ Meta Pixel script loaded");
          if (typeof window.fbq === "function") {
            console.log("✅ fbq is ready");
            window.fbq("track", "PageView");
          } else {
            console.error("❌ fbq not found after script load");
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

      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
