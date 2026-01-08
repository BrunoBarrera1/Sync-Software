// src/components/SyncSnake.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const quickReplies = [
  { text: 'Precios', message: '¿Cuáles son sus planes y precios?' },
  { text: 'Tecnologías', message: '¿Qué tecnologías utilizan?' },
  { text: 'Tiempos', message: '¿Cuánto tarda el desarrollo?' },
  { text: 'Cotizar', message: 'Quiero solicitar una cotización' },
]

export default function SyncSnake() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showBadge, setShowBadge] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Mostrar badge después de 3 segundos
    const timer = setTimeout(() => {
      if (!isOpen) setShowBadge(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    setInputValue('')
    addMessage(userMessage, 'user')

    // Simular respuesta del bot
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    const botResponse = getBotResponse(userMessage)
    addMessage(botResponse, 'bot')
    setIsTyping(false)
  }

  const handleQuickReply = (message: string) => {
    setInputValue(message)
    handleSend()
  }

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()
    
    if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto')) {
      return '¡Claro! Tenemos 3 planes principales:\n\n• Starter ($500): Landing pages\n• Professional ($750): Sitios corporativos\n• Enterprise ($1,500+): Apps web completas\n\nAdemás ofrecemos 20% de descuento al combinar servicios. ¿Te gustaría más detalles sobre algún plan específico?'
    }
    
    if (lower.includes('tecnolog') || lower.includes('stack')) {
      return 'Nuestro stack tecnológico:\n\n• Backend: Python + FastAPI\n• Frontend: React + Next.js\n• Database: PostgreSQL\n• Hosting: Vercel/Railway\n\nUsamos tecnologías modernas y el código es 100% tuyo al finalizar. ¿Tienes alguna preferencia tecnológica?'
    }
    
    if (lower.includes('tiempo') || lower.includes('cuanto tarda') || lower.includes('demora')) {
      return 'Tiempos de entrega:\n\n• Landing Pages: 7-10 días\n• Sitios Corporativos: 14-21 días\n• Apps Web: 30-45 días\n\nTrabajamos en sprints semanales con demos regulares. ¿Tienes algún deadline específico?'
    }
    
    if (lower.includes('cotiz') || lower.includes('propuesta') || lower.includes('contacto')) {
      return '¡Perfecto! Para enviarte una propuesta personalizada, por favor visita nuestra página de contacto.\n\nTe responderemos en menos de 24 horas con un presupuesto detallado y sin compromiso.'
    }
    
    return '¡Hola! Soy SyncSnake, tu asistente virtual de Sync Software.\n\nPuedo ayudarte con información sobre precios, tecnologías, tiempos de desarrollo y más. ¿Qué te gustaría saber?'
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(true)
          setShowBadge(false)
          if (messages.length === 0) {
            addMessage('¡Hola! Soy SyncSnake, tu asistente virtual. Puedo ayudarte con información sobre nuestros servicios, precios, tecnologías y más. ¿Qué te gustaría saber?', 'bot')
          }
        }}
        className="fixed w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform z-50"
        style={{
          right: '20px',
          bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7" />
        <AnimatePresence>
          {showBadge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{
              right: '20px',
              bottom: 'calc(90px + env(safe-area-inset-bottom, 0px))',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">S</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">SyncSnake</h3>
                  <p className="text-blue-100 text-xs">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                        : 'bg-white/10 text-zinc-300'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.text}
                    onClick={() => handleQuickReply(reply.message)}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 text-xs rounded-full transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Escribe tu mensaje..."
                  rows={1}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
