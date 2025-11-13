import { NextRequest, NextResponse } from 'next/server';
import { landingPageData } from '@/data/landingPageData';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar datos al backend de FastAPI
    const backendResponse = await fetch(landingPageData.api.contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!backendResponse.ok) {
      throw new Error('Error al comunicarse con el backend');
    }

    const data = await backendResponse.json();

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en /api/contact:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  }
}
