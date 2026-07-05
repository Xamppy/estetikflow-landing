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
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-[#2a9d8f] hover:border-[#E76F51] hover:text-[#E76F51] transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Términos y Condiciones
              </a>
              <a 
                href="#privacidad" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-[#2a9d8f] hover:border-[#E76F51] hover:text-[#E76F51] transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
                  El presente servicio software (&quot;EstetikFlow&quot;) es provisto por Felipe Orellana (en adelante el &quot;Proveedor&quot;), 
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
                  El servicio se provee &quot;tal cual&quot; (as is). Aunque el Proveedor utiliza servidores privados virtuales (VPS) 
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
                  El Usuario (Profesional) declara ser el &quot;Responsable de los Datos&quot; de sus pacientes según la Ley 21.719 de Protección de Datos Personales. 
                  EstetikFlow actúa meramente como &quot;Encargado del Tratamiento&quot; (almacenamiento). El Usuario garantiza haber 
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
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">1. Marco Legal</h3>
                <p className="leading-relaxed">
                  Esta Política de Privacidad se rige por la <strong className="text-[#0D2B28]">Ley 21.719 de Protección de Datos Personales</strong> de la República de Chile, 
                  que reemplaza a la antigua Ley 19.628. La autoridad fiscalizadora es la <strong className="text-[#0D2B28]">Agencia de Protección de Datos Personales</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">2. Recolección de Información</h3>
                <p className="leading-relaxed mb-3">Recopilamos dos tipos de datos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-[#0D2B28]">A) Datos del Usuario (Cliente):</strong> Nombre, correo electrónico, teléfono y datos de facturación para gestionar su suscripción.</li>
                  <li><strong className="text-[#0D2B28]">B) Datos de Terceros (Pacientes):</strong> Información clínica y de contacto ingresada por el Usuario en las fichas clínicas.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">3. Base Legal del Tratamiento</h3>
                <p className="leading-relaxed">
                  El tratamiento de datos personales se fundamenta en las siguientes bases legales:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-[#0D2B28]">Consentimiento explícito:</strong> Otorgado libremente por el titular al registrarse, realizar una reserva o utilizar nuestros servicios.</li>
                  <li><strong className="text-[#0D2B28]">Ejecución contractual:</strong> Necesario para la prestación del servicio contratado (gestión de cuenta, facturación, soporte).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">4. Consentimiento</h3>
                <p className="leading-relaxed mb-3">
                  De acuerdo con la Ley 21.719, todo tratamiento de datos personales requiere <strong className="text-[#0D2B28]">consentimiento explícito, informado, previo y revocable</strong>. 
                  No se admite el consentimiento tácito. El titular puede revocar su consentimiento en cualquier momento, sin efectos retroactivos, 
                  escribiendo a{' '}
                  <a href="mailto:privacidad@estetikflow.cl" className="text-[#E76F51] hover:underline font-medium">
                    privacidad@estetikflow.cl
                  </a>.
                </p>
                <p className="leading-relaxed">
                  El consentimiento queda registrado electrónicamente con fecha, hora y medio de obtención, 
                  conforme a lo exigido por la normativa vigente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">5. Uso de la Información</h3>
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
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">6. Seguridad de los Datos</h3>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad digital (encriptación de contraseñas, aislamiento de bases de datos por cuenta) 
                  para proteger la información contra acceso no autorizado, alteración o destrucción.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">7. Notificación de Brechas de Seguridad</h3>
                <p className="leading-relaxed">
                  En cumplimiento de la Ley 21.719, en caso de producirse una violación de seguridad que afecte datos personales, 
                  EstetikFlow notificará a la <strong className="text-[#0D2B28]">Agencia de Protección de Datos Personales</strong> dentro de 
                  <strong className="text-[#0D2B28]"> 5 días hábiles</strong> desde que se tenga conocimiento del incidente. 
                  Cuando la brecha implique un riesgo alto para los derechos de los titulares, estos serán notificados sin dilación indebida.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">8. Derechos ARCO+ (Ley 21.719)</h3>
                <p className="leading-relaxed mb-3">
                  El titular de los datos puede ejercer los siguientes derechos gratuitamente, escribiendo a{' '}
                  <a href="mailto:privacidad@estetikflow.cl" className="text-[#E76F51] hover:underline font-medium">
                    privacidad@estetikflow.cl
                  </a>:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Acceso:</strong> Derecho a conocer qué datos personales tratamos y obtener copia de ellos. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 15 días hábiles.</span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Rectificación:</strong> Derecho a corregir datos inexactos, incompletos o desactualizados. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 15 días hábiles.</span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Cancelación/Supresión:</strong> Derecho a solicitar la eliminación de datos cuando ya no sean necesarios 
                    o el tratamiento sea ilícito. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 3 días hábiles.</span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Oposición:</strong> Derecho a oponerse al tratamiento de datos para fines de marketing directo 
                    u otros fines legítimos. Este derecho es <strong>absoluto para fines de marketing</strong>. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 15 días hábiles.</span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Portabilidad:</strong> Derecho a recibir tus datos en un formato estructurado, 
                    de uso común y lectura mecánica, y a transferirlos a otro responsable. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 15 días hábiles.</span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#0D2B28]">Decisiones automatizadas:</strong> Derecho a no ser objeto de decisiones basadas 
                    únicamente en tratamiento automatizado que produzcan efectos jurídicos significativos, incluida la elaboración de perfiles. 
                    <span className="text-[#E76F51] font-medium"> Plazo de respuesta: 15 días hábiles.</span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Respecto a los datos de pacientes, el Usuario Profesional es el responsable de gestionar dichos derechos frente a sus clientes, 
                  conforme a su rol de Responsable del Tratamiento.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">9. Cookies</h3>
                <p className="leading-relaxed">
                  Utilizamos cookies técnicas estrictamente necesarias para mantener la sesión activa y segura dentro de la plataforma. 
                  Para cookies analíticas y de marketing, solicitamos consentimiento explícito previo mediante nuestro banner de cookies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0D2B28] mb-3">10. Contacto y Autoridad Fiscalizadora</h3>
                <p className="leading-relaxed">
                  Para ejercer tus derechos o realizar consultas sobre privacidad, escríbenos a{' '}
                  <a href="mailto:privacidad@estetikflow.cl" className="text-[#E76F51] hover:underline font-medium">
                    privacidad@estetikflow.cl
                  </a>. 
                  También puedes contactar a la <strong className="text-[#0D2B28]">Agencia de Protección de Datos Personales</strong>, 
                  la autoridad fiscalizadora encargada de velar por el cumplimiento de la Ley 21.719 en Chile.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Última actualización: Julio 2026
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
