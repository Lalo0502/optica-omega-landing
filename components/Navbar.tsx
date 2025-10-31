"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Promociones", id: "promociones" },
    { label: "Servicios", id: "servicios" },
    { label: "Agendar Cita", id: "citas" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-neutral-200/50"
          : "bg-white/10 backdrop-blur-md border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div
              className={`rounded-full flex items-center justify-center w-12 h-12 shadow-lg group-hover:scale-110 transition-all ${
                isScrolled ? "bg-primary" : "bg-white"
              }`}
            >
              <span
                className={`font-black text-2xl leading-none ${
                  isScrolled ? "text-white" : "text-primary"
                }`}
              >
                Ω
              </span>
            </div>
            <span
              className={`text-xl font-black tracking-tight transition-colors ${
                isScrolled ? "text-neutral-900" : "text-white drop-shadow-lg"
              }`}
            >
              ÓPTICA{" "}
              <span className={isScrolled ? "text-primary" : "text-white/90"}>
                OMEGA
              </span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-all hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all ${
                  isScrolled
                    ? "text-neutral-700 hover:text-primary after:bg-primary"
                    : "text-white hover:text-white/80 after:bg-white drop-shadow-lg"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a href="tel:8677122210">
              <Button
                size="sm"
                className={`font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all ${
                  isScrolled
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white hover:bg-white/90 text-primary"
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-neutral-100 text-neutral-900"
                : "hover:bg-white/20 text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t transition-colors ${
              isScrolled ? "border-neutral-200" : "border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left py-2 font-semibold transition-colors ${
                    isScrolled
                      ? "text-neutral-700 hover:text-primary"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:8677122210" className="w-full">
                <Button
                  size="sm"
                  className={`w-full font-bold ${
                    isScrolled
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-white hover:bg-white/90 text-primary"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
