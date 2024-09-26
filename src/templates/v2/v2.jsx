import styles from './style.module.scss';
import { motion } from 'framer-motion';


export default function V2() {
    const flip = {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1, transition: { duration: 0.6 } },
      };
    
      return (
        <div className={styles.v2Container}>
          <motion.img
            src="assets/diviniti-logo-white.svg"
            // src="assets/diviniti-logo-gradient.svg"
            alt="Diviniti logo"
            className={styles.homeLogo3}
            animate={{ scale: [1, 1.05, 1] }} // Légère animation de pulse
        transition={{
          duration: 1, // Durée de l'animation
          ease: 'easeInOut', // Transition fluide
          repeat: Infinity, // Répéter à l'infini
        }}
          />
        </div>
      );
    }
