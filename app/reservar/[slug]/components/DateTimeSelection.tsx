"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import { format } from "date-fns";
import "react-day-picker/style.css";
import { apiConfig, Tratamiento } from "../config/api";

interface DateTimeSelectionProps {
  onSelect: (fecha: Date, hora: string) => void;
  onBack: () => void;
  selectedService?: Tratamiento;
  slug: string;
}

export default function DateTimeSelection({
  onSelect,
  onBack,
  selectedService,
  slug,
}: DateTimeSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Fetch available time slots when a date is selected
  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      setSelectedTime(undefined);
      return;
    }

    const fetchAvailability = async () => {
      setLoading(true);
      setError(undefined);
      setSelectedTime(undefined);

      try {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        const response = await fetch(
          apiConfig.endpoints.availability(slug, formattedDate)
        );

        if (!response.ok) {
          throw new Error("Error al cargar horarios disponibles");
        }

        const data = await response.json();
        // API returns: { horas_disponibles: ["09:00", "10:00", ...] }
        setAvailableSlots(data.horas_disponibles || []);
      } catch (err) {
        console.error("Error fetching availability:", err);
        setError("No se pudieron cargar los horarios disponibles");
        setAvailableSlots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [selectedDate, slug]);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
          <h2 className="text-2xl font-bold text-gray-900">
            Selecciona fecha y hora
          </h2>
          {selectedService && (
            <p className="text-sm text-gray-600">{selectedService.nombre_display}</p>
          )}
        </div>
      </div>

      {/* Calendar */}
      <div className="flex justify-center">
        <div className="booking-calendar">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={es}
            disabled={{ before: new Date() }}
            modifiersClassNames={{
              selected: "selected-day",
              today: "today-day",
            }}
          />
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Horarios disponibles</h3>

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-600 mt-2">
                Cargando horarios...
              </p>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && availableSlots.length === 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm">
                No hay horarios disponibles para esta fecha
              </p>
            </div>
          )}

          {!loading && !error && availableSlots.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {availableSlots.map((hora) => (
                <button
                  key={hora}
                  onClick={() => setSelectedTime(hora)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    selectedTime === hora
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {hora}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Continue Button */}
      {selectedDate && selectedTime && (
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
        >
          Continuar
        </button>
      )}

      <style jsx global>{`
        .booking-calendar {
          --rdp-accent-color: #2a9d8f;
          --rdp-background-color: #f4e1d2;
          font-family: inherit;
        }

        .booking-calendar .rdp {
          margin: 0;
        }

        .booking-calendar .rdp-month {
          width: 100%;
        }

        .booking-calendar .rdp-day_button {
          border-radius: 8px;
          font-weight: 500;
        }

        .booking-calendar .rdp-day_button:hover:not([disabled]) {
          background-color: #f4e1d2;
        }

        .booking-calendar .selected-day .rdp-day_button {
          background-color: #2a9d8f !important;
          color: white !important;
          font-weight: 600;
        }

        .booking-calendar .today-day .rdp-day_button {
          font-weight: 700;
          color: #2a9d8f;
        }

        .booking-calendar .rdp-day_button:disabled {
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
