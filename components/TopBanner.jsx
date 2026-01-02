'use client';

import { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClaim = (e) => {
    e.preventDefault();
    
    // 1. Actualizar URL para pasar el dato al formulario
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('offer', 'claimed');
    window.history.pushState({}, '', newUrl);

    // 2. Scroll suave al formulario
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // 3. Disparar evento para que el formulario "escuche" inmediatamente
      window.dispatchEvent(new Event('popstate'));
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative bg-[#0D2B28] text-white z-50 shadow-md"
      >
        {/* Área clickeable que cubre toda la barra */}
        <button 
          onClick={handleClaim}
          className="block w-full h-full px-4 py-3 sm:px-6 lg:px-8 group cursor-pointer hover:bg-white/5 transition-colors text-left"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* CONTENEDOR DE TEXTO CENTRADO */}
            <div className="flex-1 flex items-center justify-center gap-3">
              
              {/* Badge de Oferta (Visible siempre) */}
              <span className="bg-[#e76f51] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm animate-pulse">
                <Sparkles className="w-3 h-3" /> <span className="hidden sm:inline">Lanzamiento</span><span className="sm:hidden">Oferta</span>
              </span>

              {/* TEXTO: VERSIÓN MÓVIL (Corta) */}
              <p className="text-xs font-medium sm:hidden text-gray-100">
                <span className="text-[#e76f51] font-bold">1 Mes Gratis.</span>
              </p>

              {/* TEXTO: VERSIÓN DESKTOP (Completa) */}
              <p className="hidden sm:block text-sm font-medium text-gray-200">
                Lanzamiento exclusivo: <span className="text-[#e76f51] font-bold">1 Mes Gratis</span> para las primeras inscritas.
              </p>

              {/* BOTÓN VISUAL (CTA) */}
              <span className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#e76f51] group-hover:underline decoration-[#e76f51] underline-offset-4 ml-1">
                <span className="sm:hidden">Reclamar</span>
                <span className="hidden sm:inline">Reclamar mi cupo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>

            </div>

            {/* BOTÓN CERRAR - Separado para no activar el scroll */}
            <div className="flex-shrink-0 ml-4">
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsVisible(false);
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsVisible(false);
                    }
                }}
                className="flex p-1 rounded-md hover:bg-white/20 focus:outline-none transition-colors"
              >
                <span className="sr-only">Cerrar</span>
                <X className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </div>

          </div>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
