"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Shield, Clock } from "lucide-react";

const beneficios = [
  {
    icon: Gift,
    titulo: "Examen Visual Gratis",
    descripcion:
      "Recibe tu examen de la vista sin costo al comprar tus lentes con nosotros.",
  },
  {
    icon: Sparkles,
    titulo: "Armazones de Moda",
    descripcion:
      "Las últimas tendencias en monturas para todos los estilos. Desde clásicos hasta lo más moderno.",
  },
  {
    icon: Shield,
    titulo: "Garantía Total",
    descripcion:
      "Garantía extendida en todos nuestros productos. Tu satisfacción es nuestra prioridad.",
  },
  {
    icon: Clock,
    titulo: "Entrega Rápida",
    descripcion:
      "Lentes listos en tiempo récord. No esperes semanas para ver bien.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-16 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            ¿Por Qué Elegir <span className="text-primary">Óptica Omega?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Más que una óptica, somos tu aliado en salud visual y estilo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white hover:shadow-lg transition-all hover:scale-105 border border-primary/20">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <beneficio.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-neutral-600">{beneficio.descripcion}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
