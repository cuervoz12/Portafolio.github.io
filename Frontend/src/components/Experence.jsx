import { experencie } from "../data/profile";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Experiencia Laboral</h2>
      {experencie.map((exp, i) => (
        <motion.div key={i}
          className="mb-4 p-6 rounded-lg bg-white/10 backdrop-blur-md hover:scale-105 transition"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
          <h3 className="text-xl text-cyan-400">{exp.company}</h3>
          <p className="font-semibold">{exp.role} - {exp.duration}</p>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
