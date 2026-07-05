'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'cookie_consent';

function getStoredConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed.functional === 'boolean') {
        return parsed;
      }
    }
  } catch {
    // ignore invalid JSON
  }
  return null;
}

function saveConsent(prefs: CookiePreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore storage errors
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functional: true,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    // Check if consent already given
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const prefs: CookiePreferences = {
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
    setVisible(false);
  };

  const rejectOptional = () => {
    const prefs: CookiePreferences = {
      functional: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
    setVisible(false);
  };

  const saveCustom = () => {
    const prefs: CookiePreferences = {
      ...preferences,
      functional: true, // always on
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto m-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 md:p-8">
          {!showCustomize ? (
            <>
              {/* Main banner */}
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0D2B28] mb-2">
                    🍪 Este sitio utiliza cookies
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Utilizamos cookies propias y de terceros para mejorar tu experiencia, 
                    analizar el tráfico y personalizar el contenido. Las cookies funcionales 
                    son necesarias para el funcionamiento del sitio. Puedes aceptar todas, 
                    rechazar las opcionales o personalizar tus preferencias.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-w-fit">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2.5 bg-[#2a9d8f] text-white rounded-xl font-semibold text-sm hover:bg-[#238b7e] transition-colors"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={rejectOptional}
                    className="px-6 py-2.5 text-gray-500 rounded-xl text-sm hover:text-gray-700 hover:underline transition-colors"
                  >
                    Rechazar opcionales
                  </button>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Para más información, consulta nuestra{' '}
                <a
                  href="/legal#privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E76F51] hover:underline font-medium"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </>
          ) : (
            <>
              {/* Customize panel */}
              <h3 className="text-lg font-bold text-[#0D2B28] mb-4">
                Personalizar cookies
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Selecciona qué tipos de cookies permites. Las cookies funcionales son 
                necesarias y no pueden desactivarse.
              </p>

              <div className="space-y-4 mb-6">
                {/* Funcionales (always on) */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-gray-400 flex-shrink-0 opacity-50"
                  />
                  <div>
                    <span className="text-sm font-semibold text-[#0D2B28]">
                      Cookies funcionales (obligatorias)
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Necesarias para el funcionamiento básico: sesión, carrito de compras 
                      y seguridad. No pueden desactivarse.
                    </p>
                  </div>
                </div>

                {/* Analíticas */}
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#2a9d8f] focus:ring-[#2a9d8f] flex-shrink-0"
                  />
                  <div>
                    <span className="text-sm font-semibold text-[#0D2B28]">
                      Cookies analíticas
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Nos ayudan a entender cómo interactúas con el sitio (Google Analytics, 
                      medición anónima) para mejorar la experiencia.
                    </p>
                  </div>
                </label>

                {/* Marketing */}
                <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#2a9d8f] focus:ring-[#2a9d8f] flex-shrink-0"
                  />
                  <div>
                    <span className="text-sm font-semibold text-[#0D2B28]">
                      Cookies de marketing
                    </span>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Utilizadas para mostrar anuncios relevantes (Meta Pixel, remarketing). 
                      Si las rechazas, seguirás viendo publicidad pero menos personalizada.
                    </p>
                  </div>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={saveCustom}
                  className="px-6 py-2.5 bg-[#2a9d8f] text-white rounded-xl font-semibold text-sm hover:bg-[#238b7e] transition-colors flex-1"
                >
                  Guardar preferencias
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-sm hover:bg-gray-50 transition-colors"
                >
                  Volver
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
