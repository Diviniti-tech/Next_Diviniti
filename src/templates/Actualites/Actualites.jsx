import styles from "./style.module.scss";

export default function Actualites() {
  return (
    <div className={styles.actualitesContainer}>
      <h1>Tendances & Actus</h1>

      <iframe
        width="1400"
        height="400"
        src="https://rss.app/embed/v1/list/eWawwOB0YQLWBQxp"
        frameborder="0"
      ></iframe>
      <iframe
        width="1400"
        height="600"
        src="https://rss.app/embed/v1/list/uwxA836b5HEvuZFh"
        frameborder="0"
      ></iframe>
    </div>
  );
}
