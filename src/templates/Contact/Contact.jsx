import styles from "./style.module.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nomRegex = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d+$/;

    const newErrors = {};

    if (!nomRegex.test(formData.nom)) {
      newErrors.nom = t("contact.errors.name");
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contact.errors.email");
    }

    if (formData.telephone && !phoneRegex.test(formData.telephone)) {
      newErrors.telephone = t("contact.errors.phone");
    }

    if (formData.message.trim().length < 30) {
      newErrors.message = t("contact.errors.message");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSending(true);

    const templateParams = {
      name: formData.nom,
      entreprise: formData.entreprise || "Non précisée",
      email: formData.email,
      telephone: formData.telephone || "Non précisé",
      message: formData.message,
      time: new Date().toLocaleString("fr-FR"),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID2,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      setFormData({
        nom: "",
        entreprise: "",
        email: "",
        telephone: "",
        message: "",
      });

      Swal.fire({
        title: t("contact.alert.successTitle"),
        text: t("contact.alert.successText"),
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: t("contact.alert.errorTitle"),
        text: t("contact.alert.errorText"),
        icon: "error",
        confirmButtonText: t("contact.alert.ok"),
      });

      setErrors({ submit: t("contact.errors.submit") });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Diviniti - Contact</title>
        <meta
          name="description"
          content={t("contact.description")}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={`Contact | Diviniti`} />
        <meta property="og:description" content={t("contact.description")} />
        <meta
          property="og:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta property="og:url" content="https://diviniti.tech/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Contact | Diviniti`} />
        <meta name="twitter:description" content={t("contact.description")} />
        <meta
          name="twitter:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />

        <link
          rel="icon"
          href="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
      </Head>

      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <div className={styles.contactRight}>
            <h1>{t("contact.title")}</h1>
            <h2>{t("contact.subtitle")}</h2>
            <h3>{t("contact.description")}</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="nom"
                placeholder={t("contact.placeholders.name")}
                value={formData.nom}
                onChange={handleChange}
              />
              {errors.nom && <p className={styles.error}>{errors.nom}</p>}

              <input
                type="text"
                name="entreprise"
                placeholder={t("contact.placeholders.company")}
                value={formData.entreprise}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder={t("contact.placeholders.email")}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}

              <input
                type="tel"
                name="telephone"
                placeholder={t("contact.placeholders.phone")}
                value={formData.telephone}
                onChange={handleChange}
              />
              {errors.telephone && (
                <p className={styles.error}>{errors.telephone}</p>
              )}

              <textarea
                name="message"
                placeholder={t("contact.placeholders.message")}
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}

              {errors.submit && (
                <p className={styles.error}>{errors.submit}</p>
              )}

              <button type="submit" disabled={isSending}>
                {isSending
                  ? t("contact.button.sending")
                  : t("contact.button.send")}
              </button>
            </form>
          </div>
          <div className={styles.contactLeft}>
            <img
              src="https://uploads.pixecurity.com/files/diviniti-logo-white_copie.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
