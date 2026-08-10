import { AUTHOR } from "../../data/portfolio";
import styles from "./Footer.module.css";

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left Column: Copyright & Startup Branding */}
        <div className={styles.brandCol}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} <strong>{AUTHOR.name}</strong>. All rights reserved.
          </p>
          <p className={styles.startupTag}>
            Founder & CEO @{" "}
            <a
              href={AUTHOR.appziio}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.startupLink}
              title="Visit Appziio official website"
            >
              Appziio <ExternalIcon />
            </a>
          </p>
        </div>

        {/* Right Column: Social Links */}
        <div className={styles.socials}>
          <a
            href={`mailto:${AUTHOR.email}`}
            aria-label="Email Maithreyan D"
            target="_blank"
            rel="noopener noreferrer"
            title="Send Email to Maithreyan D"
          >
            <img src="/assets/email.png" alt="Email Maithreyan D" />
          </a>
          <a
            href={AUTHOR.linkedin}
            aria-label="Maithreyan D LinkedIn Profile"
            target="_blank"
            rel="me noopener noreferrer"
            title="Maithreyan D LinkedIn Profile"
          >
            <img src="/assets/linkedin.png" alt="Maithreyan D LinkedIn" />
          </a>
          <a
            href={AUTHOR.github}
            aria-label="Maithreyan D GitHub Profile"
            target="_blank"
            rel="me noopener noreferrer"
            title="Maithreyan D GitHub Profile"
          >
            <img src="/assets/github.png" alt="Maithreyan D GitHub" />
          </a>
          <a
            href={AUTHOR.instagram}
            aria-label="Maithreyan D Instagram Profile"
            target="_blank"
            rel="me noopener noreferrer"
            title="Maithreyan D Instagram Profile"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.svgIcon}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
