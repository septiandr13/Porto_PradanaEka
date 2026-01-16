import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card rounded-2xl p-5 md:p-6"
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Sertifikasi yang mendukung kemampuan teknis di bidang jaringan
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-50">
              CCNA Routing & Switching
            </p>
            <p className="text-xs text-slate-400">
              Cisco Certified Network Associate
            </p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            Networking
          </span>
        </div>
      </motion.div>
    </section>
  );
}

