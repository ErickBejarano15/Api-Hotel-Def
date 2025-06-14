import React, { useEffect, useState } from 'react';
import video from "../../assets/Inicio/SobreNosotros/video1.mp4";
import img1 from "../../assets/Inicio/SobreNosotros/imagen.webp";
import { motion, AnimatePresence } from "framer-motion";

const slidesMobile = [
  {
    content: (
      <>
        <video
          src={video}
          muted
          autoPlay
          loop
          playsInline
          className="rounded-lg w-full h-[75vh] object-contain"
        />
        <div className="text-white text-justify mt-4">
          <h2 className="text-2xl font-bold mb-2">Sobre Nosotros</h2>
          <p>
            Somos una empresa comprometida con soluciones integrales en energía y redes de protección,
            desarrollando proyectos con responsabilidad, innovación y calidad.
          </p>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="text-white text-justify mb-4">
          <p>
            Contamos con un equipo capacitado y herramientas certificadas para ejecutar trabajos seguros y eficientes
            en instalaciones eléctricas, sistemas solares y detección de incendios.
          </p>
        </div>
        <img
          src={img1}
          alt="Imagen"
          className="w-full h-[300px] object-contain rounded-lg"
        />
      </>
    ),
  },
    {
    content: (
      <>
        <div className="text-white text-justify mb-4">
          <p>
            Contamos con un equipo capacitado y herramientas certificadas para ejecutar trabajos seguros y eficientes
            en instalaciones eléctricas, sistemas solares y detección de incendios.
          </p>
        </div>
        <img
          src={img1}
          alt="Imagen"
          className="w-full h-[300px] object-contain rounded-lg"
        />
      </>
    ),
  },
];

const SobreNosotrosComp = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesMobile.length);
    }, isMobile ? 10000 : 20000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-600/95 to-emerald-400/75 px-4 py-10 flex items-center justify-center">
      <div className="relative w-full max-w-7xl">

        {/* MOBILE SLIDER */}
        {isMobile ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="flex flex-col items-center"
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {slidesMobile[activeSlide].content}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === 0 ? slidesMobile.length - 1 : prev - 1
                  )
                }
                className="bg-white text-black px-3 py-1 rounded shadow"
              >
                ◀
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % slidesMobile.length)
                }
                className="bg-white text-black px-3 py-1 rounded shadow"
              >
                ▶
              </button>
            </div>
          </>
        ) : (
          // DESKTOP GRID COMO DISEÑO
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.div variants={itemVariants}>
              <video
                src={video}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="text-white text-justify">
              <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
              <p>
                Somos una empresa comprometida con soluciones integrales en energía y redes de protección,
                desarrollando proyectos con responsabilidad, innovación y calidad.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-white text-justify">
              <p>
                Contamos con un equipo capacitado y herramientas certificadas para ejecutar trabajos seguros y eficientes
                en instalaciones eléctricas, sistemas solares y detección de incendios.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <img
                src={img1}
                alt="Imagen"
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SobreNosotrosComp;
