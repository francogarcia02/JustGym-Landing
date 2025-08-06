// components/CallToAction.tsx
export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Empezá hoy a gestionar tu gimnasio con JustGym
        </h2>
        <p className="text-gray-600 mb-8">
          Probalo gratis por 7 días. Sin compromiso, sin tarjeta.
        </p>
        <a href="https://www.instagram.com/sis_nuvanta/" target="_blank" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contactanos por Instagram
        </a>
      </div>
    </section>
  );
}
