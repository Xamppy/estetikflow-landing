'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  // Detectar parámetro de oferta en URL y pre-llenar formulario
  useEffect(() => {
    const checkParams = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('offer') === 'claimed') {
        setFormData(prev => ({
          ...prev,
          asunto: 'conocer', // Valor del select que corresponde a "Quiero conocer EstetikFlow"
          mensaje: 'Hola, me gustaría reclamar mi mes gratis de lanzamiento y conocer más detalles sobre el software.'
        }));
      }
    };

    // Chequear al montar
    checkParams();

    // Escuchar cambios (por si el usuario clica el banner estando ya en la página)
    window.addEventListener('popstate', checkParams);
    return () => window.removeEventListener('popstate', checkParams);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                ¿Dudas sobre qué plan elegir?
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Escríbenos y te ayudamos a digitalizar tu gabinete. Responderemos en menos de 24 horas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="mailto:contacto@estetikflow.cl?subject=Consulta%20sobre%20EstetikFlow"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900">contacto@estetikflow.cl</p>
                </div>
              </motion.a>

              {/* Instagram - Comentado temporalmente hasta que esté operativo
              <motion.a
                href="https://www.instagram.com/estetikflow.cl/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fuchsia-100">
                  <Instagram className="w-6 h-6 text-fuchsia-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="text-lg font-semibold text-gray-900">@estetikflow.cl</p>
                </div>
              </motion.a>
              */}
            </div>

            {/* Trust Note */}
            <p className="text-sm text-gray-500">
              💬 Respondemos todos los mensajes en menos de 24 horas hábiles.
            </p>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none bg-white"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="conocer">Quiero conocer EstetikFlow</option>
                  <option value="precios">Consulta sobre precios y planes</option>
                  <option value="otro">Otra consulta</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
