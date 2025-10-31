"use client";

import { Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingFacebook() {
  return (
    <motion.a
      href="https://www.facebook.com/OpticaOmegaFB" // Cambiar por tu URL de Facebook
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#1877F2] hover:bg-[#0C63D4] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Facebook className="w-7 h-7" fill="white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Síguenos en Facebook
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#1877F2] animate-ping opacity-20"></span>
    </motion.a>
  );
}
