"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeneficiosYServicios from "@/components/BeneficiosYServicios";
import GaleriaArmazones from "@/components/GaleriaArmazones";
import FloatingFacebook from "@/components/FloatingFacebook";
import Footer from "@/components/Footer";

// Cargar componentes con datos dinámicos solo en el cliente
const Promociones = dynamic(() => import("@/components/Promociones"), {
  ssr: false,
});
const Citas = dynamic(() => import("@/components/Citas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingFacebook />
      <main className="min-h-screen">
        <Hero />
        <Promociones />
        <GaleriaArmazones />
        <BeneficiosYServicios />
        <Citas />
        <Footer />
      </main>
    </>
  );
}
