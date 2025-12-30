'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Floating animation for the hero image
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-white to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                ✨ Software para centros de estética
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0D2B28] leading-tight tracking-tight"
            >
              Deja de trabajar para cubrir gastos. Empieza a{' '}
              <span className="text-primary">construir tu imperio</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              La primera plataforma para podólogas y esteticistas que no solo agenda citas: <span className="font-semibold text-gray-800">te dice exactamente cuánto ganas</span>, gestiona tu stock gramo a gramo y te devuelve tu tiempo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="https://app.estetikflow.cl/registro"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#e76f51] rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
              >
                Quiero el control de mi negocio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#precios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver cómo funciona la rentabilidad
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-4">
                Confiado por profesionales de la estética en Chile
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-xs text-gray-500">Profesionales</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">10,000+</p>
                  <p className="text-xs text-gray-500">Citas gestionadas</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">4.9★</p>
                  <p className="text-xs text-gray-500">Satisfacción</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              {/* Image container with shadow and rounded corners */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-professional.png"
                  alt="Profesional de estética usando EstetikFlow"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Decorative accent behind image */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-primary/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
