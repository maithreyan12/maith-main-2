import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TECHNICAL_EXPERTISE_CARDS } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Experience.module.css";

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
        Technical Expertise
      </motion.h2>

      <div className={styles.grid}>
        {TECHNICAL_EXPERTISE_CARDS.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + ci * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <span className={styles.countBadge}>{cat.skills.length}</span>
            </div>
            <div className={styles.skillGrid}>
              {cat.skills.map((skill) => (
                <div key={skill.name} className={styles.skillBox}>
                  <div className={styles.skillLeft}>
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className={styles.techIcon} />
                    ) : (
                      <span className={styles.bulletDot}>✦</span>
                    )}
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  {skill.level && (
                    <span className={`${styles.skillBadge} ${styles[skill.level.toLowerCase()]}`}>
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
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
