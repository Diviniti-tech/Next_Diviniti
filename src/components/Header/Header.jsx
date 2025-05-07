import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";
import { AnimatePresence, motion } from "framer-motion";
// Importer un package de switch ou utiliser un composant personnalisé
import Switch from "react-switch";
import { useTranslation } from "next-i18next"; // Importer le hook de traduction
import { useRouter } from "next/router"; // Importer le hook de routage
import i18next from "i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const linkedin = "https://www.linkedin.com/company/divinititech";
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSwitchedOn, setIsSwitchedOn] = useState(false); // État pour le switch

  const { t } = useTranslation();
  const router = useRouter(); // Hook pour récupérer le routeur

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSwitchChange = () => {
    const newState = !isSwitchedOn;
    setIsSwitchedOn(newState);

    const newLanguage = newState ? "en" : "fr"; // active 'en' quand switch est ON
    changeLanguage(newLanguage);
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };

  // Détection de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image
            src="/assets/logo/diviniti3.webp"
            alt="Diviniti logo"
            width={100}
            height={100}
            priority={true}
          />
        </Link>
      </div>

      {/* Menu responsive */}
      <motion.nav
        className={styles.headerLinks}
        initial={isMobile ? { x: "100%" } : { x: 0 }}
        animate={isOpen ? { x: 0 } : isMobile ? { x: "100%" } : { x: 0 }}
        transition={{ type: "keyframes", stiffness: 100, damping: 10 }}
      >
        <ul>
          <li>
            <Link href="/notre-mission-et-vision" onClick={toggleMenu}>
              {t("header.vision")}
            </Link>
          </li>
          <li className={styles.dropdown}>
            <span className={styles.dropdownTitle} onClick={toggleDropdown}>
              {t("header.solutions")} <i className="fa-solid fa-caret-down"></i>
            </span>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <li>
                    <Link
                      href="/soron"
                      onClick={() => {
                        toggleMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      <Image
                        src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-centered.png"
                        alt="Soron"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/atna"
                      onClick={() => {
                        toggleMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      <Image
                        src="https://uploads.pixecurity.com/files/ATNa-logo-dark-bkgd-centered.png"
                        alt="ATNa"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/befrost"
                      onClick={() => {
                        toggleMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      <Image
                        src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
                        alt="Befrost"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/raven"
                      onClick={() => {
                        toggleMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      <Image
                        src="https://uploads.pixecurity.com/files/raven-logo-dark-bkgd-centered.png"
                        alt="Raven"
                        width={80}
                        height={80}
                      />
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link href="/qui-sommes-nous" onClick={toggleMenu}>
              {t("header.about")}
            </Link>
          </li>
          <li>
            <Link href="/tendances-et-actus" onClick={toggleMenu}>
              {t("header.news")}
            </Link>
          </li>
          <li>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className={styles.linkedinIcon}
            >
              <Image
                src="/assets/linkedin.png"
                alt="logo linkedin"
                className={styles.linkedinIcon}
                width={80}
                height={45}
                priority={true}
              />
            </Link>
          </li>
          {/* Switch à droite */}
          <div className={styles.switchContainer}>
            <span className={styles.flagIcon}>
              <Image
                src="https://img.icons8.com/?size=100&id=YwnngGdMBmIV&format=png&color=000000"
                alt="French flag"
                width={28}
                height={28}
              />
            </span>
            {/* <span>FR</span> */}
            <Switch
              checked={isSwitchedOn}
              onChange={handleSwitchChange}
              offColor="#888"
              onColor="#4CAF50"
              uncheckedIcon={false}
              checkedIcon={false}
            />

            <span className={styles.flagIcon}>
              <Image
                src="https://img.icons8.com/?size=100&id=t3NE3BsOAQwq&format=png&color=000000"
                alt="English flag"
                width={28}
                height={28}
              />
            </span>
            {/* <span>EN</span> */}
          </div>
        </ul>

        <button className={styles.demoBtn} onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-rocket"></i> {t("header.cta")}
        </button>

        {/* <button className={styles.demoBtn} onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-rocket"></i> {t("header.CTA")}
        </button> */}
      </motion.nav>

      {/* Menu burger */}
      {isMobile && (
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <motion.div
            animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            className={styles.line}
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={styles.line}
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            className={styles.line}
          />
        </div>
      )}

      {/* Modal de démo */}
      {showModal && (
        <ModalBookDemo showModal={showModal} setShowModal={setShowModal} />
      )}
    </header>
  );
}
