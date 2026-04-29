import type { Metadata } from 'next';
import Image from 'next/image';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Demo — EstetikFlow en 60 segundos',
  description: 'Mira cómo funciona EstetikFlow: agenda online, fichas clínicas, control de inventario y recordatorios WhatsApp. Demo rápido de 60 segundos.',
  alternates: {
    canonical: 'https://www.estetikflow.cl/#demo',
  },
};

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-28 bg-gradient-to-b from-[#f4e1d2]/20 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-4 py-1.5 bg-[#2a9d8f]/10 text-[#2a9d8f] rounded-full text-sm font-semibold mb-4">
            🎬 Demo rápida
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2B28] mb-4">
            Mira cómo funciona en 60 segundos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sin registro, sin venta. Solo abre y mira cómo sería tu día con EstetikFlow.
          </p>
        </div>

        {/* Video placeholder — screenshot con play button */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-900">
          <div className="aspect-video relative">
            <Image
              src="/screenshots/dashboard-citas.png"
              alt="Vista previa de la demo de EstetikFlow — Agenda digital"
              fill
              className="object-cover opacity-80"
            />
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Play button centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4"
                aria-label="Reproducir demo de EstetikFlow"
              >
                {/* Círculo del play */}
                <div className="w-20 h-20 bg-[#e76f51] hover:bg-[#d65f41] rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/60">
                  <Play className="w-8 h-8 text-white ml-1" aria-hidden="true" />
                </div>
                <span className="text-white/90 font-semibold text-lg">
                  Reproducir demo
                </span>
              </a>
            </div>

            {/* Badge de duración */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">
              0:60
            </div>

            {/* Timestamp markers */}
            <div className="absolute bottom-4 left-4 flex gap-3 text-white/80 text-xs">
              <span>0:00 — Agenda</span>
              <span>0:20 — Fichas</span>
              <span>0:40 — Inventario</span>
            </div>
          </div>
        </div>

        {/* Time to value — qué vas a ver */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '📅', title: 'Agenda online', desc: 'Cómo tus pacientes reservan 24/7' },
            { emoji: '📋', title: 'Fichas clínicas', desc: 'Historial completo en 2 taps' },
            { emoji: '📦', title: 'Inventario', desc: 'Alertas de stock crítico' },
            { emoji: '💬', title: 'WhatsApp', desc: 'Recordatorios que reducen inasistencias' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">{item.emoji}</div>
              <p className="font-semibold text-[#0D2B28] text-sm">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA debajo del video */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">¿Ya viste lo que puedes hacer?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e76f51] hover:bg-[#d65f41] text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-orange-500/20"
            >
              Quiero probarlo 14 días gratis →
            </a>
            <a
              href="/guia-gratis"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#0D2B28] font-semibold hover:underline text-base"
            >
              📖 Descargar guía gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
