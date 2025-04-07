import React, { useState, useEffect } from 'react';
import ChatMessage from '../components/ChatMessage';
import MessageCounter from '../components/MessageCounter';

const NexusPlayground = ({ setCurrentPage }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const MAX_MESSAGES = 10;

  useEffect(() => {
    const savedCount = localStorage.getItem('nexusMessageCount');
    if (savedCount) {
      setMessageCount(parseInt(savedCount));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (messageCount >= MAX_MESSAGES) {
      alert('Has alcanzado el límite de 10 mensajes. Vuelve más tarde.');
      return;
    }

    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setMessageCount(prev => {
      const newCount = prev + 1;
      localStorage.setItem('nexusMessageCount', newCount.toString());
      return newCount;
    });

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`
        },
        body: JSON.stringify({
          model: "qwen/qwen-2.5-coder-32b-instruct:free",
          messages: [...messages.map(m => ({ role: m.role, content: m.content })), userMessage]
        })
      });

      const data = await response.json();
      if (data.choices && data.choices[0]) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Lo siento, hubo un error al procesar tu solicitud. Por favor intenta nuevamente.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetConversation = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver al inicio
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Nexus AI Playground
          </h1>
          <p className="text-xl text-gray-400">
            Prueba nuestro modelo de IA sin registro (límite de {MAX_MESSAGES} mensajes)
          </p>
        </div>

        <MessageCounter current={messageCount} max={MAX_MESSAGES} />

        <div className="bg-gray-800 rounded-xl p-6 mb-6 h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <div className="text-5xl mb-4">🤖</div>
              <p className="text-center">Envía un mensaje para comenzar a interactuar con Nexus AI</p>
              <p className="text-sm mt-2 text-gray-600">Ejemplo: "Explícame cómo funciona la inteligencia artificial"</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-3 max-w-3/4">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-mono text-purple-300">Nexus AI</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            placeholder="Escribe tu mensaje..."
            disabled={messageCount >= MAX_MESSAGES || isLoading}
          />
          <button
            type="submit"
            disabled={messageCount >= MAX_MESSAGES || isLoading || !input.trim()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enviar
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <button 
            onClick={resetConversation} 
            className="hover:text-gray-300 transition-colors"
            disabled={messages.length === 0}
          >
            Reiniciar conversación
          </button>
          <span>Modelo: Qwen 2.5 Coder 32B</span>
        </div>
      </div>
    </div>
  );
};

export default NexusPlayground;