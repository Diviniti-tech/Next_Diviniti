// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}
        <meta name="description" content="Diviniti" />
        <meta
          name="keywords"
          content="diviniti, soron, atna, befrost, it, security, securite, surete, ia, ai, videoprotection, videosurveillance, protection "
        />
        <meta name="author" content="Diviniti" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Diviniti" />
        <meta property="og:description" content="Diviniti" />
        <meta property="og:url" content="https://www.diviniti.io" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/diviniti-logo-gradient.svg"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Diviniti" />

        {/* Favicon */}
        <link rel="icon" href="/assets/diviniti-logo-gradient.svg" />

        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.cdnfonts.com/css/quicksand"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link href="https://fonts.cdnfonts.com/css/barlow" rel="stylesheet" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
