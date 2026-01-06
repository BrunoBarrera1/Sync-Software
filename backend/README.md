# Backend SyncSnake

Mini backend con Fastify para proteger la API key de Google Gemini.

## Instalación

```bash
cd backend
npm install
```

## Configuración

La API key está en el archivo `.env`:
```
GEMINI_API_KEY=tu_api_key_aqui
PORT=3000
```

## Ejecución

**Desarrollo (con auto-reload):**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints

- `GET /health` - Health check
- `POST /api/chat` - Proxy para Gemini API
  - Body: `{ "prompt": "tu mensaje aquí" }`

## Seguridad

- ✅ API key oculta en backend
- ✅ CORS habilitado
- ✅ .gitignore configurado para no exponer .env
