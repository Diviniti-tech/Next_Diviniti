import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ModalSolutions from "../ModalSolutions/ModalSolutions";
import ModalBookDemo from "../ModalBookDemo/ModalBookDemo";

function Footer() {
  const [showModalSolutions, setShowModalSolutions] = useState(false);
  const [showModalDemo, setShowModalDemo] = useState(false);

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["section-1"]}>
        <Image
          src="/assets/logo/diviniti4.png"
          alt="Logo Diviniti"
          width={400}
          height={200}
        />
        <p className={styles.slogan}>Gaming for Realiti</p>
        <p className={styles.description}>
          Le nouveau système d&apos;exploitation sûreté
        </p>
      </div>

      <div className={styles["section-2"]}>
        <h4>Plan de site </h4>
        <ul>
          <Link href="/">
            <li>Accueil</li>
          </Link>
          <Link href="/gaming-for-realiti">
            <li>Notre Mission et Vision</li>
          </Link>
          <p onClick={() => setShowModalSolutions(true)}>
            <li>Nos Solutions</li>
          </p>

          <Link href="/qui-sommes-nous">
            <li>Qui Sommes-Nous ?</li>
          </Link>
          <Link href="/tendances-et-actus">
            <li>Tendances & Actus</li>
          </Link>
          <p onClick={() => setShowModalDemo(true)}>
            <li>Demander une démo</li>
          </p>
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>Contact</h4>
        <ul>
          {/* <li>
            <i className="fa-solid fa-envelope"></i>
            <Link href="mailto:diviniti@diviniti.com">diviniti@diviniti.com</Link>
          </li> */}
          <li>
            <i className="fa-solid fa-phone"></i>(+33) 1 39 60 98 82
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i> 38 Rue Jean Mermoz,
            78600 Maisons-Laffitte
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <Link href="https://www.linkedin.com/company/divinititech/">
              Linkedin
            </Link>
          </li>
          <p className={styles.copyright}>
            © 2025 Diviniti. Tous droits réservés.
          </p>
        </ul>
      </div>
      <ModalSolutions
        showModal={showModalSolutions}
        setShowModal={setShowModalSolutions}
      />
      <ModalBookDemo
        setShowModal={setShowModalDemo}
        showModal={showModalDemo}
      />
    </div>
  );
}

export default Footer;
