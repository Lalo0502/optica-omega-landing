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
  title: "Óptica Omega - Expertos en Salud Visual | Nuevo Laredo",
  description:
    "Tu visión, nuestra misión. Más de 30 años de experiencia en Nuevo Laredo. Exámenes visuales, lentes graduados, lentes de contacto, armazones de moda. Agenda tu cita hoy.",
  keywords: [
    "óptica",
    "lentes",
    "examen visual",
    "lentes graduados",
    "lentes de contacto",
    "salud visual",
    "óptica nuevo laredo",
    "armazones",
    "lentes de sol",
    "optometría",
  ],
  authors: [{ name: "Óptica Omega" }],
  creator: "Óptica Omega",
  publisher: "Óptica Omega",
  metadataBase: new URL("https://www.optica-omega.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Óptica Omega - Expertos en Salud Visual | Nuevo Laredo",
    description:
      "Tu visión, nuestra misión. Más de 30 años de experiencia en salud visual. Exámenes visuales, lentes graduados y armazones de moda.",
    url: "https://www.optica-omega.com",
    siteName: "Óptica Omega",
    images: [
      {
        url: "/armazon1.jpg", // Imagen para preview
        width: 1200,
        height: 630,
        alt: "Óptica Omega - Tu visión, nuestra misión",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica Omega - Expertos en Salud Visual",
    description:
      "Más de 30 años de experiencia en salud visual. Exámenes, lentes graduados y armazones de moda.",
    images: ["/armazon1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
