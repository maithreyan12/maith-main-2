import { useRef } from "react";
import type { BezierDefinition } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { EDUCATION } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Education.module.css";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const GraduationCapIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className={styles.section}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE }}
      >
        Academic Background
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.08, duration: 0.5, ease: EASE }}
      >
        Education
      </motion.h2>

      <div className={styles.cardsGrid}>
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.id}
            className={styles.card}
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: EASE }}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
          >
            {/* Icon */}
            <div className={styles.iconWrap} aria-hidden="true">
              <GraduationCapIcon />
            </div>

            {/* Content */}
            <div className={styles.content}>
              <span className={styles.degreeBadge}>{edu.affiliation}</span>
              <h3 className={styles.institution}>{edu.institution}</h3>
              <p className={styles.location}>{edu.location}</p>
              <p className={styles.degree}>{edu.degree}</p>
            </div>

            {/* Period */}
            <div className={styles.periodBadge}>
              <span>{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("projects")}
        aria-label="Scroll to Projects"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src="/assets/arrow.png" alt="Arrow down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
