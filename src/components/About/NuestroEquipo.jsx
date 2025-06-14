import { motion } from "framer-motion";
import img1 from "../../assets/SobreNosotros/Equipo/img1.webp";
import img2 from "../../assets/SobreNosotros/Equipo/img2.webp";
import img3 from "../../assets/SobreNosotros/Equipo/img3.webp";
import img4 from "../../assets/SobreNosotros/Equipo/img4.webp";

const equipo = [
  {
    nombre: "Laura Palacios",
    cargo: "Recepcionista",
    imagen: img1,
  },
  {
    nombre: "Martha Gómez",
    cargo: "Coordinadora de Limpieza",
    imagen: img2,
  },
  {
    nombre: "Jairo Torres",
    cargo: "Guía turístico",
    imagen: img3,
  },
  {
    nombre: "Yenny Palacios",
    cargo: "Auxiliar de cocina",
    imagen: img4,
  },
];

const NuestroEquipo = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          Nuestro Equipo
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {equipo.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="w-40 h-40 object-cover rounded-full mb-4 shadow-md"
              />
              <h4 className="text-lg font-semibold text-gray-900">{persona.nombre}</h4>
              <p className="text-sm text-gray-600">{persona.cargo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestroEquipo;
