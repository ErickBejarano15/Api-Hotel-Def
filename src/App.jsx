import { Routes,Route } from "react-router";
import NavBar from "./components/Header"; // Ruta relativa correcta
import "./index.css";                     // Tailwind y estilos base
import Inicio from "./pages/Home";       // Página principal
import Habitaciones from "./pages/Habitaciones";
import SobreNosotros from "./pages/SobreNosotros";
import Blog from "./pages/Blog";
import Ingreso_Registro from "./pages/Ingreso_Registro";
import ScrollToTop from "./context/ScrollToTop";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Habitaciones" element={<Habitaciones/>} />
        <Route path="/SobreNosotros" element={<SobreNosotros/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/IngresoRegistro" element={<Ingreso_Registro/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
