import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

export default function ModalSolutions({ showModal, setShowModal }) {
  if (!showModal) return null;

  return (
    <div className={styles.modalSolutionsContainer}>
      <div className={styles.modalContent}>
        <span onClick={() => setShowModal(false)} className={styles.closeModal}>
          X
        </span>
        <div className={styles.solutions}>
          <Link href="/soron" passHref>
            <div className={styles.solution}>
              <Image
                src="https://uploads.pixecurity.com/files/soron-logo-dark-bkgd-centered.png"
                alt=""
                width ={130}
                height={140}
              />
            </div>
          </Link>
          <Link href="/atna" passHref>
            <div className={styles.solution}>
              <Image
                src="https://uploads.pixecurity.com/files/ATNa-logo-dark-bkgd-centered.png"
                alt=""
                width ={95}
                height={135}
              />
            </div>
          </Link>
          <Link href="/befrost" passHref>
            <div className={styles.solution}>
              <Image
                src="https://uploads.pixecurity.com/files/befrost-logo-dark-bkgd-centered.png"
                alt=""
                width ={180}
                height={140}
              />
            </div>
          </Link>
          <Link href="/raven" passHref>
            <div className={styles.solution}>
              <Image
                src="https://uploads.pixecurity.com/files/raven-logo-dark-bkgd-centered.png"
                alt=""
                width ={140}
                height={140}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
