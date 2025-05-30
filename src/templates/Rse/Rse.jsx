import styles from "./style.module.scss";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Rse() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <Head>
        <title>Notre démarche RSE | Diviniti</title>
        <meta
          name="description"
          content="Découvrez l'engagement RSE de Diviniti : environnement, bien-être au travail, mobilité durable et initiatives responsables."
        />

        <meta
          name="keywords"
          content="RSE, responsabilité sociétale, développement durable, environnement, recyclage, inclusion, bien-être au travail, Diviniti, mobilité verte, actions responsables, entreprise engagée"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Notre démarche RSE | Diviniti" />
        <meta
          property="og:description"
          content="Diviniti agit pour l’environnement, le bien-être des collaborateurs et la responsabilité sociétale."
        />
        <meta
          property="og:image"
          content="https://uploads.pixecurity.com/files/CSR_recycling.webp"
        />
        <meta
          property="og:url"
          content="https://diviniti.tech/notre-demarche-rse"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notre démarche RSE | Diviniti" />
        <meta
          name="twitter:description"
          content="Diviniti agit pour l’environnement, le bien-être des collaborateurs et la responsabilité sociétale."
        />
        <meta
          name="twitter:image"
          content="https://uploads.pixecurity.com/files/CSR_recycling.webp"
        />

        <link rel="canonical" href="https://diviniti.tech/notre-demarche-rse" />
      </Head>
      <div className={styles.rseContainer}>
        <div className={styles.section1}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.section1content}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {t("rse.title")}
            </motion.h1>
            <p>{t("rse.intro1")}</p>
            <p>{t("rse.intro2")}</p>
          </motion.div>
        </div>

        <div className={styles.section2}>
          <div className={styles.section2content}>
            <h2>{t("rse.environmentTitle")}</h2>
            <p>{t("rse.environmentIntro")}</p>
          </div>

          <div className={styles.ourActions}>
            <motion.div
              className={styles.actionCards}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img
                src="https://uploads.pixecurity.com/files/CSR_recycling.webp"
                alt=""
                loading="lazy"
              />
              <h3>{t("rse.waste.title")}</h3>
              <ul>
                <li>{t("rse.waste.point1")}</li>
                <li>{t("rse.waste.point2")}</li>
                <li>{t("rse.waste.point3")}</li>
                <li>{t("rse.waste.point4")}</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.actionCards}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img
                src="https://uploads.pixecurity.com/files/CSR_plasticbottlefree.webp"
                alt=""
                loading="lazy"
              />
              <h3>{t("rse.plastic.title")}</h3>
              <ul>
                <li>{t("rse.plastic.point1")}</li>
                <li>{t("rse.plastic.point2")}</li>
              </ul>
            </motion.div>

            <motion.div
              className={styles.actionCards}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img
                src="https://uploads.pixecurity.com/files/CSR_EV.webp"
                alt=""
                loading="lazy"
              />
              <h3>{t("rse.mobility.title")}</h3>
              <ul>
                <li>{t("rse.mobility.point1")}</li>
                <li>{t("rse.mobility.point2")}</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className={styles.section3}>
          <div className={styles.section3content}>
            <h2>{t("rse.socialTitle")}</h2>
            <p>{t("rse.socialIntro")}</p>

            <div className={styles.section3grid}>
              <div className={styles.section3left}>
                <h3>{t("rse.wellbeing.title")}</h3>
                <ul>
                  <li>{t("rse.wellbeing.point1")}</li>
                  <li>{t("rse.wellbeing.point2")}</li>
                  <li>{t("rse.wellbeing.point3")}</li>
                </ul>
              </div>

              <div className={styles.section3right}>
                <h3>{t("rse.inclusion.title")}</h3>
                <ul>
                  <li>{t("rse.inclusion.point1")}</li>
                  <li>{t("rse.inclusion.point2")}</li>
                  <li>{t("rse.inclusion.point3")}</li>
                  <li>{t("rse.inclusion.point4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section4}>
          <div className={styles.section4content}>
            <h2>{t("rse.commitmentTitle")}</h2>
            <p>{t("rse.commitmentText")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
