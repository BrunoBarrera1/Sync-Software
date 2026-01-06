// ===== SYNCSNAKE CHATBOT - ASISTENTE VIRTUAL DE SYNC SOFTWARE =====

// ===== CONFIGURACIÓN =====
const CONFIG = {
    // Backend proxy URL (protege la API key)
    BACKEND_URL: 'http://localhost:3001/api/chat',
    
    // Configuración de reintentos
    MAX_RETRIES: 3,
    INITIAL_RETRY_DELAY: 2000, 
    MAX_HISTORY_MESSAGES: 4, 
    
    // Contexto del chatbot
    SYSTEM_CONTEXT: `Eres SyncSnake, el asistente virtual amigable de Sync Software, una empresa de desarrollo web premium en Uruguay. 

Información sobre Sync Software:
- Somos un equipo de 2 desarrolladores: Frontend y Backend.
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

function toggleChatbot() {
    const isActive = elements.window.classList.toggle('active');
    elements.toggle.classList.toggle('active');
    
    if (isActive) {
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
        if (elements.badge) elements.badge.style.display = 'none';
        
        if (!welcomeMessageShown) {
            welcomeMessageShown = true;
            setTimeout(() => {
                addBotMessage("¡Hola! Soy SyncSnake, tu asistente virtual. Puedo ayudarte con información sobre nuestros servicios, precios, tecnologías y más. ¿Qué te gustaría saber?");
            }, 500);
        }
    }
}

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
    if (elements.avatar) elements.avatar.classList.add('thinking');
    if (elements.statusText) elements.statusText.textContent = 'Escribiendo...';
    scrollToBottom();
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) typingIndicator.remove();
    if (elements.avatar) elements.avatar.classList.remove('thinking');
    if (elements.statusText) elements.statusText.textContent = 'En línea';
}

// Enviar mensaje a Google AI
async function sendToAI(userMessage, retryCount = 0) {
    try {
        showTypingIndicator();
        
        // Preparar el contexto combinando el sistema y el historial para Gemini
        const recentHistory = conversationHistory.slice(-CONFIG.MAX_HISTORY_MESSAGES);
        let fullPrompt = CONFIG.SYSTEM_CONTEXT + "\n\nConversación previa:";
        
        recentHistory.forEach(msg => {
            fullPrompt += `\nUsuario: ${msg.user}\nSyncSnake: ${msg.bot}`;
        });
        
        fullPrompt += `\n\nUsuario actual: ${userMessage}\nSyncSnake:`;

        const response = await fetch(CONFIG.BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: fullPrompt
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            
            if (response.status === 429) {
                hideTypingIndicator();
                if (retryCount < CONFIG.MAX_RETRIES) {
                    const retryDelay = CONFIG.INITIAL_RETRY_DELAY * Math.pow(2, retryCount);
                    addBotMessage(`⏳ Hay mucha demanda, reintentando en breve...`);
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                    return sendToAI(userMessage, retryCount + 1);
                } else {
                    addBotMessage("SyncSnake está muy solicitado ahora mismo. Por favor, escríbenos a SyncSoftwareInfo@gmail.com.");
                    return;
                }
            }
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        hideTypingIndicator();
        
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            const botResponse = data.candidates[0].content.parts[0].text;
            addBotMessage(botResponse);
            
            conversationHistory.push({
                user: userMessage,
                bot: botResponse
            });
        } else {
            throw new Error('Respuesta vacía');
        }
        
    } catch (error) {
        console.error('Error:', error);
        hideTypingIndicator();
        showError('Tuve un pequeño problema técnico. ¿Podrías intentar de nuevo?');
    }
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.padding = '5px 15px';
    errorDiv.textContent = message;
    elements.messages.appendChild(errorDiv);
    scrollToBottom();
    setTimeout(() => errorDiv.remove(), 5000);
}

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

function autoResizeTextarea() {
    elements.input.style.height = 'auto';
    elements.input.style.height = elements.input.scrollHeight + 'px';
}

function scrollToBottom() {
    elements.messages.scrollTop = elements.messages.scrollHeight;
}

function formatBotMessage(text) {
    text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #4ade80;">$1</a>');
    return text.replace(/\n/g, '<br>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getCurrentTime() {
    return new Date().toLocaleTimeString('es-UY', { hour: '2-digit', minute: '2-digit' });
}

// ===== EVENT LISTENERS =====
if (elements.toggle) {
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
}

if (elements.quickReplies) {
    elements.quickReplies.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-reply')) {
            elements.input.value = e.target.dataset.message;
            sendMessage();
        }
    });
}

setTimeout(() => {
    if (elements.badge && !elements.window.classList.contains('active')) {
        elements.badge.style.display = 'flex';
    }
}, 5000);

console.log('🐍 SyncSnake iniciado y listo!');