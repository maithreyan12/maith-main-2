import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CHATBOT_KB, AUTHOR } from "../../data/portfolio";
import styles from "./Chatbot.module.css";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

function getBotResponse(input: string): string {
  const q = input.toLowerCase().trim();

  if (CHATBOT_KB.greetings.some((g) => q.includes(g))) {
    return `Hi there! 👋 I'm here to help you learn about ${AUTHOR.shortName}. Ask me about skills, projects, education, or contact info!`;
  }
  if (CHATBOT_KB.cv.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.cv.response;
  }
  if (CHATBOT_KB.contact.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.contact.response;
  }
  if (CHATBOT_KB.skills.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.skills.response;
  }
  if (CHATBOT_KB.projects.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.projects.response;
  }
  if (CHATBOT_KB.education.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.education.response;
  }
  if (CHATBOT_KB.experience.triggers.some((t) => q.includes(t))) {
    return CHATBOT_KB.experience.response;
  }

  return `I'm not sure about that, but feel free to ask about ${AUTHOR.shortName}'s **skills**, **projects**, **education**, **experience**, or **contact info**!`;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 0,
    role: "bot",
    text: `Hello! I'm **${AUTHOR.shortName}**, your AI assistant. I can help you with:\n• Contact information (email, LinkedIn, GitHub)\n• Skills and experience\n• Projects and portfolio\n• Education and background\n\nWhat would you like to know?`,
  },
];

let nextId = 1;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: nextId++, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotResponse(text);
      setMessages((prev) => [...prev, { id: nextId++, role: "bot", text: botText }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function renderText(text: string) {
    // Simple bold markdown **text** rendering
    return text.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
          )}
          {i < text.split("\n").length - 1 && <br />}
        </span>
      );
    });
  }

  return (
    <div className={styles.widget}>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.window}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Chat window"
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <div className={styles.avatar}>
                  <span>{AUTHOR.shortName[0]}</span>
                </div>
                <div>
                  <h3>{AUTHOR.shortName}</h3>
                  <p>Ask me anything!</p>
                </div>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className={styles.messages} role="log" aria-live="polite">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`${styles.message} ${msg.role === "user" ? styles.userMsg : styles.botMsg}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.bubble}>{renderText(msg.text)}</div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className={`${styles.message} ${styles.botMsg}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`${styles.bubble} ${styles.typingBubble}`}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className={styles.inputRow}>
              <input
                type="text"
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type your message..."
                aria-label="Chat input"
                autoComplete="off"
              />
              <button
                className={styles.sendBtn}
                onClick={sendMessage}
                aria-label="Send message"
                disabled={!input.trim()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        aria-expanded={open}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={open ? {} : { y: [0, -4, 0] }}
        transition={open ? {} : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" width="22" height="22" viewBox="0 0 24 24" fill="none" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.svg key="chat" width="22" height="22" viewBox="0 0 24 24" fill="none" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
