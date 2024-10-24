// creation d un composant Countdown qui affiche un compte à rebours jusq'au 15/11/2024 12h00

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-11-15 12:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.countdownContainer}>
      <h2>RDV le 15 novembre </h2>
      <motion.div variants={item} className={styles.countdown}>
        <div className={styles.countdownItem}>
          <span>{timeLeft.jours}</span>
          <span>Jours</span>
        </div>
        <div className={styles.countdownItem}>
          <span>{timeLeft.heures}</span>
          <span>Heures</span>
        </div>
        <div className={styles.countdownItem}>
          <span>{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        < div className={styles.countdownItem}>
          <span>{timeLeft.secondes}</span>
          <span>Secondes</span>
      </div>
     </motion.div>
    </div>
  );
}
