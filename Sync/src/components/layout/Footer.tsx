// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  servicios: [
    { label: 'Landing Pages', href: '/pricing' },
    { label: 'Sitios Corporativos', href: '/pricing' },
    { label: 'Aplicaciones Web', href: '/pricing' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Proceso', href: '/proceso' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contacto', href: '/contacto' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-[400px] h-[100px]">
                <Image
                  src="/Sync_azul-removebg-preview.png"
                  alt="Sync Software"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-md leading-relaxed">
              Desarrollo web premium desde Uruguay para el mundo. Transformamos ideas en experiencias digitales que impulsan negocios.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>Montevideo, Uruguay</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>© 2026 Sync Software. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
