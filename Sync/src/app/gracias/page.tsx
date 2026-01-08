// src/app/gracias/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GraciasPage() {
  useEffect(() => {
    // Confetti animation (opcional)
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      // Aquí podrías usar una librería como canvas-confetti si quieres
      // confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }))
      // confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }))
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0F0F0F] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8 shadow-lg shadow-green-500/50"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-gradient bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            ¡Mensaje Recibido!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-400 mb-8 leading-relaxed"
        >
          Gracias por contactarnos. Hemos recibido tu solicitud y te responderemos 
          en menos de 24 horas con una propuesta personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2"
          >
            Volver al Inicio
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/faq"
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
          >
            Ver FAQ
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-zinc-500"
        >
          <p>
            Mientras tanto, podés revisar nuestro{' '}
            <Link href="/proceso" className="text-blue-400 hover:text-blue-300 transition-colors">
              proceso de trabajo
            </Link>{' '}
            o leer nuestras{' '}
            <Link href="/faq" className="text-blue-400 hover:text-blue-300 transition-colors">
              preguntas frecuentes
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </main>
  )
}
