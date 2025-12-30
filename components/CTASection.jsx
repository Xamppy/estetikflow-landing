'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50" />
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D2B28] mb-6 tracking-tight">
            No eres solo una profesional.<br />
            <span className="text-primary">Eres una empresaria.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Deja de adivinar y empieza a tomar decisiones con datos reales. Tu negocio merece crecer ordenado.
          </p>
          
          <motion.a
             href="https://app.estetikflow.cl/registro"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-white bg-[#e76f51] rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
          >
            Únete a la nueva generación EstetikFlow
            <ArrowRight className="ml-2 w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
