import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Óptica Omega - Expertos en Salud Visual",
  description:
    "Tu visión, nuestra misión. Más de 30 años de experiencia en exámenes visuales, lentes graduados, lentes de contacto y más. Agenda tu cita hoy.",
  keywords: [
    "óptica",
    "lentes",
    "examen visual",
    "lentes graduados",
    "lentes de contacto",
    "salud visual",
  ],
  authors: [{ name: "Óptica Omega" }],
  openGraph: {
    title: "Óptica Omega - Expertos en Salud Visual",
    description:
      "Tu visión, nuestra misión. Más de 35 años de experiencia en salud visual.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
