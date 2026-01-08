// src/components/sections/Impact.tsx
'use client'

import { motion } from 'framer-motion'

const impacts = [
  {
    number: '1',
    title: 'Convertís visitas en clientes',
    description: 'Una landing bien diseñada guía al usuario, responde objeciones, muestra valor, y lleva al contacto. 24/7, sin vendedores, sin pausa.',
  },
  {
    number: '2',
    title: 'Aumentás tus ingresos sin aumentar tu trabajo',
    description: 'Automatizás consultas, cotizaciones, reservas y seguimiento. Más clientes — mismo esfuerzo.',
  },
  {
    number: '3',
    title: 'Posicionás tu marca como profesional y confiable',
    description: 'Una web moderna comunica seriedad, estructura, crecimiento y confianza. Y la confianza vende.',
  },
  {
    number: '4',
    title: 'Optimizás tu proceso comercial',
    description: 'Tu cliente llega, entiende, interactúa y avanza. Sin llamadas innecesarias, sin mensajes confusos, sin tiempo perdido.',
  },
  {
    number: '5',
    title: 'Entendés mejor a tus clientes',
    description: 'Medí comportamiento, detectá intereses reales, optimizá tu oferta y mejorá conversión. Decisiones basadas en datos, no en suposiciones.',
  },
  {
    number: '6',
    title: 'Escalás sin límites geográficos',
    description: 'Con una buena web vendés fuera de tu ciudad, fuera de tu país, a cualquier hora. Tu negocio deja de depender de tu ubicación.',
  },
]

export default function Impact() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0F0F0F] to-[#050505]" id="impact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 text-sm font-semibold uppercase tracking-wider"
          >
            Impacto Real
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
          >
            ¿Qué cambia realmente cuando tenés una web profesional?
          </motion.h2>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>Tu negocio funciona. Tenés clientes. Generás ingresos.</p>
            <p className="text-white font-semibold">
              Pero hay algo que sabés: estás dejando dinero sobre la mesa.
            </p>
            <p>
              Porque confiás en referencias, en redes sociales, en que alguien te encuentre por casualidad.
              Y mientras tanto, tus competidores están cerrando ventas mientras vos dormís.
            </p>
            <p className="text-lg text-white font-semibold">
              ¿La diferencia? Ellos tienen un sistema que vende por ellos.
            </p>
          </div>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/50">
                  {impact.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 mt-4">
                  {impact.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            No es un gasto. Es tu mejor inversión.
          </h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Una buena web no es un gasto. Es la mejor inversión comercial de tu negocio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
