import styles from "./style.module.scss";
import Image from "next/image";

export default function Team() {
  //creation d'un tableau d'objet pour les membres de l'équipe

  const team = [
    // {
    //   name: "Yann DUCHET",
    //   role: "CEO",
    //   image: "/assets/team/YANN.jpg",
    // },
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
      role: "Développeur Unity",
      image: "/assets/team/AUGUSTIN.jpg",
    },
    {
      name: "Amélie CORDIER",
      role: "UX/UI Designer",
      image: "/assets/team/AMELIE.webp",
    },
    {
      name: "Andy BARZOLA",
      role: "3D Designer",
      image: "/assets/team/ANDY.webp",
    },
  ];

  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHero}>
        <div className={styles.heroLeft}>
          <h1>Notre équipe</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus fugiat corrupti tenetur, expedita fugit natus deleniti,
            voluptatem dolores ab culpa cupiditate repudiandae error odit
            consequatur, adipisci repellat ratione? Architecto, vero! Dolor
            vitae provident et, corporis placeat sint delectus. Fugiat tempore
            aut dolor! Officia,
          </p>
        </div>
        <div className={styles.heroRight}>

          <Image
            src="/assets/team/YANN.jpg"
            alt="team"
            width={400}
            height={250}
          />
                <h2>Yann DUCHET</h2>
                <p>CEO</p>
        </div>
      </div>

      <div className={styles.teamMembers}>
        {team.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
            />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
