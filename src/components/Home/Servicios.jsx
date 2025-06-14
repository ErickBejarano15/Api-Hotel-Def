import { motion } from "framer-motion";
import { FaWifi, FaShower, FaSnowflake, FaCar, FaBroom, FaUtensils, FaGlassCheers } from "react-icons/fa";
import { MdTour } from "react-icons/md";

const serviciosBasicos = [
  { icon: <FaWifi />, label: "WiFi" },
  { icon: <FaShower />, label: "Baño privado" },
  { icon: <FaSnowflake />, label: "Aire acondicionado" },
  { icon: <FaCar />, label: "Parqueadero convenio" },
  { icon: <FaBroom />, label: "Limpieza" },
  { icon: <FaUtensils />, label: "Restaurante por pedido" },
  { icon: <FaGlassCheers />, label: "Bebidas frías" },
];

const tours = [
  {
    nombre: "Día de sol",
    descripcion: "Viaje a tres playas: La Miel, Sapzurro y Capurganá. Incluye refrigerio y almuerzo.",
    precio: 210000,
    condiciones: true,
    imagenDesktop: "/images/tours/sol_desktop.webp",
    imagenMobile: "/images/tours/sol_mobile.webp",
  },
  {
    nombre: "Pasadía Capurganá",
    descripcion: "Viaje Necoclí - Capurganá ida y regreso.",
    precio: 190000,
    condiciones: true,
    imagenDesktop: "/images/tours/capurgana_desktop.webp",
    imagenMobile: "/images/tours/capurgana_mobile.webp",
  },
  {
    nombre: "La Ensenada",
    descripcion: "Tour con varias tarifas por persona.",
    precio: null,
    condiciones: true,
    imagenDesktop: "/images/tours/ensenada_desktop.webp",
    imagenMobile: "/images/tours/ensenada_mobile.webp",
  },
  {
    nombre: "Volcán de Lodo",
    descripcion: "Visita al volcán de lodo. Naturaleza y salud.",
    condiciones: true,
    imagenDesktop: "/images/tours/volcan_desktop.webp",
    imagenMobile: "/images/tours/volcan_mobile.webp",
  },
];

const Servicios = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 xl:px-32 max-w-full mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">Servicios</h2>

      {/* Servicios básicos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mb-16">
        {serviciosBasicos.map((servicio, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="text-4xl text-blue-600 animate-bounce">{servicio.icon}</div>
            <span className="text-sm text-gray-700 font-semibold">{servicio.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Tours */}
      <div className="space-y-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Tours Disponibles</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-500/90 to-emerald-400/80 text-white shadow-xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <MdTour className="text-3xl" />
                <h4 className="text-xl font-bold">{tour.nombre}</h4>
              </div>
              <picture>
                <source media="(max-width: 768px)" srcSet={tour.imagenMobile} />
                <img
                  src={tour.imagenDesktop}
                  alt={`Imagen de ${tour.nombre}`}
                  className="rounded-lg mb-3 w-full h-48 object-cover"
                />
              </picture>
              <p className="text-sm mb-2">{tour.descripcion}</p>
              {tour.precio && <p className="font-bold">Precio: ${tour.precio.toLocaleString()} COP</p>}
              {tour.condiciones && <p className="text-xs italic mt-1">* Aplican términos y condiciones</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
