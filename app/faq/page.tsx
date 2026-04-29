import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Resolvemos todas tus dudas sobre EstetikFlow: precios, funciones, seguridad de datos, trial gratuito y más.Respuestas en menos de 24 horas.',
  alternates: {
    canonical: 'https://www.estetikflow.cl/faq',
  },
};

const faqCategories = [
  {
    title: 'General',
    icon: '💡',
    questions: [
      {
        q: '¿Para quién es EstetikFlow?',
        a: 'EstetikFlow está diseñado para profesionales independientes de la estética y el bienestar en Chile: podólogas, manicuristas, esteticistas, spas, Clínicas pequeñas y gabinetes profesionales. Si gestionas citas, pacientes e inventario, EstetikFlow es para ti.',
      },
      {
        q: '¿En qué se diferencia EstetikFlow de otras herramientas?',
        a: 'La diferencia es que no copiamos software genérico. EstetikFlow fue construido escuchando a profesionales reales del rubro. Incluye cosas que solo quien trabaja en estética necesita: control de insumos por gramo/mililitro, calculadora de rentabilidad real descontando insumos, y ficha clínica con podograma. No encuentras eso en un软件 genérico.',
      },
      {
        q: '¿Necesito instalar algo en mi computador?',
        a: 'No. EstetikFlow es 100% web. Funciona desde cualquier navegador (Chrome, Safari, Firefox) en tu computador, tablet o celular. No necesitas descargar ni instalar nada.',
      },
      {
        q: '¿Puedo probarlo antes de pagar?',
        a: 'Sí. Tienes 14 días de prueba gratuita en todos los planes, sin necesidad de ingresar tarjeta de crédito. Empieza a usarlo hoy y decide después.',
      },
      {
        q: '¿Qué pasa cuando termina el trial?',
        a: 'Recibirás un recordatorio antes de que termine. Si decides no continuar, tu cuenta queda en pausa (no se borra) y puedes volver cuando quieras. Si decides continuar, simplemente eliges el plan que más te acomode.',
      },
    ],
  },
  {
    title: 'Planes y Pagos',
    icon: '💳',
    questions: [
      {
        q: '¿Cuánto cuestan los planes?',
        a: 'Tenemos tres planes: Orden Digital desde $12.990/mes, Imperio Profesional desde $24.990/mes, y Gabinete Expansión desde $59.990/mes. Todos incluyen 14 días de prueba gratis. Los precios son en pesos chilenos (CLP) con factibilidad de emisión de Boleta o Factura.',
      },
      {
        q: '¿Puedo cancelar cuando quiera?',
        a: 'Sí. Sin contratos, sin compromisos, sin letras chicas. Cancela desde tu cuenta cuando quieras y el cobro se detiene de inmediato. No hay penalizaciones ni costos de salida.',
      },
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'A través de Flow.cl aceptamos tarjetas de crédito y débito (Redcompra), y también pagos con transferencia bancaria. Tus datos de pago están 100% seguros (Flow.cl es el processor de pagos, nosotros nunca vemos tus datos bancarios).',
      },
      {
        q: '¿Hay descuento por pago anual?',
        a: 'Sí. Si pagas anualmente, ahorras el equivalente a 2 meses. Es decir, solo pagas por 10 meses en vez de 12.',
      },
      {
        q: '¿Puedo cambiar de plan?',
        a: 'Sí. Puedes escalar o reducir tu plan en cualquier momento desde tu cuenta. Si subes de plan, el cambio es inmediato. Si bajas, el cambio aplica al siguiente ciclo de facturación.',
      },
    ],
  },
  {
    title: 'Funciones',
    icon: '⚙️',
    questions: [
      {
        q: '¿Qué incluye la agenda online?',
        a: 'Tu agenda online funciona 24/7. Tus pacientes reservan desde un link público sin descargarte ninguna app. Tú defines qué horarios están disponibles, duración de cada servicio, y recibes confirmaciones automáticas. Además, enviamos recordatorios por WhatsApp para reducir las inasistencias.',
      },
      {
        q: '¿Qué es el dashboard financiero?',
        a: 'Es tu panel de control dinero. No solo ves cuánto vendiste — ves cuánto ganaste REAL. Descontamos automáticamente el costo de tus insumos (guantes, bisturís, cremas) para que sepas cuál es tu utilidad real por servicio, por semana o por mes.',
      },
      {
        q: '¿Cómo funciona el control de inventario?',
        a: 'Registras cada insumo (nombre, stock inicial, stock crítico, valor unitario, valor por aplicación). Cada vez que registras una atención, el sistema descuenta automáticamente los insumos usados y te avisa cuando algo está por terminar. Así nunca te pillará faltarte algo esencial.',
      },
      {
        q: '¿Qué es una ficha clínica digital?',
        a: 'Es el registro digital de cada paciente: datos personales, antecedentes médicos, alergias, historial de tratamientos y evoluciones. Reemplaza las fichas en papel y te permite acceder al historial completo de cada paciente en segundos.',
      },
      {
        q: '¿Puedo tener más de un profesional en mi cuenta?',
        a: 'Sí, a partir del plan Imperio Profesional puedes agregar múltiples usuarios. El plan Gabinete Expansión incluye hasta 5 profesionales con roles diferenciados (admin vs. profesional).',
      },
    ],
  },
  {
    title: 'Seguridad y Datos',
    icon: '🔒',
    questions: [
      {
        q: '¿Mis datos y los de mis pacientes están seguros?',
        a: 'Sí. Implementamos encriptación de contraseñas, bases de datos aisladas por cuenta, y tecnología HTTPS en todo el sitio. Estamos alineados con la Ley 19.628 de protección de datos personales de Chile.',
      },
      {
        q: '¿Quién tiene acceso a mis datos clínicos?',
        a: 'Solo tú y las personas que tú invites a tu cuenta. Ni siquiera nosotros como proveedores podemos acceder a los datos de tus pacientes. Están aislados y encriptados.',
      },
      {
        q: '¿Qué pasa si se cae el sistema? ¿Pierdo mis datos?',
        a: 'No. Realizamos respaldos automáticos diarios de toda la información. Si ocurrriera cualquier incidencia técnica, tu datos están protegidos y recuperables.',
      },
      {
        q: '¿Cumplen con la ley de datos clínicos en Chile?',
        a: 'Sí. En nuestros términos y condiciones queda establecido que el Usuario (tú, el profesional) eres el "Responsable del Tratamiento" de los datos de tus pacientes según la Ley 19.628. EstetikFlow actúa como "Encargado del Tratamiento" (solo almacena). Tú garantizas el consentimiento de tus pacientes.',
      },
    ],
  },
  {
    title: 'Soporte',
    icon: '💬',
    questions: [
      {
        q: '¿Cómo puedo contactar soporte?',
        a: 'Escríbenos a contacto@estetikflow.cl y respondemos en menos de 24 horas hábiles. También puedes escribirnos desde el formulario de contacto en la página web.',
      },
      {
        q: '¿Hay capacitación o tutoriales?',
        a: 'Estamos trabajando en videos tutoriales paso a paso. Mientras tanto, el soporte humano te guía directamente en lo que necesites. Escribenos y te ayudamos.',
      },
      {
        q: '¿Qué pasa si no sé usar tecnología?',
        a: 'EstetikFlow está diseñado para ser intuitivo, pero entendemos que no todos se sienten cómodos con tecnología. Por eso tienes soporte humano real: te respondemos en español, sin tecnicismos, y te acompañamos en el proceso.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#f4e1d2]/30 to-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full text-sm font-semibold mb-4">
            Respuestas rápidas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D2B28] mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Todo lo que necesitas saber antes de comenzar. ¿No encontraste tu respuesta? Escríbenos.
          </p>
          <a
            href="mailto:contacto@estetikflow.cl"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#e76f51] hover:bg-[#d65f41] text-white font-semibold rounded-xl transition-colors"
          >
            💬 Escribirnos
          </a>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold text-[#0D2B28] mb-8 flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-[#f8f9fa] rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-[#0D2B28] hover:text-[#e76f51] transition-colors">
                      <span>{item.q}</span>
                      <span className="text-[#2a9d8f] group-open:rotate-180 transition-transform flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-[#f4e1d2]/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0D2B28] mb-4">
            ¿Tu pregunta no está aquí?
          </h2>
          <p className="text-gray-600 mb-6">
            Escríbenos y te respondemos en menos de 24 horas hábiles. Hablamos tu idioma.
          </p>
          <a
            href="mailto:contacto@estetikflow.cl?subject=FAQ: Mi pregunta no está en la lista"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e76f51] hover:bg-[#d65f41] text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-orange-500/20"
          >
            💬 contacto@estetikflow.cl
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
