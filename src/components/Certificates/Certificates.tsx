import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Certificates.module.css";

const AwardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const PdfIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function Certificates() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  const currentCert = CERTIFICATES[activeIndex];

  return (
    <section id="certificates" ref={ref} className={styles.certificates}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Credentials Showcase
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      {/* ── TV Screen Cinema Showcase ── */}
      <motion.div
        className={styles.tvShowcase}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Navigation Arrow Left */}
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          aria-label="Previous Certificate"
        >
          <ChevronLeft />
        </button>

        {/* Navigation Arrow Right */}
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          aria-label="Next Certificate"
        >
          <ChevronRight />
        </button>

        {/* TV Screen Frame */}
        <div className={styles.tvScreen}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={styles.tvSlide}
            >
              {/* Top Bar inside TV Screen */}
              <div className={styles.tvTopBar}>
                <div className={styles.awardHeader}>
                  <AwardIcon />
                  <span className={styles.issuerTag}>{currentCert.issuer}</span>
                </div>
                <span className={styles.dateTag}>{currentCert.date}</span>
              </div>

              {/* Full Certificate Preview View */}
              <div className={styles.tvImageFrame}>
                <a
                  href={currentCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imgLink}
                  title="Click to view full PDF document"
                >
                  <img
                    src={currentCert.image}
                    alt={currentCert.title}
                    className={styles.tvCertImage}
                  />
                  <div className={styles.imageHoverOverlay}>
                    <PdfIcon /> View Official PDF Document
                  </div>
                </a>
              </div>

              {/* Bottom Information Panel */}
              <div className={styles.tvBottomInfo}>
                <div className={styles.infoLeft}>
                  <h3 className={styles.certTitle}>{currentCert.title}</h3>
                  <div className={styles.credRow}>
                    <span className={styles.credLabel}>CREDENTIAL ID:</span>
                    <code className={styles.credCode}>{currentCert.credentialId}</code>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className={styles.skillsRow}>
                    {currentCert.skills.map((skill) => (
                      <span key={skill} className={styles.skillChip}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PDF Action Button */}
                <div className={styles.infoRight}>
                  <a
                    href={currentCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pdfBtn}
                  >
                    <PdfIcon /> View Official PDF <ExternalIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TV Slide Selectors / Indicators */}
        <div className={styles.tvSelectors}>
          {CERTIFICATES.map((cert, idx) => (
            <button
              key={cert.id}
              className={`${styles.selectTab} ${idx === activeIndex ? styles.activeTab : ""}`}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
            >
              <span className={styles.tabNum}>0{idx + 1}</span>
              <span className={styles.tabTitle}>{cert.title}</span>
            </button>
          ))}
        </div>
      </motion.div>

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
