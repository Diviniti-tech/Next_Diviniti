// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../../lib/gtag";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Meta Tags for SEO */}
        <meta name="description" content="Diviniti, pionnier en sûreté augmentée..." />
        <meta name="keywords" content="sûreté augmentée, vidéoprotection, intelligence artificielle..." />
        <meta name="author" content="Diviniti" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Diviniti - Sûreté augmentée pour la ville de demain" />
        <meta property="og:description" content="Diviniti développe des solutions..." />
        <meta property="og:url" content="https://www.diviniti.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://uploads.pixecurity.com/files/divinit-new.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Diviniti" />

        {/* Favicon */}
        <link rel="icon" href="https://uploads.pixecurity.com/files/divinit-new.jpg" />

        {/* External Stylesheets */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
        <link href="https://fonts.cdnfonts.com/css/quicksand" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TXS5MXDB');
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXS5MXDB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
