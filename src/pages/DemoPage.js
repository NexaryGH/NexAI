import React, { useState } from 'react';

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState('nexus');

  const demos = {
    nexus: {
      title: "Nexus AI Demo",
      description: "Prueba nuestro modelo estrella impulsado por DeepSeek y Qwen. Escribe cualquier pregunta y obtén respuestas inteligentes en segundos.",
      features: [
        "Procesamiento de lenguaje natural avanzado",
        "Capacidad multilingüe",
        "Respuestas contextuales",
        "Integración con APIs externas"
      ]
    },
    visionx: {
      title: "VisionX Demo",
      description: "Sube una imagen y deja que nuestra IA la analice. Reconocimiento de objetos, escenas y mucho más.",
      features: [
        "Reconocimiento de objetos",
        "Análisis de escenas",
        "Detección de rostros",
        "Clasificación de imágenes"
      ]
    },
    dataflow: {
      title: "DataFlow Demo",
      description: "Visualiza cómo nuestra IA puede procesar y analizar tus datos para extraer insights valiosos.",
      features: [
        "Análisis predictivo",
        "Procesamiento de big data",
        "Visualización interactiva",
        "Alertas inteligentes"
      ]
    }
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Prueba Nuestros Productos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experimenta el poder de nuestra inteligencia artificial
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(demos).map((demoKey) => (
            <button
              key={demoKey}
              onClick={() => setActiveTab(demoKey)}
              className={`px-6 py-3 rounded-lg ${activeTab === demoKey ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'} transition-colors`}
            >
              {demos[demoKey].title}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">{demos[activeTab].title}</h3>
          <p className="text-gray-300 mb-6">{demos[activeTab].description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Características:</h4>
              <ul className="space-y-3">
                {demos[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center justify-center">
              {activeTab === 'nexus' ? (
                <div className="w-full">
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white mb-4" 
                    placeholder="Escribe tu pregunta aquí..."
                    rows="4"
                  ></textarea>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:opacity-90 transition-all">
                    Enviar a Nexus AI
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-5xl mb-4">📁</div>
                  <p className="text-gray-400 mb-4">Sube un archivo para analizar</p>
                  <button className="px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors">
                    Seleccionar archivo
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-white mb-4">¿Quieres una demo personalizada?</h4>
            <p className="text-gray-300 mb-4">Programa una sesión con nuestro equipo para ver cómo nuestras soluciones pueden adaptarse a tus necesidades específicas.</p>
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              Solicitar demo personalizada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;