import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validación
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validar formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // TODO: Aquí integramos con FormSubmit o servicio de email
    // Por ahora solo logueamos
    console.log('Email recibido:', { name, email, message })

    return NextResponse.json({ 
      success: true,
      message: 'Mensaje enviado correctamente' 
    })

  } catch (error) {
    console.error('Error en send-email:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

// Opcional: Rechazar otros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido. Use POST' },
    { status: 405 }
  )
}