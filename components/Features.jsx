'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Package, TrendingUp, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Agenda Online 24/7',
    description: 'Tus clientes reservan cuando quieran. Tú recibes confirmaciones automáticas.',
  },
  {
    icon: Users,
    title: 'Fichas Clínicas Visuales',
    description: 'Historial completo con fotos antes/después. Todo organizado por paciente.',
  },
  {
    icon: Package,
    title: 'Inventario Inteligente',
    description: 'Se descuenta solo con cada servicio. Alertas cuando hay stock bajo.',
  },
  {
    icon: TrendingUp,
    title: 'Reportes de Negocio',
    description: 'Visualiza tus ingresos, servicios más populares y rendimiento mensual.',
  },
  {
    icon: Clock,
    title: 'Recordatorios Automáticos',
    description: 'WhatsApp y email automáticos para reducir ausencias hasta un 80%.',
  },
  {
    icon: Shield,
    title: 'Datos Seguros',
    description: 'Información encriptada y respaldos diarios. Cumplimiento normativo.',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            Herramientas diseñadas específicamente para centros de estética y spa. Sin complicaciones.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
