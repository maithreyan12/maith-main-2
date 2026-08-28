import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Projects.module.css";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={styles.btnIcon}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.btnIcon}>
    <path d="M3.609 1.814L15.422 12 3.609 22.186A1.84 1.84 0 0 1 3 20.814V3.186c0-.573.255-1.077.609-1.372zM16.924 13.256l2.946-2.525a1.166 1.166 0 0 0 0-1.462l-2.946-2.525-2.604 2.256 2.604 2.256zm-14.887 9.877c.438.307.994.331 1.488.081l10.457-5.69-2.316-2.006-9.629 7.615zM4.67 1.986l10.457 5.69-2.316 2.006L3.182 2.067a1.642 1.642 0 0 1 1.488-.081z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={styles.btnIcon}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const SPRING = { type: "spring" as const, stiffness: 420, damping: 34, mass: 1 };

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const total = PROJECTS.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleGoTo = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

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

      <div className={styles.deckWrapper}>
        <p className={styles.swipeHint}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#38bdf8", flexShrink: 0 }}>
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          Swipe up or tap card for next project
        </p>

        {/* ── Card Stack ── */}
        <div className={styles.cardDeck}>
          {PROJECTS.map((project, i) => {
            const pos = (i - activeIndex + total) % total;
            const isTop = pos === 0;
            const isSecond = pos === 1;

            // Only render top 3 cards in the stack
            if (pos > 2) return null;

            return (
              <motion.div
                key={project.title}
                className={`${styles.deckCard} ${isTop ? styles.topCard : styles.peekingCard}`}
                style={{ zIndex: total - pos }}
                initial={false}
                animate={{
                  y: isTop ? 0 : isSecond ? 18 : 34,
                  x: isTop ? 0 : isSecond ? 18 : -18,
                  rotate: isTop ? 0 : isSecond ? 3.5 : -3.5,
                  scale: isTop ? 1 : isSecond ? 0.95 : 0.90,
                  opacity: isTop ? 1 : isSecond ? 0.82 : 0.6,
                }}
                transition={SPRING}
                drag={isTop ? "y" : false}
                dragConstraints={{ top: -20, bottom: 20 }}
                dragElastic={{ top: 0.5, bottom: 0.05 }}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  if (isTop && (info.offset.y < -60 || info.velocity.y < -250)) {
                    handleNext();
                  }
                }}
                onClick={() => {
                  if (!isTop) {
                    handleGoTo(i);
                  }
                }}
                whileDrag={isTop ? { scale: 1.02, rotate: -2, cursor: "grabbing" } : {}}
              >
                {/* Image */}
                <div className={styles.imgWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImg}
                    loading={pos === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                  <div className={styles.imgOverlay} />

                  {project.badge && (
                    <span className={styles.playStoreBadge}>
                      <PlayStoreIcon /> {project.badge}
                    </span>
                  )}

                  <span className={styles.paperTag}>PROJECT 0{i + 1}</span>

                  {isTop && (
                    <div className={styles.swipeBadge} onClick={handleNext}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                      Swipe Up / Tap
                    </div>
                  )}
                </div>

                {/* Card Footer — only full content on top card */}
                <div className={styles.cardFooter}>
                  <div className={styles.cardInfo}>
                    <div className={styles.projectMeta}>
                      <span className={styles.categoryBadge}>{project.category}</span>
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    {project.description && isTop && (
                      <p className={styles.projectDesc}>{project.description}</p>
                    )}
                    {isTop && (
                      <div className={styles.techTags}>
                        {project.tech.map((t) => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {isTop && (
                    <div className={styles.btnGroup}>
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.playStoreBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <PlayStoreIcon /> Google Play
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.liveBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalIcon /> {project.playStoreUrl ? "Web Demo" : "Live Site"}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.githubBtn}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot / Tab Navigation */}
        <div className={styles.paperTabsRow}>
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.title}
              className={`${styles.paperTab} ${idx === activeIndex ? styles.activePaperTab : ""}`}
              onClick={() => handleGoTo(idx)}
              aria-label={`Go to project ${idx + 1}: ${proj.title}`}
            >
              <span className={styles.tabNum}>0{idx + 1}</span>
              <span className={styles.tabName}>{proj.title}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.button
        className={styles.arrowBtn}
        onClick={() => scrollToSection("certificates")}
        aria-label="Scroll to Certificates"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src="/assets/arrow.png" alt="Arrow down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
