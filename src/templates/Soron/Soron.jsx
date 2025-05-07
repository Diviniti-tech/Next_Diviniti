import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Head from "next/head";
import { t } from "i18next";

export default function Soron() {
  return (
    <>
      <Head>
        <title>{t("soron.title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t("soron.ogTitle")} />
        <meta property="og:description" content={t("soron.ogDescription")} />
        <meta property="og:url" content={t("soron.ogUrl")} />
        <meta name="description" content={t("soron.metaDescription")} />
        <meta property="og:keywords" content={t("soron.ogKeywords")} />
        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/AdobeStock_1299330558.webp"
          as="image"
        />
      </Head>

      <div className={styles.soronContainer}>
        <div className={styles.soronSolution}>
          <div className={styles.headerSection}>
            <div className={styles.header1}>
              <Image
                src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-centered.png"
                alt="Diviniti - Soron solution"
                width={200}
                height={200}
                priority={true}
              />
              <h2 className={styles.h2}>{t("soron.header1Title")}</h2>
              <p>{t("soron.header1Description")}</p>
            </div>
            <div className={styles.header2}>
              <div className={styles.header2Left}>
                <h3>{t("soron.header2Title")}</h3>
                <ul>
                  <li>{t("soron.header2List1")}</li>
                  <li>{t("soron.header2List2")}</li>
                  <li>{t("soron.header2List3")}</li>
                </ul>
                <h3>{t("soron.header3Title")}</h3>
              </div>

              <div className={styles.header2Right}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image15.webp"
                  alt=" Image de la solution Soron"
                  width={1000}
                  height={1000}
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div className={styles.demoVideo}>
            <video autoPlay loop muted preload="auto" controls>
              <source
                src="https://uploads.pixecurity.com/files/soron_test2_%E2%80%90_R%C3%A9alis%C3%A9e_avec_Clipchamp.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.section}>
            <h2>{t("soron.section1Title")}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.sectionLeft}>
                <div className={styles.sectionCard}>
                  <h3>{t("soron.section1Description")}</h3>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image18.webp"
                  alt=" Image de la solution Soron"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2>{t("soron.section2Title")}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.sectionLeft}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image6.webp"
                  alt=" Image de la solution Soron"
                  width={500}
                  height={380}
                />
              </div>
              <div className={styles.sectionRight}>
                <div className={styles.sectionCard}>
                  <h3>{t("soron.section2CardTitle")}</h3>
                  <h4>{t("soron.section2CardSubtitle")}</h4>
                  <p>{t("soron.section2CardDescription")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2>{t("soron.section3Title")}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.sectionLeft}>
                <div className={styles.sectionCard}>
                  <h3>{t("soron.section3CardTitle")}</h3>
                  <p>{t("soron.section3CardDescription")}</p>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image9.webp"
                  alt=" Image de la solution Soron"
                  width={500}
                  height={380}
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2>{t("soron.section4Title")}</h2>
            <div className={styles.sectionContent}>
              <div className={styles.sectionLeft}>
                <Image
                  src="https://uploads.pixecurity.com/files/Image10.webp"
                  alt=""
                  width={500}
                  height={380}
                />
              </div>
              <div className={styles.sectionRight}>
                <div className={styles.sectionCard}>
                  <h3>{t("soron.section4CardTitle")}</h3>
                  <p>{t("soron.section4CardDescription")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section6}>
            <div className={styles.section6content}>
              <div className={styles.section6card1}>
                <h3>{t("soron.section6Card1Title")}</h3>
                <p>{t("soron.section6Card1Description")}</p>
              </div>
              <div className={styles.section6card2}>
                <h3>{t("soron.section6Card2Title")}</h3>
                <p>{t("soron.section6Card2Description")}</p>
              </div>
              <div className={styles.section6card3}>
                <h3>{t("soron.section6Card3Title")}</h3>
                <p>{t("soron.section6Card3Description")}</p>
              </div>

              <Image
                src="https://uploads.pixecurity.com/files/Image11.webp"
                alt=""
                width={1100}
                height={1100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
