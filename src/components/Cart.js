import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

function Cart() {
  const { estadoCartContext, quitar1, vaciarCart, totalCart, cantidadItems } = useCartContext();
  return (
    (estadoCartContext.length===0
    ?<>
    <h1>No hay items seleccionados</h1>  
    <Link to= "/productos" >
    <button className='boton-verde'>Buscar productos</button>
    </Link>
    </>
    :<div>
      <button onClick={vaciarCart}>borrarTodo</button>
        {estadoCartContext.map((productin) => (
          <div key={productin.data.id}>
            <h2>{productin.data.name}</h2>
            <h2>{productin.cantidad} x ${productin.data.price}</h2>
            <button onClick={() => quitar1(productin.data.id)}>X</button>
            <div>
             <h3 className='TituloH3'>{`Total: $${totalCart()} ${cantidadItems()}items en tu Carrito`}</h3> 
            </div>
          </div>
        ))}
      </div> )
    
  );
}
 

export default Cart