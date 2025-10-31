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
  const itemsPerView = 3;
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
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

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
        <div className="relative">
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
              {armazones.map((armazon) => (
                <div
                  key={armazon.nombre}
                  className="min-w-[calc(100%-1rem)] md:min-w-[calc(50%-0.5rem)] lg:min-w-[calc(33.333%-0.67rem)]"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="relative w-full h-64 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <Image
                        src={armazon.imagen}
                        alt={armazon.nombre}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-neutral-900 shadow-lg hidden lg:flex"
            onClick={prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-neutral-900 shadow-lg hidden lg:flex"
            onClick={next}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-neutral-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
