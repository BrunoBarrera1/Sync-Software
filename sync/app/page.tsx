"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  FaArrowRight, 
  FaCode, 
  FaRocket, 
  FaShieldAlt, 
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaUsers,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaRobot,
  FaWhatsapp,
  FaCalendarAlt,
  FaCheck,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaHandshake,
  FaTools,
  FaHeadset,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaServer,
  FaComments,
  FaNetworkWired,
  FaSync,
  FaBell,
  FaFilter
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  useEffect(() => {
    // Cargar el script de Cal.com solo en el cliente
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});

      // Calendario principal
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "sync-software-phlved/30min",
      });

      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.body.appendChild(script);
    setCalendarLoaded(true);
    
    return () => {
      // Limpiar el script al desmontar el componente
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <AuroraBackground>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32">
          {/* Logo/Navbar */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4">
            <div className="flex justify-between items-center backdrop-blur-sm bg-black/40 rounded-2xl p-4 border border-gray-800/50">
              {/* LOGO PRINCIPAL - sync.png */}
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 flex items-center justify-center animate-pulse-slow">
                  <Image
                    src="/sync.png"
                    alt="SYNC SOFTWARE Logo"
                    width={48}
                    height={48}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  SYNC <span className="text-cobalt-blue-400">SOFTWARE</span>
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#beneficios" className="text-gray-300 hover:text-cobalt-blue-300 transition-all duration-300 hover:scale-105">Beneficios</a>
                <a href="#servicios" className="text-gray-300 hover:text-cobalt-blue-300 transition-all duration-300 hover:scale-105">Servicios</a>
                <a href="#proceso" className="text-gray-300 hover:text-cobalt-blue-300 transition-all duration-300 hover:scale-105">Proceso</a>
                <a href="#clientes" className="text-gray-300 hover:text-cobalt-blue-300 transition-all duration-300 hover:scale-105">Clientes</a>
                <a href="#calendario" className="text-gray-300 hover:text-cobalt-blue-300 transition-all duration-300 hover:scale-105">Agendar Llamada</a>
                <Button variant="outline" className="border-cobalt-blue-500 text-cobalt-blue-400 hover:bg-cobalt-blue-500/10 hover:scale-105 transition-all duration-300 group">
                  <span>Contacto</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Content - Tono directo al cliente */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              SYNC <span className="text-gradient-cobalt">SOFTWARE</span>
            </h1>
            
            <div className="relative mb-12">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 text-gray-100 leading-snug">
                ¿Cansado de sitios web que no <span className="text-cobalt-blue-300">venden</span>?
              </h2>
              
              {/* Elemento decorativo animado */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-cobalt-blue-400/50 rounded-tr-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-cobalt-blue-400/50 rounded-bl-2xl animate-pulse"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nosotros no vendemos plantillas. <span className="text-cobalt-blue-300 font-semibold">Desarrollamos sistemas a medida</span> que resuelven problemas reales y generan <span className="text-cobalt-blue-300 font-semibold">resultados medibles</span> para tu negocio.
            </p>
            
            {/* CTA Principal - Con urgencia y beneficio claro */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up">
              <Button size="xl" className="group bg-gradient-to-r from-cobalt-blue-600 to-cobalt-blue-800 hover:from-cobalt-blue-700 hover:to-cobalt-blue-900 shadow-2xl shadow-cobalt-blue-500/30 hover:shadow-3xl hover:shadow-cobalt-blue-500/50 transition-all duration-500">
                <span className="text-lg font-semibold">Solicitar Propuesta Gratis</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="xl" className="group border-2 border-cobalt-blue-500 hover:bg-cobalt-blue-500/10 transition-all duration-300">
                <FaRocket className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Ver Proceso de Trabajo</span>
              </Button>
            </div>

            {/* Elementos de confianza inmediata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cobalt-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-cobalt-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-300">Proyectos Entregados</div>
                <div className="w-0 group-hover:w-full h-0.5 bg-cobalt-blue-500 mt-2 transition-all duration-500"></div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cobalt-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-cobalt-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-300">Satisfacción Garantizada</div>
                <div className="w-0 group-hover:w-full h-0.5 bg-cobalt-blue-500 mt-2 transition-all duration-500"></div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cobalt-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-cobalt-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-300">Soporte Post-Lanzamiento</div>
                <div className="w-0 group-hover:w-full h-0.5 bg-cobalt-blue-500 mt-2 transition-all duration-500"></div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cobalt-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl font-bold text-cobalt-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
                <div className="text-gray-300">Sorpresas en Costos</div>
                <div className="w-0 group-hover:w-full h-0.5 bg-cobalt-blue-500 mt-2 transition-all duration-500"></div>
              </div>
            </div>

            {/* Scroll Indicator con animación */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <div className="flex flex-col items-center text-gray-400 text-sm">
                <div className="mb-2">Tu solución está aquí abajo</div>
                <div className="w-6 h-10 border-2 border-cobalt-blue-500/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gradient-to-b from-cobalt-blue-400 to-cobalt-blue-600 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Sección de Beneficios - Enfoque directo al cliente */}
      <section id="beneficios" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿La intención? <span className="text-cobalt-blue-400">¿Los beneficios reales?</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            No es solo un sitio web. Es tu mejor vendedor 24/7, tu automatizador de procesos y tu escalera al crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaChartLine,
              title: "Convertís visitas en clientes",
              desc: "Una landing bien diseñada guía al usuario, responde objeciones, muestra valor, y lleva al contacto. 24/7, sin vendedores, sin pausa."
            },
            {
              icon: FaUsers,
              title: "Aumentás ingresos sin más trabajo",
              desc: "Automatizás consultas, cotizaciones, reservas y seguimiento. Más clientes — mismo esfuerzo."
            },
            {
              icon: FaShieldAlt,
              title: "Posicionás tu marca como confiable",
              desc: "Una web moderna comunica seriedad, estructura, crecimiento y confianza. Y la confianza vende."
            },
            {
              icon: FaCogs,
              title: "Optimizás tu proceso comercial",
              desc: "Tu cliente llega, entiende, interactúa y avanza. Sin llamadas innecesarias, sin mensajes confusos, sin tiempo perdido."
            },
            {
              icon: FaLightbulb,
              title: "Entendés mejor a tus clientes",
              desc: "Medí comportamiento, detectá intereses reales, optimizá tu oferta y mejorá conversión. Decisiones basadas en datos."
            },
            {
              icon: FaGlobe,
              title: "Escalás sin límites geográficos",
              desc: "Vendés fuera de tu ciudad, país, a cualquier hora. Tu negocio deja de depender de tu ubicación física."
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 hover:border-cobalt-blue-500 hover:shadow-2xl hover:shadow-cobalt-blue-500/20 transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cobalt-blue-900/30 to-cobalt-blue-700/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <benefit.icon className="text-3xl text-cobalt-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cobalt-blue-300 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800/50 group-hover:border-cobalt-blue-500/30 transition-colors duration-300">
                <div className="flex items-center text-sm text-gray-400">
                  <FaCheck className="text-cobalt-blue-400 mr-2" />
                  <span>Resultado comprobado en +50 clientes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje clave */}
        <div className="mt-20 p-8 bg-gradient-to-r from-cobalt-blue-900/30 to-black/50 border-l-4 border-cobalt-blue-500 rounded-r-2xl">
          <div className="flex items-start">
            <FaQuoteLeft className="text-4xl text-cobalt-blue-400 mr-4 mt-2" />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                No es un gasto. <span className="text-cobalt-blue-300">Es tu mejor inversión.</span>
              </h3>
              <p className="text-xl text-gray-300">
                Una buena web no es un gasto. Es la mejor inversión comercial de tu negocio. 
                Se paga sola con los primeros clientes que lleguen por ella.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios - Con demostración de expertise */}
      <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creamos soluciones que <span className="text-cobalt-blue-400">impulsan tu negocio</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              No vendemos plantillas. Desarrollamos sistemas a medida que resuelven problemas reales y generan resultados medibles.
            </p>
          </div>

          <div className="space-y-12">
            {/* Servicio 1 - Landing Pages */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue-500/20 border border-cobalt-blue-500/50 text-cobalt-blue-300 mb-6">
                  <FaMobileAlt className="mr-2" />
                  <span>Para vender más</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Landing Pages de Conversión</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Páginas optimizadas para vender. Diseño estratégico que guía al usuario desde la curiosidad hasta la acción.
                </p>
                <ul className="space-y-3">
                  {['Diseño persuasivo y responsive', 'Optimización SEO incluida', 'Integración con herramientas de marketing', 'Analytics y seguimiento de conversión'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cobalt-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  {/* SVG Architecture para Landing Pages */}
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative w-full max-w-md mx-auto">
                      {/* Dispositivos */}
                      <div className="flex justify-center items-end gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                        {/* Mobile */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 sm:w-14 md:w-16 h-20 sm:h-24 md:h-28 border-2 border-cobalt-blue-500/50 rounded-lg bg-gray-900/50 flex items-center justify-center">
                            <FaMobileAlt className="text-base sm:text-lg md:text-xl text-cobalt-blue-400" />
                          </div>
                          <div className="mt-2 text-[10px] sm:text-xs text-gray-400">Mobile</div>
                        </div>
                        {/* Tablet */}
                        <div className="flex flex-col items-center">
                          <div className="w-16 sm:w-20 md:w-24 h-24 sm:h-28 md:h-32 border-2 border-cobalt-blue-500/50 rounded-lg bg-gray-900/50 flex items-center justify-center">
                            <div className="text-center">
                              <FaSearch className="text-sm sm:text-base md:text-lg text-cobalt-blue-400 mb-1" />
                              <div className="text-[10px] sm:text-xs text-cobalt-blue-300">SEO</div>
                            </div>
                          </div>
                          <div className="mt-2 text-[10px] sm:text-xs text-gray-400">Tablet</div>
                        </div>
                        {/* Desktop */}
                        <div className="flex flex-col items-center">
                          <div className="w-20 sm:w-26 md:w-32 h-16 sm:h-20 md:h-24 border-2 border-cobalt-blue-500/50 rounded-lg bg-gray-900/50 flex items-center justify-center">
                            <FaChartLine className="text-lg sm:text-xl md:text-2xl text-cobalt-blue-400" />
                          </div>
                          <div className="mt-2 text-[10px] sm:text-xs text-gray-400">Desktop</div>
                        </div>
                      </div>
                      
                      {/* Líneas de conexión y servidor */}
                      <div className="relative h-16 sm:h-20">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-cobalt-blue-500 to-transparent"></div>
                        <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2">
                          <div className="w-10 sm:w-12 h-10 sm:h-12 border-2 border-cobalt-blue-500/50 rounded-full bg-gray-900/80 flex items-center justify-center">
                            <FaServer className="text-sm sm:text-lg text-cobalt-blue-400" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gradient-to-t from-green-500 to-transparent"></div>
                      </div>
                      
                      {/* Analytics y conversión */}
                      <div className="flex justify-center mt-4">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-8 sm:w-10 h-8 sm:h-10 border-2 border-green-500/50 rounded-lg bg-gray-900/80 flex items-center justify-center">
                              <FaCheck className="text-sm sm:text-lg text-green-400" />
                            </div>
                            <div className="mt-1 text-[10px] sm:text-xs text-gray-400">Conversión</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-8 sm:w-10 h-8 sm:h-10 border-2 border-yellow-500/50 rounded-lg bg-gray-900/80 flex items-center justify-center">
                              <FaFilter className="text-sm sm:text-lg text-yellow-400" />
                            </div>
                            <div className="mt-1 text-[10px] sm:text-xs text-gray-400">Analytics</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 2 - Web Applications */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  {/* SVG Architecture para Web Applications */}
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative w-full max-w-md mx-auto">
                      {/* Capas de arquitectura */}
                      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                        {/* Frontend Layer */}
                        <div className="w-full max-w-[200px] sm:max-w-[220px] px-4 sm:px-6 py-2 sm:py-3 border-2 border-cobalt-blue-500/50 rounded-xl bg-gray-900/80 flex items-center justify-between">
                          <div className="flex items-center">
                            <FaCode className="text-sm sm:text-lg text-cobalt-blue-400 mr-2" />
                            <span className="text-xs sm:text-sm text-gray-300">Frontend</span>
                          </div>
                          <div className="text-[10px] sm:text-xs text-cobalt-blue-300">React/Next.js</div>
                        </div>
                        
                        {/* API Layer */}
                        <div className="relative">
                          <div className="w-full max-w-[180px] sm:max-w-[200px] px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-500/50 rounded-xl bg-gray-900/80 flex items-center justify-center">
                            <div className="flex items-center">
                              <FaNetworkWired className="text-sm sm:text-lg text-purple-400 mr-2" />
                              <span className="text-xs sm:text-sm text-gray-300">API REST</span>
                            </div>
                          </div>
                          <div className="absolute -right-8 sm:-right-12 top-1/2 transform -translate-y-1/2 hidden sm:block">
                            <div className="text-[10px] sm:text-xs text-purple-300 rotate-90">Fastify</div>
                          </div>
                        </div>
                        
                        {/* Backend Layer */}
                        <div className="w-full max-w-[220px] sm:max-w-[250px] px-4 sm:px-6 py-2 sm:py-3 border-2 border-green-500/50 rounded-xl bg-gray-900/80 flex items-center justify-between">
                          <div className="flex items-center">
                            <FaServer className="text-sm sm:text-lg text-green-400 mr-2" />
                            <span className="text-xs sm:text-sm text-gray-300">Backend</span>
                          </div>
                          <div className="text-[10px] sm:text-xs text-green-300">TypeScript</div>
                        </div>
                        
                        {/* Database Layer */}
                        <div className="w-full max-w-[240px] sm:max-w-[280px] px-4 sm:px-6 py-2 sm:py-3 border-2 border-yellow-500/50 rounded-xl bg-gray-900/80 flex items-center justify-between">
                          <div className="flex items-center">
                            <FaDatabase className="text-sm sm:text-lg text-yellow-400 mr-2" />
                            <span className="text-xs sm:text-sm text-gray-300">Database</span>
                          </div>
                          <div className="text-[10px] sm:text-xs text-yellow-300">PostgreSQL</div>
                        </div>
                      </div>
                      
                      {/* Security Badge */}
                      <div className="absolute -top-2 -right-2">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 border-2 border-green-500/50 rounded-full bg-gray-900 flex items-center justify-center text-green-400">
                          <span className="text-[10px] sm:text-xs font-bold">SEC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue-500/20 border border-cobalt-blue-500/50 text-cobalt-blue-300 mb-6">
                  <FaDatabase className="mr-2" />
                  <span>Para crecer sin límites</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Web Applications Completas</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Sistemas robustos con backend, base de datos, panel administrativo y funcionalidades avanzadas.
                </p>
                <ul className="space-y-3">
                  {['Backend escalable (TypeScript/Fastify)', 'Frontend moderno (React/Next.js)', 'Base de datos PostgreSQL', 'APIs REST personalizadas', 'Panel de administración completo'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cobalt-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Servicio 3 - Automatizaciones */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue-500/20 border border-cobalt-blue-500/50 text-cobalt-blue-300 mb-6">
                  <FaRobot className="mr-2" />
                  <span>Para automatizar todo</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Automatizaciones & Chatbots</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Ahorrá tiempo y dinero automatizando procesos repetitivos. Chatbots inteligentes con IA conversacional.
                </p>
                <ul className="space-y-3">
                  {['Chatbots con IA conversacional', 'Integración WhatsApp Business', 'Automatización de respuestas', 'Calificación automática de leads'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cobalt-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-4 sm:p-6 md:p-8 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  {/* SVG Architecture para Automatizaciones */}
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative w-full max-w-md mx-auto">
                      {/* Robot Central */}
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="relative">
                          <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 border-2 border-cobalt-blue-500/50 rounded-full bg-gray-900/80 flex items-center justify-center">
                            <FaRobot className="text-xl sm:text-2xl md:text-3xl text-cobalt-blue-400" />
                          </div>
                          {/* Anillos concéntricos */}
                          <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-pulse-slow"></div>
                          <div className="absolute inset-3 sm:inset-4 border-2 border-purple-500/30 rounded-full animate-pulse-slow delay-300"></div>
                        </div>
                      </div>
                      
                      {/* Integraciones alrededor */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                        {/* WhatsApp */}
                        <div className="flex flex-col items-center p-2 sm:p-3 border-2 border-green-500/30 rounded-xl bg-gray-900/60">
                          <FaWhatsapp className="text-lg sm:text-xl md:text-2xl text-green-400 mb-1" />
                          <div className="text-[10px] sm:text-xs text-gray-300">WhatsApp</div>
                          <div className="text-[8px] sm:text-[10px] text-green-300">Business API</div>
                        </div>
                        
                        {/* IA Conversacional */}
                        <div className="flex flex-col items-center p-2 sm:p-3 border-2 border-purple-500/30 rounded-xl bg-gray-900/60">
                          <FaComments className="text-lg sm:text-xl md:text-2xl text-purple-400 mb-1" />
                          <div className="text-[10px] sm:text-xs text-gray-300">IA Chat</div>
                          <div className="text-[8px] sm:text-[10px] text-purple-300">Conversacional</div>
                        </div>
                        
                        {/* Automatización */}
                        <div className="flex flex-col items-center p-2 sm:p-3 border-2 border-yellow-500/30 rounded-xl bg-gray-900/60">
                          <FaSync className="text-lg sm:text-xl md:text-2xl text-yellow-400 mb-1" />
                          <div className="text-[10px] sm:text-xs text-gray-300">Workflows</div>
                          <div className="text-[8px] sm:text-[10px] text-yellow-300">Automatizados</div>
                        </div>
                        
                        {/* Notificaciones */}
                        <div className="flex flex-col items-center p-2 sm:p-3 border-2 border-red-500/30 rounded-xl bg-gray-900/60">
                          <FaBell className="text-lg sm:text-xl md:text-2xl text-red-400 mb-1" />
                          <div className="text-[10px] sm:text-xs text-gray-300">Alerts</div>
                          <div className="text-[8px] sm:text-[10px] text-red-300">Inteligentes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proceso - Transparente y paso a paso */}
      <section id="proceso" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proceso 100% <span className="text-cobalt-blue-400">Transparente</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Sin sorpresas, sin costos ocultos. Sabrás exactamente qué vas a recibir, cuándo lo tendrás, y cuánto costará.
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cobalt-blue-500 to-cobalt-blue-800 hidden lg:block"></div>
          
          <div className="space-y-20">
            {/* PASO 1 - Ahora sin calendario */}
            <div className="relative lg:pr-1/2 lg:pl-0 lg:text-right">
              <div className="bg-gradient-to-br from-green-500/20 to-green-900/20 border border-green-500/30 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 max-w-lg lg:ml-auto">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/40 to-green-900/40 flex items-center justify-center mr-4">
                    <FaHandshake className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-300">PASO 1</div>
                    <h3 className="text-2xl font-bold text-white">Discovery Call - 30 minutos - Gratis</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Conversamos sobre tu visión, objetivos y desafíos. Sin tecnicismos, sin presión. 
                  Solo entendemos qué quieres lograr y cómo podemos ayudarte a llegar ahí.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <div className="flex items-center text-sm text-gray-400">
                    <FaCheck className="text-green-400 mr-2" />
                    <span>Incluido en todos nuestros proyectos</span>
                  </div>
                </div>
              </div>
              
              {/* Punto en la línea de tiempo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cobalt-blue-500 rounded-full border-4 border-black z-10 hidden lg:block"></div>
            </div>

            {/* PASOS 2 al 5 */}
            {[
              {
                step: "2",
                title: "Propuesta Transparente - 24-48 horas",
                desc: "Recibes una propuesta clara con precio fijo, cronograma detallado, y mockups iniciales. Sin sorpresas, sin costos ocultos. Todo por escrito.",
                icon: FaCalendarAlt,
                color: "from-blue-500/20 to-blue-900/20",
                border: "border-blue-500/30"
              },
              {
                step: "3",
                title: "Desarrollo Ágil - Sprints semanales",
                desc: "Construimos tu proyecto en sprints de 7 días con demos cada semana. Ves el progreso real, das feedback temprano, y ajustamos sobre la marcha.",
                icon: FaTools,
                color: "from-purple-500/20 to-purple-900/20",
                border: "border-purple-500/30"
              },
              {
                step: "4",
                title: "Pulido & Perfección - 3-5 días",
                desc: "Revisiones ilimitadas hasta que quede exactamente como lo imaginaste. Optimizamos velocidad, probamos en todos los dispositivos, y ajustamos cada detalle.",
                icon: FaCheck,
                color: "from-yellow-500/20 to-yellow-900/20",
                border: "border-yellow-500/30"
              },
              {
                step: "5",
                title: "Lanzamiento & Acompañamiento - 30 días soporte",
                desc: "Publicamos tu sitio, configuramos analytics, y te enseñamos a manejarlo. Incluye 30 días de soporte completo para ajustes, dudas, o cualquier cosa que necesites.",
                icon: FaHeadset,
                color: "from-red-500/20 to-red-900/20",
                border: "border-red-500/30"
              }
            ].map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:pl-1/2 lg:pr-0 lg:text-left' : 'lg:pr-1/2 lg:pl-0 lg:text-right'}`}>
                <div className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 max-w-lg ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color.split(' ')[0].replace('/20', '/40')} ${item.color.split(' ')[1].replace('/20', '/40')} flex items-center justify-center mr-4`}>
                      <item.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-300">PASO {item.step}</div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 pt-6 border-t border-gray-800/50">
                    <div className="flex items-center text-sm text-gray-400">
                      <FaCheck className="text-green-400 mr-2" />
                      <span>Incluido en todos nuestros proyectos</span>
                    </div>
                  </div>
                </div>
                
                {/* Punto en la línea de tiempo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cobalt-blue-500 rounded-full border-4 border-black z-10 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Clientes/Sponsors */}
      <section id="clientes" className="py-20 px-4 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empresas que <span className="text-cobalt-blue-400">confían en nosotros</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Un agradecimiento especial a cada emprendedor y empresa que confió en Sync Software desde el primer día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { name: "Uruguay Lucha de Brazos", category: "Deporte y Competición", desc: "Asociacion oficial de arm wrestling en Uruguay." },
              { name: "Drako Gym", category: "Centro de Entrenamiento", desc: "Gimnasio de alto rendimiento especializado en fuerza." },
              { name: "Msport", category: "Taller Mecánico Especializado", desc: "Taller de excelencia para vehículos alemanes de alta gama." },
              { name: "Lavadero del Parque", category: "Servicios de Lavado", desc: "Lavadero profesional con años de experiencia." }
            ].map((client, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cobalt-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cobalt-blue-900/30 to-cobalt-blue-700/30 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                  <FaQuoteLeft className="text-2xl text-cobalt-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{client.name}</h3>
                <div className="text-sm text-cobalt-blue-400 mb-3">{client.category}</div>
                <p className="text-gray-300 text-sm">{client.desc}</p>
                <div className="mt-4 text-xs text-gray-500 flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  Uruguay
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje de agradecimiento */}
          <div className="bg-gradient-to-r from-cobalt-blue-900/20 to-black/50 border border-cobalt-blue-500/30 rounded-2xl p-8 text-center">
            <FaQuoteLeft className="text-4xl text-cobalt-blue-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300 mb-6">
              <span className="text-cobalt-blue-300 font-semibold">Sin ustedes, no seríamos lo que somos hoy.</span> Cada proyecto que desarrollamos juntos nos enseñó algo nuevo, nos desafió a mejorar, y nos motivó a seguir apostando por el desarrollo web de calidad en Uruguay.
            </p>
            <div className="text-gray-400">
              Más que sponsors, son parte de nuestra historia.
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Calendario - MOVIDA HACIA ABAJO */}
      <section id="calendario" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Columna izquierda - Información */}
            <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-b from-gray-900/80 to-black/80">
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-cobalt-blue-500/20 border border-cobalt-blue-500/50 text-cobalt-blue-300 mb-6">
                    <FaCalendarAlt className="mr-2" />
                    <span className="font-medium">Paso 1 - Gratis</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Discovery Call
                    <br />
                    <span className="text-cobalt-blue-400">30 minutos</span>
                  </h2>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Conversamos sobre tu visión, objetivos y desafíos. Sin tecnicismos, sin presión. Solo entendemos qué quieres lograr y cómo podemos ayudarte a llegar ahí.
                  </p>
                </div>
                
                <div className="space-y-6 mb-8 flex-grow">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt-blue-900/30 to-cobalt-blue-700/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <FaCheck className="text-lg text-cobalt-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">Sin compromiso</h4>
                      <p className="text-gray-400">Esta llamada es completamente gratuita y sin compromiso de contratación.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt-blue-900/30 to-cobalt-blue-700/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <FaCheck className="text-lg text-cobalt-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">Enfocado en resultados</h4>
                      <p className="text-gray-400">Identificamos oportunidades concretas para mejorar tu presencia digital.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cobalt-blue-900/30 to-cobalt-blue-700/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <FaCheck className="text-lg text-cobalt-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">Propuesta en 24-48 horas</h4>
                      <p className="text-gray-400">Si hay compatibilidad, recibirás una propuesta detallada en menos de 48 horas.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-green-900/20 flex items-center justify-center mr-3">
                      <FaCheck className="text-sm text-green-400" />
                    </div>
                    <span className="text-gray-300 font-medium">Incluido en todos nuestros proyectos</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Columna derecha - Calendario */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-black/40">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Selecciona un horario que te convenga</h3>
                  <p className="text-gray-400 mb-4">
                    Elige el día y hora que mejor se ajuste a tu agenda. Recibirás confirmación por email con los detalles.
                  </p>
                  
                  {/* Información de la reunión */}
                  <div className="bg-black/50 rounded-xl p-4 mb-6 border border-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">Sync Software</h4>
                        <p className="text-sm text-gray-400">30 Min Meeting | Services</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-cobalt-blue-400 font-medium">30m</div>
                        <div className="text-xs text-gray-500">Google Meet</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center mt-2">
                      <FaClock className="mr-1" />
                      <span>America/Montevideo</span>
                    </div>
                  </div>
                </div>
                
                {/* Contenedor del calendario */}
                <div className="flex-grow bg-white/5 rounded-2xl p-4 border border-gray-700/50 overflow-hidden">
                  {calendarLoaded ? (
                    <div style={{width:"100%",height:"500px",overflow:"auto"}} id="my-cal-inline-30min"></div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cobalt-blue-500 mb-4"></div>
                      <p className="text-gray-400">Cargando calendario...</p>
                    </div>
                  )}
                </div>
                
                {/* Opción alternativa: Contacto por Gmail */}
                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <div className="text-center">
                    <p className="text-gray-400 mb-3 text-sm">
                      ¿Problemas con el calendario o prefieres otra opción?
                    </p>
                    <button 
                      onClick={() => setShowEmailForm(!showEmailForm)}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-600/50 text-blue-300 hover:text-blue-200 hover:border-blue-500 transition-all duration-300 group"
                    >
                      <FaEnvelope className="mr-2" />
                      <span className="font-medium">
                        {showEmailForm ? 'Ocultar formulario de email' : 'Preferís contactarnos por email'}
                      </span>
                      {showEmailForm ? (
                        <FaChevronUp className="ml-2 group-hover:translate-y-[-2px] transition-transform" />
                      ) : (
                        <FaChevronDown className="ml-2 group-hover:translate-y-[2px] transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Gmail Desplegable */}
      <div className={`px-4 max-w-4xl mx-auto transition-all duration-500 ${showEmailForm ? 'opacity-100 translate-y-0 mb-20' : 'opacity-0 -translate-y-4 h-0 overflow-hidden'}`}>
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-3xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-700/30 flex items-center justify-center mr-4">
              <FaEnvelope className="text-xl text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">¿Preferís contactarnos por email?</h3>
              <p className="text-gray-300">Completa el formulario y te respondemos en menos de 24 horas.</p>
            </div>
          </div>
          
          <form 
            action="https://formsubmit.co/SyncSoftwareInfo@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Campos ocultos para FormSubmit */}
            <input type="hidden" name="_subject" value="Nueva Solicitud de Propuesta - SYNC SOFTWARE" />
            <input type="hidden" name="_autoresponse" value="¡Gracias por contactar a SYNC SOFTWARE! Hemos recibido tu solicitud de propuesta y te responderemos en menos de 24 horas hábiles. Mientras tanto, puedes revisar nuestro proceso de trabajo en https://syncsoftware.com.uy/#proceso" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cobalt-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cobalt-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
              <input 
                type="tel" 
                name="phone"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cobalt-blue-500 transition-colors"
                placeholder="Teléfono de contacto"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de proyecto *</label>
              <select 
                name="project_type"
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cobalt-blue-500 transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Sitio Web Corporativo">Sitio Web Corporativo</option>
                <option value="Aplicación Web">Aplicación Web</option>
                <option value="Automatización/Chatbot">Automatización/Chatbot</option>
                <option value="No estoy seguro">No estoy seguro</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cuéntanos sobre tu proyecto *</label>
              <textarea 
                name="project_details"
                required
                rows={4}
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cobalt-blue-500 transition-colors"
                placeholder="Describe brevemente qué necesitas, objetivos del proyecto, timeline deseado, etc."
              />
            </div>
            
            <button 
              type="submit"
              className="w-full group bg-gradient-to-r from-cobalt-blue-600 to-cobalt-blue-800 hover:from-cobalt-blue-700 hover:to-cobalt-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
            >
              <span className="text-lg">Enviar por email</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              Te contactaremos en menos de 24 horas hábiles. Sin spam, sin llamadas molestas.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              {/* LOGO COMPLETO EN FOOTER - sync_complete.png - AGGRANDADO */}
              <div className="mb-4">
                <div className="relative h-24 w-72">
                  <Image
                    src="/sync_complete.png"
                    alt="SYNC SOFTWARE Logo Completo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Transformamos ideas en experiencias digitales desde 2025.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Landing Pages</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Sitios Corporativos</a></li>
                <li><a href="#servicios" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Aplicaciones Web</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#calendario" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Agendar Llamada</a></li>
                <li><a href="#proceso" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Proceso</a></li>
                <li><a href="#clientes" className="text-gray-400 hover:text-cobalt-blue-300 transition-colors">Clientes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Camino Carrasco 6119</li>
                <li className="text-gray-400">Montevideo, Uruguay</li>
                <li className="text-gray-400">092 662 172</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            <p className="mb-2">© 2026 SYNC SOFTWARE. Todos los derechos reservados.</p>
            <p>Desarrollo web premium desde Uruguay para el mundo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}