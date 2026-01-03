// ===== SYNCSNAKE CHATBOT - ASISTENTE VIRTUAL DE SYNC SOFTWARE =====

// ===== CONFIGURACIÓN =====
const CONFIG = {
    // API Key de Google AI Studio
    API_KEY: 'AIzaSyDB_ld6V7hZvenMav5-V1K1VYZsdITFtn0',
    API_URL: 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent',
    
    // Configuración de reintentos
    MAX_RETRIES: 3,
    INITIAL_RETRY_DELAY: 2000, // 2 segundos
    MAX_HISTORY_MESSAGES: 4, // Limitar historial para ahorrar tokens (reducido para plan gratuito)
    
    // Contexto del chatbot
    SYSTEM_CONTEXT: `Eres SyncSnake, el asistente virtual amigable de Sync Software, una empresa de desarrollo web premium en Uruguay. 

Información sobre Sync Software:
- Somos un equipo de 2 desarrolladores: Geronimo (Frontend/UI-UX) y Bruno (Backend/Holberton).
- Ofrecemos 3 planes principales:
  * Starter ($400): Landing pages responsivas con SEO básico, hosting + SSL 1 año
  * Professional ($600): Sitios corporativos con CMS, hasta 10 páginas, blog integrado
  * Enterprise ($1500+): Aplicaciones web con FastAPI + React + PostgreSQL + JWT
- Nuestro stack: Python, FastAPI, React, PostgreSQL, Tailwind, HTML/CSS/JS
- Tiempos de entrega: 7-10 días (landing), 14-21 días (corporativo), 30-45 días (app web)
- Incluimos: código 100% del cliente, hosting + SSL 1 año, 30 días soporte post-launch
- Proceso: Discovery Call → Propuesta (24-48h) → Desarrollo Ágil → Testing → Launch & Soporte
- Ubicados en Montevideo, Uruguay
- Respuesta garantizada en <24 horas
- Soporte: actualizaciones, backups, monitoreo 24/7 desde $150/mes

Personalidad:
- Sé amigable, profesional pero cercano
- No uses emojis
- Respuestas concisas (máx 3 párrafos)
- Si no sabes algo específico, recomienda contactar directamente al equipo

IMPORTANTE: Nunca inventes precios o features que no mencioné. Si preguntan algo que no sabes, di que pueden contactar directamente.`
};

// ===== ELEMENTOS DOM =====
const elements = {
    toggle: document.getElementById('chatbotToggle'),
    window: document.getElementById('chatbotWindow'),
    close: document.getElementById('closeChat'),
    messages: document.getElementById('chatMessages'),
    input: document.getElementById('chatInput'),
    sendBtn: document.getElementById('sendButton'),
    quickReplies: document.getElementById('quickReplies'),
    avatar: document.getElementById('snakeAvatar'),
    statusText: document.getElementById('statusText'),
    badge: document.getElementById('notificationBadge')
};

// ===== ESTADO =====
let conversationHistory = [];
let isTyping = false;
let welcomeMessageShown = false;

// ===== FUNCIONES PRINCIPALES =====

// Toggle chatbot
function toggleChatbot() {
    const isActive = elements.window.classList.toggle('active');
    elements.toggle.classList.toggle('active');
    
    if (isActive) {
        // Cerrar el menú móvil si está abierto
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuBtn = document.getElementById('menuBtn');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        elements.input.focus();
        elements.badge.style.display = 'none';
        
        // Mensaje de bienvenida solo la primera vez
        if (!welcomeMessageShown) {
            welcomeMessageShown = true;
            setTimeout(() => {
                addBotMessage("¡Hola! Soy SyncSnake, tu asistente virtual. Puedo ayudarte con información sobre nuestros servicios, precios, tecnologías y más. ¿Qué te gustaría saber?");
            }, 500);
        }
    }
}

// Agregar mensaje del usuario
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.innerHTML = `
        <div class="message-avatar">U</div>
        <div>
            <div class="message-content">${escapeHtml(text)}</div>
            <div class="message-time">${getCurrentTime()}</div>
        </div>
    `;
    elements.messages.appendChild(messageDiv);
    scrollToBottom();
}

