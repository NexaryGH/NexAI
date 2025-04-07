import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: 'home', name: 'Inicio' },
    { id: 'services', name: 'Servicios' },
    { id: 'about', name: 'Nosotros' },
    { id: 'contact', name: 'Contacto' },
    { id: 'playground', name: 'Probar Nexus AI' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            >
              NexAI
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`${currentPage === page.id ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
              >
                {page.name}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => {
                    setCurrentPage(page.id);
                    setIsOpen(false);
                  }}
                  className={`text-left ${currentPage === page.id ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;