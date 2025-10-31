import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellido, email, fecha_preferida, hora_preferida, motivo } = body;

    console.log('📧 Intentando enviar email...');
    console.log('📧 Destinatario:', email);
    console.log('📧 API Key presente:', !!process.env.RESEND_API_KEY);

    // Para desarrollo sin dominio verificado, enviamos a delivered@resend.dev
    // Este es un email especial de Resend que siempre funciona para pruebas
    const emailDestino = process.env.NODE_ENV === 'production' ? email : 'delivered@resend.dev';

    // Email para el cliente
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: emailDestino,
      subject: '✓ Solicitud de Cita Recibida - Óptica Omega',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .info-box {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
              }
              .info-row {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #e0e0e0;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: bold;
                color: #667eea;
              }
              .footer {
                background: #f8f9fa;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 10px 10px;
                font-size: 14px;
                color: #666;
              }
              .icon {
                font-size: 48px;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="icon">👓</div>
              <h1 style="margin: 0;">¡Solicitud Recibida!</h1>
              <p style="margin: 10px 0 0 0;">Tu cita ha sido registrada exitosamente</p>
            </div>
            
            <div class="content">
              <p>Hola <strong>${nombre} ${apellido}</strong>,</p>
              
              <p>Hemos recibido tu solicitud de cita. Nuestro equipo la revisará y te contactaremos pronto para confirmar.</p>
              
              <div class="info-box">
                <h3 style="margin-top: 0; color: #667eea;">📋 Detalles de tu Solicitud</h3>
                
                <div class="info-row">
                  <span class="label">📅 Fecha preferida:</span>
                  <span>${new Date(fecha_preferida).toLocaleDateString('es-MX', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">🕐 Hora preferida:</span>
                  <span>${hora_preferida}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">📝 Motivo:</span>
                  <span>${motivo}</span>
                </div>
              </div>
              
              <p style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; border-radius: 4px;">
                <strong>⏰ ¿Qué sigue?</strong><br>
                Nos pondremos en contacto contigo en las próximas 24 horas para confirmar tu cita.
              </p>
              
              <p>Si tienes alguna pregunta o necesitas hacer cambios, no dudes en contactarnos.</p>
              
              <p style="margin-top: 30px;">
                Saludos cordiales,<br>
                <strong>El equipo de Óptica Omega</strong>
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">
                📍 <strong>Óptica Omega</strong><br>
                📞 Teléfono: (123) 456-7890<br>
                📧 Email: contacto@opticaomega.com
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (clientError) {
      console.error('❌ Error enviando email al cliente:', clientError);
      return NextResponse.json(
        { error: 'Error al enviar el correo de confirmación', details: clientError },
        { status: 500 }
      );
    }

    console.log('✅ Email al cliente enviado exitosamente');

    // Email opcional para el admin (si está configurado)
    if (process.env.ADMIN_EMAIL) {
      try {
        const adminEmailDestino = process.env.NODE_ENV === 'production' 
          ? process.env.ADMIN_EMAIL 
          : 'delivered@resend.dev';
          
        await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: adminEmailDestino,
          subject: '🔔 Nueva Solicitud de Cita - Óptica Omega',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .header {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                  }
                  .content {
                    background: #ffffff;
                    padding: 30px;
                    border: 1px solid #e0e0e0;
                    border-top: none;
                  }
                  .info-box {
                    background: #f0fdf4;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                    border-left: 4px solid #10b981;
                  }
                  .info-row {
                    padding: 8px 0;
                    display: flex;
                    gap: 10px;
                  }
                  .label {
                    font-weight: bold;
                    color: #059669;
                    min-width: 150px;
                  }
                  .button {
                    display: inline-block;
                    background: #10b981;
                    color: white;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: bold;
                    margin-top: 20px;
                  }
                </style>
              </head>
              <body>
                <div class="header">
                  <div style="font-size: 48px; margin-bottom: 10px;">🔔</div>
                  <h1 style="margin: 0;">Nueva Solicitud de Cita</h1>
                  <p style="margin: 10px 0 0 0;">Revisa y gestiona esta cita en el CMS</p>
                </div>
                
                <div class="content">
                  <h3 style="color: #10b981; margin-top: 0;">📋 Detalles del Cliente</h3>
                  
                  <div class="info-box">
                    <div class="info-row">
                      <span class="label">👤 Nombre:</span>
                      <span><strong>${nombre} ${apellido}</strong></span>
                    </div>
                    
                    <div class="info-row">
                      <span class="label">📞 Teléfono:</span>
                      <span>${body.telefono}</span>
                    </div>
                    
                    <div class="info-row">
                      <span class="label">📧 Email:</span>
                      <span>${email}</span>
                    </div>
                    
                    <div class="info-row">
                      <span class="label">📅 Fecha preferida:</span>
                      <span><strong>${new Date(fecha_preferida).toLocaleDateString('es-MX', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</strong></span>
                    </div>
                    
                    <div class="info-row">
                      <span class="label">🕐 Hora preferida:</span>
                      <span><strong>${hora_preferida}</strong></span>
                    </div>
                    
                    <div class="info-row">
                      <span class="label">📝 Motivo:</span>
                      <span>${motivo}</span>
                    </div>
                    
                    ${body.notas ? `
                    <div class="info-row">
                      <span class="label">📌 Notas:</span>
                      <span>${body.notas}</span>
                    </div>
                    ` : ''}
                  </div>
                  
                  <p style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px;">
                    <strong>⚠️ Acción Requerida:</strong><br>
                    Revisa esta solicitud en el CMS y confirma la cita con el cliente.
                  </p>
                  
                  <center>
                    <a href="${process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'}/citas" class="button">
                      Ver en el CMS →
                    </a>
                  </center>
                </div>
              </body>
            </html>
          `,
        });
      } catch (adminEmailError) {
        console.error('⚠️ Error enviando email al admin:', adminEmailError);
        // No detenemos el proceso si falla el email del admin
      }
    }

    console.log('✅ Proceso de emails completado');

    return NextResponse.json({
      success: true,
      message: 'Email enviado correctamente',
      data: clientData,
    });

  } catch (error) {
    console.error('❌ Error en la API de email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error },
      { status: 500 }
    );
  }
}
