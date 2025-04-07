const StatsSection = () => {
  const stats = [
    { value: "10+", label: "Proyectos completados" },
    { value: "25+", label: "Expertos en IA" },
    { value: "100%", label: "Satisfacción del cliente" },
    { value: "24/7", label: "Soporte técnico" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;