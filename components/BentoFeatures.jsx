'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Package, TrendingUp, ClipboardList, Check, AlertCircle } from 'lucide-react';

/**
 * SCREENSHOTS FOLDER SETUP:
 * Place your screenshot images in: /public/screenshots/
 * Required files:
 *   - dashboard-citas.png (Agenda/Calendar view)
 *   - lista-insumos.png (Inventory list - blurred background)
 *   - alerta-stock.png (Critical stock alert card)
 *   - ficha-clinica.png (Clinical record editing interface)
 */

export default function BentoFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="caracteristicas" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Todo lo que necesitas,{' '}
            <span className="text-primary">nada que no uses</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Herramientas diseñadas específicamente para centros de estética y spa.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {/* ============================================= */}
          {/* Item 1: AGENDA INTELIGENTE (with screenshot) */}
          {/* ============================================= */}
          <motion.div
            variants={itemVariants}
            className="group relative col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            {/* Text Content */}
            <div className="p-6 pb-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary mb-4">
                <Calendar className="w-6 h-6 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Agenda Inteligente.
              </h3>
              <p className="text-gray-600 text-sm">
                Reduce el ausentismo en tu consulta con recordatorios automáticos que tus pacientes sí leen.
              </p>
            </div>

            {/* Screenshot Image - Contained Below */}
            <div className="flex-1 relative mt-2 mx-4 mb-4 min-h-[180px]">
              <div className="absolute inset-0 transform rotate-1 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0">
                <Image
                  src="/screenshots/dashboard-citas.png"
                  alt="Dashboard de citas EstetikFlow"
                  fill
                  className="object-cover object-top rounded-xl shadow-2xl border border-gray-200"
                />
              </div>
            </div>
          </motion.div>

          {/* ============================================= */}
          {/* Item 2: PROFIT FIRST (Simulation - MANTENER) */}
          {/* ============================================= */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative col-span-1 md:col-span-2 lg:col-span-4 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-8 flex flex-col justify-center min-h-[300px]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Independencia Financiera Real.
                </h3>
                <p className="text-gray-600 text-lg">
                  No solo mires cuánto vendes. Mira <span className="font-semibold text-primary">cuánto ganas realmente</span> descontando guantes, bisturís y cremas.
                </p>
              </div>

              {/* Profit Simulation (KEEP AS-IS) */}
              <div className="flex-1 w-full bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-medium border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Ingresos Servicios</span>
                    <span className="text-gray-900 font-bold">$1.250.000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Costo Insumos</span>
                    <span className="text-red-500 font-bold">-$340.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold text-gray-800">Utilidad Real</span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', delay: 0.5 }}
                      className="text-2xl font-bold text-primary"
                    >
                      $910.000
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================= */}
          {/* Item 3: INVENTARIO (with screenshot)         */}
          {/* ============================================= */}
          <motion.div
            variants={itemVariants}
            className="group relative col-span-1 lg:col-span-3 bg-primary/5 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
          >
            {/* Text Content */}
            <div className="p-6 pb-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white mb-4 shadow-sm">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Control de Insumos Críticos.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Controla cada hoja de bisturí, cada mililitro de monómero. Que nunca te falte lo esencial.
              </p>
            </div>

            {/* Screenshot - Contained Below */}
            <div className="flex-1 relative mt-6 mx-0 mb-0 min-h-[240px] overflow-hidden">
              <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105 origin-top">
                <Image
                  src="/screenshots/lista-insumos.png?v=2"
                  alt="Control de inventario EstetikFlow"
                  fill
                  unoptimized
                  className="object-cover object-left-top shadow-sm"
                />
                {/* Gradient fade at bottom to blend if long */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* ============================================= */}
          {/* Item 4: FICHAS CLÍNICAS (Fan Style / Abanico)*/}
          {/* ============================================= */}
          <motion.div
            variants={itemVariants}
            className="group relative col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[380px] md:min-h-[480px] flex flex-col justify-start p-6 md:p-8"
          >
            {/* Text Content - Above images but below Navbar */}
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/20 mb-4">
                <ClipboardList className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fichas Clínicas Profesionales.
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Olvídate de las fichas en papel. Registra anamnesis, alergias y evolución del paciente en segundos.
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary/80 rounded-full text-xs font-medium text-gray-700">Historial</span>
                <span className="px-3 py-1 bg-secondary/80 rounded-full text-xs font-medium text-gray-700">Consentimientos</span>
                <span className="px-3 py-1 bg-secondary/80 rounded-full text-xs font-medium text-gray-700">Evolución</span>
              </div>
            </div>

            {/* Mobile: Single clean image (no fan effect) */}
            <div className="md:hidden relative mt-6 flex-1 min-h-[160px]">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/screenshots/ficha-clinica-2.png"
                  alt="Ficha clínica EstetikFlow"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Desktop: Fan Wrapper - Anchored at bottom center */}
            <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 w-full h-[250px] items-end justify-center z-10 pointer-events-none">
              
              {/* Card 1: Left/Back (ficha-clinica.png) */}
              <div className="absolute w-[60%] max-w-[280px] h-[220px] rounded-xl shadow-lg border border-gray-200 bg-white origin-bottom transform -translate-x-6 -rotate-6 z-10 transition-all duration-500 ease-out group-hover:-rotate-12 group-hover:-translate-x-10 overflow-hidden">
                <Image
                  src="/screenshots/ficha-clinica.png"
                  alt="Vista general de fichas clínicas"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Card 2: Right/Front (ficha-clinica-2.png) */}
              <div className="absolute w-[60%] max-w-[280px] h-[220px] rounded-xl shadow-xl border border-gray-200 bg-white origin-bottom transform translate-x-6 rotate-3 z-20 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-10 overflow-hidden">
                <Image
                  src="/screenshots/ficha-clinica-2.png"
                  alt="Detalle de ficha clínica EstetikFlow"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
