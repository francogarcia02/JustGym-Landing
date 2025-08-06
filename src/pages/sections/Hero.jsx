export default function Hero() {
  return (
    <section className="py-48 text-center px-6 bg-indigo-600 text-white w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tu gimnasio, ordenado y bajo control
        </h1>
        <p className="text-lg text-white font-bold mb-8">
          JustGym es el sistema ideal para manejar alumnos, planes, entrenadores, estadisticas, horarios y clases.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a href="#pricing" className="bg-white border border-white hover:border-black text-black px-6 py-3 rounded-lg font-semibold transition">
            Probar gratis 7 días
          </a>
          <a href="https://www.instagram.com/sis_nuvanta/" target="_blank" className="text-white font-bold underline">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}