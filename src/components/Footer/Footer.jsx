
import styles from "./style.module.scss";
import Link from "next/link";

function Footer() {

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-1"]}>
        <img src="/assets/diviniti-logo-purple.svg" alt="Logo Diviniti" loading="lazy" />
        <p className={styles.slogan}>Gaming for Realiti</p>
        <p className={styles.description}>Le nouveau système d'exploitation sûreté</p>
      </div>
      {/* <div className={styles["section-2"]}>
        <img className={styles.mase} src="/assets/icons/mase.png" alt="Logo MASE" loading="lazy" />
      </div> */}
      <div className={styles["section-3"]}>
        <h4>Plan de site </h4>
        <ul>
          <Link href="/">
            <li>Accueil</li>
          </Link>
          <Link href="/about">
            <li>A Propos</li>
          </Link>
         
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>Contact</h4>
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <Link href="mailto:pixecurity@pixecurity.com">
              email.diviniti.fr
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>phone
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> adresse
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <Link href="https://www.linkedin.com/company/divinititech/">
              Linkedin
            </Link>
          </li>
          <p className={styles.copyright}>© 2024 Diviniti. Tous droits réservés.</p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
