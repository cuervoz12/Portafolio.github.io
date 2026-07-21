import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.img src={profile.avatar} alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-[0_0_20px_#0ff]"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}/>
      <motion.h1 className="text-4xl font-bold mt-4" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {profile.name}
      </motion.h1>
      <motion.p className="text-xl text-cyan-400" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        {profile.title}
      </motion.p>
      <div className="mt-6 flex gap-4">
        <a href={profile.github} className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 transition">GitHub</a>
        <a href={profile.linkedin} className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 transition">LinkedIn</a>
      </div>
    </section>
  );
}
