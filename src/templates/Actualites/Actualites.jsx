import styles from "./style.module.scss";

export default function Actualites() {
  return (
    <div className={styles.actualitesContainer}>
      <h1>Tendances & Actus</h1>

      <div className={styles.newsList}>
        {/* <iframe
          width="1200"
          height="1600"
          src="https://rss.app/embed/v1/wall/eWawwOB0YQLWBQxp"
          frameborder="0"
        ></iframe> */}
        <iframe
          width="1200"
          height="1000"
          src="https://rss.app/embed/v1/list/eWawwOB0YQLWBQxp"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
