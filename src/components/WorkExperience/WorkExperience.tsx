import { useRef } from "react";
import type { BezierDefinition } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { WORK_EXPERIENCE } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./WorkExperience.module.css";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function WorkExperience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className={styles.section}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE }}
      >
        Professional Journey
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.08, duration: 0.5, ease: EASE }}
      >
        Experience
      </motion.h2>

      <div className={styles.timeline}>
        {/* Vertical connector line */}
        <motion.div
          className={styles.timelineLine}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
        />

        {WORK_EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={styles.entry}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: EASE }}
          >
            {/* Timeline dot */}
            <div className={styles.dot}>
              <div className={styles.dotInner} />
            </div>

            {/* Card */}
            <motion.div
              className={styles.card}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <div className={styles.headerLeft}>
                  <span className={styles.typeBadge}>{exp.type}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className={styles.responsibilities} aria-label="Responsibilities">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className={styles.responsibilityItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className={styles.techRow} aria-label="Technologies used">
                {exp.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("education")}
        aria-label="Scroll to Education"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src="/assets/arrow.png" alt="Arrow down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
