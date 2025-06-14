import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/SobreNosotros/slide.webp";

const HighSlider = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mt-16 md:mt-28">
      {/* Imagen de fondo con animación */}
      <motion.img
        src={img}
        alt="Sobre Nosotros"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full object-cover object-center"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Texto sobre la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl text-base md:text-lg font-medium"
        >
          Descubre quiénes somos y por qué nuestros visitantes nos eligen para descansar, explorar y vivir experiencias únicas en Necoclí.
        </motion.p>
      </div>
    </section>
  );
};

export default HighSlider;
