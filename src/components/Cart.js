import React from 'react'
import { useCartContext } from "../context/CartContext";

function Cart() {
  const { estadoCartContext, eliminarUno, borraTodos } = useCartContext();
  return (
    <div>
      <h1>No hay items seleccionados</h1>
	  <button onClick={borraTodos}>borrarTodo</button>
      {estadoCartContext.map((productin) => (
        <div key={productin.id}>
          <h2>{productin.nombre}</h2>
          <p>{productin.quantity}</p>
          <button onClick={() => eliminarUno(productin.nombre)}>X</button>
        </div>
      ))}
    </div>
  );
}
 

export default Cart