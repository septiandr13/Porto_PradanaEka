import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  children: ReactNode;
};

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-hero-gradient bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="floating-shape" />
        <div className="floating-shape" />
        <div className="floating-shape" />
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-500 to-cyan-400 text-xs font-semibold text-white shadow-glow">
              PEP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                Pradana Eka
              </span>
              <span className="text-[11px] text-slate-400">
                Data & IT Enthusiast
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                className="relative group tracking-wide text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                type="button"
                onClick={() => {
                  const el = document.getElementById(section.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span>{section.label}</span>
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-0 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-16 pt-10 md:gap-20 md:px-6 md:pt-14"
      >
        {children}
      </motion.main>
    </div>
  );
}
