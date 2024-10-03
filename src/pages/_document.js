// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../../lib/gtag";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
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

        <meta 
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Diviniti - Sûreté augmentée pour la ville de demain</title>
        <meta
          name="title"
          content="Diviniti - Sûreté augmentée pour la ville de demain" 
        />
        <meta
          name="description"
          content="Diviniti, pionnier en sûreté augmentée, propose des solutions de vidéoprotection, IA et XR pour la ville intelligente de demain. Découvrez notre système d'exploitation dédié à la sécurité."
        />
        <meta
          name="keywords"
          content="sûreté augmentée, vidéoprotection, intelligence artificielle, réalité étendue, XR, ville intelligente, sécurité proactive, analyse d'image, contrôle d'accès, prédiction des risques, gestion de la sécurité, smart city, transport sécurisé, Diviniti"
        />
        <meta name="author" content="Diviniti" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Diviniti - Sûreté augmentée pour la ville de demain"
        />
        <meta
          property="og:description"
          content="Diviniti développe des solutions de sûreté augmentée intégrant l'intelligence artificielle et la réalité étendue pour sécuriser les infrastructures de transport, bâtiments et villes."
        />
        <meta property="og:url" content="https://www.diviniti.tech" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/diviniti-logo-gradient.svg"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Diviniti" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Diviniti - Sûreté augmentée et solutions de sécurité IA"
        />
        <meta
          name="twitter:description"
          content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive."
        />
        <meta
          name="twitter:image"
          content="/assets/diviniti-logo-gradient.svg"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="/assets/diviniti-logo-gradient.svg"
          type="image/svg+xml"
        />

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
