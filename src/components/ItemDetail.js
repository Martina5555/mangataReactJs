import React from 'react'
import { useState } from 'react';
import ItemCount from './itemCount';
import BotonFinalizarCompra from './BotonFinalizarCompra'; 
import productos from '../helpers/productos';
//el prop que paso a itemDetail y que le paso a cada etiqueta {} deben coincidir. propProd ambos o productos ambos
const ItemDetail = ({propProd}) => {
  //en save add se guarda el valor del contador
  const [saveAdd, setSaveAdd] =useState(0)

  function onAdd (cantidad){
    setSaveAdd (cantidad)
    } 
    //ejemplo de lo mismo con destructuring en item
  return (
    <div>

<h1 className='tituloH2'> {propProd.name} </h1>
<h4 className='tituloH4'> {propProd.categoria} </h4>
<h2 className='tituloH3'> $ {propProd.price} </h2>
<h2 className='tituloH4'> {propProd.description} </h2>
<img className='imgProductos' src={propProd.picture}></img>
{saveAdd === 0 ? <ItemCount initial = {1} onAdd= {onAdd} stock={productos.stock}/> : <BotonFinalizarCompra/>}

    </div>
  )
}

export default ItemDetail