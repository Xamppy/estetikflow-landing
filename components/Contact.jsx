'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    painPoint: 'gestion', // Valor por defecto
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapeo de valores del select a textos legibles para el correo
  const asuntoLabels = {
    conocer: 'Quiero conocer EstetikFlow',
    precios: 'Consulta sobre precios y planes',
    otro: 'Otra consulta',
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contacto@estetikflow.cl", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,

          subject: asuntoLabels[formData.asunto] || formData.asunto,
          pain_point: formData.painPoint, // Nombre del campo en el correo
          message: formData.mensaje,
          _subject: `Nuevo contacto desde EstetikFlow: ${asuntoLabels[formData.asunto] || formData.asunto}`,
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      } else {
        console.error("Error FormSubmit:", data);
        alert("Hubo un error al enviar. Por favor intenta más tarde o escríbenos directamente a contacto@estetikflow.cl");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("Error de conexión. Por favor verifica tu internet e intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
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

              <div className="mb-6">
                <label htmlFor="painPoint" className="block text-gray-700 text-sm font-bold mb-2">
                  ¿Qué es lo que más te cuesta ordenar hoy?
                </label>
                <div className="relative">
                  <select
                    id="painPoint"
                    name="painPoint"
                    value={formData.painPoint}
                    onChange={(e) => setFormData({...formData, painPoint: e.target.value})}
                    className="appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] focus:border-transparent bg-white"
                  >
                    <option value="insumos">💸 No sé cuánto gano real vs. costo de insumos</option>
                    <option value="fichas">📝 Pierdo tiempo con fichas de papel/dibujos</option>
                    <option value="agenda">📅 Mi agenda es un desorden / Inasistencias</option>
                    <option value="otro">🤔 Otro / Solo quiero curiosear</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
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
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 ${
                  isSubmitting 
                    ? 'bg-primary/70 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary-dark'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
