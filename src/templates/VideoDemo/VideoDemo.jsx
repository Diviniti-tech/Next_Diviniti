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
        <img
          src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-long.png"
          alt=""
          className={styles.logoDemo}
        />

        <video
          autoPlay
          loop
          muted
          preload="auto"
          controls
          className={styles.backgroundVideo}
        >
          <source
            src="https://uploads.pixecurity.com/files/Soron_-_demo_video_%2804.2025%29.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
