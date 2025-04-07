import React from 'react';

const ChatMessage = ({ role, content }) => {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3/4 rounded-lg px-4 py-3 ${role === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-100'}`}>
        <div className="flex items-center mb-1">
          <span className={`text-xs font-mono ${role === 'user' ? 'text-cyan-200' : 'text-purple-300'}`}>
            {role === 'user' ? 'Tú' : 'Nexus AI'}
          </span>
        </div>
        <div className="whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
};

export default ChatMessage;