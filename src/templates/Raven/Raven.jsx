import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "next-i18next";


export default function Raven() {
 const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
        <meta name="author" content="Diviniti" />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://diviniti.tech/raven" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diviniti" />
        <meta property="og:locale" content={t("meta.locale")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.title")} />
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
              alt={t("logoAlt")}
              width={200}
              height={200}
              priority={true}
            />
            <h1>{t("headerRaven.title")}</h1>
            <p>{t("headerRaven.text")}</p>
          </div>
          <div className={styles.section1}>
            <div className={styles.section1Left}>
              <h2>{t("section1.title")}</h2>
              <p>{t("section1.text")}</p>
            </div>
            <div className={styles.section1Right}>
              <Image
                src="https://uploads.pixecurity.com/files/AdobeStock_720388563.webp"
                alt={t("section1.imageAlt")}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.section2Right}>
              <Image
                src="https://uploads.pixecurity.com/files/AdobeStock_1387063479.webp"
                alt={t("section2.imageAlt")}
                width={400}
                height={400}
              />
            </div>
            <div className={styles.section2Left}>
              <h2>{t("section2.title")}</h2>
              <p>{t("section2.text")}</p>
              <h3>{t("section2.comingSoon")}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


