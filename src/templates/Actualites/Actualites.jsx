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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Diviniti - Actualités" />
        <meta
          property="og:description"
          content="Découvrez les dernières actualités de Diviniti."
        />
        <meta
          property="og:keywords"
          content="actualités, news, Diviniti, sécurité augmentée, vidéoprotection, intelligence artificielle, réalité étendue, XR, ville intelligente, sécurité proactive, analyse d'image, contrôle d'accès, prédiction des risques, gestion de la sécurité, smart city, transport sécurisé"
        />
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
