import React from 'react';

const MessageCounter = ({ current, max }) => {
  const percentage = (current / max) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>Mensajes usados: {current}/{max}</span>
        <span>{max - current} restantes</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MessageCounter;