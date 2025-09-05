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

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Track PageView on route change (SPA)
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
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1059018886065509');
          fbq('track', 'PageView');
        `}
      </Script>

      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
