import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Countdown from "@/components/Countdown/countdown";
import WebsiteIntro from "@/components/WebsiteIntro/websiteIntro";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  // Fonction appelée après l'intro
  const handleIntroEnd = () => setShowContent(true);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.6,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const AnimatedLink = () => (
    <Link href="/about" passHref>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={styles.ctaButtonWrapper}
      >
        <a className={styles.ctaButton}>En savoir plus</a>
      </motion.div>
    </Link>
  );

  return (
    <>
      <Head>
        <title>Diviniti - Sûreté augmentée pour la ville de demain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Diviniti - Sûreté augmentée pour la ville de demain" />
        <meta property="og:description" content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive." />
        <meta property="og:url" content="https://www.diviniti.tech" />
      </Head>

      {showContent ? (
        <motion.div
          className={styles.homeContainer}
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <Countdown />
          <motion.img
            src="/assets/diviniti-logo-white.svg"
            alt="Diviniti logo"
            className={styles.homeLogo}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          <motion.div className={styles.titles} variants={container}>
            <motion.h2 variants={item}>Gaming for Realiti</motion.h2>
            <motion.h1 variants={item}>
              Le nouveau système d&apos;exploitation sûreté
            </motion.h1>
            <motion.div variants={item} className={styles.cta}>
              <AnimatedLink />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <WebsiteIntro onEnd={handleIntroEnd} />
      )}
    </>
  );
}
