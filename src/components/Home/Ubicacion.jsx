import React from "react";

const Ubicacion = () => {
  const whatsappLink = "https://wa.me/573127370630?text=Hola,%20quiero%20más%20información%20sobre%20el%20Aparta%20Hotel%20Sueños%20Libres%20Necoclí.";

  return (
    <section className="bg-gradient-to-r from-indigo-700/75 to-emerald-700/75 py-16 px-6 md:px-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">📍 Ubicación</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Mapa */}
        <div className="w-full h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Ubicación del Hotel"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7893.565243158884!2d-76.782382!3d8.422997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e508d6faedddbbb%3A0x77c255226c5a961f!2sHotel%20Necocl%C3%AD%20Sue%C3%B1os%20Libres!5e0!3m2!1ses!2sco!4v1738198930045!5m2!1ses!2sco"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Información y botón */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">¿Dónde estamos ubicados?</h3>
          <p className="text-base md:text-lg mb-4">
            El Aparta Hotel Sueños Libres Necoclí se encuentra estratégicamente ubicado en Necoclí, Antioquia, a pocos metros de la playa y de los principales puntos turísticos. 🌴☀️
          </p>
          <p className="text-base md:text-lg mb-6">
            Ofrecemos fácil acceso a restaurantes, transporte y actividades para disfrutar al máximo tu estadía.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-md transition w-full md:w-auto text-center inline-block"
          >
            💬 Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
