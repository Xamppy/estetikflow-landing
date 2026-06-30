'use client';

import { motion } from 'framer-motion';

const chatbotFeatures = [
  {
    icon: '💬',
    title: 'Responde consultas frecuentes',
    description: 'Horarios, precios, ubicación, servicios. El chatbot contesta al instante mientras tú atiendes.',
  },
  {
    icon: '📅',
    title: 'Agenda citas automáticamente',
    description: 'La clienta elige día y hora desde WhatsApp. La cita se registra sola en tu agenda EstetikFlow.',
  },
  {
    icon: '🔔',
    title: 'Confirma y recuerda citas',
    description: 'Recordatorio automático 24h antes. Reduce inasistencias sin levantar un dedo.',
  },
  {
    icon: '📱',
    title: 'Sin tocar el teléfono',
    description: 'Todo funciona mientras atiendes. El chatbot trabaja 24/7 por ti.',
  },
];

export default function WhatsAppChatbot() {
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              💬 Tus clientas te escriben por WhatsApp.{' '}
              <span className="text-primary">El chatbot responde por ti.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mientras atiendes a una paciente, el chatbot de EstetikFlow se encarga de todo:
            </p>

            <div className="space-y-4">
              {chatbotFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{feature.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800">{feature.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/56912345678?text=Hola%20EstetikFlow%2C%20quiero%20probar%20el%20chatbot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-green-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              💬 Probar chatbot ahora →
            </motion.a>
          </motion.div>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative max-w-[320px]">
              {/* Phone Frame */}
              <div className="bg-white rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                {/* Notch */}
                <div className="w-24 h-1.5 bg-gray-300 rounded-full mx-auto mb-3" />
                
                {/* Chat Mockup */}
                <div className="bg-[#E5DDD5] rounded-2xl p-4 space-y-3 min-h-[400px]">
                  {/* Header */}
                  <div className="bg-[#075E54] -mx-4 -mt-4 px-4 py-3 rounded-t-2xl flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                      🏥
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">EstetikFlow Bot</p>
                      <p className="text-white/70 text-xs">en línea</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="bg-white rounded-lg p-2.5 text-sm text-gray-800 shadow-sm max-w-[85%]">
                    👋 ¡Hola! Soy el asistente virtual de EstetikFlow. ¿En qué puedo ayudarte?
                  </div>

                  <div className="bg-[#DCF8C6] rounded-lg p-2.5 text-sm text-gray-800 shadow-sm max-w-[85%] ml-auto">
                    Quiero agendar una podología
                  </div>

                  <div className="bg-white rounded-lg p-2.5 text-sm text-gray-800 shadow-sm max-w-[85%]">
                    ¡Perfecto! Tengo estos horarios disponibles esta semana:<br/>
                    📅 Miércoles 15:00<br/>
                    📅 Jueves 11:30<br/>
                    📅 Viernes 09:00<br/>
                    ¿Cuál prefieres?
                  </div>

                  <div className="bg-[#DCF8C6] rounded-lg p-2.5 text-sm text-gray-800 shadow-sm max-w-[85%] ml-auto">
                    Jueves 11:30
                  </div>

                  <div className="bg-white rounded-lg p-2.5 text-sm text-gray-800 shadow-sm max-w-[85%]">
                    ✅ ¡Listo! Cita agendada para el jueves a las 11:30.<br/>
                    Recibirás un recordatorio 24h antes. ¡Gracias!
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
                <p className="text-xs text-gray-500">24/7</p>
                <p className="text-sm font-bold text-[#25D366]">Respondiendo por ti</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
