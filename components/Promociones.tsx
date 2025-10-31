"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { Promocion } from "@/types";
import { Tag } from "lucide-react";
import Image from "next/image";

export default function Promociones() {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        const { data, error } = await supabase
          .from("promociones")
          .select("*")
          .eq("activa", true)
          .lte("fecha_inicio", new Date().toISOString())
          .gte("fecha_fin", new Date().toISOString())
          .order("orden", { ascending: true });

        if (error) throw error;
        setPromociones(data || []);
      } catch (error) {
        console.error("Error fetching promociones:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromociones();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (promociones.length === 0) return null;

  return (
    <section
      id="promociones"
      className="py-16 bg-linear-to-br from-primary/5 via-white to-primary/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Promociones <span className="text-primary">Especiales</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                {promo.imagen_url && (
                  <div className="relative w-full h-48 bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={promo.imagen_url}
                      alt={promo.titulo}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Promoción Vigente
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{promo.titulo}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {promo.descripcion}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    Válido hasta:{" "}
                    {new Date(promo.fecha_fin).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
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
