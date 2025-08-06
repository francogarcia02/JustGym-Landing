// components/Pricing.tsx
export default function Precios() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Un precio simple y transparente</h2>
        <p className="text-gray-600 mb-8">Sin sorpresas, sin comisiones.</p>
        <div className="bg-white rounded-xl shadow p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Plan JustGym</h3>
          <p className="text-4xl font-bold text-blue-600 mb-4">ARS 40.000 / mes</p>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✔ Prueba gratis de 7 dias</li>
            <li>✔ Hasta 2 sucursales</li>
            <li>✔ Acceso a todas las funciones</li>
            <li>✔ Soporte técnico incluido</li>
          </ul>
          <a href="https://www.instagram.com/sis_nuvanta/" target="_blank" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Solicitar demo gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
