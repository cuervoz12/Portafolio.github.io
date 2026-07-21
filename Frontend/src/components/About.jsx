import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section className="p-10 bg-gray-900 text-white flex justify-center">
      <motion.div className="max-w-2xl p-6 rounded-lg bg-white/10 backdrop-blur-md shadow-lg"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Sobre mí</h2>
        <p className="text-lg">{profile.description}</p>
      </motion.div>
    </section>
  );
}
