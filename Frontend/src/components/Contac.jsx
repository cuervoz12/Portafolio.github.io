import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="p-10 bg-black text-white flex flex-col items-center">
      <motion.h2 className="text-3xl font-bold text-cyan-400 mb-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Contacto
      </motion.h2>

      <motion.a  href={`mailto:${profile.email}`}
        className="px-6 py-3 rounded bg-cyan-500 hover:bg-cyan-400 transition font-bold text-lg"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {profile.email}
      </motion.a>
    </section>
  );
}
