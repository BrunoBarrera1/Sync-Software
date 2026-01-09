// src/components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Spacer for mobile */}
            <div className="lg:hidden w-10" />

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-1 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button - Right side */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-black/30 backdrop-blur-xl border-l border-white/20 transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="mb-8">
              <span className="text-lg font-semibold text-white">Menú</span>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Solicitar Propuesta
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