// Agregar mensaje del bot
function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <img src="Sync-Snake.svg" alt="SyncSnake">
        </div>
        <div>
            <div class="message-content">${formatBotMessage(text)}</div>
            <div class="message-time">${getCurrentTime()}</div>
        </div>
    `;
    elements.messages.appendChild(messageDiv);
    scrollToBottom();
}

// Mostrar indicador de escritura
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <img src="Sync-Snake.svg" alt="SyncSnake">
        </div>
        <div class="message-content typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    elements.messages.appendChild(typingDiv);
    elements.avatar.classList.add('thinking');
    elements.statusText.textContent = 'Escribiendo...';
    scrollToBottom();
}

// Ocultar indicador de escritura
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    elements.avatar.classList.remove('thinking');
    elements.statusText.textContent = 'En línea';
}

// Enviar mensaje a Google AI con reintentos
async function sendToAI(userMessage, retryCount = 0) {
    try {
        showTypingIndicator();
        
        // Construir historial limitado (últimos 10 mensajes para ahorrar tokens)
        const recentHistory = conversationHistory.slice(-CONFIG.MAX_HISTORY_MESSAGES);
        let contextWithHistory = CONFIG.SYSTEM_CONTEXT;
        
        if (recentHistory.length > 0) {
            contextWithHistory += '\n\nHistorial reciente:';
            recentHistory.forEach(msg => {
                contextWithHistory += `\nUsuario: ${msg.user}\nSyncSnake: ${msg.bot}`;
            });
        }
        
        contextWithHistory += `\n\nUsuario: ${userMessage}\nSyncSnake:`;
        
        const response = await fetch(`${CONFIG.API_URL}?key=${CONFIG.API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: contextWithHistory
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error de API:', errorData);
            
            // Manejo específico de error 429 (Rate Limit)
            if (response.status === 429) {
                hideTypingIndicator();
                
                // Verificar si es un error de cuota agotada (limit: 0)
                const isQuotaExceeded = errorData.error?.message?.includes('quota') || 
                                       errorData.error?.status === 'RESOURCE_EXHAUSTED';
                
                if (isQuotaExceeded) {
                    addBotMessage(`🤖 SyncSnake está temporalmente fuera de servicio por alta demanda.\n\n📧 ¿Necesitas ayuda inmediata? Contáctanos:\n• Email: SyncSoftwareInfo@gmail.com\n• O visita nuestra página de <a href="contacto.html" style="color: var(--accent);">Contacto</a>`);
                    return;
                }
                
                // Si no es cuota agotada, intentar reintentar
                if (retryCount < CONFIG.MAX_RETRIES) {
                    const retryDelay = CONFIG.INITIAL_RETRY_DELAY * Math.pow(2, retryCount);
                    const seconds = (retryDelay / 1000).toFixed(1);
                    
                    addBotMessage(`⏳ Muchas consultas a la vez... reintentando en ${seconds} segundos...`);
                    
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                    return sendToAI(userMessage, retryCount + 1);
                }
            }
            
            throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log('Respuesta de API:', data);
        
        hideTypingIndicator();
        
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            const botResponse = data.candidates[0].content.parts[0].text;
            addBotMessage(botResponse);
            
            // Guardar en historial (limitado automáticamente en la siguiente llamada)
            conversationHistory.push({
                user: userMessage,
                bot: botResponse,
                timestamp: new Date()
            });
        } else {
            throw new Error('Respuesta inválida de la API');
        }
        
    } catch (error) {
        console.error('Error al comunicar con AI:', error);
        hideTypingIndicator();
        
        if (error.message.includes('429')) {
            showError('Límite de consultas alcanzado. Por favor espera un momento e intenta nuevamente, o contacta directamente al equipo.');
        } else {
            showError('Ups, tuve un problema técnico. Intenta de nuevo en unos segundos o contacta directamente al equipo.');
        }
    }
}

// Mostrar error
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    elements.messages.appendChild(errorDiv);
    scrollToBottom();
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Enviar mensaje
async function sendMessage() {
    const text = elements.input.value.trim();
    
    if (!text || isTyping) return;
    
    addUserMessage(text);
    elements.input.value = '';
    elements.input.style.height = 'auto';
    
    isTyping = true;
    elements.sendBtn.disabled = true;
    
    await sendToAI(text);
    
    isTyping = false;
    elements.sendBtn.disabled = false;
    elements.input.focus();
}

// Auto-resize textarea
function autoResizeTextarea() {
    elements.input.style.height = 'auto';
    elements.input.style.height = elements.input.scrollHeight + 'px';
}

// Scroll al final
function scrollToBottom() {
    elements.messages.scrollTop = elements.messages.scrollHeight;
}

// Formato de mensajes del bot
function formatBotMessage(text) {
    // Convertir URLs a links
    text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: var(--primary);">$1</a>');
    
    // Convertir saltos de línea
    text = text.replace(/\n/g, '<br>');
    
    return text;
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Obtener hora actual
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('es-UY', { hour: '2-digit', minute: '2-digit' });
}

// ===== EVENT LISTENERS =====

// Verificar que los elementos existan antes de agregar listeners
if (elements.toggle && elements.window) {
    elements.toggle.addEventListener('click', toggleChatbot);
    elements.close.addEventListener('click', toggleChatbot);

    elements.sendBtn.addEventListener('click', sendMessage);

    elements.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    elements.input.addEventListener('input', autoResizeTextarea);

    // Quick replies
    elements.quickReplies.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-reply')) {
            const message = e.target.dataset.message;
            elements.input.value = message;
            sendMessage();
        }
    });

    // Mostrar badge después de 5 segundos si no ha abierto el chat
    setTimeout(() => {
        if (!elements.window.classList.contains('active')) {
            elements.badge.style.display = 'flex';
        }
    }, 5000);

    // ===== INICIALIZACIÓN =====
    console.log('🐍 SyncSnake iniciado y listo para ayudar!');
}
