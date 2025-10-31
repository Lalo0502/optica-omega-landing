"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background - Video con respaldo de imagen */}
      <div className="absolute inset-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/Header.mp4" type="video/mp4" />
          </video>
        ) : (
          // Imagen de respaldo solo si el video falla al cargar
          <Image
            src="/armazon1.jpg"
            alt="Óptica Omega"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content - Centrado y más llamativo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/20 backdrop-blur-md border-2 border-primary/50 rounded-full mb-8 text-white shadow-lg shadow-primary/20"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">
                Más de 30 años de experiencia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6"
            >
              <span className="block text-white drop-shadow-2xl">
                Tu Visión,
              </span>
              <span className="block bg-linear-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-pulse">
                Nuestra Misión
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-2xl text-white mb-3 sm:mb-4 leading-relaxed drop-shadow-lg max-w-3xl mx-auto px-4"
            >
              <span className="font-bold text-primary bg-white/10 px-2 sm:px-3 py-1 rounded-md backdrop-blur-sm inline-block mb-2 sm:mb-0">
                Examen visual GRATIS
              </span>{" "}
              <span className="block sm:inline mt-2 sm:mt-0">
                con tu compra. Lentes graduados de alta calidad y armazones de
                moda para todos los estilos.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-10 drop-shadow-md max-w-2xl mx-auto px-4"
            >
              Desde monturas clásicas hasta las últimas tendencias en diseño.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105 font-bold w-full sm:w-auto"
                onClick={() => scrollToSection("citas")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita
              </Button>
              <a href="tel:8677122210" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-neutral-900 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 font-bold w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary drop-shadow-md mb-1 sm:mb-2">
                  30+
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  Años de Experiencia
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary drop-shadow-md mb-1 sm:mb-2">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary drop-shadow-md mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">
                  Garantía
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
