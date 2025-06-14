import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import hab1 from "../../assets/Inicio/Habitaciones/habitacion1.webp";
import hab2 from "../../assets/Inicio/Habitaciones/habitacion2.webp";
import hab3 from "../../assets/Inicio/Habitaciones/habitacion3.webp";
import hab4 from "../../assets/Inicio/Habitaciones/habitacion4.webp";

const rooms = [
  {
    img: hab1,
    title: "Suite Deluxe",
    desc: "Perfecta para una experiencia de lujo y descanso.",
  },
  {
    img: hab2,
    title: "Habitación Doble",
    desc: "Ideal para familias o amigos que viajan juntos.",
  },
  {
    img: hab3,
    title: "Vista al Mar",
    desc: "Disfruta de una vista espectacular desde tu cama.",
  },
  {
    img: hab4,
    title: "Vista al Mar",
    desc: "Disfruta de una vista espectacular desde tu cama.",
  },
];

// 🎯 Componente con animación tilt suave
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [0, 300], [10, -10]), {
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(x, [0, 300], [-10, 10]), {
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX);
    y.set(posY);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY }}
      className="rounded-xl shadow-xl bg-white cursor-pointer transition-transform hover:scale-[1.02] will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const Habitaciones_component = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="px-6 md:px-32 py-16 bg-white shadow-lg">
      {/* Encabezado */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <span className="text-lg text-black font-semibold tracking-wide">
            ✧ HABITACIONES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            NUESTRAS HABITACIONES
          </h2>
        </div>
        <p className="text-gray-700 max-w-xl mt-6 md:mt-0">
          Ofrecemos una combinación armoniosa de comodidad y elegancia para que vivas una estadía excepcional. Todas las habitaciones cuentan con ropa de cama de alta calidad y almohadas seleccionadas.
        </p>
      </div>

      {/* MOBILE: Swiper con dots */}
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full "
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <TiltCard>
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-[260px] object-cover rounded-t-xl "
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold  text-gray-800 mb-2">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{room.desc}</p>
                </div>
              </TiltCard>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // DESKTOP: Grid con efecto tilt
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {rooms.map((room, index) => (
            <TiltCard key={index}>
              <img
                src={room.img}
                alt={room.title}
                className="w-full h-[280px] object-cover rounded-t-xl "
              />
              <div className="p-5 ">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-sm">{room.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Habitaciones_component;
