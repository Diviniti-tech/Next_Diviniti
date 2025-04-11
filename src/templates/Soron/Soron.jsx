import React from "react";
import styles from "./style.module.scss";
export default function Soron() {
  return (
    <div className={styles.soronContainer}>
      <h1>Nos Solutions Diviniti</h1>
      <p>Découvrez nos solutions innovantes et adaptées à vos besoins.</p>

      <div className={styles.soronSolution}>
        <div className={styles.headerSection}>
          <div className={styles.header1}>
            <img
              src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-centered.png"
              alt=""
            />
            <h2 className={styles.h2}>Notre outil d'hypervision</h2>
            <p>
              SORON est la plateforme qui permet d’avoir à l’oeil tout
              l’environnement à superviser. Grâce à la modélisation 3D et à son
              interface inspirée du gaming et pensée pour l’utilisateur votre
              site vous obéit au doigt et à l’oeil.
            </p>
          </div>
          <div className={styles.header2}>
            <div className={styles.header2Left}>
              <h3>Un hyperviseur construit sur trois grands axes :</h3>
              <ul>
                <li>
                  La modélisation 3D sur mesure de votre environnement
                  d’intérêt.
                </li>
                <li>
                  La connexion de vos systèmes de gestion des objets connectés à
                  notre outil pour une centralisation des données en temps réel.
                </li>
                <li>
                  L’ajout de notre logiciel d’Intelligence Artificielle pour une
                  remontée et un traitement de données optimisés et une prise de
                  décision optimisée.
                </li>
              </ul>
              <h3>
                Le tout rassemblé sur un seul et même outil inspiré de l’univers
                du jeux vidéo pour une navigation intuitive.
              </h3>
            </div>

            <div className={styles.header2Right}>
              <img
                src="https://uploads.pixecurity.com/files/Image15.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.demoVideo}>
          <video autoPlay loop muted>
            <source
              src="https://uploads.pixecurity.com/files/soron_test2_%E2%80%90_R%C3%A9alis%C3%A9e_avec_Clipchamp.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.section}>
          <h2>Une modélisation 3D fidèle à la réalité</h2>
          <div className={styles.sectionContent}>
            <div className={styles.sectionLeft}>
              <div className={styles.sectionCard}>
                <h3>Un environnement sur mesure</h3>
                <p>
                  Nos artistes 3D créent un jumeau numérique de l’environnement
                  à superviser : bâtiment, usine, stade, gare, ville entière…
                  Selon le niveau de détail souhaité et faisant le focus sur les
                  principaux points d’intérêt. Il est ainsi
                </p>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img
                src="https://uploads.pixecurity.com/files/Image18.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Nos solutions</h2>
          <div className={styles.sectionContent}>
            <div className={styles.sectionLeft}>
              <img
                src="https://uploads.pixecurity.com/files/Image6.png"
                alt=""
              />
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.sectionCard}>
                <h3>Tous les capteurs sur une même interface</h3>
                <h4>Contrôle d'accès & Videoprotection</h4>
                <p>
                  Caméras, portes, détecteurs d’intrusion, de fumée, infos
                  trafic, infos sur les transports en commun, tout est aisément
                  visualisable dans l’interface. Possibilité de masquer/afficher
                  chaque élément, de naviguer aisément dans les différents
                  niveaux d’immersion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Les codes du gaming au service de l’efficacité</h2>
          <div className={styles.sectionContent}>
            <div className={styles.sectionLeft}>
              <div className={styles.sectionCard}>
                <h3>Des interactions simples et intuitives</h3>
                <p>
                  En plus d’être tous présents sur une même interface, les
                  différents capteurs sont facilement pilotables et communiquent
                  tous avec le même «langage»
                </p>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img
                src="https://uploads.pixecurity.com/files/Image9.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2>L’utilisateur au centre du projet</h2>
          <div className={styles.sectionContent}>
            <div className={styles.sectionLeft}>
              <img
                src="https://uploads.pixecurity.com/files/Image10.png"
                alt=""
              />
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.sectionCard}>
                <h3>Une interface pensée pour l’utilisateur</h3>
                <p>
                  L’utilisateur final est au coeur de la conception de Soron.
                  Notre logiciel a été conçu en s’inspirant des codes du gaming
                  pour être aussi facilement utilisable qu’un Sim City. Nous
                  menons constamment des recherches en UX/UI pour répondre au
                  mieux aux besoin des opérateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section6}>
          <div className={styles.section6content}>
            <div className={styles.section6card1}>
              <h3>Dashboard</h3>
              <p>
                Permet de garder à l’oeil les informations principales sur un
                écran totalement customisable.
              </p>
            </div>
            <div className={styles.section6card2}>
              <h3>Remontée d’informations en direct</h3>
              <p>
                Ici les prochaines arrivées de train en gare de Maisons-Laffitte
              </p>
            </div>
            <div className={styles.section6card3}>
              <h3>Modélisation détaillée avec une grande précision</h3>
              <p>
                Accès à un nombre illimité de capteurs en simultané (ici une
                porte et sa caméras associée + une autre caméra)
              </p>
            </div>

            <img
              src="https://uploads.pixecurity.com/files/Image11.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
