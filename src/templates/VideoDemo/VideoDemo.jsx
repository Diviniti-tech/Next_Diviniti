import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Head from "next/head";

export default function VideoDemo() {
  return (
    <>
      <Head>
        <title>Diviniti - Demo Video</title>
      </Head>

      <div className={styles.videoDemoContainer}>

<img src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-long.png" alt=""  className={styles.logoDemo}/>


        <video autoPlay loop muted  preload="auto"
                controls className={styles.backgroundVideo}>
              <source
                src="https://uploads.pixecurity.com/files/test_soron5_%E2%80%90_R%C3%A9alis%C3%A9e_avec_Clipchamp.mp4"
                type="video/mp4"
               
              />
            </video>

      </div>
    </>
  );
}
