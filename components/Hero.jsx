'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 4, ease: 'easeInOut', repeat: Infinity },
  };

  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-20 overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-white to-white" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== RESPONSIVE LAYOUT ===== */}
        {/* We use flex-col for mobile (stacked) and lg:grid for desktop (side-by-side) */}
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* TEXT CONTENT COLUMN */}
          {/* Mobile: Order 1 (Top), Centered text */}
          {/* Desktop: Order 1 (Left), Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 w-full lg:w-1/2 flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                ✨ Software para centros de estética
              </span>
            </div>

            {/* Headline */}
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0D2B28] leading-tight tracking-tight max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Deja de trabajar para cubrir gastos. Empieza a{' '}
              <span className="text-primary">liderar tu negocio</span>.
            </h1>

            {/* Subtitle */}
            {/* Subtitle */}
            <p className="mt-5 md:mt-6 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mx-auto lg:mx-0 mb-6">
              La primera plataforma para podólogas y manicuristas que no solo agenda citas: <span className="font-semibold text-gray-800">te dice exactamente cuánto ganas</span>, gestiona tu stock gramo a gramo y te devuelve tu tiempo.
            </p>



            {/* CTA Buttons */}
            <div className="mt-0 lg:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-xl transition-all duration-200 min-w-[180px] bg-[#e76f51] text-white hover:bg-[#d65f41] shadow-md hover:shadow-lg"
              >
                Quiero que me contacten
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#precios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-xl transition-all duration-200 min-w-[180px] bg-transparent text-[#0D2B28] border-2 border-[#0D2B28] hover:bg-gray-50"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver planes y cotizar
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 lg:mt-10 pt-6 border-t border-gray-100 w-full">
              {/* Mobile: Stacked/Compact */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:hidden">
                 <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-sm font-medium text-gray-700">Validado Clínica</span>
                 </div>
                 <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-sm font-medium text-gray-700">100% Especializado</span>
                 </div>
                 <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-sm font-medium text-gray-700">Soporte Humano</span>
                 </div>
              </div>

              {/* Desktop: Detailed */}
              <div className="hidden lg:flex items-center gap-8">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">Validado en Clínica</p>
                  <p className="text-xs text-gray-500">Probado en gabinetes reales</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">100% Especializado</p>
                  <p className="text-xs text-gray-500">Nada de funciones de relleno</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">Soporte Humano</p>
                  <p className="text-xs text-gray-500">Hablamos tu mismo idioma</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full lg:w-1/2 flex-1 justify-center relative order-2 mt-8 lg:mt-0"
          >
            <motion.div animate={floatingAnimation} className="relative w-full max-w-[350px] lg:max-w-none">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[250px] sm:h-[350px] lg:h-auto">
                <Image
                  src="/images/hero-professional.png"
                  alt="Profesional de estética usando EstetikFlow"
                  width={600}
                  height={500}
                  className="w-full max-w-[400px] lg:max-w-[480px] h-full lg:h-auto object-cover object-top lg:object-contain"
                  priority
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
