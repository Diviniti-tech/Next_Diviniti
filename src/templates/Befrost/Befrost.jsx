import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Befrost() {
  const cardsData = [
    {
      title: "VMS",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1261669582.webp",
      partners: [
        {
          logo: "/assets/partners/vms1.png",
          alt: "milestone logo",
          className: "milestone",
          percentage: "95%",
          website: "https://www.milestonesys.com/",
        },
        {
          logo: "/assets/partners/vms3.png",
          alt: "vxcore logo",
          className: "vxcore",
          percentage: "75%",
          website: "https://vxcore.fr/",
        },
        {
          logo: "/assets/partners/vms2.png",
          alt: "genetec logo",
          className: "genetec",
          percentage: "5%",
          website: "https://www.genetec.com/fr",
        },
      ],
    },
    {
      title: "Contrôle d'Accès",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1362299000.webp",
      partners: [
        {
          logo: "/assets/partners/CA2.png",
          alt: "synchronic logo",
          className: "synchronic",
          percentage: "2%",
          website: "https://www.synchronic.fr/",
        },
        {
          logo: "/assets/partners/CA3.png",
          alt: "til technologies logo",
          className: "til",
          percentage: "20%",
          website: "https://www.til-technologies.fr/",
        },
        {
          logo: "/assets/partners/CA1.png",
          alt: "nedap logo",
          className: "nedap",
          percentage: "2%",
          website: "https://www.nedapfrance.fr/",
        },
      ],
    },
    {
      title: "Réseau",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1114186388.webp",
      partners: [
        {
          logo: "/assets/partners/Res1.png",
          alt: "cisco logo",
          className: "cisco",
          percentage: "2%",
          website: "https://www.cisco.com/site/fr/fr/index.html",
        },
        {
          logo: "/assets/partners/Res3.png",
          alt: "logic monitor logo",
          className: "logic",
          percentage: "2%",
          website: "https://www.logicmonitor.com/fr",
        },
        {
          logo: "/assets/partners/Res2.png",
          alt: "nebula zyxel logo",
          className: "nebula",
          percentage: "2%",
          website:
            "https://www.zyxel.com/fr/fr/solutions/use-case/nebula-cloud",
        },
      ],
    },
    {
      title: "GTB / GTC",
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1178672896.webp",
      partners: [
        {
          logo: "/assets/partners/GTB3.png",
          alt: "regin logo",
          className: "regin",
          percentage: "2%",
          website: "https://www.regincontrols.com/fr/fr/",
        },
        {
          logo: "/assets/partners/GTB1.png",
          alt: "schneider electric logo",
          className: "schneider",
          percentage: "2%",
          website: "https://www.se.com/fr/fr/",
        },
        {
          logo: "/assets/partners/GTB2.png",
          alt: "siemens logo",
          className: "siemens",
          percentage: "2%",
          website: "https://www.siemens.com/global/en/products/buildings.html",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Diviniti - Befrost</title>
        <meta
          name="description"
          content="Befrost est une solution de passerelle entre différents univers, conçue pour s'adapter à divers appareils et plateformes."
        />
        <meta

          name="keywords"
          content="Befrost, passerelle, univers, appareils, plateformes, vidéoprotection, contrôle d'accès, intrusion, géolocalisation, interphonie, incendie"
        />
        <meta name="author" content="Diviniti" />
        <meta property="og:title" content="Diviniti - Befrost" />
        <meta

          property="og:description"
          content="Befrost est une solution de passerelle entre différents univers, conçue pour s'adapter à divers appareils et plateformes."
        />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://www.diviniti.fr/befrost" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diviniti" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diviniti - Befrost" />
        <link
          rel="preload"
          href="https://uploads.pixecurity.com/files/AdobeStock_1091490449-1.webp"
          as="image"
        />

</Head>

      <div className={styles.befrostContainer}>
        <div className={styles.headerSection}>
          <div className={styles.header1}>
            <Image
              src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
              alt="Diviniti - Befrost solution"
              width={200}
              height={200}
              priority={true}
            />
            <h1>La passerelle entre différents univers</h1>
            <p>
              Conçu pour s'adapter à divers appareils et plateformes, BEFROST
              permet de connecter notamment les systèmes de vidéoprotection,
              contrôle d'accès, intrusion, Géolocalisation, interphonie,
              incendie.
            </p>
          </div>
          <div className={styles.cardsSection}>
            {cardsData.map((card, index) => (
              <div className={styles.card} key={index}>
                <h2>{card.title}</h2>
                <div className={styles.cardImg}>
                  <Image
                    src={card.imgUrl}
                    alt={`illustration ${card.title}`}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={styles.cardBottom}>
                  {card.partners.map((partner, idx) => (
                    <div className={styles.progressContainer} key={idx}>
                      <div className={styles.progressContainer} key={idx}>
                        {partner.website ? (
                          <Link
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={partner.logo}
                              alt={partner.alt}
                              width={100}
                              height={100}
                              priority={true}
                            />
                          </Link>
                        ) : (
                          <Image
                            src={partner.logo}
                            alt={partner.alt}
                            width={100}
                            height={100}
                            priority={true}
                          />
                        )}
                      </div>

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
    </>
  );
}
