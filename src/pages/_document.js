// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}
        <meta
          name="description"
          content="Diviniti"
        />
        <meta
          name="keywords"
          content="diviniti, soron, Atna, Befrost, it, security, securite, surete, ia, ai, videoprotection, videosurveillance, protection "
        />
        <meta name="author" content="Diviniti" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pixecurity - Fournisseur de solutions de sûreté intelligentes"
        />
        <meta
          property="og:description"
          content="Pixecurity offre des solutions de sûreté innovantes pour protéger vos biens et votre personnel. Découvrez nos solutions de sécurité."
        />
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
