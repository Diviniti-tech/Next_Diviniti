import "@/index.css";

// import { AppProvider } from "@/Components/appContext";
import Template from "@/components/Template/Template";
import Head from "next/head";
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';
import { useEffect } from 'react';
import '../../i18n';
import { appWithTranslation } from 'next-i18next';



 function App({ Component, pageProps }) {

  const router = useRouter();

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

 useEffect(() => {
  loadUmami(); // Charge au premier affichage

  const handleRouteChange = (url) => {
    gtag.pageview(url);
    if (window.umami) {
      window.umami.track(url); // Appel correct
    }
  };

  router.events.on('routeChangeComplete', handleRouteChange);
  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, []);


 

  
  return (
    <>
      <Head>
        {/* Viewport Meta Tag for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   
      
          <Template>
            <Component {...pageProps} />
          </Template>
  
     
    </>
  );
}

export default appWithTranslation(App);