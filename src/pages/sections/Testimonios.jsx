// components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Lo que dicen nuestros clientes</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Desde que uso JustGym, me olvidé del Excel y todo está más ordenado. Es fácil, rápido y mis alumnos lo notaron.”
        </blockquote>
        <p className="mt-4 text-gray-500 font-semibold">— Mariano G., dueño de gimnasio en Córdoba</p>
      </div>
    </section>
  );
}
