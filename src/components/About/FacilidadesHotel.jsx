import { motion } from "framer-motion";
import { FaBed, FaShieldAlt, FaUtensils, FaWifi, FaCarAlt } from "react-icons/fa";
import habitacion from "../../assets/SobreNosotros/Facilidades/habitacion.webp"; // tu imagen decorativa

const facilidades = [
  {
    icon: <FaBed />,
    title: "Habitaciones cómodas",
    desc: "Suites amplias, limpias y ventiladas con todas las comodidades esenciales.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Seguridad 24/7",
    desc: "Personal capacitado, cámaras de vigilancia y atención las 24 horas.",
  },
  {
    icon: <FaUtensils />,
    title: "Servicio de comida",
    desc: "Desayunos, almuerzos y cenas a pedido con productos frescos.",
  },
  {
    icon: <FaWifi />,
    title: "Wi-Fi gratuito",
    desc: "Conéctate en cualquier área del hotel sin costo adicional.",
  },
  {
    icon: <FaCarAlt />,
    title: "Parqueadero",
    desc: "Acceso a parqueadero con convenio cercano para mayor tranquilidad.",
  },
];

const FacilidadesHotel = () => {
  return (
    <section className="bg-gray-50 px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Lista de facilidades */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-10"
          >
            Comodidades del Hotel
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {facilidades.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="text-3xl text-emerald-600">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Imagen derecha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={habitacion}
            alt="Habitación"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FacilidadesHotel;
