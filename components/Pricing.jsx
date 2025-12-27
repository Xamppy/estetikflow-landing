'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Esencial',
    monthlyPrice: 9990,
    annualPrice: 99900,
    annualMonthlyEquivalent: 8325,
    annualSavings: 19980,
    period: 'mes',
    description: 'Para quien solo necesita orden',
    features: [
      { text: 'Agenda Online', included: true },
      { text: 'Fichas Clínicas Básicas', included: true },
      { text: 'Hasta 100 pacientes', included: true },
      { text: 'Soporte por email', included: true },
      { text: 'Recordatorios WhatsApp', included: false },
      { text: 'Inventario Inteligente', included: false },
    ],
    cta: 'Probar Gratis 14 días',
    highlighted: false,
  },
  {
    name: 'Estetik Pro',
    monthlyPrice: 19990,
    annualPrice: 199900,
    annualMonthlyEquivalent: 16658,
    annualSavings: 39980,
    period: 'mes',
    description: 'Para quien quiere automatizar y ganar tiempo',
    badge: 'Más Popular',
    features: [
      { text: 'Todo lo de Esencial', included: true },
      { text: 'Pacientes ilimitados', included: true },
      { text: 'Recordatorios WhatsApp', included: true },
      { text: 'Inventario Inteligente', included: true },
      { text: 'Reportes Financieros', included: true },
      { text: 'Fichas con fotos', included: true },
    ],
    cta: 'Probar Gratis 14 días',
    highlighted: true,
  },
  {
    name: 'Centro Integral',
    monthlyPrice: 49990,
    annualPrice: 499900,
    annualMonthlyEquivalent: 41658,
    annualSavings: 99980,
    period: 'mes',
    description: 'Para clínicas con múltiples profesionales',
    features: [
      { text: 'Todo lo de Estetik Pro', included: true },
      { text: 'Multi-usuario (hasta 5)', included: true },
      { text: 'Roles y permisos', included: true },
      { text: 'Dashboard consolidado', included: true },
      { text: 'Soporte prioritario', included: true },
      { text: 'Integraciones avanzadas', included: true },
    ],
    cta: 'Probar Gratis 14 días',
    highlighted: false,
  },
];

// Format price with Chilean format (dots as thousands separator)
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const priceVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };

  return (
    <section id="precios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Una inversión que se paga sola{' '}
            <span className="text-primary">con una cita recuperada</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Elige el plan que mejor se adapte a tu negocio. Sin contratos, cancela cuando quieras.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-sm font-medium transition-colors duration-300 ${
              billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            Mensual
          </span>

          {/* Toggle Switch */}
          <button
            onClick={() =>
              setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')
            }
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              billingCycle === 'annual' ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label="Toggle billing cycle"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md ${
                billingCycle === 'annual' ? 'left-7' : 'left-1'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                billingCycle === 'annual' ? 'text-gray-900 font-bold' : 'text-gray-400'
              }`}
            >
              Anual
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent text-white text-xs font-semibold">
              Ahorra 2 meses
            </span>
          </div>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            ✨ Prueba cualquiera de nuestros planes gratis por 14 días. Sin tarjeta de crédito.
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white border-2 border-primary shadow-xl scale-100 md:scale-105 z-10'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-accent rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                
                {/* Animated Price */}
                <div className="relative h-20 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={billingCycle}
                      variants={priceVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-semibold text-gray-900">$</span>
                        <span className="text-5xl font-bold text-gray-900 tracking-tight">
                          {billingCycle === 'monthly'
                            ? formatPrice(plan.monthlyPrice)
                            : formatPrice(plan.annualPrice)}
                        </span>
                        <span className="ml-2 text-gray-500">
                          /{billingCycle === 'monthly' ? 'mes' : 'año'}
                        </span>
                      </div>
                      
                      {/* Annual equivalent */}
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-primary font-medium mt-1">
                          Equivalente a ${formatPrice(plan.annualMonthlyEquivalent)} / mes
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.highlighted ? 'text-primary' : 'text-primary'
                        }`}
                      />
                    ) : (
                      <X className="w-5 h-5 mr-3 flex-shrink-0 text-gray-300" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="https://app.estetikflow.cl/registro"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full py-4 px-6 text-center font-semibold rounded-full transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          ✓ Prueba total de 14 días en todos los planes • ✓ Sin tarjeta de crédito requerida • ✓ Cancela cuando quieras
        </motion.p>
      </div>
    </section>
  );
}
