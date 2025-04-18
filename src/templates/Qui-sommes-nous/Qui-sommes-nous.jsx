import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function QuiSommesNous() {
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
        <title>Diviniti - Qui sommes nous</title>
        <meta
          name="description"
          content="Découvrez l'équipe passionnée de Diviniti, experts en innovation pour les solutions de sécurité et de sûreté augmentée pour les villes intelligentes."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Diviniti - Qui Sommes-Nous ?" />
        <meta
          property="og:description"
          content="Découvrez l'équipe de Diviniti, pionniers dans l'innovation en matière de sécurité et de technologies de ville intelligente."
        />
        <meta
          property="og:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta
          property="og:url"
          content="https://diviniti.tech/qui-sommes-nous"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Diviniti - Qui Sommes-Nous ?" />
        <meta
          name="twitter:description"
          content="Découvrez l'équipe innovante de Diviniti, experts en solutions de sûreté augmentée et technologies de villes intelligentes."
        />
        <meta
          name="twitter:image"
          content="https://uploads.pixecurity.com/files/divinit-new.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.diviniti.tech/qui-sommes-nous"
        />

        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/create-zone.webp"
          as="image"
          type="image/webp"
        />
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
            Your browser does not support the video tag.
          </video>

          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1>Qui Sommes-Nous</h1>
              <h2>DIVINITI : Une startup récompensée pour son innovation</h2>

              <p>
                <strong>Incubée à Station F</strong>, au cœur du programme{" "}
                <strong>Ville de Demain</strong>.
              </p>

              <ul className={styles.heroList}>
                <li>
                  <strong>Station F</strong> : Le plus grand campus de startups
                  au monde, en plein Paris.
                </li>
                <li>
                  <strong>Ville de Demain</strong> : Un programme dédié aux
                  projets qui réinventent la ville de demain.
                </li>
                <li>
                  <strong>Un écosystème stimulant</strong> : Innovation,
                  accompagnement, réseau d’experts.
                </li>
                <li>
                  <strong>Des partenariats stratégiques</strong> avec les
                  acteurs majeurs de l’urbanisme et de la sécurité.
                </li>
                <li>
                  <strong>Un engagement fort</strong> pour des solutions
                  technologiques responsables, durables et sécurisées.
                </li>
              </ul>

              <p>
                <strong>Un intérêt grandissant</strong> de la part de
                partenaires publics et privés :
                <br />
                <i class="fa-regular fa-circle-right"></i>{" "}
                <strong>Secteur public</strong> : Collectivités, municipalités,
                Police Nationale (BRI)
                <br />
                <i class="fa-regular fa-circle-right"></i>{" "}
                <strong>Secteur privé</strong> : Énergie, logistique, défense,
                événementiel
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
                    priority={true}
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
              alt="Yann Duchet - CEO Diviniti"
              width={300}
              height={250}
              priority={true}
            />
            <h2>Yann DUCHET</h2>
            <p>CEO</p>
          </motion.div>
          <div className={styles.section1Left}>
            <h2>L’humain au cœur de l’innovation</h2>
            <h3>Une passion commune pour la ville de demain</h3>
            <p>
              Chez Diviniti, notre force réside dans les talents exceptionnels
              qui composent notre équipe. Ensemble, nous repoussons les limites
              de la technologie pour imaginer, concevoir et réaliser des
              solutions révolutionnaires pour la ville de demain.
            </p>
            <p>
              Animés par une passion commune pour l’innovation, nous unissons
              nos expertises pour transformer la manière dont le monde aborde la
              sûreté et la supervision.
            </p>
          </div>
        </div>

        <div className={styles.section2}>
          <h1>Rencontrez la Divini'team</h1>
          <p>Découvrez les talents qui construisent l’avenir</p>
        </div>
        <div className={styles.section3}>
          <p>
            Nous sommes une équipe dédiée à l'innovation et à la créativité.
          </p>
          <Image
            src="/assets/logo/diviniti-logo3.png"
            alt="Diviniti Logo"
            className={styles.imgLogo}
            width={200}
            height={200}
            priority={false}
          />
          <div className={styles.teamMemberContent}>
            {team.map((member, index) => {
              const randomX = Math.floor(Math.random() * 40) - 20; // entre -20 et +20 px

              return (
                <motion.div
                  key={index}
                  className={styles.teamMember}
                  initial={{
                    opacity: 0,
                    y: 100,
                    x: randomX,
                  }}
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
                    alt={`Photo de ${member.name}, ${member.role}`}
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
