"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Eye } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8" />
              <h3 className="text-2xl font-bold">ÓPTICA OMEGA</h3>
            </div>
            <p className="text-neutral-400">
              Tu visión, nuestra misión. Expertos en salud visual con más de 30
              años de experiencia.
            </p>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">867 712 2210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-400" />
                <span className="text-neutral-300">
                  opticaomega@yahoo.com.mx
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 mt-1" />
                <span className="text-neutral-300">
                  Sonora #2515, Col. Jardin
                  <br />
                  Nuevo Laredo, Tamps.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">
              <Clock className="w-5 h-5 inline mr-2" />
              Horarios
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p>Lunes - Viernes: 10:00 AM - 6:00 PM</p>
              <p>Sábado: 10:00 AM - 5:00 PM</p>
              <p>Domingo: Cerrado</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-neutral-800 pt-8 text-center text-neutral-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Óptica Omega. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
