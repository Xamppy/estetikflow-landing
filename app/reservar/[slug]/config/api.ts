// API Configuration
// Uses environment variable or defaults to localhost for development
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const apiConfig = {
  baseUrl: API_URL,
  endpoints: {
    // GET /api/public/clinica/{slug}/
    // Response: { nombre, logo_url, hora_apertura, tratamientos: [...] }
    clinic: (slug: string) => `${API_URL}/api/public/clinica/${slug}/`,

    // GET /api/public/disponibilidad/{slug}/?fecha=YYYY-MM-DD
    // Response: { horas_disponibles: ["09:00", "10:00", ...] }
    availability: (slug: string, fecha: string) =>
      `${API_URL}/api/public/disponibilidad/${slug}/?fecha=${fecha}`,

    // POST /api/public/reservar/
    // Body: { slug, tratamiento_id, fecha, hora, nombre_paciente, email, telefono }
    // Response: 201 Created | 409 Conflict
    booking: () => `${API_URL}/api/public/reservar/`,
  },
};

// TypeScript Types matching Django API (snake_case)
export interface Tratamiento {
  id: number;
  nombre_display: string;
  precio: number;
  duracion_minutos: number;
}

export interface Clinica {
  nombre: string;
  logo_url?: string;
  hora_apertura?: string;
  slug?: string;
  telefono?: string;
  tratamientos: Tratamiento[];
}

export interface DisponibilidadResponse {
  horas_disponibles: string[];
}

export interface ReservaPayload {
  slug: string;
  tratamiento_id: number;
  fecha: string; // YYYY-MM-DD
  hora: string; // HH:MM
  nombre_paciente: string;
  email: string;
  telefono: string;
}
