// Modal qui permet le téléchargement de la plaquette commercial en pdf


import styles from './style.module.scss';

// les utilisateurs doivent renseigner leur nom et prénom, entreprise et email pour télécharger la plaquette
// les données sont envoyées à l'API pour être enregistrées dans la base de données
// une fois les données enregistrées, le pdf est téléchargé

export default function ModalDownloadPdf() {



return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
        <h2>Plaquette commerciale</h2>
        <p>Remplissez les champs ci-dessous pour télécharger la plaquette commerciale en PDF</p>
        <form>
            <label htmlFor="name">Nom et prénom</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="company">Entreprise</label>
            <input type="text" id="company" name="company" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Télécharger</button>
        </form>
        </div>
    </div>
    );
    }

    