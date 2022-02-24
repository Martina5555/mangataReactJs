import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import '../estilos/style.css';


const Item = ({id, categoria, name, description, price, picture}) => {
//BACKSTICKS ej mas abajo
  return (

  <div>
     <h4 className='tituloH4'>{categoria}</h4>
     <h3 className='tituloH2'>{name}</h3>
     <h3 className='tituloH3'>{description}</h3>
     <h4 className='tituloH4'>$ {price}</h4>                         
     <img className='imgProductos' src={picture} alt='producto'></img>
     <Link to= {`/productos/detalle/${id}`}>
     <button className='boton-verde'>Detalle </button>
     </Link>
 
  </div>

  )}


export default Item;
