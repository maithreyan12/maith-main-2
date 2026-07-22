import { AUTHOR } from "../../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.credit}>Created by {AUTHOR.name}</p>
        <div className={styles.socials}>
          <a href={`mailto:${AUTHOR.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer">
            <img src="/assets/email.png" alt="Email" />
          </a>
          <a href={AUTHOR.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a href={AUTHOR.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
