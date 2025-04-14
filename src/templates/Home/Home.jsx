import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";
import ModalSolutions from "@/components/ModalSolutions/ModalSolutions";

export default function Home() {
  const [showModalDemo, setShowModalDemo] = useState(false);
  const [showModalSolutions, setShowModalSolutions] = useState(false);

  return (
    <>
      <Head>
        <title>Diviniti - Sûreté augmentée pour la ville de demain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Diviniti - Sûreté augmentée pour la ville de demain"
        />
        <meta
          property="og:description"
          content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive."
        />
        <meta property="og:url" content="https://www.diviniti.tech" />

        <meta
          name="description"
          content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive."
        />
        <meta
          property="og:keywords"
          content="sûreté augmentée, vidéoprotection, intelligence artificielle, réalité étendue, XR, ville intelligente, sécurité proactive, analyse d'image, contrôle d'accès, prédiction des risques, gestion de la sécurité, smart city, transport sécurisé, Diviniti"
        />

        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/1-1.webp"
          as="image"
        />

        <link rel="preload" href="/assets/logo/test1.gif" as="image" />
      </Head>

      <div className={styles.homeContainer}>
        <div className={styles.section1}>
          <div className={styles.section1left}>
            <h2>Gaming for Realiti</h2>
            <h1>Une nouvelle ère pour la sûreté</h1>
            <p>
              Grâce à une combinaison unique d’intelligence artificielle, de XR
              et des codes du gaming, Diviniti révolutionne la sûreté pour les
              environnements urbains et industriels.
            </p>
            <div className={styles.cta}>
              <button
                className={styles.seeSolutions}
                onClick={() => setShowModalSolutions(true)}
              >
                Découvrir nos solutions
              </button>
            </div>
          </div>
          <div className={styles.section1right}>
            <Image
              src="/assets/logo/test1.gif"
              alt="Animation Soron Logo"
              width={400}
              height={400}
              priority
              sizes="(max-width: 768px) 200px, 400px"
            />
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.section2content}>
            <h3>Une solution innovante pour la sûreté</h3>
            <h4>IA, XR et automatisation pour une sécurité proactive</h4>
            <p>
              Nos technologies permettent une détection et une anticipation des
              menaces en temps réel, réduisant les risques et optimisant la
              gestion des interventions.
            </p>
            <Link
              href="/notre-mission-et-vision"
              passHref
              className={styles.ctaButton}
            >
              Notre mission et vision
            </Link>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.section3content}>
            <span>Nos solutions technologiques</span>
            <h4>Une suite complète pour une sûreté augmentée</h4>
            <p>
              Diviniti propose un écosystème de solutions innovantes intégrant
              l’IA, la 3D et la réalité mixte pour répondre aux défis de la
              sécurité de demain.
            </p>

            <div className={styles.cards}>
              <Link href="/soron" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/soron-logo-clear-bkgd-centered.png"
                    alt="Soron Logo"
                    width={150}
                    height={110}
                    loading="lazy"
                  />
                  <p>
                    <strong>Soron</strong> - Logiciel d’hypervision 3D pour une
                    gestion immersive des opérations de sûreté.
                  </p>
                </div>
              </Link>
              <Link href="/atna" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/ATNa-logo-clear-bkgd-centered.png"
                    alt="ATNa Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <p>
                    <strong>ATNa</strong> - Intelligence artificielle et
                    algorithmes avancés pour l’analyse des flux vidéo.
                  </p>
                </div>
              </Link>

              <Link href="/raven" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/raven-logo-clear-bkgd-centered.png"
                    alt="Raven Logo"
                    width={150}
                    height={100}
                    loading="lazy"
                  />
                  <p>
                    <strong>Raven</strong> - Casques VR et solutions de réalité
                    mixte pour l'entraînement et l’intervention.
                  </p>
                </div>
              </Link>
              <Link href="/befrost" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/befrost-logo-clear-bkgd-centered.png"
                    alt="Befrost Logo"
                    width={210}
                    height={110}
                    loading="lazy"
                  />
                  <p>
                    <strong>Befrost</strong> - Connecteurs intelligents assurant
                    l’interopérabilité des systèmes de sécurité.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.section4content}>
            <h2>Des solutions adaptées aux défis d’aujourd’hui</h2>
            <p>
              Qu’il s’agisse de sécuriser des espaces publics, des
              infrastructures critiques ou des événements, nos technologies
              offrent une approche flexible et efficace.
            </p>
          </div>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/WR8Izjm4JF8"
            title="Diviniti: Révolutionnez la sûreté avec l&#39;IA, la XR et les codes du gaming"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.section5}>
          <div className={styles.section5content}>
            <div className={styles.section5left}>
              <Image
                src="https://uploads.pixecurity.com/files/AdobeStock_540919231.webp"
                alt="Illustration de la sûreté augmentée"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className={styles.section5right}>
              <h2>Découvrez la sûreté augmentée avec Diviniti</h2>
              <p>
                Grâce à une approche combinant analyse prédictive et assistance
                immersive, nous permettons aux opérateurs de réagir plus
                rapidement et plus efficacement.
              </p>
              <button
                className={styles.bookDemo}
                onClick={() => setShowModalDemo(true)}
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalBookDemo
        setShowModal={setShowModalDemo}
        showModal={showModalDemo}
      />

      <ModalSolutions
        showModal={showModalSolutions}
        setShowModal={setShowModalSolutions}
      />
    </>
  );
}
