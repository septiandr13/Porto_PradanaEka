import { motion } from "framer-motion";

export function Languages() {
  return (
    <section id="languages" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card rounded-2xl p-5 md:p-6"
      >
        <h2 className="section-title">Language</h2>
        <p className="section-subtitle">
          Kemampuan bahasa untuk komunikasi profesional
        </p>
        <div className="space-y-3 text-sm text-slate-200">
          <div className="flex items-center justify-between">
            <span>Indonesian</span>
            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300">
              Native
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>English</span>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-300">
              Intermediate
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

