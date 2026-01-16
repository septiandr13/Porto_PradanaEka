import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Valdo Inc",
    period: "Apr 2025 - Sep 2025",
    role: "Customer Experience Officer",
    details: [
      "Menangani isu seller melalui live chat",
      "Melakukan proses eskalasi ke tim terkait",
      "Menjaga komunikasi sesuai SLA"
    ]
  },
  {
    company: "PT Layan Procust Utama",
    period: "Jul 2024 - Apr 2025",
    role: "Customer Experience Officer",
    details: [
      "Memberikan dukungan layanan kepada pelanggan",
      "Mengumpulkan insight dari feedback pelanggan",
      "Berkoordinasi lintas tim untuk perbaikan layanan"
    ]
  },
  {
    company: "PT Telkom Akses",
    period: "Okt 2022 - Des 2022",
    role: "Internship",
    details: [
      "Membuat visualisasi data menggunakan Google Data Studio",
      "Mendukung pengelolaan Oracle Inventory Management",
      "Mengembangkan Telegram bot untuk mirroring data"
    ]
  },
  {
    company: "Dayacipta Kemasindo",
    period: "Periode Magang",
    role: "Financial Accountant Intern",
    details: [
      "Mendukung pencatatan dan rekonsiliasi keuangan",
      "Membantu penyusunan laporan keuangan berkala"
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
        <div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Perjalanan profesional yang membentuk kemampuan analitis dan layanan
            pelanggan
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Pengalaman lintas perusahaan dan industri membantu saya memahami
            kebutuhan pengguna, mengelola data, serta berkomunikasi efektif
            dengan berbagai pemangku kepentingan.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-2 left-[11px] w-px bg-gradient-to-b from-brand-500 via-slate-600 to-cyan-400" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-y-2 left-[11px] w-px bg-gradient-to-b from-cyan-400 via-brand-500 to-emerald-300"
          />
          <div className="space-y-6 pl-8">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group glass-card relative rounded-2xl p-4 md:p-5"
              >
                <div className="absolute -left-[15px] top-5 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_0_4px_rgba(34,211,238,0.35)] transition group-hover:scale-110" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                    {item.company}
                  </h3>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-cyan-300">
                  {item.role}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 md:text-sm">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="relative pl-4 transition group-hover:text-slate-50"
                    >
                      <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-cyan-300" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

