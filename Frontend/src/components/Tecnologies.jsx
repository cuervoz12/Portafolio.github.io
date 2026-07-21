import { technologies } from "../data/profile";

export default function Technologies() {
  return (
    <section className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Tecnologías</h2>
      <div className="grid grid-cols-3 gap-6">
        {technologies.map((tech, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
            <p className="text-cyan-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
