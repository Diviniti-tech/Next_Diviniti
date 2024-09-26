import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function V1() {
  const skyRef = useRef(null); // Utilisation de useRef pour accéder à #sky après le rendu

  useEffect(() => {
    let sky, center;

    function dot(i) {
      const size = Math.round(Math.random() + 1);
      const root = document.createElement("span");
      root.style.top = center.y + "px";
      root.style.left = center.x + "px";
      root.classList.add(styles.star, styles[`size-${size}`], styles[`axis-${i}`]);
      return root;
    }

    function clear() {
      if (sky) sky.innerHTML = "";
    }

    function init() {
      sky = skyRef.current;
      if (!sky) return;
      center = {
        x: sky.clientWidth / 2,
        y: sky.clientHeight / 2,
      };
      clear();
      for (let i = 0; i < 360; i++) {
        sky.appendChild(dot(i));
      }
    }

    init(); // Initialiser après le rendu

    window.addEventListener("resize", init); // Recalculer sur redimensionnement

    return () => {
      window.removeEventListener("resize", init); // Nettoyage
      clear();
    };
  }, []);

  return (

    <div className={styles.v1Container}>
    <div className={styles.sky} ref={skyRef}>
 

    </div>
    <img src="assets/diviniti-logo-purple.svg" alt="Diviniti logo" className={styles.homeLogo2}/>
    </div>
  );
}
