"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function GaleriaArmazones() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, armazones.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay automático
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <section className="py-16 bg-neutral-50">
      ..
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nuestra <span className="text-primary">Colección</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Armazones de moda para todos los gustos y estilos
          </p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative px-8 md:px-0">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {armazones.map((armazon, idx) => (
                <motion.div
                  key={armazon.nombre}
                  className="min-w-full md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.67rem)] shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="relative w-full h-64 md:h-72 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <Image
                        src={armazon.imagen}
                        alt={armazon.nombre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={idx < 3}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controles - Visibles en móvil también */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-neutral-900/90 shadow-lg backdrop-blur-sm z-10"
            onClick={prev}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-neutral-900/90 shadow-lg backdrop-blur-sm z-10"
            onClick={next}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicadores - Más grandes en móvil */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 md:h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 md:w-8 bg-primary"
                    : "w-2 md:w-2 bg-neutral-300 dark:bg-neutral-700"
                }`}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
