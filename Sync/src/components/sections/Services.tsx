// src/components/sections/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Layout, Layers, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Layout,
    title: 'Landing Pages de Conversión',
    description: 'Páginas optimizadas para vender. Diseño estratégico que guía al usuario desde la curiosidad hasta la acción.',
    features: [
      'Diseño persuasivo y responsive',
      'Optimización SEO incluida',
      'Integración con herramientas de marketing',
      'Analytics y seguimiento de conversión',
    ],
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Web Applications Completas',
    description: 'Sistemas robustos con backend, base de datos, panel administrativo y funcionalidades avanzadas.',
    features: [
      'Backend escalable (Python/FastAPI)',
      'Frontend moderno (React/Next.js)',
      'Base de datos PostgreSQL',
      'Autenticación y roles de usuario',
      'APIs REST personalizadas',
      'Panel de administración completo',
    ],
    color: 'purple',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Automatizaciones & Chatbots',
    description: 'Ahorrá tiempo y dinero automatizando procesos repetitivos. Chatbots inteligentes con IA conversacional.',
    features: [
      'Chatbots con IA conversacional',
      'Integración WhatsApp Business',
      'Automatización de respuestas',
      'Calificación automática de leads',
    ],
    color: 'green',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section className="relative py-32 bg-[#0F0F0F]" id="servicios">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 text-sm font-semibold uppercase tracking-wider"
          >
            Qué Hacemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            Creamos soluciones que impulsan tu negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            No vendemos plantillas. Desarrollamos sistemas a medida que resuelven problemas reales y generan resultados medibles.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className={`relative group p-8 rounded-2xl border transition-all duration-300 ${
                service.featured
                  ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/30 hover:border-blue-500/50'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  MÁS ELEGIDO
                </div>
              )}

              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-xl ${
                  service.featured
                    ? 'bg-blue-500/20'
                    : 'bg-white/10'
                }`}>
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-6">¿No estás seguro de qué necesitás?</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Hablemos de tu proyecto
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
