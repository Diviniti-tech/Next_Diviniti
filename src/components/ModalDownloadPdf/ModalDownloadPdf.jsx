import styles from './style.module.scss';
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ModalDownloadPdf({ showModal, setShowModal }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const plaquette = '/assets/downloads/plaquette.png';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "prospects"), {
        name: name,
        company: company,
        email: email,
      });
      setSuccess('Merci pour votre demande, vous pouvez télécharger la plaquette');
      downloadPdf();
    } catch (e) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = plaquette;
    link.download = 'plaquette.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!showModal) return null; // Ne pas afficher le modal si showModal est false

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <span onClick={() => setShowModal(false)} className={styles.closeModal}>X</span>
        <h2>Télécharger la plaquette</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom et prénom</label>
          <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="company">Entreprise (optionnel) </label>
          <input type="text"  value={company} onChange={(e) => setCompany(e.target.value)} />
            <label htmlFor="email">Email</label>
          <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className={styles.submitBtn}>Télécharger</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
      </div>
    </div>
  );
}
