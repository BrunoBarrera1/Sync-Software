// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0c1220',
}

export const metadata: Metadata = {
  title: 'Sync Software - Desarrollo Web Premium en Uruguay',
  description: 'Creamos experiencias digitales que convierten visitantes en clientes. Desarrollo web profesional con React, Next.js y FastAPI.',
  keywords: ['desarrollo web', 'uruguay', 'react', 'nextjs', 'fastapi', 'landing pages'],
  authors: [{ name: 'Sync Software' }],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Sync Software - Desarrollo Web Premium',
    description: 'Desarrollo web profesional desde Uruguay para el mundo',
    url: 'https://syncsoftware.com',
    siteName: 'Sync Software',
    locale: 'es_UY',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="min-h-screen">
      <body className={inter.className}>
        <Background />
        <div className="relative z-10 min-h-screen text-[--text]">
          {children}
        </div>
      </body>
    </html>
  )
}
