import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "Customer Service", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Data Management", level: 80 },
  { name: "Network Engineering", level: 75 }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Kombinasi kemampuan teknis dan interpersonal untuk mendukung kebutuhan
        bisnis
      </p>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs md:text-sm">
                <span className="font-medium text-slate-100">{skill.name}</span>
                <span className="text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card h-full rounded-2xl p-5 md:p-6"
        >
          <h3 className="text-sm font-semibold text-slate-50 md:text-base">
            Preferred Roles
          </h3>
          <p className="mt-2 text-xs text-slate-300 md:text-sm">
            Tertarik untuk berkontribusi dalam posisi yang berfokus pada data dan
            pengelolaan sistem IT.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-200 md:text-sm">
            <li>Data Analyst</li>
            <li>IT Administrator</li>
            <li>IT Consultant</li>
            <li>Data Management Analyst</li>
            <li>Data Administrator</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

