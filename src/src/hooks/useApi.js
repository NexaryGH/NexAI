import { useState } from 'react';
import apiConfig from '../config/apiConfig';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (data) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `${apiConfig.openRouter.baseUrl}${apiConfig.openRouter.endpoints.chat}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`
          },
          body: JSON.stringify({
            model: apiConfig.openRouter.models.qwen,
            messages: data.messages
          })
        }
      );

      if (!response.ok) throw new Error('Error en la respuesta de la API');
      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, error };
};

export default useApi;

// DONE