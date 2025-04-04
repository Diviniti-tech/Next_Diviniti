import React from "react";
import styles from "./style.module.scss";
export default function NosSolutionsDiviniti() {
  return (
    <div className={styles.ourSolutionsContainer}>
      <h1>Nos Solutions Diviniti</h1>
      <p>Découvrez nos solutions innovantes et adaptées à vos besoins.</p>

      <div className={styles.soronSolution}>
        <div className={styles.solutioncontent}>
          <img src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-long.png" alt="" />
          <h2>Notre outil d'hypervision</h2>
          <p>
            SORON est la plateforme qui permet d’avoir à l’oeil tout
            l’environnement à superviser. Grâce à la modélisation 3D et à son
            interface inspirée du gaming et pensée pour l’utilisateur votre site
            vous obéit au doigt et à l’oeil.
          </p>
        </div>
      </div>
    </div>
  );
}
