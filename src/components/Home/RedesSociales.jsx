import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const redes = [
  {
    nombre: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/tu_pagina",
    color: "bg-blue-600",
  },
  {
    nombre: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/tu_cuenta",
    color: "bg-pink-500",
  },
  {
    nombre: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@tu_usuario",
    color: "bg-black",
  },
  {
    nombre: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/573127370630?text=Hola,%20quiero%20más%20información",
    color: "bg-green-500",
  },
  {
    nombre: "YouTube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@tu_canal",
    color: "bg-red-600",
  },
];

const RedesSociales = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">Síguenos en nuestras redes</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {redes.map((red, index) => (
          <motion.a
            key={index}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className={`text-white text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition ${red.color}`}
            title={red.nombre}
          >
            {red.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default RedesSociales;
