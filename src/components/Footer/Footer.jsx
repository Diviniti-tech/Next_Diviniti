import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ModalSolutions from "../ModalSolutions/ModalSolutions";
import ModalBookDemo from "../ModalBookDemo/ModalBookDemo";
import { useTranslation } from "next-i18next";

function Footer() {
  const [showModalSolutions, setShowModalSolutions] = useState(false);
  const [showModalDemo, setShowModalDemo] = useState(false);
  const { t } = useTranslation();

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
          {t("footer.slogan")}
        </p>
      </div>

      <div className={styles["section-2"]}>
        <h4>{t("footer.siteMap")}</h4>
        <ul>
          <li>
            <Link href="/">{t("footer.home")}</Link>
          </li>
          <li>
            <Link href="/gaming-for-realiti">{t("footer.mission")}</Link>
          </li>
          <li onClick={() => setShowModalSolutions(true)}>
            {t("footer.solutions")}
          </li>
          <li>
            <Link href="/qui-sommes-nous">{t("footer.about")}</Link>
          </li>
          <li>
            <Link href="/tendances-et-actus">{t("footer.blog")}</Link>
          </li>
          <li onClick={() => setShowModalDemo(true)}>
            {t("footer.demo")}
          </li>
          <li>
            <Link href="/contact">{t("footer.contact")}</Link>
          </li>
        </ul>
      </div>

      <div className={styles["section-3"]}>
        <h4>{t("footer.contact")}</h4>
        <ul>
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
            © 2025 Diviniti. {t("footer.rights")}
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
