import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    producto: [
      { label: 'Características', href: '#caracteristicas' },
      { label: 'Precios', href: '#precios' },
    ],
    empresa: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Contacto', href: 'mailto:contacto@estetikflow.cl?subject=Consulta%20sobre%20EstetikFlow' },
    ],
    legal: [
      { label: 'Privacidad', href: '/legal#privacidad' },
      { label: 'Términos', href: '/legal#terminos' },
    ],
  };

  return (
    <footer className="bg-[#0D2B28] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/images/logo-symbol.png"
                alt="EstetikFlow Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="text-2xl font-bold text-white">
                EstetikFlow
              </span>
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Software de gestión para centros de estética y spa. Simplifica tu operación diaria.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4E1D2] mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E76F51] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4E1D2] mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E76F51] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4E1D2] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E76F51] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#F4E1D2] text-sm">
            © {currentYear} EstetikFlow. Todos los derechos reservados.
          </p>
          <a
            href="https://www.angelcodesoluciones.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm mt-2 md:mt-0 hover:text-[#E76F51] transition-colors"
          >
            Desarrollado por Angel Code Soluciones
          </a>
        </div>
      </div>
    </footer>
  );
}
