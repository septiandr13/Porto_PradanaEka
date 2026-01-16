import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card rounded-3xl p-6 md:p-8"
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Highly motivated, fast learner, and passionate person
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-sm leading-relaxed text-slate-200 md:text-base"
        >
          I am a highly motivated, fast learner, and passionate person. I aim to
          utilize my experience and knowledge to grow professionally and
          contribute valuable impact to the company.
        </motion.p>
      </motion.div>
    </section>
  );
}

