import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-cyan-900 to-purple-900 opacity-80"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Sobre NexAI</h2>
            <p className="text-gray-400 mb-6">
              Fundada en 2025, NexAI es una empresa emergente dedicada al desarrollo de soluciones inteligentes basadas en Inteligencia Artificial. 
              Nuestro objetivo es transformar la forma en que las personas interactúan con la tecnología.
            </p>
            <p className="text-gray-400 mb-8">
              Combinamos investigación de vanguardia con ingeniería de clase mundial para crear productos que sean a la vez poderosos y accesibles.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertos en IA apasionados por crear el futuro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Elena Torres", role: "Directora de Investigación", expertise: "Deep Learning" },
            { name: "Miguel Sánchez", role: "Ingeniero Principal", expertise: "Procesamiento de Lenguaje" },
            { name: "Ana Rodríguez", role: "Directora de Producto", expertise: "Experiencia de Usuario" }
          ].map((member, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-semibold text-white text-center mb-2">{member.name}</h3>
              <p className="text-cyan-400 text-center mb-3">{member.role}</p>
              <p className="text-gray-400 text-center">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;