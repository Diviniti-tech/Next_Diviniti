import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team2() {
  const team = [
    {
      name: "Fabien THOMAS",
      role: "CXO",
      image: "/assets/team/FABIEN.jpg",
    },
    {
      name: "Ambroise JULIEN-LAFFERRIERE",
      role: "Commercial",
      image: "/assets/team/ambroise.png",
    },
    {
      name: "Abdel-Rahmen DEGHBOUDJ",
      role: "Développeur",
      image: "/assets/team/ABDEL-RAHMEN_.webp",
    },
    {
      name: "Andy BARZOLA",
      role: "3D Designer",
      image: "/assets/team/ANDY.webp",
    },
    {
      name: "Augustin MAHIEU",
      role: "Développeur",
      image: "/assets/team/AUGUSTIN.jpg",
    },
    {
      name: "Zine-Eddine BENZENATI",
      role: "Développeur",
      image: "/assets/team/ZINE-EDDINE.webp",
    },
    {
      name: "Henri UNG",
      role: "Développeur",
      image: "/assets/team/henri.png",
    },
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHero}>
        <div className={styles.background}>
          {[...Array(20)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1>Diviniti : Qui Sommes-Nous ?</h1>
            <h2>Une équipe passionnée, engagée pour l’innovation</h2>
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
          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/team/YANN.jpg"
              alt="team"
              width={300}
              height={250}
            />
            <h2>Yann DUCHET</h2>
            <p>CEO</p>
          </motion.div>
        </div>
      </div>
      <div className={styles.teamMembersIntro}>
        <h1>Rencontrez la Divini'team</h1>
        <p>Découvrez les talents qui construisent l’avenir</p>
      </div>
      <div className={styles.teamMembers}>
        <p>Nous sommes une équipe dédiée à l'innovation et à la créativité.</p>
        <img
          src="/assets/logo/diviniti-logo3.png"
          alt="Diviniti Logo"
          className={styles.imgLogo}
        />
        <div className={styles.teamMemberContent}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.teamMember}
              initial={{ opacity: 0, y: 100, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
                transition: { type: "spring", stiffness: 100 },
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
              />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
