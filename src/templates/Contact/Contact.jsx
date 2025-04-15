import styles from "./style.module.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Head from "next/head";

export default function Contact() {
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
      newErrors.nom =
        "Le nom doit contenir uniquement des lettres (min 2 caractères).";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }

    if (formData.telephone && !phoneRegex.test(formData.telephone)) {
      newErrors.telephone =
        "Le téléphone doit contenir uniquement des chiffres (+ autorisé).";
    }

    if (formData.message.trim().length < 30) {
      newErrors.message = "Merci d’écrire au moins 30 caractères.";
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
      // Affichez une alerte de succès
      Swal.fire({
        title: "Merci !",
        text: "Votre message a été envoyé avec succès.",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      // Affichez une alerte d'erreur
      Swal.fire({
        title: "Erreur !",
        text: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        icon: "error",
        confirmButtonText: "OK",
      });

      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
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
          content="Contactez Diviniti pour toute question, collaboration ou demande de devis. Nous sommes à votre écoute."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Contact | Diviniti" />
        <meta
          property="og:description"
          content="Prenez contact avec l'équipe Diviniti pour vos projets, partenariats ou informations."
        />
        <meta
          property="og:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta property="og:url" content="https://www.diviniti.tech/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Diviniti" />
        <meta
          name="twitter:description"
          content="Contactez-nous pour vos projets de design, communication ou branding."
        />
        <meta
          name="twitter:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="https://uploads.pixecurity.com/files/divinit-new.jpg" />
      </Head>
  


    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactRight}>
          <h1>Envie d’innover avec nous ? </h1>
          <h2>Contactez Diviniti</h2>
          <h3>
            Diviniti, c’est avant tout une aventure humaine et technologique.
            Que vous soyez une entreprise, une collectivité ou un curieux de
            passage, on serait ravis d’échanger avec vous. Laissez-nous un
            message, on vous répond vite !
          </h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="nom"
              placeholder="Nom et prénom"
              value={formData.nom}
              onChange={handleChange}
            />
            {errors.nom && <p className={styles.error}>{errors.nom}</p>}

            <input
              type="text"
              name="entreprise"
              placeholder="Entreprise (optionnel)"
              value={formData.entreprise}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <input
              type="tel"
              name="telephone"
              placeholder="Téléphone (optionnel)"
              value={formData.telephone}
              onChange={handleChange}
            />
            {errors.telephone && (
              <p className={styles.error}>{errors.telephone}</p>
            )}

            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}

            {errors.submit && <p className={styles.error}>{errors.submit}</p>}

            <button type="submit" disabled={isSending}>
              {isSending ? "Envoi en cours..." : "Envoyer"}
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
