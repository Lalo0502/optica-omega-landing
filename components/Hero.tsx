"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background - Completamente visible */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Header.mp4" type="video/mp4" />
        </video>
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
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
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
            >
              <span className="block text-white drop-shadow-2xl">
                Tu Visión,
              </span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-pulse">
                Nuestra Misión
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-4 leading-relaxed drop-shadow-lg max-w-3xl mx-auto"
            >
              <span className="font-bold text-primary bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm">
                Examen visual GRATIS
              </span>{" "}
              con tu compra. Lentes graduados de alta calidad y armazones de
              moda para todos los estilos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-lg text-white/90 mb-10 drop-shadow-md max-w-2xl mx-auto"
            >
              Desde monturas clásicas hasta las últimas tendencias en diseño.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105 font-bold"
                onClick={() => scrollToSection("citas")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita
              </Button>
              <a href="tel:8677122210">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-neutral-900 text-lg px-10 py-7 shadow-2xl hover:shadow-white/50 transition-all hover:scale-105 font-bold w-full sm:w-auto"
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
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-primary drop-shadow-md mb-2">
                  30+
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Años de Experiencia
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-primary drop-shadow-md mb-2">
                  10K+
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-primary drop-shadow-md mb-2">
                  100%
                </div>
                <div className="text-sm text-white/90 font-medium">
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
