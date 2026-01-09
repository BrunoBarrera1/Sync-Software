// src/app/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

import Navbar from '@/components/layout/Navbar'
import Services from '@/components/sections/Services'
import Impact from '@/components/sections/Impact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center -mb-12 sm:-mb-16 md:-mb-20 lg:-mb-24"
            >
              <Image
                src="/Sync_azul-removebg-preview.png"
                alt="Sync Software"
                width={1400}
                height={432}
                priority
                className="h-64 sm:h-80 md:h-96 lg:h-[28rem] w-auto drop-shadow-[0_10px_35px_rgba(37,99,235,0.35)]"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              Transformamos Ideas en{' '}
              <span className="block sm:inline text-gradient bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Experiencias Digitales
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-zinc-400 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Desarrollo web profesional con tecnología de vanguardia.
              Desde landing pages hasta aplicaciones enterprise que impulsan tu negocio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/contacto"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2"
              >
                Solicitar Propuesta
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/proceso"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white/10 transition-all text-center"
              >
                Ver Proceso
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10"
            >
              {[
                { number: '15+', label: 'Proyectos' },
                { number: '100%', label: 'Satisfacción' },
                { number: '<24h', label: 'Respuesta' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Services />
      <Impact />
      <Footer />
    </main>
  )
}
