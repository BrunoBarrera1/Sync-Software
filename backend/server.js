import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config';

const fastify = Fastify({
  logger: true
});

// Registrar CORS
fastify.register(cors, {
  origin: '*'
});

// Ruta raíz
fastify.get('/', async (request, reply) => {
  return { 
    service: 'SyncSnake Backend API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      chat: 'POST /api/chat'
    }
  };
});

// Health check
fastify.get('/health', async (request, reply) => {
  return { status: 'ok', service: 'SyncSnake Backend' };
});

// Proxy endpoint para Gemini API
fastify.post('/api/chat', async (request, reply) => {
  try {
    const { prompt } = request.body;

    if (!prompt) {
      return reply.code(400).send({ error: 'Prompt requerido' });
    }

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
      return reply.code(500).send({ error: 'API key no configurada' });
    }

    // Usar modelo lite para mayor disponibilidad en free tier
    const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-lite:generateContent';

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 600,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return reply.code(response.status).send({ 
        error: 'Error en Gemini API', 
        details: errorData 
      });
    }

    const data = await response.json();
    return reply.send(data);

  } catch (error) {
    fastify.log.error(error);
    return reply.code(500).send({ 
      error: 'Error interno del servidor',
      message: error.message 
    });
  }
});

// Iniciar servidor
const start = async () => {
  try {
    const PORT = process.env.PORT || 3001;
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
