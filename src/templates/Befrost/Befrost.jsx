import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Befrost() {
  const { t } = useTranslation();

  const cardsData = [
    {
      title: t("befrost.cards.vms.title"),
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1261669582.webp",
      partners: [
        {
          logo: "/assets/partners/vms1.png",
          alt: "Milestone",
          className: "milestone",
          percentage: "95%",
          website: "https://www.milestonesys.com/",
        },
        {
          logo: "/assets/partners/vms3.png",
          alt: "VXCore",
          className: "vxcore",
          percentage: "75%",
          website: "https://vxcore.fr/",
        },
        {
          logo: "/assets/partners/vms2.png",
          alt: "Genetec",
          className: "genetec",
          percentage: "5%",
          website: "https://www.genetec.com/fr",
        },
      ],
    },
    {
      title: t("befrost.cards.accessControl.title"),
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1362299000.webp",
      partners: [
        {
          logo: "/assets/partners/CA2.png",
          alt: "Synchronic",
          className: "synchronic",
          percentage: "2%",
          website: "https://www.synchronic.fr/",
        },
        {
          logo: "/assets/partners/CA3.png",
          alt: "Til Technologies",
          className: "til",
          percentage: "20%",
          website: "https://www.til-technologies.fr/",
        },
        {
          logo: "/assets/partners/CA1.png",
          alt: "Nedap",
          className: "nedap",
          percentage: "2%",
          website: "https://www.nedapfrance.fr/",
        },
      ],
    },
    {
      title: t("befrost.cards.network.title"),
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1114186388.webp",
      partners: [
        {
          logo: "/assets/partners/Res1.png",
          alt: "Cisco",
          className: "cisco",
          percentage: "2%",
          website: "https://www.cisco.com/site/fr/fr/index.html",
        },
        {
          logo: "/assets/partners/Res3.png",
          alt: "LogicMonitor",
          className: "logic",
          percentage: "2%",
          website: "https://www.logicmonitor.com/fr",
        },
        {
          logo: "/assets/partners/Res2.png",
          alt: "Nebula Zyxel",
          className: "nebula",
          percentage: "2%",
          website: "https://www.zyxel.com/fr/fr/solutions/use-case/nebula-cloud",
        },
      ],
    },
    {
      title: t("befrost.cards.gtbgtc.title"),
      imgUrl: "https://uploads.pixecurity.com/files/AdobeStock_1178672896.webp",
      partners: [
        {
          logo: "/assets/partners/GTB3.png",
          alt: "Regin",
          className: "regin",
          percentage: "2%",
          website: "https://www.regincontrols.com/fr/fr/",
        },
        {
          logo: "/assets/partners/GTB1.png",
          alt: "Schneider Electric",
          className: "schneider",
          percentage: "2%",
          website: "https://www.se.com/fr/fr/",
        },
        {
          logo: "/assets/partners/GTB2.png",
          alt: "Siemens",
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
        <title>{t("befrost.meta.title")}</title>
        <meta name="description" content={t("befrost.meta.description")} />
        <meta name="keywords" content={t("befrost.meta.keywords")} />
        <meta name="author" content="Diviniti" />
        <meta property="og:title" content={t("befrost.meta.title")} />
        <meta property="og:description" content={t("befrost.meta.description")} />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://diviniti.tech/befrost" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diviniti" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("befrost.meta.title")} />
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
              width={150}
              height={150}
              priority={true}
            />
            <h1>{t("befrost.header.title")}</h1>
            <p>{t("befrost.header.subtitle")}</p>
          </div>
          <div className={styles.cardsSection}>
            {cardsData.map((card, index) => (
              <div className={styles.card} key={index}>
                <h2>{card.title}</h2>
                <div className={styles.cardImg}>
                  <Image
                    src={card.imgUrl}
                    alt={`illustration ${card.title}`}
                    width={10}
                    height={10}
                  />
                </div>
                <div className={styles.cardBottom}>
                  {card.partners.map((partner, idx) => (
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
                            width={50}
                            height={50}
                            priority={true}
                          />
                        </Link>
                      ) : (
                        <Image
                          src={partner.logo}
                          alt={partner.alt}
                          width={50}
                          height={50}
                          priority={true}
                        />
                      )}

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
