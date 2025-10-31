"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Glasses,
  Sun,
  Shield,
  Sparkles,
  Tag,
} from "lucide-react";
import { useState, useEffect } from "react";

const armazones = [
  { nombre: "Clásico Elegante", categoria: "Formal", imagen: "/armazon1.jpg" },
  {
    nombre: "Moderno Minimalista",
    categoria: "Casual",
    imagen: "/armazon2.jpg",
  },
  { nombre: "Aviador Premium", categoria: "Sol", imagen: "/armazon3.jpg" },
  { nombre: "Cat Eye Retro", categoria: "Moda", imagen: "/armazon4.jpg" },
  { nombre: "Deportivo Pro", categoria: "Deportivo", imagen: "/armazon5.jpg" },
  { nombre: "Redondo Vintage", categoria: "Vintage", imagen: "/armazon6.jpg" },
];

const servicios = [
  { icon: Eye, titulo: "Examen Visual Gratis", desc: "Con tu compra" },
  { icon: Glasses, titulo: "Lentes Graduados", desc: "Personalizados" },
  { icon: Sun, titulo: "Lentes de Sol", desc: "Protección UV" },
  { icon: Shield, titulo: "Cristales Premium", desc: "Alta calidad" },
];

export default function SeccionPrincipal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, armazones.length - 1);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="servicios" className="py-16 bg-white">
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
            Descubre <span className="text-primary">Óptica Omega</span>
          </h2>
          <p className="text-xl text-neutral-600">
            Promociones, estilo y servicio en un solo lugar
          </p>
        </motion.div>

        {/* Grid 3 Columnas */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna 1 - Promociones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-neutral-900">
                Promociones
              </h3>
            </div>

            <Card className="p-6 bg-linear-to-br from-primary/10 to-primary/5 border-primary/20 mb-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0">
                  50%
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">2x1 en Lentes</h4>
                  <p className="text-sm text-neutral-600">
                    Segundo par con 50% de descuento
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Examen GRATIS</h4>
                  <p className="text-sm text-neutral-600">
                    Con tu compra de armazón graduado
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Columna 2 - Galería Carrusel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Glasses className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-neutral-900">Colección</h3>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={armazones[currentIndex].imagen}
                    alt={armazones[currentIndex].nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="font-bold text-lg">
                      {armazones[currentIndex].nombre}
                    </h4>
                    <p className="text-sm text-white/90">
                      {armazones[currentIndex].categoria}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Controles */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={prev}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={next}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Indicadores */}
              <div className="flex justify-center gap-1.5 mt-4">
                {armazones.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna 3 - Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-neutral-900">Servicios</h3>
            </div>

            <div className="space-y-3">
              {servicios.map((servicio, index) => (
                <Card
                  key={servicio.titulo}
                  className="p-4 hover:shadow-md transition-all hover:scale-105 border-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <servicio.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-neutral-900">
                        {servicio.titulo}
                      </h4>
                      <p className="text-xs text-neutral-600">
                        {servicio.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
