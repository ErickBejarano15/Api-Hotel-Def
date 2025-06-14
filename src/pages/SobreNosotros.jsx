import HighSlider from "../components/About/HighSlider";
import Resumen from "../components/About/Resumen";
import FacilidadesHotel from "../components/About/FacilidadesHotel";
import NuestroEquipo from "../components/About/NuestroEquipo";

const SobreNosotros = () => {
  return (
    <div>
      <HighSlider/>
      <div>
        <Resumen/>
        <FacilidadesHotel/>
        <NuestroEquipo/>
      </div>
    </div>
  )
}

export default SobreNosotros