import React from "react";
import styles from "./style.module.scss";
export default function Atna() {
  return (
    <div className={styles.atnaContainer}>
      <h1>Nos Solutions Diviniti</h1>
      <p>Découvrez nos solutions innovantes et adaptées à vos besoins.</p>

      <div className={styles.atnaSolution}>
        <div className={styles.headerSection}>
          <div className={styles.header1}>
            <img
              src="https://uploads.pixecurity.com/files/ATNa-logo-dark-bkgd-centered.png"
              alt=""
            />
            <h2>L’IA au service de la prise de décision</h2>
            <p>
              Avec ATNa, l’intelligence artificielle intégrée à Soron, nous
              sommes capables d’analyser un nombre colossal de données pour
              détecter et anticiper les situations dangereuses et ainsi
              permettre de réagir en un clin d’oeil.
            </p>
          </div>
          <div className={styles.header2}>
            <div className={styles.header2Left}>
              <h3>Analyse de Données en Temps Réel</h3>
              <p>
                Traitement et interprétation instantanés des flux vidéo,
                capteurs IoT et autres sources de données pour une réactivité
                optimale.
              </p>
              <h3>Détection d’Anomalies</h3>
              <p>
                Identification automatique des comportements suspects ou des
                événements inhabituels grâce à des algorithmes avancés.
              </p>
              <h3>Anticipation des Risques</h3>
              <p>
                Prédiction des situations dangereuses à l’aide de modèles
                d’apprentissage automatique, permettant de réduire les incidents
                avant qu’ils ne surviennent.
              </p>
              <h3>Alertes en Temps Réel</h3>
              <p>
                Envoi d’alertes automatisées et contextualisées aux opérateurs,
                facilitant des interventions rapides et ciblées.
              </p>
            </div>

            <div className={styles.header2Right}>
              <img
                src="https://uploads.pixecurity.com/files/Image12.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.section1}>
          <h2>L’IA pour gagner en efficacité</h2>
          <div className={styles.section1Content}>
            <div className={styles.section1Left}>
              <div className={styles.section1Card}>
                <p>
                  Notre IA intégrée aux caméras fera remonter des alertes lors
                  de la détection d’anomalies (chute, accident, vol, panne
                  technique d’une caméra, etc.), créant ainsi une «main
                  courante».
                </p>
                <p>
                  De là, l’utilisateur pourra directement répondre à l’incident
                  en envoyant selon l’anomalie détectée une équipe de:
                </p>
                <ul>
                  <li>Police/sécurité,</li>
                  <li>1ers secours/incendie,</li>
                  <li>Maintenance/technique</li>
                </ul>
                <p>Notre IA vise donc à faire remonter les informations les plus pertinentes et de vous suggérer les choix de réponses appropriés dans le but d’optimiser votre prise de décision.</p>
              </div>
            </div>
            <div className={styles.section1Right}>
              <img
                src="https://uploads.pixecurity.com/files/Image13.png"
                alt=""
              />
            </div>
          </div>
        </div>
      

      </div>
    </div>
  );
}
