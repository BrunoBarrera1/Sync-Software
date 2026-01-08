// src/app/nosotros/page.tsx
'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Code, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: CheckCircle,
    title: 'Transparencia total desde el día 1',
    description: 'Presupuestos fijos, cronogramas claros, sin letra chica. Si decimos que cuesta X y toma Y semanas, es exactamente eso.',
  },
  {
    icon: Users,
    title: 'Trabajo directo con quien construye tu proyecto',
    description: 'No vendedores, no intermediarios. Hablás directamente con el equipo de desarrollo. Las mismas personas que diseñan, programan y entregan tu sitio.',
  },
  {
    icon: Code,
    title: 'Código de calidad que realmente te pertenece',
    description: 'Usamos tecnologías modernas (Python, FastAPI, React, PostgreSQL) y al terminar, el código es 100% tuyo. Sin dependencias forzadas, sin secuestros técnicos.',
  },
  {
    icon: Zap,
    title: 'Proceso ágil que te mantiene en el loop',
    description: 'Trabajamos en sprints de una semana con demos regulares. No esperás hasta el final para ver tu proyecto - lo ves crecer cada semana.',
  },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Quiénes Somos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              La historia detrás de Sync Software
            </h1>
          </div>

          {/* Story */}
          <div className="space-y-8 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-zinc-400"
            >
              Sync Software nació en enero de 2026 en Montevideo, de una conversación entre dos desarrolladores que compartían la misma frustración: veíamos demasiadas pequeñas empresas y emprendedores pagando fortunas por sitios web genéricos, o peor aún, conformándose con soluciones baratas que no les servían para crecer.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400"
            >
              Uno venía del mundo del diseño UI/UX, cansado de ver diseños arruinados por equipos que no entendían la importancia de los detalles. El otro del backend y arquitectura de sistemas, con ganas de aplicar tecnologías modernas en proyectos reales que hicieran diferencia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400"
            >
              La idea era simple: <span className="text-white font-semibold">¿Y si eliminábamos todo lo que hace que el desarrollo web sea frustrante?</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400"
            >
              Nada de cotizaciones vagas. Nada de equipos enormes donde nadie se hace responsable. Nada de clientes que pagan y luego quedan a oscuras durante semanas sin saber qué está pasando.
            </motion.p>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Así que nos propusimos crear una empresa diferente:
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 space-y-6 text-lg"
          >
            <p className="text-zinc-400 leading-relaxed">
              Desde entonces hemos trabajado con startups, empresas establecidas, y emprendedores que buscan dar el salto digital. Cada proyecto nos enseña algo nuevo, y cada cliente nos confirma que estábamos en lo correcto: la honestidad y la calidad nunca pasan de moda.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              <span className="text-white font-semibold">¿El resultado?</span> Clientes que recomiendan, proyectos que funcionan, y la tranquilidad de saber que cada sitio que entregamos cumple exactamente lo que prometimos.
            </p>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Eso es Sync Software.
              </h3>
              <p className="text-xl text-zinc-300 mb-6 max-w-2xl">
                Desarrollo web honesto, profesional, y diseñado para que tu negocio crezca.
              </p>
              <div className="space-y-2 text-zinc-400">
                <p className="font-semibold text-white">Fundada en 2026 en Montevideo, Uruguay.</p>
                <p className="text-sm">Tecnología moderna. Proceso transparente. Resultados reales.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
