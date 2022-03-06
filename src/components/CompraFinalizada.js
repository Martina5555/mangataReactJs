import React from 'react'
import formularioCompra from '../firebase/LogicaOrderYStock'

const CompraFinalizada = () => {
  return (
    <div className='main'>
      {formularioCompra}
    </div>
  )
}

export default CompraFinalizada