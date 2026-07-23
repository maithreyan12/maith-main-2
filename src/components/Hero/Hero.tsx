import { useRef, useState, useEffect, useCallback } from "react";
import type { BezierDefinition } from "framer-motion";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
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

const TITLES = [
  "Full Stack Developer",
  "Flutter App Developer",
  "Android & iOS Developer",
  "MERN Stack Developer",
  "React & Next.js Developer",
  "Backend Developer",
  "UI/UX Designer",
  "AI Application Developer",
  "Founder @ Appziio",
];

const SPARKLE_COLORS = ["#22d3ee", "#818cf8", "#34d399", "#f8fafc", "#cbd5e1"];

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
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

  // ── Typewriter Logic ──
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerSparkles = useCallback(() => {
    const count = 10;
    const newParticles: Particle[] = Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const dist = 22 + Math.random() * 30;
      return {
        id: Date.now() + i + Math.random(),
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 6,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        size: 3.5 + Math.random() * 3.5,
      };
    });
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 800);
  }, []);

  useEffect(() => {
    const currentFullTitle = TITLES[titleIndex];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentFullTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length + 1));
        }, 70);
      } else {
        // Finished typing word -> trigger sparkles & pause 2 seconds
        triggerSparkles();
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullTitle.slice(0, displayText.length - 1));
        }, 35);
      } else {
        // Finished deleting -> move to next title
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, triggerSparkles]);

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
        {/* Element 1: "HELLO, I AM" Handcrafted Liquid Platinum Badge */}
        <motion.div variants={itemVariants}>
          <motion.div
            className={styles.greetingBadge}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
          >
            <span className={styles.greetingStatusDot} />
            <span className={styles.greetingText}>HELLO, I AM</span>
          </motion.div>
        </motion.div>


        {/* Name */}
        <motion.h1 className={styles.name} variants={itemVariants}>
          {AUTHOR.name}
        </motion.h1>

        {/* Element 2: Animated Typewriter Developer Title with Gradient Shimmer & Sparkle Spray */}
        <motion.div className={styles.titleContainer} variants={itemVariants}>
          <div className={styles.titleWrapper}>
            <span className={styles.titleText}>
              {displayText}
              <span className={styles.cursor} />
            </span>

            {/* Sparkle Particles Burst */}
            <AnimatePresence>
              {particles.map((p) => (
                <motion.span
                  key={p.id}
                  className={styles.particle}
                  style={{
                    backgroundColor: p.color,
                    boxShadow: `0 0 10px ${p.color}`,
                    width: p.size,
                    height: p.size,
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Buttons & Socials unchanged */}
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
          <a href={AUTHOR.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
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
