// src/app/contacto/page.tsx
'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { MapPin, Clock, Zap, Check, Send, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // No prevenir el default - dejar que FormSubmit maneje el envío
    setIsSubmitting(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Hablemos de Tu Proyecto
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cuéntanos tu idea y recibe una propuesta detallada en 24 horas. Sin compromisos, sin letra chica.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Section */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    ¿Listo para empezar?
                  </h2>
                  <p className="text-zinc-400 leading-relaxed">
                    Completa el formulario y un especialista de nuestro equipo se pondrá en contacto contigo 
                    en menos de 24 horas para discutir tu proyecto.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">Ubicación</div>
                      <div className="text-white font-medium">Camino Carrasco 6119, Montevideo</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">Tiempo de Respuesta</div>
                      <div className="text-white font-medium">&lt; 24 horas garantizadas</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">Disponibilidad</div>
                      <div className="text-white font-medium">Lun-Vie 9:00-18:00 UYT</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">WhatsApp</div>
                      <a 
                        href="https://wa.me/59892662172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-green-400 transition-colors"
                      >
                        092 662 172
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {[
                    'Primera consulta 100% gratis',
                    'Propuesta detallada en 24-48h',
                    'Sin compromiso ni letra chica',
                    'Código 100% tuyo al finalizar',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Solicita tu Propuesta Gratis
                  </h3>
                  <p className="text-zinc-400">
                    Completa el formulario y te respondemos en menos de 24 horas
                  </p>
                </div>

                <form 
                  action="https://formsubmit.co/SyncSoftwareInfo@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* Configuración de FormSubmit */}
                  <input type="hidden" name="_subject" value="🚀 Nuevo contacto desde Sync Software" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/gracias`} />
                  <input type="hidden" name="_autoresponse" value="¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en menos de 24 horas. - Equipo Sync Software" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Nombre completo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Teléfono de contacto"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Presupuesto estimado <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="$500 - $1,000">$500 - $1,000 (Landing Page)</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500 (Sitio Corporativo)</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000 (App Web)</option>
                        <option value="$5,000+">$5,000+ (Enterprise)</option>
                        <option value="No estoy seguro">No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Tipo de proyecto <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Sitio Corporativo">Sitio Corporativo</option>
                      <option value="Aplicación Web">Aplicación Web</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Mantenimiento">Mantenimiento/Actualización</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Cuéntanos sobre tu proyecto <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Describe brevemente qué necesitas, objetivos del proyecto, timeline deseado, etc."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Check className="w-5 h-5 text-green-400" />
                      <span>Respuesta en &lt;24h</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Solicitar Propuesta
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Google Maps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden"
              >
                <h3 className="text-xl font-bold text-white mb-4 px-4">Nuestra Ubicación</h3>
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4374811969574!2d-56.0871971250441!3d-34.870359172859814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f871db9fb2e97%3A0x3cefdf3182a2683!2sCno.%20Carrasco%206119%2C%2013000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1767826975375!5m2!1ses-419!2suy" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
