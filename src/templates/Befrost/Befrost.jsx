import React from "react";
import styles from "./style.module.scss";
export default function Befrost() {
  const cardsData = [
    {
      title: "VMS",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1261669582.jpeg",
      partners: [
        {
          logo: "assets/partners/vms1.png",
          alt: "milestone logo",
          className: "milestone",
          percentage: "95%",
        },
        {
          logo: "assets/partners/vms3.png",
          alt: "vxcore logo",
          className: "vxcore",
          percentage: "75%",
        },
        {
          logo: "assets/partners/vms2.png",
          alt: "genetec logo",
          className: "genetec",
          percentage: "5%",
        },
      ],
    },
    {
      title: "Contrôle d'Accès",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1362299000.jpeg",
      partners: [
        {
          logo: "assets/partners/CA2.png",
          alt: "synchronic logo",
          className: "synchronic",
          percentage: "2%",
        },
        {
          logo: "assets/partners/CA3.png",
          alt: "til technologies logo",
          className: "til",
          percentage: "20%",
        },
        {
          logo: "assets/partners/CA1.png",
          alt: "nedap logo",
          className: "nedap",
          percentage: "2%",
        },
      ],
    },
    {
      title: "Réseau",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1114186388.jpeg",
      partners: [
        {
          logo: "assets/partners/Res1.png",
          alt: "cisco logo",
          className: "cisco",
          percentage: "2%",
        },
        {
          logo: "assets/partners/Res3.png",
          alt: "logic monitor logo",
          className: "logic",
          percentage: "2%",
        },
        {
          logo: "assets/partners/Res2.png",
          alt: "nebula zyxel logo",
          className: "nebula",
          percentage: "2%",
        },
      ],
    },
    {
      title: "GTB / GTC",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1178672896.jpeg",
      partners: [
        {
          logo: "assets/partners/GTB3.png",
          alt: "regin logo",
          className: "regin",
          percentage: "2%",
        },
        {
          logo: "assets/partners/GTB1.png",
          alt: "schneider electric logo",
          className: "schneider",
          percentage: "2%",
        },
        {
          logo: "assets/partners/GTB2.png",
          alt: "siemens logo",
          className: "siemens",
          percentage: "2%",
        },
      ],
    },
  ];

  return (
    <div className={styles.befrostContainer}>
      <div className={styles.headerSection}>
        <div className={styles.header1}>
          <img
            src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
            alt=""
          />
          <h1>La passerelle entre différents univers</h1>
          <p>
            Conçu pour s'adapter à divers appareils et plateformes, BEFROST
            permet de connecter notamment les systèmes de vidéoprotection,
            contrôle d'accès, intrusion, Géolocalisation, interphonie, incendie.
          </p>
        </div>
        <div className={styles.cardsSection}>
          {cardsData.map((card, index) => (
            <div className={styles.card} key={index}>
              <h2>{card.title}</h2>
              <div className={styles.cardImg}>
                <img src={card.imgUrl} alt={`illustration ${card.title}`} />
              </div>
              <div className={styles.cardBottom}>
                {card.partners.map((partner, idx) => (
                  <div className={styles.progressContainer} key={idx}>
                    <img src={partner.logo} alt={partner.alt} />
                    <div className={styles.progressBar}>
                      <div
                        className={`${styles.fill} ${
                          styles[partner.className]
                        }`}
                        style={{
                          "--target-width": partner.percentage,
                          width: partner.percentage,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
