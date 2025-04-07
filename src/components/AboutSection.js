const AboutSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
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
            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-all">
              Conoce nuestro equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;