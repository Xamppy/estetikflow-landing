'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function NosotrosPage() {
  const valores = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Transparencia',
      description: 'Sin letras chicas ni cobros ocultos. Sabrás exactamente qué pagas y qué recibes.',
      iconColor: 'text-[#2a9d8f]',
      bgColor: 'bg-[#2a9d8f]/10'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Especialización',
      description: 'No hacemos software para restaurantes. Solo estética y bienestar. Conocemos tu rubro.',
      iconColor: 'text-[#e76f51]',
      bgColor: 'bg-[#e76f51]/10'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Cercanía',
      description: 'Cuando nos escribes, te responde un humano que conoce tu nombre y tu negocio.',
      iconColor: 'text-[#2a9d8f]',
      bgColor: 'bg-[#2a9d8f]/10'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      {/* Hero Section - Light Mode */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#f4e1d2]/30 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#2a9d8f] rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#e76f51] rounded-full blur-3xl opacity-5"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2B28] mb-6 leading-tight">
            Tecnología con alma de gabinete.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No somos una multinacional. Somos un equipo que entiende lo que es atender pacientes.
          </p>
        </motion.div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Text Side */}
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-[#e76f51] rounded-full text-sm font-semibold mb-6">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B28] mb-6 leading-tight">
                Nació de una frustración real
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Todo comenzó cuando <strong className="text-[#0D2B28]">Felipe</strong>, nuestro fundador, 
                  vio a una colega podóloga sufrir cada día con cuadernos de papel y planillas de Excel 
                  que nunca cuadraban.
                </p>
                <p>
                  Mientras ella dedicaba su pasión a cuidar pacientes, perdía horas valiosas calculando 
                  insumos, persiguiendo citas canceladas y tratando de recordar tratamientos anteriores.
                </p>
                <p>
                  <strong className="text-[#2a9d8f]">Ahí nació EstetikFlow</strong>: programado línea por línea, 
                  escuchando las necesidades reales del rubro. No copiamos software genérico — 
                  construimos algo específico para ti.
                </p>
              </div>
            </motion.div>

            {/* Image Side - Bento Card Style */}
            <motion.div 
              variants={fadeIn}
              className="order-1 md:order-2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gradient-to-br from-[#f4e1d2]/40 to-white">
                <div className="aspect-[4/3] flex items-center justify-center p-8">
                  {/* Visual Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#2a9d8f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#0D2B28] font-semibold text-lg mb-2">
                      Desarrollado con pasión
                    </p>
                    <p className="text-gray-500 text-sm">
                      para profesionales como tú
                    </p>
                  </div>
                </div>
                {/* Decorative subtle elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#e76f51]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#2a9d8f]/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f4e1d2]/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B28] mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No son frases de póster corporativo. Son promesas que cumplimos cada día.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {valores.map((valor) => (
              <motion.div
                key={valor.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl ${valor.bgColor} ${valor.iconColor} flex items-center justify-center mb-6`}>
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D2B28] mb-3">
                  {valor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Light with Coral accent */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2B28] mb-6">
              ¿Lista para digitalizar tu pasión?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Conversemos sobre cómo EstetikFlow puede transformar la gestión de tu gabinete.
            </p>
          </motion.div>
          
          <a
            href="/#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e76f51] hover:bg-[#d65f41] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contáctanos
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
