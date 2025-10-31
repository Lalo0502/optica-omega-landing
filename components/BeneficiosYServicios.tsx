"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, Glasses, Sparkles, Clock } from "lucide-react";

const servicios = [
  {
    icon: Eye,
    titulo: "Examen de la Vista Gratis",
    descripcion: "Con tu compra de lentes graduados",
  },
  {
    icon: Glasses,
    titulo: "Lentes Graduados",
    descripcion: "Personalizados con graduación exacta",
  },
  {
    icon: Sparkles,
    titulo: "Armazones de Moda",
    descripcion: "Las mejores marcas y estilos",
  },
  {
    icon: Clock,
    titulo: "Entrega Rápida",
    descripcion: "Lentes listos en tiempo récord",
  },
];

export default function BeneficiosYServicios() {
  return (
    <section
      id="servicios"
      className="py-16 bg-gradient-to-br from-primary/5 via-white to-primary/5"
    >
      <div className="container mx-auto px-4">
        {/* Título Principal */}
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
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Todo lo que necesitas para tu salud visual y estilo
          </p>
        </motion.div>

        {/* Grid Compacto - 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="p-5 h-full bg-white hover:shadow-lg transition-all hover:scale-105 border border-primary/20 hover:border-primary/40">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <servicio.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-900">
                    {servicio.titulo}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {servicio.descripcion}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
