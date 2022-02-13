import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/style.css';
import ItemCount from './itemCount';

const Item = ({id, categoria, name, description, price, picture}) => {

function onAdd (cantidad){
  //hay que agregar el id de cada producto en el cLog
  console.log (cantidad)
  }
  
//BACKSTICKS ej mas abajo
  return (

  <div>
     <h4 className='tituloH4'>{categoria}</h4>
     <h3 className='tituloH1'>{name}</h3>
     <h3 className='tituloH3'>{description}</h3>
     <h4 className='tituloH4'>$ {price}</h4>                         
     <img className='imgProductos' src={picture} alt='producto'></img>
     <Link to= {`/productos/detalle/${id}`}>
     <button className='boton-verde'>Detalle </button>
     </Link>
      <ItemCount stock={5} initial = {1} onAdd= {onAdd} />
  </div>

  )}


export default Item;
