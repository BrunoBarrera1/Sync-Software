// src/app/page.tsx
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Impact from '@/components/sections/Impact'
import Footer from '@/components/layout/Footer'
import SyncSnake from '@/components/SyncSnake'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Impact />
      <Footer />
      <SyncSnake />
    </main>
  )
}
