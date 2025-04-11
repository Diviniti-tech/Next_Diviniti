import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ModalSolutions({ showModal, setShowModal }) {
  if (!showModal) return null;

  const modalRef = useRef(null);

  const handleClose = () => setShowModal(false);

  // Fermer si clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className={styles.modalSolutionsContainer}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent} ref={modalRef}>
          <span onClick={handleClose} className={styles.closeModal}>
            X
          </span>

          <motion.div
            className={styles.solutions}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <Link href="/soron" passHref>
                <div className={styles.solution} onClick={handleClose}>
                  <img
                    src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-centered.png"
                    alt=""
              
                  />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/atna" passHref>
                <div className={styles.solution} onClick={handleClose}>
                  <img
                    src="https://uploads.pixecurity.com/files/ATNa-logo-dark-bkgd-centered.png"
                    alt=""
                 
                  />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/befrost" passHref>
                <div className={styles.solution} onClick={handleClose}>
                  <img
                    src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
                    alt=""
                 
                  />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item}>
              <Link href="/raven" passHref>
                <div className={styles.solution} onClick={handleClose}>
                  <img
                    src="https://uploads.pixecurity.com/files/raven-logo-dark-bkgd-centered.png"
                    alt=""
                 
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
