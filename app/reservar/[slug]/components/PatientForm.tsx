"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { format } from "date-fns";
import { apiConfig, Tratamiento } from "../config/api";

interface BookingData {
  servicio?: Tratamiento;
  fecha?: Date;
  hora?: string;
}

interface PatientFormProps {
  onSubmit: (data: { nombre: string; whatsapp: string; email: string; rut: string; fecha_nacimiento: string }) => void;
  onBack: () => void;
  onBackToDateTime: () => void;
  bookingData: BookingData;
  slug: string;
}

/**
 * Format RUT with dots and dash (12.345.678-9)
 */
const formatRut = (value: string): string => {
  // Remove everything except numbers and k/K
  let rut = value.replace(/[^0-9kK]/g, "").toUpperCase();
  
  if (rut.length > 1) {
    const dv = rut.slice(-1);
    const num = rut.slice(0, -1);
    // Format with dots
    const formattedNum = num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${formattedNum}-${dv}`;
  }
  return rut;
};

/**
 * Clean RUT for backend (remove dots and dash)
 */
const cleanRut = (rut: string): string => {
  return rut.replace(/[^0-9kK]/g, "").toUpperCase();
};

/**
 * Basic RUT validation (length check)
 */
const isValidRut = (rut: string): boolean => {
  const cleaned = cleanRut(rut);
  return cleaned.length >= 8 && cleaned.length <= 9;
};

export default function PatientForm({
  onSubmit,
  onBack,
  onBackToDateTime,
  bookingData,
  slug,
}: PatientFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    rut: "",
    fecha_nacimiento: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string>();
  const [isConflict, setIsConflict] = useState(false);

  const handleRutChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRut(e.target.value);
    // Limit length (12.345.678-9 = 12 characters max)
    if (formatted.length <= 12) {
      setFormData({ ...formData, rut: formatted });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.rut.trim()) {
      newErrors.rut = "El RUT es requerido";
    } else if (!isValidRut(formData.rut)) {
      newErrors.rut = "Ingresa un RUT válido (ej: 12.345.678-9)";
    }

    if (!formData.fecha_nacimiento) {
      newErrors.fecha_nacimiento = "La fecha de nacimiento es requerida";
    } else {
      const birthDate = new Date(formData.fecha_nacimiento);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (birthDate >= today) {
        newErrors.fecha_nacimiento = "La fecha debe ser anterior a hoy";
      }
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "El WhatsApp es requerido";
    } else {
      const cleanPhone = formData.whatsapp.replace(/[\s\-\(\)]/g, "");
      if (!/^(\+?56)?9\d{8}$/.test(cleanPhone)) {
        newErrors.whatsapp = "Ingresa un número válido (ej: 912345678)";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const normalizePhone = (phone: string): string => {
    let cleaned = phone.replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+")) {
      cleaned = cleaned.substring(1);
    }
    if (cleaned.startsWith("56")) {
      return `+${cleaned}`;
    }
    return `+56${cleaned}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(undefined);
    setIsConflict(false);

    if (!validateForm()) {
      return;
    }

    if (!bookingData.servicio || !bookingData.fecha || !bookingData.hora) {
      setApiError("Datos de reserva incompletos");
      return;
    }

    setSubmitting(true);

    try {
      const fechaISO = format(bookingData.fecha, "yyyy-MM-dd");
      const telefonoNormalizado = normalizePhone(formData.whatsapp);

      const payload = {
        slug: slug,
        tratamiento_id: bookingData.servicio.id,
        fecha: fechaISO,
        hora: bookingData.hora,
        nombre_paciente: formData.nombre.trim(),
        email: formData.email.trim().toLowerCase(),
        telefono: telefonoNormalizado,
        rut: cleanRut(formData.rut),
        fecha_nacimiento: formData.fecha_nacimiento, // Already in YYYY-MM-DD format from input
      };

      console.log("📤 Enviando payload:", JSON.stringify(payload, null, 2));

      const response = await fetch(apiConfig.endpoints.booking(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let responseData: Record<string, unknown> = {};
      try {
        responseData = await response.json();
      } catch {
        console.log("⚠️ Response is not JSON");
      }

      console.log("📥 Response status:", response.status);
      console.log("📥 Response body:", JSON.stringify(responseData, null, 2));

      if (response.status === 409) {
        setIsConflict(true);
        setApiError(
          (responseData.error as string) || 
          (responseData.detail as string) || 
          "Lo sentimos, ese horario acaba de ser ocupado. Por favor elige otro."
        );
        return;
      }

      if (response.status === 400) {
        const errorMessage = extractErrorMessage(responseData);
        console.log("❌ Error 400:", errorMessage);
        setApiError(errorMessage);
        return;
      }

      if (!response.ok) {
        const errorMessage = extractErrorMessage(responseData);
        console.log("❌ Error:", response.status, errorMessage);
        setApiError(errorMessage);
        return;
      }

      console.log("✅ Reserva creada exitosamente");
      onSubmit({ ...formData });
    } catch (err) {
      console.error("❌ Network error:", err);
      setApiError(
        "No se pudo conectar con el servidor. Por favor intenta nuevamente."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const extractErrorMessage = (data: Record<string, unknown>): string => {
    if (typeof data.error === "string") return data.error;
    if (typeof data.detail === "string") return data.detail;
    if (typeof data.message === "string") return data.message;

    const fieldErrors: string[] = [];
    for (const [field, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        const fieldName = translateFieldName(field);
        fieldErrors.push(`${fieldName}: ${value.join(", ")}`);
      } else if (typeof value === "string") {
        const fieldName = translateFieldName(field);
        fieldErrors.push(`${fieldName}: ${value}`);
      }
    }

    if (fieldErrors.length > 0) {
      return fieldErrors.join(". ");
    }

    return "Error al procesar la reserva. Por favor verifica los datos.";
  };

  const translateFieldName = (field: string): string => {
    const translations: Record<string, string> = {
      telefono: "Teléfono",
      email: "Email",
      nombre_paciente: "Nombre",
      fecha: "Fecha",
      hora: "Hora",
      tratamiento_id: "Tratamiento",
      slug: "Clínica",
      rut: "RUT",
      fecha_nacimiento: "Fecha de nacimiento",
    };
    return translations[field] || field;
  };

  const formatDateDisplay = (date: Date) => {
    return new Intl.DateTimeFormat("es-CL", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
  };

  // Get max date for date of birth (yesterday)
  const getMaxDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return format(yesterday, "yyyy-MM-dd");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={submitting}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tus datos</h2>
          <p className="text-sm text-gray-600">
            Completa tus datos para confirmar la reserva
          </p>
        </div>
      </div>

      {/* API Error Banner */}
      {apiError && (
        <div className={`border-2 rounded-xl p-4 ${
          isConflict 
            ? "bg-amber-50 border-amber-200" 
            : "bg-red-50 border-red-200"
        }`}>
          <div className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isConflict ? "text-amber-600" : "text-red-600"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex-1">
              <p className={`font-medium ${
                isConflict ? "text-amber-800" : "text-red-800"
              }`}>
                {apiError}
              </p>
              {isConflict && (
                <button
                  onClick={onBackToDateTime}
                  className="mt-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg text-sm font-medium transition-colors"
                >
                  Seleccionar otro horario
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-secondary/30 rounded-xl p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Servicio:</span>
          <span className="font-semibold text-gray-900">
            {bookingData.servicio?.nombre_display}
          </span>
        </div>
        {bookingData.fecha && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Fecha y hora:</span>
            <span className="font-semibold text-gray-900 capitalize">
              {formatDateDisplay(bookingData.fecha)} - {bookingData.hora}
            </span>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nombre */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            disabled={submitting}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.nombre
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-primary"
            } focus:outline-none disabled:opacity-50`}
            placeholder="Juan Pérez"
          />
          {errors.nombre && (
            <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
          )}
        </div>

        {/* RUT */}
        <div>
          <label
            htmlFor="rut"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            RUT
          </label>
          <input
            type="text"
            id="rut"
            value={formData.rut}
            onChange={handleRutChange}
            disabled={submitting}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.rut
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-primary"
            } focus:outline-none disabled:opacity-50`}
            placeholder="12.345.678-9"
          />
          {errors.rut && (
            <p className="mt-1 text-sm text-red-600">{errors.rut}</p>
          )}
        </div>

        {/* Fecha de Nacimiento */}
        <div>
          <label
            htmlFor="fecha_nacimiento"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={(e) =>
              setFormData({ ...formData, fecha_nacimiento: e.target.value })
            }
            max={getMaxDate()}
            disabled={submitting}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.fecha_nacimiento
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-primary"
            } focus:outline-none disabled:opacity-50`}
          />
          {errors.fecha_nacimiento && (
            <p className="mt-1 text-sm text-red-600">{errors.fecha_nacimiento}</p>
          )}
        </div>

        {/* WhatsApp */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            WhatsApp
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              +56
            </span>
            <input
              type="tel"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              disabled={submitting}
              className={`w-full pl-14 pr-4 py-3 rounded-lg border-2 transition-colors ${
                errors.whatsapp
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-200 focus:border-primary"
              } focus:outline-none disabled:opacity-50`}
              placeholder="912345678"
            />
          </div>
          {errors.whatsapp && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={submitting}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.email
                ? "border-red-300 focus:border-red-500"
                : "border-gray-200 focus:border-primary"
            } focus:outline-none disabled:opacity-50`}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Procesando...
            </>
          ) : (
            "Confirmar reserva"
          )}
        </button>
      </form>
    </div>
  );
}
