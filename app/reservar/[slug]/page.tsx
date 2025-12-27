import BookingFlow from "./BookingFlow";
import { apiConfig, Clinica } from "./config/api";

async function getClinicaData(slug: string): Promise<Clinica | null> {
  try {
    const response = await fetch(apiConfig.endpoints.clinic(slug), {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Error fetching clinic data");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export default async function ReservarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const clinica = await getClinicaData(slug);

  if (!clinica) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-light/10 to-secondary/30 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Clínica no encontrada
          </h1>
          <p className="text-gray-600 mb-6">
            Lo sentimos, no pudimos encontrar la clínica que buscas o las reservas
            no están habilitadas. Por favor, verifica el enlace e intenta nuevamente.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }

  // Add slug to clinica object for child components
  return <BookingFlow clinica={{ ...clinica, slug }} />;
}
