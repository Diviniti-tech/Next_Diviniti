// import { useRef, useEffect } from "react";
// import styles from "./style.module.scss";

// export default function WebsiteIntro({ onEnd }) {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const videoElement = videoRef.current;

//         // Réglage de la vitesse de lecture à 0.67 pour ralentir de 1.5x
//         if (videoElement) {
//             videoElement.playbackRate = 0.60;
//         }

//         // Fonction pour gérer la fin de la vidéo
//         const handleVideoEnd = () => {
//             onEnd(); // Appel de la fonction onEnd lorsque la vidéo se termine
//         };

//         videoElement.addEventListener("ended", handleVideoEnd);

//         // Nettoyage de l'écouteur d'événement
//         return () => {
//             videoElement.removeEventListener("ended", handleVideoEnd);
//         };
//     }, [onEnd]);

//     return (
//         <div className={styles.introContainer}>
//             <video
//                 ref={videoRef}
//                 autoPlay
//                 muted
//                 className={styles.introVideo}
//                 src="/assets/intro4k.mp4"
//             ></video>
//         </div>
//     );
// }
