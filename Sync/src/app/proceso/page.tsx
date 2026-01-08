// src/app/proceso/page.tsx
'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Phone, FileText, Layers, Search, Rocket, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Discovery Call',
    duration: '30 minutos',
    badge: 'Gratis',
    description: 'Conversamos sobre tu visión, objetivos y desafíos. Sin tecnicismos, sin presión. Solo entendemos qué quieres lograr y cómo podemos ayudarte a llegar ahí. Es tu espacio para hacer todas las preguntas que tengas.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Propuesta Transparente',
    duration: '24-48 horas',
    description: 'Recibes una propuesta clara con precio fijo, cronograma detallado, y mockups iniciales. Sin sorpresas, sin costos ocultos. Sabrás exactamente qué vas a recibir, cuándo lo tendrás, y cuánto costará. Todo por escrito.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    number: 3,
    icon: Layers,
    title: 'Desarrollo Ágil',
    duration: 'Sprints semanales',
    description: 'Construimos tu proyecto en sprints de 7 días con demos cada semana. Ves el progreso real, das feedback temprano, y ajustamos sobre la marcha. No esperás hasta el final para ver tu sitio - lo ves crecer día a día.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    number: 4,
    icon: Search,
    title: 'Pulido & Perfección',
    duration: '3-5 días',
    description: 'Revisiones ilimitadas hasta que quede exactamente como lo imaginaste. Optimizamos velocidad, probamos en todos los dispositivos, y ajustamos cada detalle. Tu satisfacción 100% es nuestra única métrica de éxito.',
    color: 'from-green-500 to-green-600',
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Lanzamiento & Acompañamiento',
    duration: '30 días soporte',
    description: 'Publicamos tu sitio en producción, configuramos analytics, y te enseñamos a manejarlo. Incluye 30 días de soporte completo para ajustes, dudas, o cualquier cosa que necesites. Nunca te dejamos solo.',
    color: 'from-orange-500 to-orange-600',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
        {/* Header with icon and number */}
        <div className="flex items-start gap-4 mb-6">
          {/* Icon */}
          <div className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
            <step.icon className="w-8 h-8 text-white" />
            {/* Number badge */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              {step.number}
            </div>
          </div>

          {/* Title and meta */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-white/10 text-zinc-400 text-xs font-medium rounded-full">
                {step.duration}
              </span>
              {step.badge && (
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                  {step.badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 leading-relaxed">
          {step.description}
        </p>

        {/* Decorative line */}
        <div className={`mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full opacity-50`} />
      </div>
    </motion.div>
  )
}

export default function ProcesoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-400 text-sm font-semibold uppercase tracking-wider"
            >
              Proceso
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
            >
              Cómo Trabajamos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-2xl mx-auto"
            >
              Un proceso transparente de 5 pasos diseñado para entregar resultados excepcionales sin sorpresas.
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="space-y-6 mb-20">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Listo para empezar?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Agenda una llamada gratuita de 30 minutos y empecemos a trabajar en tu proyecto.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Agendar Discovery Call
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                  >
                    Ver Planes
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why This Process Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              ¿Por qué funciona este proceso?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Transparencia Total',
                  description: 'Sabrás exactamente en qué estamos trabajando, cuándo estará listo, y cuánto costará. Sin sorpresas.',
                },
                {
                  title: 'Feedback Continuo',
                  description: 'No esperás hasta el final. Ves el progreso cada semana y podés hacer ajustes en tiempo real.',
                },
                {
                  title: 'Calidad Garantizada',
                  description: 'Revisiones ilimitadas y 30 días de soporte. No terminamos hasta que estés 100% satisfecho.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
