import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../next-seo.config";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
