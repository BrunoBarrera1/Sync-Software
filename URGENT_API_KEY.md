# 🚨 URGENTE: API KEY FILTRADA

## Problema
La API key de Google Gemini en `js/syncsnake.js` fue marcada como **LEAKED** (filtrada) y está bloqueada.

**Error actual:**
```
Error 403: Your API key was reported as leaked. Please use another API key.
```

## Solución

### 1. Obtener nueva API key
1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Get API Key" o "Create API Key"
4. Copia la nueva clave

### 2. Actualizar syncsnake.js
Abre el archivo `js/syncsnake.js` y reemplaza la línea 6:

**CAMBIAR ESTO:**
```javascript
API_KEY: 'AIzaSyDB_ld6V7hZvenMav5-V1K1VYZsdITFtn0',
```

**POR TU NUEVA CLAVE:**
```javascript
API_KEY: 'TU_NUEVA_API_KEY_AQUI',
```

### 3. IMPORTANTE: Seguridad
⚠️ **NO SUBAS** la API key a repositorios públicos (GitHub, GitLab, etc.)

**Buenas prácticas:**
- Usa variables de entorno en producción
- Considera usar un backend proxy para ocultar la API key
- Agrega restricciones de dominio en Google Cloud Console

### 4. Verificación
Después de actualizar la API key:
1. Recarga la página (Ctrl+Shift+R / Cmd+Shift+R)
2. Abre la consola del navegador (F12)
3. Haz clic en el botón de SyncSnake
4. Envía un mensaje de prueba
5. Debería funcionar sin errores 403

## Estado actual
- ✅ Errores de JavaScript corregidos (scripts.js, navbar.js)
- ❌ **API key necesita ser actualizada MANUALMENTE**
- ✅ SyncSnake funcionará perfectamente una vez actualices la clave
