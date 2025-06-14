import { motion } from "framer-motion";
import img1 from "../../assets/SobreNosotros/Resumen/Imagen1.webp"; 
import img2 from "../../assets/SobreNosotros/Resumen/Imagen2.webp";

const Resumen = () => {
  return (
    <section className="px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Imagen con efecto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={img1}
            alt="Vista del hotel"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-blue-600">
            Bienvenido a ApartaHotel Sueños Libres Necoclí
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Donde el descanso, la comodidad y el encanto del Caribe colombiano se encuentran.
            Nuestra ubicación privilegiada a pocos metros de la playa permite a nuestros visitantes disfrutar de experiencias únicas, ya sea en plan de relajación o aventura.
          </p>
          <p className="text-lg leading-relaxed">
            Te ofrecemos espacios diseñados para el confort, atención cercana y servicios pensados para que vivas una estadía inolvidable. ¡Te esperamos con los brazos abiertos! 🌴☀️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resumen;
