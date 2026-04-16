// API Configuration
// Uses environment variable in production and localhost fallback only in development
const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL;
const isVercelDeployment = process.env.VERCEL === "1";

if (!RAW_API_URL && isVercelDeployment) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL. Configure it in Vercel (Production/Preview)."
  );
}

const API_URL = (RAW_API_URL || "http://localhost:8000").replace(/\/$/, "");

export const apiConfig = {
  baseUrl: API_URL,
  endpoints: {
    // GET /api/public/clinica/{slug}/
    // Response: { nombre, logo_url, hora_apertura, tratamientos: [...] }
    clinic: (slug: string) => `${API_URL}/api/public/clinica/${slug}/`,

    // GET /api/public/disponibilidad/{slug}/?fecha=YYYY-MM-DD&tratamiento_id=X
    // Response: { horas_disponibles: ["09:00", "10:00", ...] }
    availability: (slug: string, fecha: string, tratamientoId?: number) => {
      const query = new URLSearchParams({ fecha });

      if (typeof tratamientoId === "number") {
        query.set("tratamiento_id", String(tratamientoId));
      }

      return `${API_URL}/api/public/disponibilidad/${slug}/?${query.toString()}`;
    },

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
  hora_cierre?: string;
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
  rut: string;
  fecha_nacimiento: string; // YYYY-MM-DD
  telefono: string;
  email: string;
  notas?: string;
}
