// src/components/OpinionesClientes.jsx
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const OpinionesClientes = () => {
  const [opiniones, setOpiniones] = useState([]);

  // ⚠️ En el futuro, obtendrás esto del backend (con PlaceID y API_KEY protegidos)
  useEffect(() => {
    // Simulación temporal
    setOpiniones([
      {
        autor: "Laura Gómez",
        comentario: "¡Una experiencia maravillosa! Habitaciones cómodas y atención excelente.",
        rating: 5,
      },
      {
        autor: "Carlos Ramírez",
        comentario: "El tour a Capurganá fue increíble. Muy recomendado.",
        rating: 4,
      },
      {
        autor: "Marta Ruiz",
        comentario: "Limpieza impecable y buen aire acondicionado. Volvería sin duda.",
        rating: 5,
      },
    ]);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-100 to-emerald-100 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Qué dicen nuestros clientes
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {opiniones.map((op, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-md transition"
          >
            <div className="flex items-center mb-2 gap-2">
              {[...Array(op.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{op.comentario}"</p>
            <p className="text-sm font-semibold text-right text-gray-600">
              — {op.autor}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpinionesClientes;
