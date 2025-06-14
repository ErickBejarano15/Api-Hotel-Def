import Logo1 from "../../assets/Inicio/Colaboradores/LogoCaribeSAS.svg";
import { motion } from "framer-motion";


const logos = [
  { src: Logo1, alt: "Logo 1" },
];

const Colaboradores = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Nuestros Colaboradores
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-24 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Colaboradores;
