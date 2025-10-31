"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, Calendar } from "lucide-react";

export default function CTAExamenGratis() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6"
          >
            <Gift className="w-12 h-12" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Examen Visual <span className="text-green-400">100% GRATIS</span>
          </h2>

          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Recibe tu examen de la vista sin costo al comprar tus lentes con
            nosotros. Sin letra pequeña, sin trucos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-neutral-100 text-neutral-900 text-lg px-8 py-6"
              onClick={() => scrollToSection("citas")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Mi Cita Gratis
            </Button>
            <a href="tel:+5286+52 8677122210">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-neutral-900"
              >
                Llamar Ahora
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-neutral-400 mt-6"
          >
            * Aplica con la compra de lentes graduados
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
