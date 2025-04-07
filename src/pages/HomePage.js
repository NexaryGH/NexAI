import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div>
      <section className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            NexAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
            Potenciando el futuro con inteligencia artificial avanzada
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluciones de IA diseñadas para revolucionar industrias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Nexus AI"
              description="Nuestro modelo estrella impulsado por DeepSeek y Qwen, con capacidades avanzadas de procesamiento de lenguaje natural."
              icon="🤖"
              isFeatured={true}
            />
            <ProductCard
              title="VisionX"
              description="Plataforma de visión por computadora para análisis de imágenes y video en tiempo real."
              icon="👁️"
            />
            <ProductCard
              title="DataFlow"
              description="Herramientas de análisis predictivo y procesamiento de big data con IA."
              icon="📊"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;