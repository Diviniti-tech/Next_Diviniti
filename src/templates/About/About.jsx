import Link from "next/link";
import styles from "./style.module.scss";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";

export default function About() {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <Head>
        <title>Diviniti - Notre mission et Vision</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Diviniti - Sûreté augmentée pour la ville de demain"
        />
        <meta
          property="og:description"
          content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive."
        />
        <meta
          property="og:keywords"
          content="sûreté augmentée, vidéoprotection, intelligence artificielle, réalité étendue, XR, ville intelligente, sécurité proactive, analyse d'image, contrôle d'accès, prédiction des risques, gestion de la sécurité, smart city, transport sécurisé, Diviniti"
        />
        <meta property="og:url" content="https://www.diviniti.tech" />
      </Head>

      <div className={styles.aboutContainer}>
        <div className={styles.section1}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
          <div className={styles.section1content}>
            <h1>Réinventer la sécurité grâce à l'innovation</h1>
            <p>
              Diviniti révolutionne la sûreté en combinant intelligence
              artificielle, réalité étendue et technologies avancées pour offrir
              une protection proactive et immersive des environnements urbains
              et industriels.
            </p>
         
            {/* 🔹 Bouton pour ouvrir le modal */}
            <button className={styles.bookDemoButton} onClick={() => setShowModal(true)}>
              Réserver une démo
            </button>
        
        </div>

        {/* 🔹 Affichage du modal si showModal est true */}
        {showModal && <ModalBookDemo onClose={() => setShowModal(false)} />}
        </div>

        <div className={styles.section2}>
          <div className={styles.section2content}>
            <h1>Notre mission et vision</h1>

            <p>
              Diviniti est une société innovante spécialisée dans le
              développement de solutions logicielles pour la ville de demain.
              Avec notre expertise en vidéoprotection, contrôle d&apos;accès et
              analyse d&apos;image, combinée aux dernières avancées en matériel
              et intelligence artificielle, notre mission est de transformer la
              manière dont les entreprises, infrastructures de transport et
              villes sécurisent et supervisent leurs environnements.
            </p>

            <p>
              Nous proposons un véritable système d&apos;exploitation dédié à la
              sûreté, s&apos;inspirant des interfaces de gaming pour offrir une
              expérience utilisateur intuitive et engageante. Grâce à
              l&apos;intégration de la réalité étendue (XR), nos utilisateurs
              peuvent interagir avec leur environnement à distance et
              s&apos;immerger dans des lieux physiques comme s&apos;ils y
              étaient.
            </p>

            <p>
              L&apos;intelligence artificielle au cœur de nos technologies
              permet de prédire les risques potentiels, d&apos;analyser des flux
              vidéo en temps réel et d&apos;automatiser les réponses pour une
              gestion proactive de la sécurité. Cette approche innovante,
              alliant prévision et immersion, est conçue pour répondre aux
              besoins évolutifs de bâtiments complexes, systèmes de transport et
              villes intelligentes, en offrant un contrôle accru et une
              efficacité renforcée.
            </p>

            <p>
              En tant que pionnier de la sûreté augmentée, Diviniti redéfinit
              les normes de l&apos;industrie et s&apos;engage à façonner un
              avenir plus sûr, plus intelligent et plus connecté.
            </p>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.section3content}>
            <Image
              src="https://uploads.pixecurity.com/files/screenshots1.webp"
              alt="Aperçu des solutions Diviniti"
              className={styles.mainImage}
              width={800}
              height={500}
              loading="lazy"
            />

            <div className={styles.section3cards}>
              <Image
                src="https://uploads.pixecurity.com/files/screenshots_%282%29.webp"
                alt="Interface utilisateur Diviniti"
                width={400}
                height={400}
                loading="lazy"
              />

              <Image
                src="https://uploads.pixecurity.com/files/screenshots_%283%29.webp"
                alt="Technologie immersive Diviniti"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.section4content}>
            <div className={styles.left}>
              <h2>Une approche centrée sur l'utilisateur</h2>

              <h1>Transformer la sûreté en une expérience immersive</h1>
              <p>
                "Grâce à une interface intuitive et à des outils basés sur l'IA,
                nous permettons aux opérateurs de sécurité d’anticiper les
                risques et de réagir efficacement en temps réel."
              </p>
              <Link href="/qui-sommes-nous">Qui sommes nous ?</Link>
              <div className={styles.leftBottom}>
                <Image
                  src="https://avatar.iran.liara.run/public/boy?username=Ash"
                  alt="Utilisateur Diviniti"
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <p>Une innovation au service de la sûreté</p>
                <p>Optimisation, réactivité et immersion</p>
              </div>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
*

        
      </div>

      <ModalBookDemo showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
