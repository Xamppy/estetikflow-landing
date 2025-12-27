import { Clinica } from "../config/api";

export default function BookingHeader({ clinica }: { clinica: Clinica }) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
        {clinica.logo_url ? (
          <img
            src={clinica.logo_url}
            alt={clinica.nombre}
            className="w-12 h-12 rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {clinica.nombre.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <h1 className="text-xl font-bold text-gray-900">{clinica.nombre}</h1>
          <p className="text-sm text-gray-500">Reserva tu cita</p>
        </div>
      </div>
    </header>
  );
}
