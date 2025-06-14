import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import slide1 from "../../assets/Inicio/slide/slide_1.webp";
import slide2 from "../../assets/Inicio/slide/slide_2.webp";
import slide3 from "../../assets/Inicio/slide/slide_3.webp";
import slide4 from "../../assets/Inicio/slide/slide_4.webp";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import "../../HeroSection.css";

const High_Slider = () => {
  const navigate = useNavigate();

  const allItems = [
    {
      name: "FOREST SPHERE",
      des: "Explora la belleza de la naturaleza y la magia del bosque.",
      backGround: slide1,
      route: "/habitaciones",
    },
    {
      name: "APARTAHOTEL SUEÑOS LIBRES NECOCLI",
      des: "Un sendero lleno de vida y tranquilidad en medio de un bosque.",
      backGround: slide2,
      route: "/habitaciones",
    },
    {
      name: "SUNNY FIELD",
      des: "Descubre paisajes luminosos y llenos de color.",
      backGround: slide3,
      route: "/reservas",
    },
    {
      name: "ICELAND",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in?",
      backGround: slide4,
      route: "/reservas",
    },
  ];

  const [items, setItems] = useState(allItems);

  // Botón 'Siguiente' (mueve el primer elemento al final)
  const handlenext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  // Botón 'Anterior' (mueve el último elemento al inicio)
  const handleprev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  // ⏱️ Animación automática cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handlenext();
    }, 7000); // 7000ms = 7 segundos
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="mt-16 md:mt-28">
            
        <div className="hero-container "> {/* Espaciado inferior en móvil y escritorio */}
      <div className="hero-slide">
        {items.map((item, index) => (
          <div
            key={index}
            className="hero-item"
            style={{ backgroundImage: `url(${item.backGround})` }}
          >
            <div className="hero-content">
              <h2 className="hero-name">{item.name}</h2>
              <p className="hero-des">{item.des}</p>
              <button
                className="hero-button-reservas"
                onClick={() => navigate(item.route)}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-button">
        <button onClick={handleprev} className="hero-prev">
          <HiArrowNarrowLeft size={24} />
        </button>
        <button onClick={handlenext} className="hero-next">
          <HiArrowNarrowRight size={24} />
                </button>
            </div>
        </div>
    </div>

  );
};

export default High_Slider;
