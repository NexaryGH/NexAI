import apiConfig from './apiConfig';

const fetchAIResponse = async (messages) => {
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
        messages
      })
    }
  );
  return await response.json();
};

export default fetchAIResponse;

EXPLANATION (adicional):
1. El archivo .env debe estar en la raíz del proyecto (mismo nivel que package.json)
2. La variable DEBE comenzar con REACT_APP_ para que Create-React-App la reconozca
3. Después de agregar la clave al .env:
   - Reinicia tu servidor de desarrollo (npm start)
   - Verifica que .env esté en .gitignore
4. Para producción, configura la variable en tu servicio de hosting:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Environment variables
   - AWS: Configuración de Lambda/EC2

IMPORTANTE:
- Nunca hagas commit del archivo .env
- No incluyas la clave en ningún componente
- Usa siempre process.env.REACT_APP_OPENROUTER_API_KEY para acceder a ella
- La clave solo se usará en el lado del cliente durante el desarrollo