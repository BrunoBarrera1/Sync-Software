# 🔧 SOLUCIÓN: SyncSnake Error 404/500

## ✅ PROBLEMA IDENTIFICADO

Tu API key de Gemini ha **excedido la cuota gratuita**. El error real es:

```
Error 429: You exceeded your current quota
Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests
```

Esto explica por qué SyncSnake no ha funcionado los últimos 2 días.

## 🚀 SOLUCIONES PERMANENTES

### Opción 1: Crear nueva API key (RECOMENDADO - GRATIS)
1. Ve a [Google AI Studio](https://aistudio.google.com/apikey)
2. Inicia sesión con una **cuenta de Google diferente** (o la misma)
3. Haz clic en "Get API Key" → "Create API key"
4. Copia la nueva clave
5. Edita `/home/bruno/Sync-Software/backend/.env`
6. Reemplaza la línea:
   ```
   GEMINI_API_KEY=AIzaSyDtMEGSjo78e4tB06oB0ykjsIWEZZhQwK8
   ```
   Por:
   ```
   GEMINI_API_KEY=TU_NUEVA_API_KEY_AQUI
   ```
7. Reinicia el servidor:
   ```bash
   cd /home/bruno/Sync-Software/backend
   npm start
   ```

### Opción 2: Esperar 24 horas
La cuota gratuita se restablece cada 24 horas. SyncSnake volverá a funcionar mañana automáticamente.

### Opción 3: Actualizar a plan de pago
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Habilita facturación para obtener cuotas más altas
3. Costo: $0.0005 por solicitud aproximadamente

## 📊 LÍMITES DEL TIER GRATUITO

- **gemini-2.0-flash**: 10 requests/minuto, 1,500 requests/día
- **gemini-2.0-flash-lite**: 15 requests/minuto, 1,500 requests/día

Ya llegaste al límite diario.

## ✅ LO QUE SE ARREGLÓ

1. ✅ Backend configurado en puerto 3001
2. ✅ Rutas de Fastify registradas correctamente
3. ✅ DNS configurado para WSL (Google DNS)
4. ✅ Modelo actualizado a `gemini-2.0-flash-lite`
5. ✅ Endpoint `/api/chat` funcionando
6. ✅ Sistema de reintentos y manejo de errores

## 🧪 VERIFICAR QUE FUNCIONA

Después de obtener una nueva API key, prueba:

```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Hola"}'
```

Deberías ver una respuesta de Gemini.

## 📝 ESTADO ACTUAL

- ✅ Código del backend: **CORRECTO**
- ✅ Configuración del servidor: **CORRECTA**
- ✅ Frontend SyncSnake: **CORRECTO**
- ❌ API key: **SIN CUOTA DISPONIBLE**

**Solución más rápida:** Crear nueva API key (toma 2 minutos).
