import Link from "next/link";
import styles from "./style.module.scss";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";
import ModalSolutions from "@/components/ModalSolutions/ModalSolutions";
import { useTranslation } from "react-i18next";

export default function NotreMissionEtVision() {
  const [showModalDemo, setShowModalDemo] = useState(false);
  const [showModalSolutions, setShowModalSolutions] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("mission.metaTitle")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t("mission.metaTitle")} />
        <meta property="og:description" content={t("mission.metaDescription")} />
        <meta property="og:keywords" content={t("mission.metaKeywords")} />
        <meta
          property="og:url"
          content="https://diviniti.tech/notre-mission-et-vision"
        />
        <meta
          property="og:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta name="twitter:title" content={t("mission.metaTitle")} />
        <meta name="twitter:description" content={t("mission.metaDescription")} />
        <meta
          name="twitter:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.aboutContainer}>
        <div className={styles.section1}>
          <video
            autoPlay
            loop
            muted
            preload="auto"
            className={styles.backgroundVideo}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
          <div className={styles.section1content}>
            <h1>{t("mission.section1.title")}</h1>
            <p>{t("mission.section1.text")}</p>
            <div className={styles.solutionsLogos}>
              <Image src="https://uploads.pixecurity.com/files/soron.png" alt="Soron" width={100} height={100} />
              <Image src="https://uploads.pixecurity.com/files/atna.png" alt="Atna" width={100} height={100} />
              <Image src="https://uploads.pixecurity.com/files/befrost.png" alt="Befrost" width={100} height={100} />
              <Image src="https://uploads.pixecurity.com/files/raven.png" alt="Raven" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.section2content}>
            <h1>{t("mission.section2.title")}</h1>
            <p>{t("mission.section2.p1")}</p>
            <p>{t("mission.section2.p2")}</p>
            <p>{t("mission.section2.p3")}</p>
            <p>{t("mission.section2.p4")}</p>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.section3content}>
            <video
              autoPlay
              loop
              muted
              preload="auto"
              controls
              className={styles.backgroundVideo}
            >
              <source
                src="https://uploads.pixecurity.com/files/SORON-_web_video_480p.mp4"
                type="video/mp4"
              />
            </video>
            <button
              className={styles.seeSolutions}
              onClick={() => setShowModalSolutions(true)}
            >
              {t("mission.section3.cta")}
            </button>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.section4content}>
            <div className={styles.left}>
              <h2>{t("mission.section4.subtitle")}</h2>
              <h1>{t("mission.section4.title")}</h1>
              <p>{t("mission.section4.description")}</p>
              <Link href="/qui-sommes-nous">{t("mission.section4.link")}</Link>
              <div className={styles.leftBottom}>
                <Image
                  src="https://uploads.pixecurity.com/files/boy.png"
                  alt="Utilisateur Diviniti"
                  width={100}
                  height={100}
                  loading="lazy"
                />
                <p>{t("mission.section4.footer1")}</p>
                <p>{t("mission.section4.footer2")}</p>
              </div>
            </div>
            <div className={styles.right}></div>
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
