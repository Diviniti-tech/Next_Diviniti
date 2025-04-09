import React from "react";
import styles from "./style.module.scss";
export default function Befrost() {
  return (
    <div className={styles.befrostContainer}>
      <div className={styles.headerSection}>
        <div className={styles.header1}>
          <img
            src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
            alt=""
          />
          <h1>La passerelle entre différents univers</h1>
          <p>
            Conçu pour s'adapter à divers appareils et plateformes, BEFROST
            permet de connecter notamment les systèmes de vidéoprotection,
            contrôle d'accès, intrusion, Géolocalisation, interphonie, incendie.
          </p>
        </div>
        <div className={styles.header2}>
          <div className={styles.card}>
            <h2>VMS</h2>
            <div className={styles.cardImg}>
              <img
                src="https://uploads.pixecurity.com/files/AdobeStock_1261669582.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>Contrôle d'Accès</h2>
            <div className={styles.cardImg}>
              <img
                src="https://uploads.pixecurity.com/files/AdobeStock_1362299000.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>Réseau</h2>
            <div className={styles.cardImg}>
              <img
                src="https://uploads.pixecurity.com/files/AdobeStock_1114186388.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>GTB / GTC</h2>
            <div className={styles.cardImg}>
              <img
                src="https://uploads.pixecurity.com/files/AdobeStock_1178672896.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
