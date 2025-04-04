import React from "react";
import styles from "./style.module.scss";
export default function NosSolutionsDiviniti() {
  return (
    <div className={styles.ourSolutionsContainer}>
      <h1>Nos Solutions Diviniti</h1>
      <p>Découvrez nos solutions innovantes et adaptées à vos besoins.</p>

      <div className={styles.soronSolution}>
        <div className={styles.section1}>
          <img
            src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-long.png"
            alt=""
          />
          <h2>Notre outil d'hypervision</h2>
          <p>
            SORON est la plateforme qui permet d’avoir à l’oeil tout
            l’environnement à superviser. Grâce à la modélisation 3D et à son
            interface inspirée du gaming et pensée pour l’utilisateur votre site
            vous obéit au doigt et à l’oeil.
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.section2Left}>
            <p>Un hyperviseur construit sur trois grands axes :</p>
            <ul>
              <li>
                La modélisation 3D sur mesure de votre environnement d’intérêt.
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
            <p>
              Le tout rassemblé sur un seul et même outil inspiré de l’univers
              du jeux vidéo pour une navigation intuitive.
            </p>
          </div>

          <div className={styles.section2Right}>
            <img
              src="https://uploads.pixecurity.com/files/Image15.png"
              alt=""
            />
          </div>
        </div>

        <div className={styles.section3}>
          <h2>Une modélisation 3D fidèle à la réalité</h2>
          <div className={styles.section3Content}>
            <div className={styles.section3Left}>
              <div className={styles.section3Card}>
                <h3>Un environnement sur mesure</h3>
                <p>
                  Nos artistes 3D créent un jumeau numérique de l’environnement
                  à superviser : bâtiment, usine, stade, gare, ville entière…
                  Selon le niveau de détail souhaité et faisant le focus sur les
                  principaux points d’intérêt. Il est ainsi
                </p>
              </div>
            </div>
            <div className={styles.section3Right}>
              <img
                src="https://uploads.pixecurity.com/files/Image18.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <h2>Nos solutions</h2>
          <div className={styles.section4Content}>
            <div className={styles.section4Left}>
              <img
                src="https://uploads.pixecurity.com/files/Image6.png"
                alt=""
              />
            </div>
            <div className={styles.section4Right}>
              <div className={styles.section4Card}>
                <h3>Tous les capteurs sur une même interface</h3>
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
      </div>
    </div>
  );
}
