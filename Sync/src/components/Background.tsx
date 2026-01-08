'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  hue: number
}

const PARTICLE_COUNT = 50
const CONNECTION_DISTANCE = 150

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: height + 10,
    size: Math.random() * 2 + 0.5,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 0.5 - 0.25,
    opacity: Math.random() * 0.5 + 0.3,
    hue: Math.random() > 0.5 ? 207 : 195,
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let frame: number

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(width, height)
    )

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const resetParticle = (p: Particle) => {
      p.x = Math.random() * width
      p.y = height + 10
      p.size = Math.random() * 2 + 0.5
      p.speedY = Math.random() * 1 + 0.5
      p.speedX = Math.random() * 0.5 - 0.25
      p.opacity = Math.random() * 0.5 + 0.3
      p.hue = Math.random() > 0.5 ? 207 : 195
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < CONNECTION_DISTANCE) {
            ctx.strokeStyle = `hsla(200, 100%, 60%, ${0.15 * (1 - distance / CONNECTION_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX

        if (p.y < -10) {
          resetParticle(p)
        }

        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      drawConnections()

      frame = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="background-container pointer-events-none">
      <div className="base-gradient" />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="grid-overlay" />

      <canvas ref={canvasRef} className="animated-canvas" />

      <div className="vignette" />
    </div>
  )
}
