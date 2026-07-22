import React from "react";
import { motion } from "framer-motion";
import { QUICK_NAV } from "../../data/portfolio";
import { scrollToSection } from "../../hooks/useScrollSpy";
import styles from "./QuickMenu.module.css";

const ICONS: Record<string, React.ReactElement> = {
  profile: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 19c0-3.3 3.1-5 7-5s7 1.7 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16M8 7V5h8v2M9 12v-2m6 2v-2m-9 7v-2m12 2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5h14v6H5zM5 13h6v6H5zM13 13h6v6h-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16v12H5.5L4 19.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8l5 4 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function QuickMenu() {
  return (
    <div className={styles.quickMenu} role="navigation" aria-label="Quick navigation">
      {QUICK_NAV.map((item, i) => (
        <motion.button
          key={item.label}
          className={styles.btn}
          onClick={() => scrollToSection(item.href)}
          aria-label={item.label}
          title={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          {ICONS[item.icon]}
          <span className={styles.label}>{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
