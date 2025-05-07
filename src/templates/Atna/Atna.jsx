import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Atna() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("atna.metaTitle")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t("atna.metaOGTitle")} />
        <meta property="og:description" content={t("atna.metaDescription")} />
        <meta property="og:url" content="https://diviniti.tech/atna" />
        <meta name="description" content={t("atna.metaDescription")} />
        <meta property="og:keywords" content={t("atna.metaKeywords")} />
        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/AdobeStock_1083240270-1.webp"
          as="image"
        />
      </Head>

      <div className={styles.atnaContainer}>
        <h1>{t("atna.mainTitle")}</h1>
        <p>{t("atna.mainDescription")}</p>

        <div className={styles.atnaSolution}>
          <div className={styles.headerSection}>
            <div className={styles.header1}>
              <Image
                src="https://uploads.pixecurity.com/files/ATNa-logo-dark-bkgd-centered.png"
                alt="Diviniti - ATNa solution"
                width={200}
                height={200}
                priority={true}
              />
              <h2>{t("atna.headerTitle")}</h2>
              <p>{t("atna.headerDescription")}</p>
            </div>
            <div className={styles.header2}>
              <div className={styles.header2Left}>
                <h3>{t("atna.realTimeAnalysisTitle")}</h3>
                <p>{t("atna.realTimeAnalysisDesc")}</p>
                <h3>{t("atna.anomalyDetectionTitle")}</h3>
                <p>{t("atna.anomalyDetectionDesc")}</p>
                <h3>{t("atna.riskPredictionTitle")}</h3>
                <p>{t("atna.riskPredictionDesc")}</p>
                <h3>{t("atna.alertsTitle")}</h3>
                <p>{t("atna.alertsDesc")}</p>
              </div>
              <div className={styles.header2Right}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image12.webp"
                  alt=""
                  width={900}
                  height={900}
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className={styles.section1}>
            <h2>{t("atna.efficiencyTitle")}</h2>
            <div className={styles.section1Content}>
              <div className={styles.section1Left}>
                <div className={styles.section1Card}>
                  <p>{t("atna.efficiencyP1")}</p>
                  <p>{t("atna.efficiencyP2")}</p>
                  <ul>
                    <li>{t("atna.teamPolice")}</li>
                    <li>{t("atna.teamFirstAid")}</li>
                    <li>{t("atna.teamMaintenance")}</li>
                  </ul>
                  <p>{t("atna.efficiencyP3")}</p>
                </div>
              </div>
              <div className={styles.section1Right}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image13.webp"
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
