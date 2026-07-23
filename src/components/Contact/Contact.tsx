import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { AUTHOR } from "../../data/portfolio";
import styles from "./Contact.module.css";
import type { BezierDefinition } from "framer-motion";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];


interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 12.5l3.5 3.5L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ErrorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v6M12 17v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus("sending");
    try {
      const firstLetter = (data.name.trim().charAt(0) || "U").toUpperCase();
      const submittedTime = new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/${AUTHOR.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `⚡ New Portfolio Contact from ${data.name}`,
            _template: "box",
            _captcha: "false",
            _replyto: data.email,
            "1. Sender Avatar": `[ ${firstLetter} ] ${data.name}`,
            "2. Full Name": data.name,
            "3. Email Address": data.email,
            "4. Phone Number": data.phone?.trim() ? data.phone : "Not provided",
            "5. Subject": `Portfolio Inquiry from ${data.name}`,
            "6. Submitted Time": submittedTime,
            "7. Message Content": data.message,
            "8. Reply Action": `mailto:${data.email}?subject=Re:%20Portfolio%20Inquiry`,
            "9. Sent From": "Maithreyan D Portfolio Website (https://github.com/maithreyan12)",
          }),
        }
      );

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      {/* Header */}
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE }}
      >
        Get in Touch
      </motion.p>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.55, ease: EASE }}
      >
        Contact Me
      </motion.h2>

      {/* Info pills */}
      <motion.div
        className={styles.infoRow}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
      >
        <motion.a
          href={`mailto:${AUTHOR.email}`}
          className={styles.infoCard}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <img src="/assets/email.png" alt="Email" className={styles.infoIcon} />
          <span>{AUTHOR.email}</span>
        </motion.a>
        <motion.a
          href={AUTHOR.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoCard}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <img src="/assets/linkedin.png" alt="LinkedIn" className={styles.infoIcon} />
          <span>LinkedIn</span>
        </motion.a>
        <motion.a
          href={AUTHOR.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.infoCard}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-primary)" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>Instagram</span>
        </motion.a>
      </motion.div>

      {/* Form card */}
      <motion.div
        className={styles.formWrapper}
        initial={{ opacity: 0, y: 44 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.65, ease: EASE }}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name + Email row */}
          <div className={styles.formGrid}>
            <div className={styles.formRow}>
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className={errors.name ? styles.inputError : ""}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
            </div>

            <div className={styles.formRow}>
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                className={errors.email ? styles.inputError : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
            </div>
          </div>

          {/* Phone */}
          <div className={styles.formRow}>
            <label htmlFor="contact-phone">
              Phone <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="(+91) 98765 43210"
              {...register("phone")}
            />
          </div>

          {/* Message */}
          <div className={styles.formRow}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              className={errors.message ? styles.inputError : ""}
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "At least 10 characters" },
              })}
            />
            {errors.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
          </div>

          {/* Honeypot anti-spam (hidden) */}
          <input type="checkbox" name="botcheck" className={styles.hidden} />

          {/* Submit */}
          <motion.button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "sending"}
            whileHover={status !== "sending" ? { scale: 1.03, y: -2 } : {}}
            whileTap={status !== "sending" ? { scale: 0.97 } : {}}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            {status === "sending" ? (
              <>
                <span className={styles.spinner} />
                Sending…
              </>
            ) : (
              <>
                <SendIcon />
                Send Message
              </>
            )}
          </motion.button>

          {/* Status banners */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                className={styles.statusBanner + " " + styles.statusSuccess}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                role="status"
              >
                <CheckIcon />
                <div>
                  <strong>Message sent!</strong>
                  <p>I'll get back to you at {AUTHOR.email} soon.</p>
                </div>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                className={styles.statusBanner + " " + styles.statusError}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                role="alert"
              >
                <ErrorIcon />
                <div>
                  <strong>Something went wrong.</strong>
                  <p>Email me directly at <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a></p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
