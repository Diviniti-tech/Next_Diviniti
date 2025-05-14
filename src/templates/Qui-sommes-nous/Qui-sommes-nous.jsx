import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function QuiSommesNous() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Fabien THOMAS",
      role: "CXO",
      image: "/assets/team/FABIEN.webp",
    },
    {
      name: "Abdel-Rahmen DEGHBOUDJ",
      role: "Développeur",
      image: "/assets/team/ABDEL-RAHMEN_.webp",
    },
    {
      name: "Samuel THAUVIN",
      role: "Lead Developer",
      image: "https://uploads.pixecurity.com/files/samuel.jpg",
    },
    {
      name: "Ambroise JULIEN-LAFERRIERE",
      role: "VP Sales",
      image: "/assets/team/AMBROISE.webp",
    },
    {
      name: "Andy BARZOLA",
      role: "3D Designer",
      image: "/assets/team/ANDY.webp",
    },
    {
      name: "Augustin MAHIEU",
      role: "Développeur",
      image: "/assets/team/AUGUSTIN.webp",
    },
    {
      name: "Zine-Eddine BENZENATI",
      role: "Développeur",
      image: "/assets/team/ZINE-EDDINE.webp",
    },
    {
      name: "Henri UNG",
      role: "Développeur",
      image: "/assets/team/HENRI.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.subtitle")} />
        {/* Les autres balises meta peuvent rester telles quelles */}
      </Head>

      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsHero}>
          <video
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://uploads.pixecurity.com/files/Aurora-1744296233957.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1>{t("about.title")}</h1>
              <h2>{t("about.subtitle")}</h2>
              <p>{t("about.incubated")}</p>

              <ul className={styles.heroList}>
                <li>{t("about.heroList.0")}</li>
                <li>{t("about.heroList.1")}</li>
                <li>{t("about.heroList.2")}</li>
                <li>{t("about.heroList.3")}</li>
                <li>{t("about.heroList.4")}</li>
              </ul>

              <p>
                <strong>{t("about.interest")}</strong>
                <br />
                <i className="fa-regular fa-circle-right"></i>{" "}
                {t("about.sector.public")}
                <br />
                <i className="fa-regular fa-circle-right"></i>{" "}
                {t("about.sector.private")}
              </p>
            </div>

            <motion.div
              className={styles.heroRight}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.images}>
                <Link
                  href="https://stationf.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://uploads.pixecurity.com/files/stationF.png"
                    alt="station f logo"
                    width={250}
                    height={80}
                    priority
                  />
                </Link>
                <Image
                  src="https://uploads.pixecurity.com/files/create-zone.webp"
                  alt="bureaux station f"
                  width={500}
                  height={300}
                  priority
                  className={styles.officeImg}
                />
                <Link
                  href="https://www.ville-demain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://uploads.pixecurity.com/files/villedemain.png"
                    alt="ville de demain logo"
                    width={220}
                    height={110}
                    priority
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className={styles.section1}>
          <motion.div
            className={styles.section1Right}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/team/YANN.webp"
              alt={t("about.ceo.name")}
              width={300}
              height={250}
              priority
            />
            <h2>{t("about.ceo.name")}</h2>
            <p>{t("about.ceo.role")}</p>
          </motion.div>
          <div className={styles.section1Left}>
            <h2>{t("about.human.title")}</h2>
            <h3>{t("about.human.subtitle")}</h3>
            <p>{t("about.human.1")}</p>
            <p>{t("about.human.2")}</p>
          </div>
        </div>

        <div className={styles.section2}>
          <h1>{t("about.team.title")}</h1>
          <p>{t("about.team.subtitle")}</p>
        </div>

        <div className={styles.section3}>
          <p>{t("about.team.intro")}</p>
          <Image
            src="/assets/logo/diviniti-logo3.png"
            alt="Diviniti Logo"
            className={styles.imgLogo}
            width={200}
            height={200}
          />
          <div className={styles.teamMemberContent}>
            {team.map((member, index) => {
              const randomX = Math.floor(Math.random() * 40) - 20;

              return (
                <motion.div
                  key={index}
                  className={styles.teamMember}
                  initial={{ opacity: 0, y: 100, x: randomX }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -10,
                    transition: { type: "spring", stiffness: 100 },
                  }}
                >
                  <Image
                    src={member.image}
                    alt={`Photo de ${member.name}`}
                    width={150}
                    height={150}
                  />
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
