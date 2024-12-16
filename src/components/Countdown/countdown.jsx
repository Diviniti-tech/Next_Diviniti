import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-16 16:00:00") - +new Date();
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

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.countdownContainer}>
      <h2>RENDEZ-VOUS le 16 décembre</h2>
      <motion.div className={styles.countdown} variants={item}>
        {["jours", "heures", "minutes", "secondes"].map((unit) => (
          <div key={unit} className={styles.countdownItem}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={timeLeft[unit]}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={itemVariants}
                transition={{ duration: 0.3 }}
                className={styles.countdownNumber}
              >
                {timeLeft[unit]}
              </motion.span>
            </AnimatePresence>
            <span className={styles.unitLabel}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
