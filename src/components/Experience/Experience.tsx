import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORIES } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Experience.module.css";

const LEVEL_PERCENT: Record<string, number> = {
  Basic: 35,
  Intermediate: 65,
  Experienced: 90,
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className={styles.experience}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Explore My
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className={styles.grid}>
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + ci * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className={styles.cardTitle}>{cat.title}</h3>
            <ul className={styles.skillList}>
              {cat.skills.map((skill, si) => (
                <li key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <div className={styles.skillLeft}>
                      <img src="/assets/checkmark.png" alt="" className={styles.checkIcon} />
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${LEVEL_PERCENT[skill.level]}%` } : { width: 0 }}
                      transition={{ delay: 0.4 + ci * 0.15 + si * 0.06, duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
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
