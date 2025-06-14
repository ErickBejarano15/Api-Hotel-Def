import React from 'react'
import HighSlider from '../components/Contact/HighSlider'
import Cuestionario from '../components/Contact/Cuestionario'
import Ubicacion from '../components/Contact/Ubicacion'

const Contacto = () => {
  return (
    <div>
        <HighSlider/>
        <div>
            <Cuestionario/>
            <Ubicacion/>
        </div>
    </div>
  )
}

export default Contacto