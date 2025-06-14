import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Cierra el menú al hacer scroll hacia arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY && menuOpen) {
        setMenuOpen(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white shadow-lg py-2 md:py-3 px-4 md:px-32 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="pl-2 pr-2 border-none outline-none">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto md:h-20 object-contain"
          />
        </Link>

        {/* Botón hamburguesa */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="text-3xl" />
        </div>

        {/* Menú de navegación */}
        <div
          className={`absolute top-full left-0 w-full bg-gris-canva md:bg-transparent md:static md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 md:opacity-100 md:max-h-screen"
          }`}
        >
          <div className="flex flex-col md:flex-row md:gap-5">
            {[
              { path: "/", label: "Inicio" },
              { path: "/Habitaciones", label: "Habitaciones" },
              { path: "/SobreNosotros", label: "SobreNosotros" },
              { path: "/BLog", label: "Blog" },
              { path: "/Contacto", label: "Contacto" },
              { path: "/Ingreso", label: "Ingreso_Registro" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 font-medium text-black transition duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
