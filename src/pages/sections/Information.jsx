// components/Features.tsx
const features = [
  {
    title: "Control de cuotas",
    description: "Gestioná las cuotas de cada disciplinas de tus alumnos",
    emoji: "💳",
  },
  {
    title: "Administración de horarios y clases",
    description: "Controla cupos y que alumnos asisten a tus clases",
    emoji: "📅",
  },
  {
    title: "Control de accesos",
    description: "Verifica que el alumno que entrene tiene la cuota al dia",
    emoji: "🔐",
  },
  {
    title: "Estadísticas de crecimiento",
    description: "En el panel de estadisticas ves el crecimiento de tu gimnasio y de cada disciplina a lo largo de los años",
    emoji: "📊",
  },
  {
    title: "Gestión de entrenadores",
    description: "Organizá tus horarios y asigná entrenadores.",
    emoji: "🧑‍🏫",
  },
  {
    title: "Acceso desde cualquier dispositivo",
    description: "Todo en la nube, sin instalaciones.",
    emoji: "☁️",
  },
  {
    title: "Comodidad ante todo.",
    description: "Con nuestra aplicacion descargable tenes tu administracion a un click",
    emoji: "📱",
  },
  {
    title: "Pensamos en tus alumnos!",
    description: "Cada alumno tiene su cuenta, desde donde puede ver sus planes, pagos, tus horarios y sus clases registradas",
    emoji: "🧑‍🎓",
  },
];

export default function Information() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">JustGym puede hacer de todo</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-left hover:shadow-md transition">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
