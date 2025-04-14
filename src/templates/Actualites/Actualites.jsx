import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { MoonLoader } from "react-spinners";
import Head from "next/head";

export default function Actualites() {
  const [isLoading, setIsLoading] = useState(true);

  // Timeout de secours si onLoad ne fonctionne pas
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); // 5 sec max
    return () => clearTimeout(timeout); // Nettoyage du timeout
  }, []);

  return (
    <>
     <Head>
        <title>Diviniti - Actualités</title>
        <meta name="description" content="Restez informé des dernières actualités de Diviniti, expert en sécurité augmentée, vidéoprotection et solutions intelligentes pour les villes de demain." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Diviniti - Actualités" />
        <meta
          property="og:description"
          content="Découvrez les dernières actualités de Diviniti, leader en vidéoprotection et solutions pour les villes intelligentes."
        />
        <meta
          property="og:keywords"
          content="actualités, news, Diviniti, sécurité augmentée, vidéoprotection, intelligence artificielle, réalité étendue, XR, ville intelligente, sécurité proactive, analyse d'image, contrôle d'accès, prédiction des risques, gestion de la sécurité, smart city, transport sécurisé"
        />
        <meta property="og:image" content="https://uploads.pixecurity.com/files/divinit-new.jpg" />
        <meta property="og:url" content="https://www.diviniti.tech/actualites" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Diviniti - Actualités" />
        <meta
          name="twitter:description"
          content="Restez à jour avec les dernières actualités et innovations de Diviniti pour la sécurité et les villes intelligentes."
        />
        <meta name="twitter:image" content="https://uploads.pixecurity.com/files/divinit-new.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.diviniti.tech/actualites" />
      </Head>

      <div className={styles.actualitesContainer}>
        <h1>What's up Diviniti ?</h1>

        <div className={styles.newsList}>
          {/* Loader affiché tant que l'iframe n'est pas chargé */}
          {isLoading && (
            <div className={styles.loader}>
              <MoonLoader color="#ffff" loading={isLoading} size={90} />
            </div>
          )}
          <iframe
            width="900"
            height="1400"
            src="https://rss.app/embed/v1/wall/eWawwOB0YQLWBQxp"
            frameBorder="0"
            onLoad={() => setIsLoading(false)} // Masquer le loader une fois chargé
            style={{ display: isLoading ? "none" : "block" }} // Masquer l'iframe tant qu'il n'est pas prêt
          ></iframe>
        </div>
      </div>
    </>
  );
}
