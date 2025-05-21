import "@/index.css";
import Template from "@/components/Template/Template";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../../lib/gtag";
import { useEffect } from "react";
import "../../i18n";
import { appWithTranslation } from "next-i18next";

// Déclaration en dehors du composant
const umamiWebsiteId = "aa5e5015-df12-4d50-b548-6f2ffc0400fb";
const umamiScriptUrl = "https://umami-analytics-navy-nu.vercel.app/script.js";

let umamiLoaded = false;

function loadUmami() {
  if (!umamiLoaded) {
    const script = document.createElement("script");
    script.defer = true;
    script.setAttribute("data-website-id", umamiWebsiteId);
    script.src = umamiScriptUrl;
    script.onload = () => {
      umamiLoaded = true;
    };
    document.head.appendChild(script);
  }
}

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    loadUmami(); // Charge le script Umami une fois au premier affichage

    const handleRouteChange = (url) => {
      gtag.pageview(url);
      if (window.umami) {
        window.umami.track(url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Template>
        <Component {...pageProps} />
      </Template>
    </>
  );
}

export default appWithTranslation(App);
