// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Meta Tags for SEO */}
        <meta
          name="description"
          content="Pixecurity offre des solutions de sûreté innovantes pour protéger vos biens et votre personnel. Découvrez nos solutions de sécurité."
        />
        <meta
          name="keywords"
          content="sécurité, sûreté, protection, videoprotection, surveillance, videosurveillance, Pixecurity, france, paris, IDF, vidéoprotection, contrôle d'accès, analyse d'image, hypervision, réseau, caméra, caméras, switch, bullet, ptz, dôme, bosch, vivotek, i-pro, zyxel, vms, milestone, til"
        />
        <meta name="author" content="Pixecurity" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Pixecurity - Fournisseur de solutions de sûreté intelligentes"
        />
        <meta
          property="og:description"
          content="Pixecurity offre des solutions de sûreté innovantes pour protéger vos biens et votre personnel. Découvrez nos solutions de sécurité."
        />
        <meta property="og:url" content="https://www.pixecurity.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://files.pixecurity.com/wp-content/uploads/sites/2/2024/07/fav-pix.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Pixecurity" />
       
       {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
       

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
