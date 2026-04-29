import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Guía Gratis: 5 Errores que Hacen Perder Pacientes',
  description: 'Descarga gratis la guía para profesionales de la estética: los 5 errores que hacen perder pacientes y cómo solucionarlos.',
  alternates: {
    canonical: 'https://www.estetikflow.cl/guia-gratis',
  },
};

const errores = [
  {
    numero: 1,
    titulo: 'El cuaderno de papel te está robando tiempo (y dinero)',
    problema: 'Cada vez que un paciente llama para pedir hora, buscas en un cuaderno, escribes, y después olvidas dónde pusiste la nota. Eso son 5-10 minutos por llamada, múltiples llamadas al día, y cero visibilidad de tu agenda real.',
    solucion: 'Una agenda digital te permite ver tu disponibilidad en segundos, confirma automáticamente, y envía recordatorios. Ese tiempo que gastas en llamadas lo recuperás atendiendo más pacientes.',
    ejemplo: 'Si pierdes 30 minutos diarios en llamadas de horario, son 10 horas al mes. Con una agenda online, esos 30 minutos pasan a ser 2.',
    emoji: '📅',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-600',
  },
  {
    numero: 2,
    titulo: 'No sabes cuánto ganas realmente',
    problema: 'Cobras $25.000 por una sesión, pero ¿cuánto te queda después de guantes, bisturíes, cremas, y otros insumos? La mayoría de los profesionales只知道 cuánto vendieron, no cuánto ganan.',
    solucion: 'Un sistema que descuente automáticamente el costo de insumos por atención. Así sabes exactamente tu ganancia real por servicio, por semana, por mes.',
    ejemplo: 'Vendes $500.000 en un mes. Inssumos cuestan $120.000. Tu ganancia real es $380.000. ¿Lo sabías antes de ahora?',
    emoji: '💰',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-600',
  },
  {
    numero: 3,
    titulo: 'Tus pacientes olvidan la hora y no avisan',
    problema: 'Las inasistencias son el impuesto silencioso de los gabinetes. Un paciente que no se presenta te cuesta no solo esa hora, sino el flujo de pacientes que podrían haber ocupado ese espacio.',
    solucion: 'Recordatorios automáticos por WhatsApp 24 horas antes. Estudios muestran que reducen las inasistencias en un 50% o más.',
    ejemplo: 'Si tienes 3 inasistencias por semana (2 horas perdidas = $50.000), eso son $200.000 al mes. Un recordatorio automático podría recuperar la mitad.',
    emoji: '🔔',
    color: 'bg-yellow-50 border-yellow-200',
    accentColor: 'text-yellow-600',
  },
  {
    numero: 4,
    titulo: 'Le das el número de WhatsApp a todos',
    problema: 'Cuando das tu WhatsApp personal,terminas respondiendo mensajes a las 11pm sobre "¿a qué hora es mi hora?" o "¿cuánto cuesta?" sin que nunca concreten. Mezclas tu vida personal con tu negocio.',
    solucion: 'Un link de reservas online público. Tus pacientes reservan cuando quieren, tú recibes la notificación y confirmás. Sin mezclar WhatsApp personal con trabajo.',
    ejemplo: '"Reserva tu hora aquí: estetikflow.cl/reservar/mi-gabinete" — ellos reservan, tú solo confirmás.',
    emoji: '📱',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-600',
  },
  {
    numero: 5,
    titulo: 'No tienes ficha clínica (o la tienes en papel)',
    problema: 'Cuando un paciente vuelve después de 6 meses, no recuerdas qué tratamiento hiciste la última vez. Empiezas de cero. Le preguntas "¿cómo te fue con la última crema?" y no tienes respuesta. Eso se siente poco profesional.',
    solucion: 'Una ficha clínica digital con historial completo. Ves todo — tratamientos anteriores, productos usados, evoluciones — en 10 segundos.',
    ejemplo: 'La paciente llega. Abrís su ficha. Ves que hace 4 meses hiciste tratamiento de uña incarnada con talones agrietados. Sabés exactamente por dónde empezar.',
    emoji: '📋',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-600',
  },
];

export default function GuiaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-b from-[#f4e1d2]/40 to-white overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#e76f51]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#2a9d8f]/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-[#e76f51]/10 text-[#e76f51] rounded-full text-sm font-semibold mb-4">
            📖 Guía Gratis — Lectura de 8 minutos
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2B28] mb-4 leading-tight">
            5 Errores que Hacen Perder Pacientes (y Cómo Solucionarlos)
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-2">
            Esta guía es para profesionales de la estética y podología en Chile que quieren retener más pacientes, perder menos tiempo en administración, y saber cuánto dinero les queda al final del mes.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-4">
            <span>✍️ Por Felipe Orellana, Fundador de EstetikFlow</span>
            <span>•</span>
            <span>📅 Abril 2026</span>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#f4e1d2]/30 rounded-2xl p-8 border border-[#e76f51]/20">
            <h2 className="text-xl font-bold text-[#0D2B28] mb-3">👋 Antes de empezar</h2>
            <p className="text-gray-600 leading-relaxed">
              Después de hablar con cientos de profesionales de la estética, encontré que la mayoría pierde pacientes por las mismas razones. No por falta de habilidad — al revés, son increíblemente buenos en lo que hacen. El problema es que el negocio se gestiona como hace 20 años.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Esta guía documenta los 5 errores más comunes y, más importante, cómo solucionarlos. Sin tecnicismos, sin software enterprise caro, sin tardar meses en implementar.
            </p>
          </div>
        </div>
      </section>

      {/* Los 5 Errores */}
      <section className="py-8 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {errores.map((error) => (
            <div key={error.numero} className={`${error.color} rounded-2xl p-8 border`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">
                  {error.emoji}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                    Error #{error.numero}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#0D2B28]">
                    {error.titulo}
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-600 mb-2">😓 El problema</p>
                  <p className="text-gray-700 leading-relaxed">{error.problema}</p>
                </div>

                <div className="bg-white/60 rounded-xl p-5">
                  <p className="text-sm font-semibold text-green-600 mb-2">✅ La solución</p>
                  <p className="text-gray-700 leading-relaxed">{error.solucion}</p>
                </div>

                <div className="bg-white/60 rounded-xl p-5 border-l-4 border-[#2a9d8f]">
                  <p className="text-sm font-semibold text-[#2a9d8f] mb-2">💡 ¿Cuánto vale esto?</p>
                  <p className="text-gray-700 leading-relaxed italic">{error.ejemplo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f4e1d2]/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D2B28] mb-4">
              ¿Listo para dejar de cometer estos errores?
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              EstetikFlow resuelve todos estos problemas en una sola plataforma. Sin contratos, sin complicaciones, y con soporte humano que habla tu idioma.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Agenda online 24/7 para tus pacientes
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Calculadora de ganancia real (descuenta insumos)
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Recordatorios WhatsApp automáticos
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span>
                Fichas clínicas digitales con historial
              </div>
            </div>

            <a
              href="/#precios"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e76f51] hover:bg-[#d65f41] text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-orange-500/20"
            >
              Probar 14 días gratis →
            </a>
            <p className="text-xs text-gray-500 mt-3">
              Sin tarjeta de crédito · Cancela cuando quieras
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            ¿Tienes dudas antes de partir?{' '}
            <a href="/faq" className="text-[#2a9d8f] hover:underline font-medium">
              Revisa las preguntas frecuentes →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
