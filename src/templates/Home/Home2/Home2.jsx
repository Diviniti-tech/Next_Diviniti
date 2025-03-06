import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
// import ModalDownloadPdf from "@/components/ModalDownloadPdf/ModalDownloadPdf";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";

export default function Home2() {
  // const DownloadPdfButton = () => (
  //   <motion.button
  //     whileHover={{ scale: 1.05 }}
  //     className={styles.downloadButton}
  //     onClick={() => setShowModal(true)}
  //   >
  //     Télécharger la plaquette
  //   </motion.button>
  // );

  const [showModal, setShowModal] = useState(false);

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
      </Head>

      <div className={styles.homeContainer}>
        <div className={styles.section1}>
          <div className={styles.section1left}>
            <h2>Gaming for Realiti</h2>
            <h1>Le nouveau système d&apos;exploitation sûreté</h1>

            {/* Composant bouton de téléchargement de la plaquette commerciale */}
            {/* <DownloadPdfButton /> */}
            <div className={styles.cta}>
              <Link
                href="/gaming-for-realiti"
                passHref
                className={styles.ctaButton}
              >
                En savoir plus
              </Link>

              <button className={styles.ctaButton}>Demander une démo </button>
            </div>
          </div>

          <div className={styles.section1right}>
            <img src="assets/logo/test1.gif" alt="" />
          </div>
        </div>

        {/* <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/WR8Izjm4JF8"
              title="Diviniti: Révolutionnez la sûreté avec l&#39;IA, la XR et les codes du gaming"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}

        <div className={styles.section2}>
        <div className={styles.section2content}>
          <h3>Lorem ipsum dolor sit amet </h3>

          <h4>
            Consectetur ipsum dolor sit amet adipisicing elit. Iure suscipit
            neque, numquam{" "}
          </h4>

          <p>
            Iusto et delectus. ipsum dolor sit amet tempora placeat, temporibus
            est ullam earum architecto nihil ea ipsa sint officiis quaerat
            quisquam ut? Iure suscipit neque, numquamil ea ipsa sint officiis
            quaerat quisquam ut? Iure suscipit neque, numquam ipsum dolor sit
            amet tempora placeat
          </p>
          <p>
            Iipsa sint officiis quaerat quisquam ut? Iure suscipit neque, num
            sint officiis quaerat quisquam ut? Iure suscipit neque, numquam
            ipsum dolor sit amet tempora placeat
          </p>
        </div>
        </div>

        <div className={styles.section3}>
        <div className={styles.section3content}>
          <span>Iusto et delectus </span>

          <h4> Laudantium quasi rem eligendi</h4>

          <p>
            Iusto et delectus. ipsum dolor sit amet tempora placeat, Consectetur
            ipsum dolor sit amet adipisicing temporibus Iure suscipit neque,
            numquam ipsum dolor sit amet tempora placeat architecto nihil ea
            ipsa sint officiis quaerat{" "}
          </p>
          <Link href="/qui-sommes-nous" passHref>
            En savoir plus
          </Link>


          <img src="assets/logo/diviniti-logo3.png" className={styles.logo} alt="" />
          <div className={styles.cards}>
            <div className={styles.card}>
              <img
                src="https://uploads.pixecurity.com/files/ATNa-logo-clear-bkgd-centered.png"
                alt=""
              />
            </div>
            <div className={styles.card}>
              <img
                src="https://uploads.pixecurity.com/files/soron-logo-clear-bkgd-centered.png"
                alt=""
              />
            </div>
            <div className={styles.card}>
              <img
                src="https://uploads.pixecurity.com/files/befrost-logo-clear-bkgd-centered.png"
                alt=""
              />
            </div>
            <div className={styles.card}>
              <img
                src="https://uploads.pixecurity.com/files/raven-logo-clear-bkgd-centered.png"
                alt=""
              />
            </div>
            </div>
          </div>
        </div>

        <div className={styles.section4}>
        <div className={styles.section4content}>
          <h2> Dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Iusto et delectus. ipsum dolor sit amet tempora placeat, temporibus
            est ullam earum architecto nihil ea ipsa sint officiis quaerat
            quisquam ut? Iure suscipit neque, numquamil ea ipsa sint officiis
            quaerat quisquam ut? Iure suscipit neque, numquam ipsum dolor sit
            amet tempora placeat
          </p>
          <p>
            Iipsa sint officiis quaerat quisquam ut? Iure suscipit neque, num
            sint officiis quaerat quisquam ut? Iure suscipit neque, numquam
            ipsum dolor sit amet tempora placeat
          </p>
          </div>
        </div>

        <div className={styles.section5}>
        <div className={styles.section5content}>
          
          
        <div className={styles.section5left}>
          <img src="https://uploads.pixecurity.com/files/AdobeStock_540919231.png" alt="" />
          </div>
        <div className={styles.section5right}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

            <p>
              Iusto et delectus. ipsum dolor sit amet tempora placeat,
              temporibus est ullam earum architecto nihil ea ipsa sint officiis
              quaerat quisquam ut? Iure suscipit neque, numquamil ea ipsa sint
              officiis quaerat quisquam ut? Iure suscipit neque, numquam ipsum
              dolor sit amet tempora placeat
            </p>
        </div>
        </div>
        </div>

        {/* Composant Modal pour télécharger la plaquette commerciale */}
        {/* <ModalDownloadPdf showModal={showModal} setShowModal={setShowModal} /> */}
        <ModalBookDemo showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}
