import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Projects.module.css";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.btnIcon}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const SwipeUpHandIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.swipeIcon}>
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<number | null>(null);

  const handleNext = () => {
    setExitDirection(-350);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
      setExitDirection(null);
    }, 220);
  };

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Interactive Paper Deck
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* ── Modern Paper Card Deck Showcase ── */}
      <div className={styles.deckWrapper}>
        <p className={styles.swipeHint}>
          <SwipeUpHandIcon /> Click image or swipe up for next project paper
        </p>

        <div className={styles.cardDeck}>
          {PROJECTS.map((project, i) => {
            const position = (i - activeIndex + PROJECTS.length) % PROJECTS.length;
            const isTop = position === 0;

            // Side-corner tilted paper offsets
            let rotate = 0;
            let xOffset = 0;
            let yOffset = 0;
            let scale = 1;
            let opacity = 1;

            if (position === 0) {
              rotate = 0;
              xOffset = 0;
              yOffset = 0;
              scale = 1;
              opacity = 1;
            } else if (position === 1) {
              rotate = 4.2; // Tilted right corner paper
              xOffset = 22;
              yOffset = 20;
              scale = 0.94;
              opacity = 0.84;
            } else {
              rotate = -4.2; // Tilted left corner paper
              xOffset = -22;
              yOffset = 38;
              scale = 0.88;
              opacity = 0.65;
            }

            const zIndex = PROJECTS.length - position;

            return (
              <motion.div
                key={project.title}
                className={`${styles.deckCard} ${isTop ? styles.topCard : styles.peekingCard}`}
                style={{ zIndex }}
                initial={false}
                animate={
                  isTop && exitDirection !== null
                    ? { y: exitDirection, rotate: -8, opacity: 0, scale: 1.04 }
                    : {
                        y: yOffset,
                        x: xOffset,
                        rotate: rotate,
                        scale: scale,
                        opacity: opacity,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                drag={isTop ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (isTop && (info.offset.y < -50 || info.velocity.y < -200)) {
                    handleNext();
                  }
                }}
                onClick={() => {
                  if (isTop) {
                    handleNext();
                  } else {
                    setActiveIndex(i);
                  }
                }}
              >
                {/* Image Container */}
                <div className={styles.imgWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImg} />
                  <div className={styles.imgOverlay} />
                  
                  {/* Side Corner Paper Tag */}
                  <span className={styles.paperTag}>
                    PROJECT 0{i + 1}
                  </span>

                  {/* Swipe Up Hint Badge on Top Card */}
                  {isTop && (
                    <div className={styles.swipeBadge}>
                      <SwipeUpHandIcon /> Click / Swipe Up
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className={styles.cardFooter}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveBtn}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Paper Tabs Navigation */}
        <div className={styles.paperTabsRow}>
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.title}
              className={`${styles.paperTab} ${idx === activeIndex ? styles.activePaperTab : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <span className={styles.tabNum}>0{idx + 1}</span>
              <span className={styles.tabName}>{proj.title}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("contact")}
        aria-label="Scroll to Contact"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src="/assets/arrow.png" alt="Arrow down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
