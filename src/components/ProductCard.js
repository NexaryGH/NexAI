import React from 'react';

const ProductCard = ({ title, description, icon, isFeatured }) => {
  return (
    <div className={`relative p-8 rounded-xl overflow-hidden ${isFeatured ? 'bg-gradient-to-br from-cyan-900 to-purple-900' : 'bg-gray-800'} hover:bg-gray-700 transition-all transform hover:-translate-y-2`}>
      {isFeatured && (
        <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Destacado
        </div>
      )}
      <div className={`text-4xl mb-6 ${isFeatured ? 'text-white' : 'text-cyan-400'}`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-semibold mb-3 ${isFeatured ? 'text-white' : 'text-white'}`}>{title}</h3>
      <p className={`${isFeatured ? 'text-gray-300' : 'text-gray-400'}`}>{description}</p>
      <button className={`mt-6 px-4 py-2 rounded-lg ${isFeatured ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-cyan-600 text-white hover:bg-cyan-700'} transition-colors`}>
        Saber más
      </button>
    </div>
  );
};

export default ProductCard;