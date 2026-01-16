import { motion } from "framer-motion";

export function Education() {
  const cards = [
    {
      title: "Universitas Ahmad Dahlan",
      subtitle: "S1 Informatika",
      description:
        "Undergraduate Informatics Student dengan fokus pada pengembangan sistem dan analisis data.",
      badge: "Current",
      gpa: "IPK 3.66"
    },
    {
      title: "SMK Telkom Jakarta",
      subtitle: "Network Engineering",
      description:
        "Mempelajari dasar jaringan komputer, konfigurasi perangkat jaringan, dan troubleshooting.",
      badge: "Graduate"
    }
  ];

  return (
    <section id="education" className="scroll-mt-28">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        Latar belakang pendidikan di bidang Informatika dan Network Engineering
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="glass-card group flex flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                {card.title}
              </h3>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[10px] uppercase tracking-wide text-slate-300">
                {card.badge}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-cyan-300 md:text-sm">
              {card.subtitle}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-300 md:text-sm">
              {card.description}
            </p>
            {card.gpa && (
              <div className="mt-3 inline-flex items-center rounded-full bg-slate-800/70 px-3 py-1 text-[11px] text-emerald-300">
                {card.gpa}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

