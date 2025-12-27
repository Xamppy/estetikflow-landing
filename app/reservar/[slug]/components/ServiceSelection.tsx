import { Tratamiento } from "../config/api";

interface ServiceSelectionProps {
  tratamientos: Tratamiento[];
  onSelect: (tratamiento: Tratamiento) => void;
}

export default function ServiceSelection({
  tratamientos,
  onSelect,
}: ServiceSelectionProps) {
  const formatPrice = (precio: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Selecciona tu servicio
        </h2>
        <p className="text-gray-600">
          Elige el tratamiento que deseas reservar
        </p>
      </div>

      <div className="space-y-3">
        {tratamientos.map((tratamiento) => (
          <button
            key={tratamiento.id}
            onClick={() => onSelect(tratamiento)}
            className="w-full p-5 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all text-left group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {tratamiento.nombre_display}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {tratamiento.duracion_minutos} min
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {formatPrice(tratamiento.precio)}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
