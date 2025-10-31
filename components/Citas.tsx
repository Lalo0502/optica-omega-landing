"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { SolicitudCita } from "@/types";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function Citas() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<SolicitudCita>({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    fecha_preferida: "",
    hora_preferida: "",
    motivo: "",
    notas: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Guardar en Supabase
      const { error: insertError } = await supabase
        .from("solicitudes_citas")
        .insert([
          {
            ...formData,
            estado: "pendiente",
            created_at: new Date().toISOString(),
          },
        ]);

      if (insertError) throw insertError;

      // 2. Enviar email de confirmación
      try {
        console.log("📧 Llamando a API de email...");
        const emailResponse = await fetch("/api/send-cita-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok) {
          console.error("❌ Error en respuesta de email:", emailResult);
        } else {
          console.log("✅ Email enviado exitosamente:", emailResult);
        }
      } catch (emailError) {
        console.error("❌ Error enviando email:", emailError);
        // No detenemos el proceso si falla el email
      }

      setSuccess(true);
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        fecha_preferida: "",
        hora_preferida: "",
        motivo: "",
        notas: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Error al enviar solicitud:", err);
      setError(
        "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="citas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Agenda tu <span className="text-primary">Cita</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Visítanos o completa el formulario y nos pondremos en contacto
          </p>
        </motion.div>

        {/* Información de contacto arriba */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex flex-wrap justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-neutral-900">Dirección</p>
                  <p className="text-sm text-neutral-600">
                    Sonora #2515, Col. Jardin
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-neutral-900">Teléfono</p>
                  <p className="text-sm text-neutral-600">867 712 2210</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-semibold text-neutral-900">Horario</p>
                  <p className="text-sm text-neutral-600">
                    Lun-Vie: 10AM-6PM | Sáb: 10AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid 2 Columnas: Mapa + Formulario */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Columna Izquierda - Mapa COMPLETO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[600px]"
          >
            <div className="h-full w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA5OcKwMDcnMjQuNCJX!5e0!3m2!1ses!2smx!4v+52 8677122210"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Óptica Omega"
              ></iframe>
            </div>
          </motion.div>

          {/* Columna Derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8">
              ..
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    ¡Solicitud Enviada!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Hemos recibido tu solicitud de cita. Nos pondremos en
                    contacto contigo pronto para confirmar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Juan"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido *</Label>
                      <Input
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        placeholder="Pérez"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fecha_preferida">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Fecha Preferida *
                      </Label>
                      <Input
                        id="fecha_preferida"
                        name="fecha_preferida"
                        type="date"
                        value={formData.fecha_preferida}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hora_preferida">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Hora Preferida *
                      </Label>
                      <Input
                        id="hora_preferida"
                        name="hora_preferida"
                        type="time"
                        value={formData.hora_preferida}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivo">Motivo de la Cita *</Label>
                    <Input
                      id="motivo"
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleChange}
                      required
                      placeholder="Ej: Examen de la vista, Graduación de lentes..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notas">Notas Adicionales (Opcional)</Label>
                    <Textarea
                      id="notas"
                      name="notas"
                      value={formData.notas}
                      onChange={handleChange}
                      placeholder="Cualquier información adicional que desees compartir..."
                      rows={4}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
