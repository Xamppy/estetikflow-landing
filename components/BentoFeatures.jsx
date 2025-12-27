'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, Calendar, FileText } from 'lucide-react';

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
    <section id="caracteristicas" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Item 1: Agenda (Large - 2x2) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative col-span-1 md:col-span-2 row-span-2 bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[400px] lg:min-h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/features/agenda-screen.png"
                alt="Vista de agenda EstetikFlow"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80">Agenda Inteligente</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Tu tiempo bajo control visual.
              </h3>
              <p className="text-white/70 text-sm max-w-md">
                Agenda online 24/7 que tus clientes pueden usar para reservar directamente.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Dashboard/Rentabilidad */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative col-span-1 bg-gray-100 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-6 min-h-[240px]"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Rentabilidad en tiempo real.
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Adiós Excel. Reportes automáticos de ingresos, gastos y tendencias.
            </p>
            
            {/* Mini Dashboard Simulation */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500">Ingresos Diciembre</span>
                <span className="text-xs text-green-600 font-medium">+23%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">$1.250.000</div>
              <div className="mt-2 flex gap-1">
                {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-sm"
                    style={{ height: `${h * 0.4}px` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Item 3: WhatsApp Notifications */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative col-span-1 bg-primary/10 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-6 min-h-[240px]"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-green-500 mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Recordatorios automáticos.
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              WhatsApp que reduce ausentismo un 90%.
            </p>
            
            {/* WhatsApp Bubble Simulation */}
            <div className="bg-white rounded-2xl p-4 shadow-sm relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                "Hola 👋 Te recordamos tu cita mañana a las{' '}
                <span className="font-semibold">10:00</span> en EstetikFlow."
              </p>
              <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-xs text-gray-400">09:00</span>
                <span className="text-green-500 text-xs">✓✓</span>
              </div>
            </div>
          </motion.div>

          {/* Item 4: Fichas Clínicas */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative col-span-1 md:col-span-2 bg-secondary/50 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden p-6 min-h-[240px]"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Content */}
              <div className="flex-1">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent/20 mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fichas Clínicas Visuales.
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Historial completo con fotos antes/después. Todo organizado por paciente y tratamiento.
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700">
                    Fotos HD
                  </span>
                  <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700">
                    Historial completo
                  </span>
                  <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700">
                    Exportar PDF
                  </span>
                </div>
              </div>
              
              {/* Mini Cards */}
              <div className="flex-1 flex gap-3">
                <div className="flex-1 bg-white rounded-xl p-3 shadow-sm">
                  <div className="w-full h-16 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Antes</p>
                </div>
                <div className="flex-1 bg-white rounded-xl p-3 shadow-sm">
                  <div className="w-full h-16 bg-primary/10 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Después</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
