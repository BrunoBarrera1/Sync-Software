// src/app/faq/page.tsx
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SyncSnake from '@/components/SyncSnake'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer: 'Depende del tipo de proyecto: Landing pages (7-10 días), Sitios corporativos (14-21 días), Aplicaciones web (30-45 días). Trabajamos en sprints semanales con demos regulares para que veas el progreso en tiempo real.',
  },
  {
    question: '¿Ofrecen mantenimiento después del lanzamiento?',
    answer: 'Sí, todos los proyectos incluyen 30 días de soporte post-launch gratuito. Después ofrecemos planes de mantenimiento mensual desde $150/mes que incluyen: actualizaciones de seguridad, backups automáticos, monitoreo 24/7, y soporte prioritario.',
  },
  {
    question: '¿Trabajan con startups o solo con empresas grandes?',
    answer: 'Trabajamos con todo tipo de clientes, desde emprendedores con su primera idea hasta empresas establecidas. Nuestro enfoque modular nos permite adaptarnos a cualquier presupuesto. El proyecto mínimo es de $500 (landing page básica).',
  },
  {
    question: '¿El código es 100% mío al finalizar?',
    answer: 'Absolutamente. Al finalizar el proyecto, te entregamos todo el código fuente, documentación técnica completa, y acceso total al repositorio. No hay vendor lock-in: eres dueño del 100% del proyecto.',
  },
  {
    question: '¿Qué tecnologías usan?',
    answer: 'Stack principal: FastAPI (Python) para backend, React/Next.js para frontend, PostgreSQL para bases de datos. También trabajamos con HTML/CSS/JavaScript puro para proyectos más simples. Arquitectura modular siguiendo principios GRASP para código limpio y escalable.',
  },
  {
    question: '¿Incluyen hosting y dominio?',
    answer: 'Todos nuestros planes incluyen 1 año de hosting + SSL gratis. El dominio (.com.uy o .com) puede ser provisto por nosotros o puedes usar el tuyo propio. Después del primer año, el hosting tiene un costo de mantenimiento opcional.',
  },
  {
    question: '¿Hacen SEO y marketing digital?',
    answer: 'Incluimos SEO técnico on-page en todos los proyectos (optimización de performance, Core Web Vitals, meta tags, schema markup). Para SEO avanzado off-page y marketing digital (Google Ads, redes sociales), ofrecemos paquetes adicionales desde $300.',
  },
  {
    question: '¿Cómo funciona el proceso de pago?',
    answer: '50% al inicio del proyecto, 50% al entregar el MVP funcional (antes del lanzamiento final). Aceptamos transferencia bancaria, PayPal, y criptomonedas. Para proyectos grandes (+$5,000) podemos negociar pagos en cuotas.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: any) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:border-white/20 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-zinc-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Respuestas rápidas a las dudas más comunes. Si no encuentras lo que buscas, 
              contáctanos y te respondemos en menos de 24h.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* Giscus Section */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                ¿No encontraste tu respuesta?
              </h2>
              <p className="text-zinc-400">
                Pregunta aquí usando tu cuenta de GitHub y te respondemos en menos de 24 horas.
              </p>
            </div>
            
            <div className="bg-[#0F0F0F] rounded-xl p-6">
              {/* Placeholder para Giscus - se carga con script */}
              <div className="giscus"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Giscus Script */}
      <script
        src="https://giscus.app/client.js"
        data-repo="BrunoBarrera1/Sync-Software"
        data-repo-id="R_kgDOQySvpg"
        data-category="General"
        data-category-id="DIC_kwDOQySvps4C0gu8"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="es"
        crossOrigin="anonymous"
        async
      />
      <SyncSnake />
    </main>
  )
}
