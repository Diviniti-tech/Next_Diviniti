import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Head from "next/head";

export default function Raven() {
  return (
    <>
      <Head>
        <title>Diviniti - Raven</title>
        <meta
          name="description"
          content="Raven est une solution de réalité augmentée qui permet aux opérateurs de se projeter sur le terrain à tout moment."
        />
        <meta
          name="keywords"
          content="Raven, réalité augmentée, sécurité, surveillance, capteurs, communication, terrain"
        />
        <meta name="author" content="Diviniti" />
        <meta property="og:title" content="Diviniti - Raven" />
        <meta
          property="og:description"
          content="Raven est une solution de réalité augmentée qui permet aux opérateurs de se projeter sur le terrain à tout moment."
        />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://www.diviniti.fr/raven" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diviniti" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diviniti - Raven" />
        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/AdobeStock_1263764734.webp"
          as="image"
        />
      </Head>
      <div className={styles.ravenContainer}>
        <div className={styles.headerSection}>
          <div className={styles.header1}>
            <Image
              src="https://uploads.pixecurity.com/files/raven-logo-dark-bkgd-centered.png"
              alt="Diviniti - Raven solution"
              width={200}
              height={200}
              priority={true}
            />
            <h1>Être partout en même temps grâce à la XR</h1>
            <p>
              RAVEN permet aux opérateurs d’être à la fois en position de
              superviser tout l’environnement et de se projeter sur le terrain à
              tout moment. Les agents sur site peuvent aussi interagir avec les
              capteurs sans
            </p>
          </div>
          <div className={styles.section1}>
            <div className={styles.section1Left}>
              <h2>L'immersion totale à portée de main !</h2>
              <p>
                RAVEN permet, à distance, de se déplacer facilement à n’importe
                quel endroit de l’environnement à piloter. A vol d’oiseau ou en
                immersion totale, depuis le PC sécurité, depuis chez soi ou
                depuis l’autre bout du monde vous interagissez avec tous les
                capteurs comme si vous pouviez les toucher du doigt.
              </p>
            </div>

            <div className={styles.section1Right}>
              <Image
                src="https://uploads.pixecurity.com/files/AdobeStock_720388563.webp"
                alt="Image de la solution Raven"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.section2Right}>
              <Image
                src="https://uploads.pixecurity.com/files/AdobeStock_1387063479.webp"
                alt="Image de la solution Raven"
                width={400}
                height={400}
              />
            </div>
            <div className={styles.section2Left}>
              <h2>
                Contrôlez vos capteurs et améliorez la communication sur le
                terrain
              </h2>
              <p>
                Sur le terrain, RAVEN vous donne la possibilité de commander
                tous les capteurs qui vous entourent, en revisionnant des flux
                vidéo de caméras par exemple, ou en déverrouillant une porte
                d’un claquement de doigt. Et permet aussi de recevoir des
                directives visuelles pour une communication plus efficace.
              </p>
              <h3>COMING SOON, in 2026…</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
