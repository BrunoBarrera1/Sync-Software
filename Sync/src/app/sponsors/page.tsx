// src/app/sponsors/page.tsx
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Heart, ExternalLink, Instagram, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const sponsors = [
  {
    id: 1,
    name: 'La Estrega Rotisería',
    category: 'Productos Artesanales',
    description: 'Productos de granja artesanales de primera calidad. Huevos, verduras y productos frescos directo del campo a tu mesa, con todo el sabor natural de lo auténtico.',
    logo: '/sponsors/Estrega.jpg',
    instagram: 'https://www.instagram.com/laestrega',
    location: 'Canelones, Uruguay',
    tier: 'gold',
  },
  {
    id: 2,
    name: 'Lavadero del Parque',
    category: 'Servicios de Lavado',
    description: 'Lavadero profesional con años de experiencia en el cuidado de vehículos. Servicio completo de lavado, encerado y detailing para mantener tu auto impecable.',
    logo: '/sponsors/Lavadero.jpg',
    instagram: 'https://www.instagram.com/lavadero_del_parque_',
    location: 'Montevideo, Uruguay',
    tier: 'gold',
  },
  {
    id: 3,
    name: 'Msport',
    category: 'Taller Mecánico Especializado',
    description: 'Taller mecánico de excelencia especializado en vehículos alemanes de alta gama. Ofrecemos servicio integral desde mecánica general hasta mantenimiento preventivo y correctivo, con tecnología de punta y técnicos certificados para el cuidado premium de tu automóvil.',
    logo: '/sponsors/Msport.jpg',
    instagram: 'https://www.instagram.com/msport6119',
    location: 'Uruguay',
    tier: 'silver',
  },
  {
    id: 4,
    name: 'Drako Gym',
    category: 'Centro de Entrenamiento',
    description: 'Gimnasio de alto rendimiento especializado en fuerza y acondicionamiento físico. Entrenadores certificados y equipamiento de última generación para alcanzar tus objetivos.',
    logo: '/sponsors/Drako gym transparente.png',
    instagram: 'https://www.instagram.com/gym_drako',
    location: 'Montevideo, Uruguay',
    tier: 'platinum',
  },
]

const cardConfig = {
  gradient: 'from-blue-600 to-blue-500',
  bgGradient: 'from-blue-500/10 to-blue-600/10',
  borderColor: 'border-blue-500/30',
  textColor: 'text-blue-400',
}

function SponsorCard({ sponsor, index }: { sponsor: typeof sponsors[0]; index: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white/5 border border-blue-500/30 rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 h-full flex flex-col">

        {/* Logo */}
        <div className="mb-6 flex items-center justify-center">
          <div className="relative w-full h-32 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10">
            {!imageError ? (
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain p-4"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-4xl font-bold text-blue-400">
                  {sponsor.name.charAt(0)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
            <p className="text-sm font-semibold text-blue-400">
              {sponsor.category}
            </p>
          </div>

          <p className="text-zinc-400 leading-relaxed">
            {sponsor.description}
          </p>

          <div className="space-y-2 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{sponsor.location}</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
          <a
            href={sponsor.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Con el apoyo de</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Nuestros Sponsors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              Empresas y emprendedores uruguayos que confían en nosotros y nos impulsan a seguir creciendo.
            </motion.p>
          </div>

          {/* Gratitude Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      Un agradecimiento especial
                    </h2>
                    <div className="space-y-4 text-zinc-300 leading-relaxed">
                      <p>
                        Queremos dedicar este espacio para agradecer a cada uno de los emprendedores y empresas que confiaron en Sync Software desde el primer día.
                      </p>
                      <p>
                        <span className="text-white font-semibold">Sin ustedes, no seríamos lo que somos hoy.</span> Cada proyecto que desarrollamos juntos nos enseñó algo nuevo, nos desafió a mejorar, y nos motivó a seguir apostando por el desarrollo web de calidad en Uruguay.
                      </p>
                      <p>
                        Más que sponsors, son parte de nuestra historia. Nos impulsan a crecer, a innovar, y a demostrar que desde acá, desde Uruguay, se puede hacer software de primer nivel internacional.
                      </p>
                      <p className="text-blue-400 font-semibold">
                        Gracias por creer en nosotros. Este es recién el comienzo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sponsors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600/10 to-blue-400/10 border border-blue-500/20 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Querés ser parte de nuestra historia?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Si sos emprendedor o tenés una empresa y necesitás una presencia digital profesional, 
                charlemos. Trabajamos juntos para que tu negocio crezca.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Solicitar Propuesta
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  Ver Planes
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '4+', label: 'Sponsors Activos' },
              { number: '15+', label: 'Proyectos Entregados' },
              { number: '100%', label: 'Satisfacción' },
              { number: '<24h', label: 'Tiempo Respuesta' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
