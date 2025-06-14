import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Imágenes responsive
import promoDesktop from "../../assets/Inicio/POPUP.webp";
import promoMobile from "../../assets/Inicio/POPUP_mobile.webp";

const PopupPromo = () => {
  const [visible, setVisible] = useState(true);
  const popupRef = useRef(null);

  // Cierre al hacer clic por fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center px-4"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl"
          >
            {/* Botón de cierre */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full px-2 py-1 text-sm z-10 hover:bg-black/80"
            >
              ✕
            </button>

            {/* Imagen responsive */}
            <picture>
              <source media="(max-width: 768px)" srcSet={promoMobile} />
              <img
                src={promoDesktop}
                alt="Promoción"
                className="w-full h-auto object-contain rounded-xl"
              />
            </picture>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupPromo;
