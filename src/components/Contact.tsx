import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card rounded-2xl p-6 md:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="section-title mb-1">Contact</h2>
            <p className="text-sm text-slate-300 md:text-base">
              Tertarik berkolaborasi atau memiliki peluang yang sesuai? Silakan
              hubungi saya melalui kanal berikut.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:pradanaprameswari88@gmail.com"
              className="btn-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ pradana-eka-prameswari"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/6287721830287"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

