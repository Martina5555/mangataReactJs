import React from 'react'
import { Link } from 'react-router-dom';

const BotonFinalizarCompra = () => {
  return (
    <div>
        <Link to={'/carrito}'}>
            <button id="botonAddyComprar" className="boton-verde" >Finalizar compra</button>
        </Link>  
    </div>
  )
}

export default BotonFinalizarCompra