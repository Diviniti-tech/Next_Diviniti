import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Vue d&aposensemble</h1>

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
          de la vidéoprotection, du contrôle d&aposaccès et de l'analyse d&aposimage,
          combinées au dernières avancées en termes de matériel et
          d'intelligence artificielle, notre mission est de transformer la
          manière dont les entreprises, les infrastructures de transport et les
          villes sécurisent et supervisent leurs environnements.
        </p>

        <p>
          Nous proposons un véritable système d&aposexploitation dédié à la sûreté,
          qui s'inspire des interfaces de gaming pour offrir une expérience
          utilisateur intuitive et engageante. Grâce à l&aposintégration de la
          réalité étendue (XR), nos utilisateurs peuvent interagir avec leur
          environnement à distance et s&aposimmerger dans des lieux physiques comme
          s&aposils y étaient.
        </p>

        <p>
          L&aposintelligence artificielle au cœur de nos technologies permet de
          prédire les risques potentiels, d&aposanalyser des flux vidéo en temps
          réel, et d'automatiser les réponses pour une gestion proactive de la
          sécurité. Cette approche innovante, alliant prévision et immersion,
          est conçue pour répondre aux besoins évolutifs de bâtiments complexes,
          systèmes de transport, et villes intelligentes, en offrant un contrôle
          accru et une efficacité renforcée.
        </p>

        <p>
          En tant que pionnier de la sûreté augmentée, Diviniti redéfinit les
          normes de l&aposindustrie et s'engage à façonner un avenir plus sûr, plus
          intelligent et plus connecté.
        </p>
      </div>
    </div>
  );
}
