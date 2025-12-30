'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function PainPoints() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const painPoints = [
    { text: '¿Miedo a calcular tus gastos reales?', icon: X, color: 'text-red-500' },
    { text: '¿Pierdes horas contestando WhatsApps?', icon: X, color: 'text-red-500' },
    { text: 'Recupera tu paz mental', icon: Check, color: 'text-green-500' },
  ];

  return (
    <section className="py-20 bg-[#f4e1d2]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            ¿Sientes que trabajas todo el día pero <span className="text-accent">el dinero no se ve</span>?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-3 rounded-full ${item.color === 'text-red-500' ? 'bg-red-50' : 'bg-green-50'}`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <p className="text-lg font-medium text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
