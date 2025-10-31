# Óptica Omega - Landing Page

Landing page profesional para Óptica Omega construida con Next.js 15, TypeScript, Tailwind CSS y Supabase.

## Características

- 🎨 Diseño moderno y minimalista
- 📱 Totalmente responsive
- ⚡ Optimizado para SEO
- 🎭 Animaciones suaves con Framer Motion
- 📅 Sistema de solicitud de citas
- 🎉 Gestión de promociones desde la app interna
- 🌙 Soporte para modo oscuro
- 🔒 Integración con Supabase

## Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Animaciones:** Framer Motion
- **Base de Datos:** Supabase
- **Iconos:** Lucide React

## Requisitos Previos

- Node.js 18+ instalado
- Cuenta de Supabase
- Variables de entorno configuradas

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:

Crea un archivo `.env.local` con:

```env
NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-de-supabase
```

3. Crear las tablas necesarias en Supabase:

```sql
-- Tabla de promociones
CREATE TABLE promociones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  imagen_url TEXT,
  fecha_inicio TIMESTAMP WITH TIME ZONE NOT NULL,
  fecha_fin TIMESTAMP WITH TIME ZONE NOT NULL,
  activa BOOLEAN DEFAULT true,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de solicitudes de citas
CREATE TABLE solicitudes_citas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT NOT NULL,
  fecha_preferida DATE NOT NULL,
  hora_preferida TIME NOT NULL,
  motivo TEXT NOT NULL,
  notas TEXT,
  estado TEXT DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE promociones ENABLE ROW LEVEL SECURITY;
ALTER TABLE solicitudes_citas ENABLE ROW LEVEL SECURITY;

-- Políticas para promociones (lectura pública)
CREATE POLICY "Promociones son públicas" ON promociones
  FOR SELECT USING (true);

-- Políticas para solicitudes de citas (inserción pública)
CREATE POLICY "Cualquiera puede crear solicitudes" ON solicitudes_citas
  FOR INSERT WITH CHECK (true);
```

## Desarrollo

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
landing/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes de shadcn/ui
│   ├── Hero.tsx            # Sección hero con animaciones
│   ├── Servicios.tsx       # Listado de servicios
│   ├── Promociones.tsx     # Promociones desde Supabase
│   ├── Citas.tsx           # Formulario de solicitud de citas
│   └── Footer.tsx          # Footer con información de contacto
├── lib/
│   ├── supabase.ts         # Cliente de Supabase
│   └── utils.ts            # Utilidades
└── types/
    └── index.ts            # Definiciones de tipos TypeScript
```

## Integración con App Interna

Esta landing page está diseñada para trabajar en conjunto con la aplicación interna de Óptica Omega:

- **Promociones:** Se gestionan desde el CMS de la app interna y se muestran automáticamente aquí
- **Citas:** Las solicitudes se guardan en Supabase y aparecen en el módulo de citas de la app interna
- **Base de datos compartida:** Ambas aplicaciones usan la misma instancia de Supabase

## Despliegue

### Vercel (Recomendado)

1. Conectar el repositorio con Vercel
2. Configurar las variables de entorno
3. Deploy automático

### Otros Proveedores

```bash
npm run build
npm start
```

## Personalización

### Información de Contacto

Edita `components/Footer.tsx` para actualizar:
- Teléfono
- Email
- Dirección
- Horarios

### Servicios

Edita el array `servicios` en `components/Servicios.tsx`

### Colores y Estilos

Los colores se pueden personalizar en `tailwind.config.ts`

## Licencia

© 2025 Óptica Omega. Todos los derechos reservados.
