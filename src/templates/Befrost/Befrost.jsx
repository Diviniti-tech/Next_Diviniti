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
                src="https://uploads.pixecurity.com/files/AdobeStock_821813814.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>Contrôle d'Accès</h2>
            <div className={styles.cardImg}>
              <img
                src="https://plus.unsplash.com/premium_photo-1676618539981-eeb34965ca5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>Réseau</h2>
            <div className={styles.cardImg}>
              <img
                src="https://images.unsplash.com/photo-1549317336-206569e8475c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className={styles.card}>
            <h2>GTB / GTC</h2>
            <div className={styles.cardImg}>
              <img
                src="https://images.unsplash.com/photo-1650901161049-5a508b78388d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWdlbWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
