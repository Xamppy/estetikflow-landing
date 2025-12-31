'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function LegalPage() {
  // Handle scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D2B28] mb-4">
              Centro Legal y de Privacidad
            </h1>
            <p className="text-xl text-gray-500">
              Transparencia total para tu tranquilidad.
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="mb-12 p-6 bg-[#f8f9fa] rounded-xl border border-gray-100">
            <p className="text-sm font-semibold text-[#0D2B28] mb-3">Ir a:</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#terminos" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-[#2a9d8f] hover:border-[#E76F51] hover:text-[#E76F51] transition-all text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Términos y Condiciones
              </a>
              <a 
                href="#privacidad" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-[#2a9d8f] hover:border-[#E76F51] hover:text-[#E76F51] transition-all text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Política de Privacidad
              </a>
            </div>
          </nav>

          {/* ==================== TÉRMINOS Y CONDICIONES ==================== */}
          <section id="terminos" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2a9d8f] mt-12 mb-6 pb-3 border-b-2 border-[#E76F51]/30">
              Términos y Condiciones de Uso
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">1. Identificación del Proveedor</h3>
                <p className="leading-relaxed">
                  El presente servicio software ("EstetikFlow") es provisto por Felipe Orellana (en adelante el "Proveedor"), 
                  con domicilio en Iquique, Chile. EstetikFlow es una plataforma en proceso de formalización legal como persona jurídica.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">2. Objeto del Servicio</h3>
                <p className="leading-relaxed">
                  EstetikFlow es un Software as a Service (SaaS) diseñado para la gestión administrativa de gabinetes 
                  de podología y estética. El servicio incluye agenda, registro de fichas clínicas básicas, control de inventario 
                  y dashboard financiero. EstetikFlow NO presta servicios médicos ni clínicos. La interpretación de los datos 
                  clínicos es responsabilidad exclusiva del Usuario Profesional.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">3. Cuentas y Seguridad</h3>
                <p className="leading-relaxed">
                  El Usuario es responsable de mantener la confidencialidad de su contraseña. El Proveedor no se hace responsable 
                  por accesos no autorizados derivados de negligencia del Usuario en el cuidado de sus credenciales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">4. Planes y Pagos</h3>
                <p className="leading-relaxed">
                  El servicio se ofrece bajo modalidad de suscripción (mensual o anual). El no pago de la suscripción faculta 
                  al Proveedor para suspender el acceso a la cuenta tras 1 día de morosidad.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">5. Límites de Uso (WhatsApp y Almacenamiento)</h3>
                <p className="leading-relaxed mb-3">
                  <strong className="text-[#0D2B28]">Mensajería:</strong> Los planes incluyen un cupo limitado de mensajes de WhatsApp automatizados 
                  (50 para Plan Imperio, 100 para Plan Gabinete) para cubrir costos operativos de API. El Proveedor se reserva 
                  el derecho de suspender el envío de mensajes si se detecta spam o uso abusivo.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#0D2B28]">Imágenes:</strong> Actualmente, el servicio NO incluye almacenamiento de fotografías ni imágenes diagnósticas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">6. Propiedad Intelectual</h3>
                <p className="leading-relaxed">
                  Todo el código, diseño, logotipos y algoritmos de EstetikFlow son propiedad exclusiva del Proveedor. 
                  El Usuario adquiere una licencia de uso limitada, no exclusiva e intransferible, no la propiedad del software.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">7. Limitación de Responsabilidad (SLA)</h3>
                <p className="leading-relaxed mb-3">
                  El servicio se provee "tal cual" (as is). Aunque el Proveedor utiliza servidores privados virtuales (VPS) 
                  y medidas de seguridad estándar:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>No se garantiza un 100% de tiempo de actividad (uptime) debido a mantenimientos técnicos o fallas de proveedores externos.</li>
                  <li>El Proveedor NO será responsable por lucro cesante, pérdida de ingresos o daños indirectos derivados de interrupciones del servicio.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">8. Privacidad de Datos de Pacientes</h3>
                <p className="leading-relaxed">
                  El Usuario (Profesional) declara ser el "Responsable de los Datos" de sus pacientes según la Ley 19.628. 
                  EstetikFlow actúa meramente como "Encargado del Tratamiento" (almacenamiento). El Usuario garantiza haber 
                  obtenido el consentimiento de sus pacientes para ingresar sus datos en sistemas digitales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">9. Modificaciones y Vigencia</h3>
                <p className="leading-relaxed">
                  El Proveedor se reserva el derecho de modificar estos términos. El uso continuado de la plataforma 
                  implica la aceptación de los cambios.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">10. Ley Aplicable</h3>
                <p className="leading-relaxed">
                  Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia será competencia 
                  de los tribunales ordinarios de justicia de Iquique.
                </p>
              </div>
            </div>
          </section>

          {/* Visual Separator */}
          <hr className="my-16 border-gray-200" />

          {/* ==================== POLÍTICA DE PRIVACIDAD ==================== */}
          <section id="privacidad" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-[#2a9d8f] mt-12 mb-6 pb-3 border-b-2 border-[#E76F51]/30">
              Política de Privacidad
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">1. Recolección de Información</h3>
                <p className="leading-relaxed mb-3">Recopilamos dos tipos de datos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-[#0D2B28]">A) Datos del Usuario (Cliente):</strong> Nombre, correo electrónico, teléfono y datos de facturación para gestionar su suscripción.</li>
                  <li><strong className="text-[#0D2B28]">B) Datos de Terceros (Pacientes):</strong> Información clínica y de contacto ingresada por el Usuario en las fichas clínicas.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">2. Uso de la Información</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="leading-relaxed">Los Datos del Usuario se utilizan para proveer el servicio, facturar y enviar notificaciones técnicas.</li>
                  <li className="leading-relaxed">
                    Los Datos de Pacientes SON CONFIDENCIALES y propiedad del Usuario. EstetikFlow NO comparte, vende ni utiliza 
                    estos datos para fines publicitarios. Solo se accede a ellos de forma automatizada para procesos de respaldo (backup) 
                    o soporte técnico expresamente solicitado.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">3. Seguridad de los Datos</h3>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad digital (encriptación de contraseñas, aislamiento de bases de datos por cuenta) 
                  para proteger la información contra acceso no autorizado, alteración o destrucción.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">4. Derechos ARCO (Ley 19.628)</h3>
                <p className="leading-relaxed">
                  El Usuario titular puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición sobre sus 
                  datos personales escribiendo a{' '}
                  <a href="mailto:contacto@estetikflow.cl" className="text-[#E76F51] hover:underline font-medium">
                    contacto@estetikflow.cl
                  </a>. 
                  Respecto a los datos de pacientes, el Usuario Profesional es el responsable de gestionar dichos derechos frente a sus clientes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">5. Cookies</h3>
                <p className="leading-relaxed">
                  Utilizamos cookies técnicas estrictamente necesarias para mantener la sesión activa y segura dentro de la plataforma.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Última actualización: Diciembre 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
