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

    // Email para el cliente
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: 'Óptica Omega <contacto@optica-omega.com>',
      to: email,
      replyTo: 'contacto@optica-omega.com',
      subject: 'Confirmación de Solicitud de Cita',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.8;
                color: #1f2937;
                max-width: 600px;
                margin: 0 auto;
                padding: 0;
                background-color: #f9fafb;
              }
              .container {
                background: white;
                margin: 40px 20px;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              }
              .header {
                background: #667eea;
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                color: white;
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                letter-spacing: -0.5px;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 16px;
                margin-bottom: 24px;
                color: #374151;
              }
              .details {
                background: #f9fafb;
                border-radius: 6px;
                padding: 24px;
                margin: 32px 0;
                border: 1px solid #e5e7eb;
              }
              .detail-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .detail-row:last-child {
                border-bottom: none;
              }
              .detail-label {
                font-weight: 600;
                color: #6b7280;
                min-width: 120px;
                font-size: 14px;
              }
              .detail-value {
                color: #1f2937;
                font-size: 14px;
              }
              .notice {
                background: #fef3c7;
                padding: 16px;
                border-radius: 6px;
                border-left: 3px solid #f59e0b;
                margin: 24px 0;
                font-size: 14px;
                color: #78350f;
              }
              .footer {
                background: #f9fafb;
                padding: 24px 30px;
                text-align: center;
                font-size: 13px;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
              }
              .footer-company {
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Óptica Omega</h1>
              </div>
              
              <div class="content">
                <div class="greeting">
                  Hola <strong>${nombre} ${apellido}</strong>,
                </div>
                
                <p>Gracias por solicitar una cita con nosotros. Hemos recibido tu solicitud y nos pondremos en contacto contigo dentro de las próximas 24 horas para confirmar.</p>
                
                <div class="details">
                  <div class="detail-row">
                    <span class="detail-label">Fecha</span>
                    <span class="detail-value">${new Date(fecha_preferida).toLocaleDateString('es-MX', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">Hora</span>
                    <span class="detail-value">${hora_preferida}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">Motivo</span>
                    <span class="detail-value">${motivo}</span>
                  </div>
                </div>
                
                <div class="notice">
                  <strong>Próximos pasos:</strong><br>
                  Nuestro equipo revisará tu solicitud y te contactará para confirmar la disponibilidad.
                </div>
                
                <p style="margin-top: 32px; color: #6b7280; font-size: 14px;">
                  Si necesitas hacer cambios o tienes preguntas, responde a este correo.
                </p>
              </div>
              
              <div class="footer">
                <div class="footer-company">Óptica Omega</div>
                <div>Sonora #2515, Nuevo Laredo, Tamaulipas</div>
                <div>contacto@optica-omega.com</div>
              </div>
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
        await resend.emails.send({
          from: 'Óptica Omega <contacto@optica-omega.com>',
          to: process.env.ADMIN_EMAIL,
          replyTo: email,
          subject: 'Nueva Solicitud de Cita',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    line-height: 1.8;
                    color: #1f2937;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 0;
                    background-color: #f9fafb;
                  }
                  .container {
                    background: white;
                    margin: 40px 20px;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                  }
                  .header {
                    background: #10b981;
                    padding: 40px 30px;
                    text-align: center;
                  }
                  .header h1 {
                    color: white;
                    margin: 0;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.5px;
                  }
                  .header p {
                    color: rgba(255,255,255,0.9);
                    margin: 8px 0 0 0;
                    font-size: 14px;
                  }
                  .content {
                    padding: 40px 30px;
                  }
                  .section-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #6b7280;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin: 0 0 16px 0;
                  }
                  .details {
                    background: #f0fdf4;
                    border-radius: 6px;
                    padding: 24px;
                    margin: 24px 0;
                    border-left: 3px solid #10b981;
                  }
                  .detail-row {
                    display: flex;
                    padding: 10px 0;
                    gap: 16px;
                  }
                  .detail-label {
                    font-weight: 600;
                    color: #059669;
                    min-width: 110px;
                    font-size: 14px;
                  }
                  .detail-value {
                    color: #1f2937;
                    font-size: 14px;
                    flex: 1;
                  }
                  .button {
                    display: inline-block;
                    background: #10b981;
                    color: white;
                    padding: 14px 28px;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 14px;
                    margin-top: 24px;
                  }
                  .notice {
                    background: #fef3c7;
                    padding: 16px;
                    border-radius: 6px;
                    border-left: 3px solid #f59e0b;
                    margin: 24px 0;
                    font-size: 14px;
                    color: #78350f;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Nueva Solicitud de Cita</h1>
                    <p>Gestiona esta cita en el CMS</p>
                  </div>
                  
                  <div class="content">
                    <h3 class="section-title">Información del Cliente</h3>
                    
                    <div class="details">
                      <div class="detail-row">
                        <span class="detail-label">Nombre</span>
                        <span class="detail-value"><strong>${nombre} ${apellido}</strong></span>
                      </div>
                      
                      <div class="detail-row">
                        <span class="detail-label">Teléfono</span>
                        <span class="detail-value">${body.telefono}</span>
                      </div>
                      
                      <div class="detail-row">
                        <span class="detail-label">Email</span>
                        <span class="detail-value">${email}</span>
                      </div>
                      
                      <div class="detail-row">
                        <span class="detail-label">Fecha</span>
                        <span class="detail-value"><strong>${new Date(fecha_preferida).toLocaleDateString('es-MX', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</strong></span>
                      </div>
                      
                      <div class="detail-row">
                        <span class="detail-label">Hora</span>
                        <span class="detail-value"><strong>${hora_preferida}</strong></span>
                      </div>
                      
                      <div class="detail-row">
                        <span class="detail-label">Motivo</span>
                        <span class="detail-value">${motivo}</span>
                      </div>
                      
                      ${body.notas ? `
                      <div class="detail-row">
                        <span class="detail-label">Notas</span>
                        <span class="detail-value">${body.notas}</span>
                      </div>
                      ` : ''}
                    </div>
                    
                    <div class="notice">
                      <strong>Acción Requerida:</strong> Revisa y confirma esta cita con el cliente.
                    </div>
                    
                    <center>
                      <a href="${process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000'}/citas" class="button">
                        Abrir CMS
                      </a>
                    </center>
                  </div>
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
