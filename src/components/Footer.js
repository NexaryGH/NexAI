import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
              NexAI
            </h3>
            <p className="text-gray-500">El futuro es ahora</p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white transition-colors">Nexus AI</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors">VisionX</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors">DataFlow</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white transition-colors">Nosotros</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors">Carreras</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors">Blog</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">info@nexai.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">Ciudad Tecnológica</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} NexAI. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <button className="text-gray-400 hover:text-white transition-colors">Términos</button>
            <button className="text-gray-400 hover:text-white transition-colors">Privacidad</button>
            <button className="text-gray-400 hover:text-white transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;