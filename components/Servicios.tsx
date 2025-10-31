"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, Glasses, Microscope, ShieldCheck } from "lucide-react";

const servicios = [
  {
    icon: Eye,
    titulo: "Examen Visual Completo",
    descripcion:
      "Evaluación profesional de tu salud visual. ¡GRATIS con tu compra de lentes!",
  },
  {
    icon: Glasses,
    titulo: "Armazones de Moda",
    descripcion:
      "Las últimas tendencias en monturas. Desde clásicos elegantes hasta diseños modernos y juveniles.",
  },
  {
    icon: Microscope,
    titulo: "Lentes de Contacto",
    descripcion:
      "Asesoría personalizada y adaptación profesional de lentes de contacto.",
  },
  {
    icon: ShieldCheck,
    titulo: "Lentes Graduados",
    descripcion:
      "Cristales de alta calidad con tratamientos antirreflejante, fotocromáticos y más.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para el cuidado de tu
            visión
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all hover:scale-105 border border-primary/10">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <servicio.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {servicio.titulo}
                  </h3>
                  <p className="text-neutral-600">{servicio.descripcion}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
