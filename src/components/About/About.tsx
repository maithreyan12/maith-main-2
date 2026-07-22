import { useRef } from "react";
import type { BezierDefinition } from "framer-motion";
import { motion, useInView } from "framer-motion";
import { AUTHOR, ABOUT_CARDS } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./About.module.css";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: EASE },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className={styles.about}>
      <motion.p
        className={styles.eyebrow}
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Get To Know More
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        About Me
      </motion.h2>

      <div className={styles.container}>
        {/* Left Column: Photo + Experience & Education Cards directly below */}
        <div className={styles.leftCol}>
          <motion.div
            className={styles.picWrap}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src={AUTHOR.aboutPic} alt="About Maithreyan" className={styles.aboutPic} />
          </motion.div>

          <div className={styles.cards}>
            {ABOUT_CARDS.map((card, i) => (
              <motion.div
                key={card.heading}
                className={styles.card}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(108,99,255,0.15)" }}
              >
                <img src={card.icon} alt={card.iconAlt} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{card.heading}</h3>
                <p className={styles.cardText}>
                  {card.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < card.description.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: About Bio Text Box */}
        <motion.div
          className={styles.bio}
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {AUTHOR.bio.split("\n\n").map((para, i) => (
            <p key={i} className={styles.bioParagraph} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </motion.div>
      </div>

      <motion.button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("experience")}
        aria-label="Scroll to Experience"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src="/assets/arrow.png" alt="Arrow down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
