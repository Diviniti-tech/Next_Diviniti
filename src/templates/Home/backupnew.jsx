// import { useState } from "react";
// import styles from "./style.module.scss";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Head from "next/head";
// import Countdown from "@/components/Countdown/countdown";
// // import WebsiteIntro from "@/components/WebsiteIntro/websiteIntro";
// // import ModalDownloadPdf from "@/components/ModalDownloadPdf/ModalDownloadPdf";
// import ModalBookDemo from "@/components/ModalBookDemo/ModalBookDemo";

// export default function Home() {
//   const container = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.4,
//         staggerChildren: 0.6,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   // const DownloadPdfButton = () => (
//   //   <motion.button
//   //     whileHover={{ scale: 1.05 }}
//   //     className={styles.downloadButton}
//   //     onClick={() => setShowModal(true)}
//   //   >
//   //     Télécharger la plaquette
//   //   </motion.button>
//   // );

//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Head>
//         <title>Diviniti - Sûreté augmentée pour la ville de demain</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta
//           property="og:title"
//           content="Diviniti - Sûreté augmentée pour la ville de demain"
//         />
//         <meta
//           property="og:description"
//           content="Découvrez les solutions Diviniti pour la ville de demain, combinant IA et réalité étendue pour une sécurité proactive."
//         />
//         <meta property="og:url" content="https://www.diviniti.tech" />
//       </Head>

//       <motion.div
//         className={styles.homeContainer}
//         initial="hidden"
//         animate="visible"
//         variants={container}
//       >
//         {/* <Countdown /> */}
       

//         <motion.div className={styles.titles} variants={container}>
//           <motion.h2 variants={item}>Gaming for Realiti</motion.h2>
//           <motion.h1 variants={item}>
//             Le nouveau système d&apos;exploitation sûreté
//           </motion.h1>
//           <motion.img
//           src="/assets/diviniti-logo-white.svg"
//           alt="Diviniti logo"
//           className={styles.homeLogo}
//           // animate={{ scale: [1, 1.01, 1] }}
//           // transition={{
//           //   duration: 1,
//           //   ease: "easeInOut",
//           //   repeat: Infinity,
//           // }}
//         />

//           {/* <motion.iframe
           
//             src="https://www.youtube.com/embed/k6A5MVneO9Y"
//             title="VIVOTEK IB8369 Footage"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerpolicy="strict-origin-when-cross-origin"
//             allowfullscreen
//             variants={item}
//           ></motion.iframe> */}

//           <motion.div variants={item} className={styles.cta}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Link
//                 href="/gaming-for-realiti"
//                 passHref
//                 className={styles.ctaButton}
//               >
//                 <button> En savoir plus</button>
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setShowModal(true)}
//             >
//               {" "}
//               <button className={styles.ctaButton}>Demander une démo </button>
//             </motion.div>
//             {/* Composant bouton de téléchargement de la plaquette commerciale */}
//             {/* <DownloadPdfButton /> */}
//           </motion.div>

        
//         </motion.div>
//         {/* Composant Modal pour télécharger la plaquette commerciale */}
//         {/* <ModalDownloadPdf showModal={showModal} setShowModal={setShowModal} /> */}
//         <ModalBookDemo showModal={showModal} setShowModal={setShowModal} />
//       </motion.div>
//     </>
//   );
// }




// -----------------------------------------------------------------------------


// .homeContainer {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 120vh; // Remplit la hauteur de la fenêtre
//   background-color: black; // Ou toute autre couleur de fond
//   // background-image: url('https://images.unsplash.com/photo-1677784975579-b16f8028b555?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
//   background-image: url("https://images.unsplash.com/photo-1682100615316-e152a40b5793?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;

//   .homeLogo {
//     width: 8rem;
//     height: auto;
//     margin-bottom: 20px;
//     margin-top:40px;
//     animation: pulse infinite;
//     -webkit-animation: pulse 12s infinite;
//   }

//   .titles {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     padding-top: 3rem;

//     h2 {
//       color: #f1a0ff;
//       font-size: 2.6rem;
//       letter-spacing: 2px;
//       font-weight: 600;
//       padding: 1rem;
//       border-radius: 10px 10px 10px 10px;
//       -webkit-border-radius: 10px 10px 10px 10px;
//       -moz-border-radius: 10px 10px 10px 10px;
//       -ms-border-radius: 10px 10px 10px 10px;
//       -o-border-radius: 10px 10px 10px 10px;
//     }

//     h1 {
//       color: white;
//       font-size: 1.2rem;
//       font-weight: 500;
//       padding-top: 0rem;
//     }

//     iframe {
//       width: 900px;
//       height: 500px;
//       margin-top: 1rem;
//       border-radius: 10px 10px 10px 10px;
//       -webkit-border-radius: 10px 10px 10px 10px;
//       -moz-border-radius: 10px 10px 10px 10px;
//       -ms-border-radius: 10px 10px 10px 10px;
//       -o-border-radius: 10px 10px 10px 10px;
//     }
//   }
//   .cta {
//     margin-top: 3rem;
//     display: inline-flex;
//     justify-content: space-around;
//     align-items: center;
//     gap: 3rem;
//     width: 100%;
//     padding-bottom: 1rem;

//     .ctaButton, button {
//       color: #5f2dbf;
//       background-color: #ffffff;
//       padding: 0.8rem 0rem;
//       font-weight: 700;
//       cursor: pointer;
//       font-size: 1rem;
//       width: 16rem;
//       border-radius: 0.5em;
//    text-transform: uppercase;
//       border: none    ;
// }
//   }
//   a {

//     text-decoration: none;
//   }
//   // .downloadButton {
//   //   color: #870bff;
//   //   background-color: #ffffff;
//   //   padding: 0.8rem 3rem;
//   //   font-weight: 500;
//   //   cursor: pointer;
//   //   font-size: 1.1rem;
//   //   border-radius: 2rem;
//   //   -webkit-border-radius: 2rem;
//   //   -moz-border-radius: 2rem;
//   //   -ms-border-radius: 2rem;
//   //   -o-border-radius: 2rem;
//   //   border: none;
//   // }
// }

// @media (max-width:800px) {
  
//   .homeContainer {
//     padding-top: 2rem;
//     padding-left: 4%;
//     padding-right: 4%;
    

//     .homeLogo {
//       width: 8rem;
//     }

//     .titles {
//       h2 {
//         font-size: 2.1rem;
//       }
//       h1 {
//         font-size: 1rem;
//       }

//       iframe {
//         width: 600px;
//         height: 350px;
//       }
//     }
//     .cta {
   
   
//       .ctaButton, button {
        
//         font-size: 0.9rem;
//       }
//     }
//   }
// }

// @media (max-width: 600px) {
//   .homeContainer {
//     padding-top: 2rem;
//     padding-left: 4%;
//     padding-right: 4%;

//     .homeLogo {
//       width: 8rem;
//     }

//     .titles {
//       margin-top : 1.5rem;
//       h2 {
//         font-size: 1.8rem;
//       }
//       h1 {
//         font-size: 1rem;
//       }

//       iframe {
//         width: 360px;
//         height: 200px;
//       }
//     }
//     .cta {
//       display: flex;
//       flex-direction: column;
//       gap: 1.5rem;
   
//       .ctaButton, button {
        
//         font-size: 0.9rem;
//       }
//     }
//   }
// }


