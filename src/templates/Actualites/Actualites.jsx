import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { MoonLoader } from "react-spinners";

export default function Actualites() {
  const [isLoading, setIsLoading] = useState(true);

  // Timeout de secours si onLoad ne fonctionne pas
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000); // 5 sec max
    return () => clearTimeout(timeout); // Nettoyage du timeout
  }, []);

  return (
    <div className={styles.actualitesContainer}>
      <h1>Tendances & Actus</h1>

      <div className={styles.newsList}>
        {/* Loader affiché tant que l'iframe n'est pas chargé */}
        {isLoading && (
          <div className={styles.loader}>
            <MoonLoader color="#FFD700" loading={isLoading} size={90} />
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
  );
}
