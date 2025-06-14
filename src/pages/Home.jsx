import HighSlider from "../components/Home/High_Slider.jsx";
import Habitaciones_component from "../components/Home/Habitaciones_component.jsx";
import SobreNosotrosComp from "../components/Home/SobreNosotrosComp.jsx";
import Servicios from "../components/Home/Servicios.jsx";
import PopupImagen from "../components/Home/PopupImagen.jsx";
import Colaboradores from "../components/Home/Colaboradores.jsx";
import OpinionesClientes from "../components/Home/OpinionesClientes.jsx";
import Ubicacion from "../components/Home/Ubicacion.jsx";
import RedesSociales from "../components/Home/Redessociales.jsx";

const Home = () => {
  return (
    <div>
      <PopupImagen />
      <HighSlider />
      <div>
        <SobreNosotrosComp />
        <Servicios />
        <Habitaciones_component />
        <Colaboradores />
        <OpinionesClientes />
        <Ubicacion />
        <RedesSociales/>
      </div>
    </div>
  );
};

export default Home;
