import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";
import ModalSolutions from "@/components/ModalSolutions/ModalSolutions";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const [showModalDemo, setShowModalDemo] = useState(false);
  const [showModalSolutions, setShowModalSolutions] = useState(false);
  
  const { t } = useTranslation(); // Hook pour récupérer les traductions

  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('home.metaDescription')} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t('home.title')} />
        <meta property="og:description" content={t('home.metaDescription')} />
        <meta property="og:url" content="https://diviniti.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://uploads.pixecurity.com/files/divinit-new.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('home.title')} />
        <meta name="twitter:description" content={t('home.metaDescription')} />
        <meta name="twitter:image" content="https://uploads.pixecurity.com/files/divinit-new.jpg" />
        <meta property="og:keywords" content={t('home.metaKeywords')} />
        <link rel="preload" href="https://uploads.pixecurity.com/files/1-1.webp" as="image" />
        <link rel="preload" href="/assets/logo/test1.gif" as="image" />
        <link rel="canonical" href="https://www.diviniti.tech" />
      </Head>

      <div className={styles.homeContainer}>
        <div className={styles.section1}>
          <div className={styles.section1left}>
            <h2>{t('home.section1.title')}</h2>
            <h1>{t('home.section1.subtitle')}</h1>
            <p>{t('home.section1.description')}</p>
            <div className={styles.cta}>
              <button
                className={styles.seeSolutions}
                onClick={() => setShowModalSolutions(true)}
              >
                {t('home.section1.buttonText')}
              </button>
            </div>
          </div>
          <div className={styles.section1right}>
            <Image
              src="/assets/logo/test1.gif"
              alt={t('home.section1.imageAlt')}
              width={400}
              height={400}
              priority
              sizes="(max-width: 768px) 200px, 400px"
            />
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.section2content}>
            <h3>{t('home.section2.title')}</h3>
            <h4>{t('home.section2.subtitle')}</h4>
            <p>{t('home.section2.description')}</p>
            <Link
              href="/notre-mission-et-vision"
              passHref
              className={styles.ctaButton}
            >
              {t('home.section2.linkText')}
            </Link>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.section3content}>
            <span>{t('home.section3.subtitle')}</span>
            <h4>{t('home.section3.title')}</h4>
            <p>{t('home.section3.description')}</p>

            <div className={styles.cards}>
              <Link href="/soron" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/soron-logo-clear-bkgd-centered.png"
                    alt={t('home.section3.soronAlt')}
                    width={150}
                    height={110}
                    loading="lazy"
                  />
                  <p>{t('home.section3.soronDescription')}</p>
                </div>
              </Link>
              <Link href="/atna" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/ATNa-logo-clear-bkgd-centered.png"
                    alt={t('home.section3.atnaAlt')}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                  <p>{t('home.section3.atnaDescription')}</p>
                </div>
              </Link>

              <Link href="/raven" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/raven-logo-clear-bkgd-centered.png"
                    alt={t('home.section3.ravenAlt')}
                    width={150}
                    height={100}
                    loading="lazy"
                  />
                  <p>{t('home.section3.ravenDescription')}</p>
                </div>
              </Link>
              <Link href="/befrost" passHref>
                <div className={styles.card}>
                  <Image
                    src="https://uploads.pixecurity.com/files/befrost-logo-clear-bkgd-centered.png"
                    alt={t('home.section3.befrostAlt')}
                    width={210}
                    height={110}
                    loading="lazy"
                  />
                  <p>{t('home.section3.befrostDescription')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.section4content}>
            <h2>{t('home.section4.title')}</h2>
            <p>{t('home.section4.description')}</p>
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
                alt={t('home.section5.imageAlt')}
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className={styles.section5right}>
              <h2>{t('home.section5.title')}</h2>
              <p>{t('home.section5.description')}</p>
              <button
                className={styles.bookDemo}
                onClick={() => setShowModalDemo(true)}
              >
                {t('home.section5.buttonText')}
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
