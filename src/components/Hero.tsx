import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTypingRoles } from "../hooks/useTypingRoles";

export function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const roles = [
    "Data Analyst",
    "IT Administrator",
    "IT Consultant",
    "Data Management Analyst",
    "Data Administrator"
  ];

  const typing = useTypingRoles(roles);

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] md:items-center"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-glow/40"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Undergraduate Informatics Student · Universitas Ahmad Dahlan</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
        >
          Pradana Eka Prameswari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base font-medium text-cyan-300 md:text-lg"
        >
          {typing}
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300 align-middle" />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base"
        >
          Domisili di Daerah Istimewa Yogyakarta, Indonesia. IPK 3.66. Saya
          berfokus pada analisis data, manajemen sistem, dan solusi IT untuk
          membantu perusahaan mengambil keputusan yang lebih baik.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="/cv/pradana-eka-prameswari.pdf"
            className="btn-primary"
          >
            Download CV
          </a>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Contact
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-wrap gap-3 text-[11px] text-slate-400"
        >
          <span className="rounded-full border border-slate-700/70 px-3 py-1">
            She/Her
          </span>
          <span className="rounded-full border border-slate-700/70 px-3 py-1">
            Data Analyst
          </span>
          <span className="rounded-full border border-slate-700/70 px-3 py-1">
            IT Administrator
          </span>
          <span className="rounded-full border border-slate-700/70 px-3 py-1">
            Data Management
          </span>
        </motion.div>
      </div>
      <motion.div
        style={{ translateY, rotate }}
        className="relative mx-auto flex h-60 w-60 items-center justify-center rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70 md:h-72 md:w-72"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-cyan-400 to-emerald-300 md:h-48 md:w-48"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/70 shadow-lg md:h-40 md:w-40">
            <img
              src="/profile/pradana-eka-profile.jpg"
              alt="Foto profil profesional Pradana Eka Prameswari"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="pointer-events-none absolute inset-[14%] rounded-full border border-white/30" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1.5 text-[11px] text-slate-200 shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Available for internship and entry-level roles</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
