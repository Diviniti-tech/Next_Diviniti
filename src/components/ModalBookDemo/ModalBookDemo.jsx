import styles from './style.module.scss';
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export default function ModalBookDemo({ showModal, setShowModal }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Valider la configuration EmailJS
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ) {
      console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log('User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
    
      Swal.fire({
        title: 'Erreur',
        text: "La configuration EmailJS est manquante. Veuillez contacter l'administrateur.",
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
    

    try {
      // Ajouter le prospect à Firestore
      await addDoc(collection(db, "demoContact"), {
        name: name,
        company: company,
        email: email,
      });

      // Envoi de l'email via EmailJS
      const templateParams = {
        name,
        company,
        email,
      
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      // Afficher une alerte SweetAlert et fermer le modal
      Swal.fire({
        title: 'Merci !',
        text: 'Votre demande a été envoyée avec succès. Vous serez recontacté sous peu.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        setShowModal(false); // Fermer le modal
      });
    } catch (e) {
      Swal.fire({
        title: 'Erreur',
        text: "Une erreur s'est produite. Veuillez réessayer.",
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  if (!showModal) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <span onClick={() => setShowModal(false)} className={styles.closeModal}>X</span>
        <h1>Planifions une démo !</h1>
        <h2> 
          Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom et prénom</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="company">Entreprise (optionnel)</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className={styles.submitBtn}>Me contacter</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
