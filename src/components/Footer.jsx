import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.svg"; // Asegúrate de tener esta imagen

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="ApartaHotel Sueños Libres" className="w-12 h-12 object-contain" />
            <h2 className="text-lg font-bold text-blue-800">Sueños Libres</h2>
          </div>
          <p className="text-sm text-gray-600">
            A pasos del mar, habitaciones cómodas, atención cálida y servicios turísticos. Ideal para descansar o explorar Necoclí.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">📞 Contacto</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              +57 312 737 0630
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              suenoslibresnecocli@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Calle 44 #48-53, Necoclí
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">🏠 Enlaces</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><a href="/habitaciones" className="hover:text-blue-600">Habitaciones</a></li>
            <li><a href="/servicios" className="hover:text-blue-600">Servicios</a></li>
            <li><a href="/tours" className="hover:text-blue-600">Tours</a></li>
            <li><a href="/contacto" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-3">🌐 Síguenos</h3>
          <div className="flex gap-4 text-blue-700 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/573127370630" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sueños Libres Necoclí. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
