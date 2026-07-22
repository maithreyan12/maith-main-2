import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { BezierDefinition } from "framer-motion";
import { SKILL_ICONS } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Skills.module.css";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.055 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.88 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  return (
    <section id="skills" ref={ref} className={styles.section}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className={styles.eyebrow}>SKILLS</p>
        <h2 className={styles.title}>Professional Skills</h2>
      </motion.div>

      {/* Card grid */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {SKILL_ICONS.map((skill) => (
          <motion.div
            key={skill.name}
            className={styles.card}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              y: -6,
              transition: { type: "spring", stiffness: 380, damping: 22 },
            }}
            whileTap={{ scale: 0.94 }}
            style={{ "--skill-color": skill.color } as React.CSSProperties}
          >
            <div className={styles.iconWrap}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.icon}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                }}
              />
            </div>
            <span className={styles.label}>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Work CTA */}
      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.65, ease: EASE }}
      >
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>LOOKING FOR COLLABORATION?</p>
          <h3 className={styles.ctaTitle}>Want to work with me?</h3>
          <p className={styles.ctaText}>
            Open to freelance projects, internships, and full-time opportunities.
            Let's build something great together.
          </p>
          <motion.button
            className={styles.ctaBtn}
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Get in touch →
          </motion.button>
        </div>
      </motion.div>

      {/* Arrow down */}
      <button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("experience")}
        aria-label="Next section"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" opacity="0.22">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 15l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
      </button>
    </section>
  );
}
