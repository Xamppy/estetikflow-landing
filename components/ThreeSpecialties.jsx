'use client';

import { motion } from 'framer-motion';

const specialties = [
  {
    emoji: '🦶',
    title: 'Podología',
    description: 'Fichas clínicas con podograma, evolución de lesiones, certificados, y fotos antes/después de cada tratamiento.',
    color: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    emoji: '✨',
    title: 'Cosmetología',
    description: 'Tipo de piel, fototipo, zona tratada, productos aplicados, consentimiento informado y evolución fotográfica.',
    color: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-100',
  },
  {
    emoji: '💅',
    title: 'Manicuría',
    description: 'Fotos antes/después, notas de color y forma, productos usados, ficha de alergias y preferencias de cada clienta.',
    color: 'from-rose-50 to-red-50',
    borderColor: 'border-rose-200',
    iconBg: 'bg-rose-100',
  },
];

export default function ThreeSpecialties() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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
    <section className="py-20 lg:py-28 bg-white">
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
            Una app. Tres especialidades.{' '}
            <span className="text-primary">Cero complicaciones.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cada rubro tiene sus propias necesidades. EstetikFlow tiene fichas clínicas especializadas para cada una.
          </p>
        </motion.div>

        {/* Three Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.title}
              variants={itemVariants}
              className={`relative bg-gradient-to-b ${specialty.color} rounded-2xl border ${specialty.borderColor} p-8 shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${specialty.iconBg} mb-6 text-3xl`}>
                {specialty.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-3">
            ¿Tienes las 3 especialidades en tu centro?
          </p>
          <p className="text-base text-gray-500">
            El plan <span className="font-semibold text-primary">Gabinete Expansión</span> te da todas las herramientas sin límites,{' '}
            <span className="font-semibold">hasta 5 profesionales</span> y roles por usuario.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
