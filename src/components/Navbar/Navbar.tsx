import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
import { NAV_LINKS, AUTHOR } from "../../data/portfolio";
import styles from "./Navbar.module.css";

const SECTION_IDS = ["profile", "about", "skills", "experience", "projects", "contact"];

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating pill navbar */}
      <div className={styles.navWrapper}>
        <motion.nav
          className={styles.pill}
          layout
          transition={{ type: "spring", stiffness: 340, damping: 30 }}
          initial={{ y: -80, opacity: 0, scale: 0.85 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: scrolled ? 0.97 : 1,
          }}
          style={{
            boxShadow: scrolled
              ? "0 8px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.55) inset"
              : "0 4px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5) inset",
          }}
        >
          {/* Logo */}
          <motion.button
            className={styles.logo}
            onClick={() => scrollToSection("profile")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
          >
            {AUTHOR.shortName}
          </motion.button>

          {/* Nav links — desktop */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.label}>
                  <motion.button
                    className={styles.navLink}
                    onClick={() => handleNavClick(link.href)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.93 }}
                    style={{ position: "relative" }}
                  >
                    {isActive && (
                      <motion.span
                        className={styles.activePill}
                        layoutId="activePill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: 1, fontWeight: isActive ? 700 : 500 }}>
                      {link.label}
                    </span>
                  </motion.button>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className={styles.controls}>
            <motion.button
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              whileHover={{ scale: 1.12, rotate: 18 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </motion.button>

            <motion.button
              className={`${styles.iconBtn} ${styles.menuBtn}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <CloseIcon />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <MenuIcon />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Fullscreen liquid overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ clipPath: "ellipse(5% 5% at 92% 5%)" }}
            animate={{ clipPath: "ellipse(160% 160% at 92% 5%)" }}
            exit={{ clipPath: "ellipse(0% 0% at 92% 5%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            aria-modal="true"
            role="dialog"
          >
            <nav className={styles.overlayNav}>
              <ul className={styles.overlayLinks}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.08 + i * 0.07, type: "spring", stiffness: 280, damping: 24 }}
                  >
                    <motion.button
                      onClick={() => handleNavClick(link.href)}
                      whileHover={{ x: 16, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
