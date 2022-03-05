import React from 'react'
import { Link } from 'react-router-dom';
import LogicaOrderYStock from '../firebase/LogicaOrderYStock'; 

const BotonFinalizarCompra = () => {
  return (
    <div>
        <Link to={'/carrito'}>
            <button id="botonAddyComprar" className="boton-verde" onClick={LogicaOrderYStock} >Finalizar compra</button>
        </Link>  
    </div>
  )
}

export default BotonFinalizarCompra