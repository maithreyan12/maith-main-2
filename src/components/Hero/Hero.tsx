import { useRef } from "react";
import type { BezierDefinition } from "framer-motion";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AUTHOR } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./Hero.module.css";

async function downloadCV() {
  const url = AUTHOR.cvAsset;
  const preview = window.open("about:blank", "_blank");
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    if (preview && !preview.closed) preview.location.href = blobUrl;
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = AUTHOR.cvDownloadName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 120000);
  } catch (err) {
    if (preview && !preview.closed) preview.close();
    const fallback = document.createElement("a");
    fallback.href = url;
    fallback.download = AUTHOR.cvDownloadName;
    fallback.target = "_blank";
    fallback.rel = "noopener noreferrer";
    document.body.appendChild(fallback);
    fallback.click();
    fallback.remove();
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const tx = useSpring(useTransform(mouseX, [-1, 1], [-16, 16]), springConfig);
  const ty = useSpring(useTransform(mouseY, [-1, 1], [-12, 12]), springConfig);
  const rx = useSpring(useTransform(mouseY, [-1, 1], [6, -6]), springConfig);
  const ry = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section id="profile" className={styles.hero}>
      <motion.div
        ref={containerRef}
        className={styles.picContainer}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={AUTHOR.profilePic}
          alt={`${AUTHOR.name} profile picture`}
          className={styles.profilePic}
          style={{ x: tx, y: ty, rotateX: rx, rotateY: ry }}
          draggable={false}
        />
      </motion.div>

      <motion.div
        className={styles.textContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.greeting} variants={itemVariants}>
          Hello, I'm
        </motion.p>
        <motion.h1 className={styles.name} variants={itemVariants}>
          {AUTHOR.name}
        </motion.h1>
        <motion.p className={styles.title} variants={itemVariants}>
          {AUTHOR.title}
        </motion.p>

        <motion.div className={styles.btnContainer} variants={itemVariants}>
          <motion.button
            className={`${styles.btn} ${styles.btnOutline}`}
            onClick={downloadCV}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Download CV
          </motion.button>
          <motion.button
            className={`${styles.btn} ${styles.btnFilled}`}
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Contact Info
          </motion.button>
        </motion.div>

        <motion.div className={styles.socials} variants={itemVariants}>
          <a href={`mailto:${AUTHOR.email}`} aria-label="Email" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/assets/email.png" alt="Email" />
          </a>
          <a href={AUTHOR.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a href={AUTHOR.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/assets/github.png" alt="GitHub" />
          </a>
        </motion.div>
      </motion.div>

      {/* Down arrow */}
      <motion.button
        className={styles.arrowDown}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
      >
        <img src="/assets/arrow.png" alt="Scroll down" className={styles.arrowImg} />
      </motion.button>
    </section>
  );
}
