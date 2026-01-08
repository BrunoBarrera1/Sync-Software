// src/app/pricing/page.tsx
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Check, ShoppingCart, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface CartItem {
  id: string
  name: string
  type: string
  price: number
}

const plans = [
  {
    id: 'plan-starter',
    name: 'Starter',
    description: 'Landing Pages',
    price: 350,
    type: 'plan',
    features: [
      '1-3 páginas responsivas',
      'Animaciones CSS',
      'Formulario de contacto',
      'SEO On-Page',
      'Google Analytics',
      'Hosting + SSL 1 año',
      '30 días soporte',
      'Tutorial privado en YouTube',
      'Diagramas de estructura',
      '7-10 días entrega',
    ],
  },
  {
    id: 'plan-professional',
    name: 'Professional',
    description: 'Sitios Corporativos',
    price: 750,
    type: 'plan',
    featured: true,
    features: [
      'Hasta 10 páginas',
      'Animaciones CSS avanzadas',
      'CMS / Panel Admin',
      'Blog integrado',
      'Base de datos MySQL',
      'SEO + Meta Tags',
      'Hosting + SSL 1 año',
      '30 días soporte',
      'Tutorial privado en YouTube',
      'Diagramas de arquitectura',
      '14-21 días entrega',
    ],
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    description: 'Aplicaciones Web',
    price: 1500,
    type: 'plan',
    features: [
      'Páginas ilimitadas',
      'React + FastAPI',
      'PostgreSQL database',
      'Autenticación JWT',
      'API REST completa',
      'Panel Admin avanzado',
      'Tests automatizados',
      'Hosting + SSL 1 año',
      '60 días soporte',
      'Tutorial privado en YouTube',
      'Documentación técnica completa',
      'Diagramas de arquitectura',
      '30-45 días entrega',
    ],
  },
]

const extras = [
  { id: 'extra-ecommerce', name: 'E-commerce', price: 450 },
  { id: 'extra-auth', name: 'Sistema de Login/Auth', price: 250 },
  { id: 'extra-chat', name: 'Chat en vivo', price: 120 },
  { id: 'extra-payment', name: 'Pasarela de pagos', price: 350 },
  { id: 'extra-crm', name: 'Integración CRM', price: 220 },
  { id: 'extra-mobile', name: 'App móvil (Flutter)', price: 900 },
  { id: 'extra-multilang', name: 'Multi-idioma', price: 180 },
  { id: 'extra-booking', name: 'Sistema de reservas', price: 400 },
]

export default function PricingPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item: { id: string; name: string; type: string; price: number }) => {
    if (!cart.find((i) => i.id === item.id)) {
      setCart([...cart, item])
      setIsCartOpen(true)
    }
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)
  const discount = subtotal * 0.2
  const total = subtotal - discount

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Inversión Transparente
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Precios claros sin sorpresas. Agregá servicios al carrito y obtené 20% de descuento automático.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/30'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    MÁS ELEGIDO
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-zinc-400">USD</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1">Precio fijo</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => addToCart(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Agregar al Carrito
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Extras Disponibles</h2>
            <p className="text-zinc-400">
              Potenciá tu proyecto con funcionalidades avanzadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra) => (
              <motion.div
                key={extra.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{extra.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-blue-400">+${extra.price}</span>
                  <span className="text-zinc-500 text-sm">USD</span>
                </div>
                <button
                  onClick={() => addToCart({ ...extra, type: 'extra' })}
                  className="w-full py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-sm font-medium"
                >
                  Agregar
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full sm:w-[480px] max-h-[90vh] bg-[#0F0F0F] border border-white/10 rounded-t-2xl sm:rounded-2xl overflow-hidden">
            <div className="sticky top-0 bg-[#0F0F0F] border-b border-white/10 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Tu Carrito</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {cart.length === 0 ? (
                <p className="text-center text-zinc-400 py-8">Tu carrito está vacío</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-sm text-zinc-400">{item.type}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-semibold">${item.price}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <X size={16} className="text-zinc-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="sticky bottom-0 bg-[#0F0F0F] border-t border-white/10 p-6 space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-green-400 bg-green-400/10 py-2 px-4 rounded-lg">
                  <Check size={16} />
                  <span>20% de descuento aplicado automáticamente</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Descuento (20%)</span>
                    <span>-${discount}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                    <span>TOTAL</span>
                    <span>${total}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  Solicitar Propuesta
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
