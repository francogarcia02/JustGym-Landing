export default function Hero() {
  return (
    <section className="bg-white py-24 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tu gimnasio, ordenado y bajo control
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          JustGym es el sistema ideal para manejar alumnos, planes, entrenadores, estadisticas, horarios y clases.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a href="#pricing" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Probar gratis 7 días
          </a>
          <a href="https://www.instagram.com/sis_nuvanta/" target="_blank" className="text-blue-600 font-semibold underline">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}