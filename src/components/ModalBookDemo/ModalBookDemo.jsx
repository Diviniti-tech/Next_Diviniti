import styles from "./style.module.scss";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ModalBookDemo({ showModal, setShowModal }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email) {
      setError(t("modal.errorFillFields"));
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      Swal.fire({
        title: t("modal.errorTitle"),
        text: t("modal.errorConfig"),
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      await addDoc(collection(db, "demoContact"), { name, company, email });

      const templateParams = { name, company, email };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID1,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      Swal.fire({
        title: t("modal.successTitle"),
        text: t("modal.successText"),
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => setShowModal(false));
    } catch (e) {
      Swal.fire({
        title: t("modal.errorTitle"),
        text: t("modal.errorGeneric"),
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <span onClick={() => setShowModal(false)} className={styles.closeModal}>X</span>
        <h1>{t("modal.title")}</h1>

        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source
            src="https://uploads.pixecurity.com/files/soron_test_mini_%E2%80%90_R%C3%A9alis%C3%A9e_avec_Clipchamp.mp4"
            type="video/mp4"
            preload="auto"
          />
        </video>

        <h2>{t("modal.subtitle")}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">{t("modal.labelName")}</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="company">{t("modal.labelCompany")}</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />

          <label htmlFor="email">{t("modal.labelEmail")}</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button type="submit" className={styles.submitBtn}>
            {t("modal.submitButton")}
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
