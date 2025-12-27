"use client";

import { useState } from "react";
import BookingHeader from "./components/BookingHeader";
import ServiceSelection from "./components/ServiceSelection";
import DateTimeSelection from "./components/DateTimeSelection";
import PatientForm from "./components/PatientForm";
import Confirmation from "./components/Confirmation";
import { Clinica, Tratamiento } from "./config/api";

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

export default function BookingFlow({ clinica }: { clinica: Clinica & { slug: string } }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const handleServiceSelect = (servicio: Tratamiento) => {
    setBookingData({ ...bookingData, servicio });
    setCurrentStep(2);
  };

  const handleDateTimeSelect = (fecha: Date, hora: string) => {
    setBookingData({ ...bookingData, fecha, hora });
    setCurrentStep(3);
  };

  const handlePatientSubmit = (paciente: {
    nombre: string;
    whatsapp: string;
    email: string;
  }) => {
    setBookingData({ ...bookingData, paciente });
    setCurrentStep(4);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 to-secondary/30">
      <BookingHeader clinica={clinica} />

      {/* Progress Indicator */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep >= step
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    currentStep >= step ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {step === 1 && "Servicio"}
                  {step === 2 && "Fecha"}
                  {step === 3 && "Datos"}
                </span>
              </div>
              {step < 3 && (
                <div
                  className={`h-1 flex-1 mx-2 rounded transition-all ${
                    currentStep > step ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {currentStep === 1 && (
            <ServiceSelection
              tratamientos={clinica.tratamientos}
              onSelect={handleServiceSelect}
            />
          )}

          {currentStep === 2 && (
            <DateTimeSelection
              onSelect={handleDateTimeSelect}
              onBack={handleBack}
              selectedService={bookingData.servicio}
              slug={clinica.slug}
            />
          )}

          {currentStep === 3 && (
            <PatientForm
              onSubmit={handlePatientSubmit}
              onBack={handleBack}
              onBackToDateTime={() => setCurrentStep(2)}
              bookingData={bookingData}
              slug={clinica.slug}
            />
          )}

          {currentStep === 4 && (
            <Confirmation bookingData={bookingData} clinica={clinica} />
          )}
        </div>
      </div>
    </div>
  );
}
