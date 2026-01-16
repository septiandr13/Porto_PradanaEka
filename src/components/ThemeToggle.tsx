import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-slate-700/70 bg-slate-900/70 px-1 shadow-inner"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-900 text-xs"
      >
        {theme === "dark" ? "☾" : "☀"}
      </motion.span>
      <span className="pointer-events-none absolute right-2 text-[10px] uppercase tracking-wide text-slate-400">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}

