import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu burger
  const [isMobile, setIsMobile] = useState(false); // État pour la détection de l'écran mobile
  const linkedin = "https://www.linkedin.com/company/divinititech";
  const [showModal, setShowModal] = useState(false); // État pour le modal de démo
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  // Détection de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Mobile/Tablet si largeur <= 1024px
    };

    handleResize(); // Vérifie une première fois au chargement
    window.addEventListener("resize", handleResize); // Ajoute un écouteur pour suivre les changements

    return () => {
      window.removeEventListener("resize", handleResize); // Nettoyage
    };
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link href="/">
          <Image
            src="/assets/logo/diviniti3.png"
            alt="Diviniti logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Menu responsive */}
      <motion.nav
        className={styles.headerLinks}
        initial={isMobile ? { x: "100%" } : { x: 0 }} // Visible sur desktop
        animate={isOpen ? { x: 0 } : isMobile ? { x: "100%" } : { x: 0 }}
        transition={{ type: "keyframes", stiffness: 100, damping: 10 }}
      >
        <ul>
          <li>
            <Link href="/notre-mission-et-vision" onClick={toggleMenu}>
              Notre Mission et Vision
            </Link>
          </li>
          <li className={styles.dropdown}>
            <span className={styles.dropdownTitle} onClick={toggleDropdown}>
              Nos Solutions <i className="fa-solid fa-caret-down"></i>
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
              Qui Sommes-Nous ?
            </Link>
          </li>
          <li>
            <Link href="/tendances-et-actus" onClick={toggleMenu}>
              Tendances & Actus
            </Link>
          </li>
          <li>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
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
        </ul>

        <button className={styles.demoBtn} onClick={() => setShowModal(true)}>
          <i className="fa-solid fa-rocket"></i> {"  "} Commencez ici
        </button>
      </motion.nav>

      {/* Menu burger */}
      {isMobile && ( // Affiche le menu burger uniquement en mobile
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
