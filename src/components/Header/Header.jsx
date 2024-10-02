import styles from "./style.module.scss";
import Link from "next/link";

export default function Header() {

  const linkedin = "https://www.linkedin.com/company/divinititech";

  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href="/">
          {" "}
          <img
            src="assets/diviniti-logo-white.svg"
            alt="Diviniti logo"
            className={styles.headerLogo}
           
          />{" "}
        </Link>
        <ul className={styles.headerLinks}>
          {/* <li>
            <Link href="/v1">V1</Link>
          </li>
          <li>
            <Link href="/v2">V2</Link>
          </li>
          <li>
            <Link href="/v3">V3</Link>
          </li>
          <li>
            <Link href="/v4">V4</Link>
          </li>
          <li>
            <Link href="/v5">V5</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/team">L'équipe</Link>
          </li> */}
         
           
            <Link href={linkedin} className={styles.linkedinIcon} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }
            }>
              <img src="assets/linkedin.png" alt="logo linkedin" />
            </Link>

          

        </ul>
      </div>
    </header>
  );
}
