export interface Promocion {
  id: string
  titulo: string
  descripcion: string
  imagen_url?: string
  fecha_inicio: string
  fecha_fin: string
  activa: boolean
  orden: number
  created_at: string
}

export interface SolicitudCita {
  nombre: string
  apellido: string
  telefono: string
  email: string
  fecha_preferida: string
  hora_preferida: string
  motivo: string
  notas?: string
}
