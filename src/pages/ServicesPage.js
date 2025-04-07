import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Consultoría en IA",
      description: "Asesoramiento estratégico para implementar soluciones de inteligencia artificial en tu negocio.",
      icon: "💡"
    },
    {
      title: "Desarrollo Personalizado",
      description: "Creación de modelos de IA a medida para resolver problemas específicos de tu industria.",
      icon: "🛠️"
    },
    {
      title: "Integración de Nexus AI",
      description: "Implementación de nuestro modelo estrella en tus sistemas existentes.",
      icon: "🤖"
    },
    {
      title: "Capacitación",
      description: "Programas de entrenamiento para que tu equipo domine las últimas tecnologías en IA.",
      icon: "🎓"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones completas para llevar tu negocio a la era de la inteligencia artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all">
              <div className="text-4xl text-cyan-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-900 to-purple-900 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6">¿Por qué elegir Nexus AI?</h3>
          <p className="text-gray-300 mb-6">
            Nexus AI combina lo mejor de DeepSeek y Qwen para ofrecer capacidades de procesamiento de lenguaje natural sin precedentes. Nuestro modelo puede:
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              Entender y generar texto en múltiples idiomas
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              Analizar grandes volúmenes de datos en segundos
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              Integrarse fácilmente con tus sistemas existentes
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-2">✓</span>
              Aprender y adaptarse a tus necesidades específicas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;