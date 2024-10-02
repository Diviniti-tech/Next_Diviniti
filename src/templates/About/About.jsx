import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Vue d`&apos;`ensemble</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src="/assets/diviniti-logo-gradient.svg" // Chemin relatif depuis public/
          alt="logo Diviniti"
          width={500} // Remplace avec la largeur réelle de l'image
          height={300} // Remplace avec la hauteur réelle de l'image
          priority // Optionnel, si tu veux charger l'image plus tôt
        />
      </motion.div>

      <div className={styles.aboutDescription}>
        <p>
          Diviniti est une société innovante spécialisée dans le développement
          de solutions logicielles pour la ville de demain. Avec notre expertise
          de la vidéoprotection, du contrôle d`&apos;`accès et de l`&apos;`analyse d`&apos;`image,
          combinées au dernières avancées en termes de matériel et
          d`&apos;`intelligence artificielle, notre mission est de transformer la
          manière dont les entreprises, les infrastructures de transport et les
          villes sécurisent et supervisent leurs environnements.
        </p>

        <p>
          Nous proposons un véritable système d`&apos;`exploitation dédié à la sûreté,
          qui s`&apos;`inspire des interfaces de gaming pour offrir une expérience
          utilisateur intuitive et engageante. Grâce à l`&apos;`intégration de la
          réalité étendue (XR), nos utilisateurs peuvent interagir avec leur
          environnement à distance et s`&apos;`immerger dans des lieux physiques comme
          s`&apos;`ils y étaient.
        </p>

        <p>
          L`&apos;`intelligence artificielle au cœur de nos technologies permet de
          prédire les risques potentiels, d`&apos;`analyser des flux vidéo en temps
          réel, et d`&apos;`automatiser les réponses pour une gestion proactive de la
          sécurité. Cette approche innovante, alliant prévision et immersion,
          est conçue pour répondre aux besoins évolutifs de bâtiments complexes,
          systèmes de transport, et villes intelligentes, en offrant un contrôle
          accru et une efficacité renforcée.
        </p>

        <p>
          En tant que pionnier de la sûreté augmentée, Diviniti redéfinit les
          normes de l`&apos;`industrie et s`&apos;`engage à façonner un avenir plus sûr, plus
          intelligent et plus connecté.
        </p>
      </div>
    </div>
  );
}
