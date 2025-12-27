import { Clinica, Tratamiento } from "../config/api";

interface BookingData {
  servicio?: Tratamiento;
  fecha?: Date;
  hora?: string;
  paciente?: {
    nombre: string;
    whatsapp: string;
    email: string;
  };
}

interface ConfirmationProps {
  bookingData: BookingData;
  clinica: Clinica & { slug: string };
}

export default function Confirmation({
  bookingData,
  clinica,
}: ConfirmationProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("es-CL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const formatPrice = (precio: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <div className="space-y-6 text-center">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          ¡Tu cita está lista!
        </h2>
        <p className="text-gray-600">
          Hemos enviado la confirmación a tu email
        </p>
      </div>

      {/* Booking Details */}
      <div className="bg-gradient-to-br from-primary-light/10 to-secondary/30 rounded-2xl p-6 space-y-4 text-left">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">
            CLÍNICA
          </h3>
          <p className="text-lg font-bold text-gray-900">{clinica.nombre}</p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">
            SERVICIO
          </h3>
          <p className="text-lg font-bold text-gray-900">
            {bookingData.servicio?.nombre_display}
          </p>
          <p className="text-primary font-semibold mt-1">
            {bookingData.servicio &&
              formatPrice(bookingData.servicio.precio)}
          </p>
        </div>

        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-1">
            FECHA Y HORA
          </h3>
          <p className="text-lg font-bold text-gray-900 capitalize">
            {bookingData.fecha && formatDate(bookingData.fecha)}
          </p>
          <p className="text-gray-700 mt-1">{bookingData.hora}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">
            PACIENTE
          </h3>
          <p className="text-lg font-bold text-gray-900">
            {bookingData.paciente?.nombre}
          </p>
          <p className="text-gray-700 text-sm mt-1">
            {bookingData.paciente?.email}
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <a
        href="/"
        className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}
