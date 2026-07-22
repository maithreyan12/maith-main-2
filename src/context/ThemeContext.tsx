import React, { createContext, useContext, useEffect, useReducer } from "react";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

type ThemeAction = { type: "TOGGLE" } | { type: "SET"; payload: Theme };

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "dark" ? "light" : "dark" };
    case "SET":
      return { theme: action.payload };
    default:
      return state;
  }
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" }, () => ({
    theme: getInitialTheme(),
  }));

  // Apply data-theme attribute and persist to localStorage
  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE" });

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
