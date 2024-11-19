import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Fabien THOMAS",
      role: "CXO",
      image: "/assets/team/FABIEN.jpg",
    },
    {
      name: "Abdelhadi LAMMINI",
      role: "Product Owner",
      image: "/assets/team/ABDELHADI.webp",
    },
    {
      name: "Augustin MAHIEU",
      role: "Développeur",
      image: "/assets/team/AUGUSTIN.jpg",
    },
    {
      name: "Amélie CORDIER",
      role: "UX/UI Designer",
      image: "/assets/team/AMELIE.webp",
    },
    {
      name: "Abdel-Rahmen DEGHBOUDJ",
      role: "Développeur",
      image:
        "/assets/team/ABDEL-RAHMEN_.webp",
    },
    {
      name: "Andy BARZOLA",
      role: "3D Designer",
      image: "/assets/team/ANDY.webp",
    },
    {
      name: "Meriem BOUSSAHA",
      role: "Développeuse",
      image: "/assets/team/MERIEM.jpg",
    },
    {
      name: "Zine-Eddine BENZENATI",
      role: "Développeur",
      image:
        "/assets/team/ZINE-EDDINE.webp",
    },
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHero}>
        <div className={styles.heroLeft}>
          <h1>Diviniti : Qui Sommes-Nous ?</h1>
          <p>
            Chez Diviniti, notre force réside dans les talents exceptionnels qui
            composent notre équipe. Ensemble, nous repoussons les limites de la
            technologie pour imaginer, concevoir et réaliser des solutions
            révolutionnaires pour la ville de demain. De la stratégie à la
            conception, en passant par le développement et l’expérience
            utilisateur, chaque membre de notre équipe joue un rôle essentiel
            dans la création d’un avenir plus sûr, plus intelligent et plus
            immersif.
          </p>
          <p>
            Animés par une passion commune pour l’innovation, nous unissons nos
            expertises pour transformer la manière dont le monde aborde la
            sûreté et la supervision.
          </p>
        </div>
        <motion.div className={styles.heroRight}
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

      <div className={styles.teamMembers}>
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
  );
}
