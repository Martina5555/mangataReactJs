import React from 'react'
import { useCartContext } from "../context/CartContext";

function Cart() {
  const { estadoCartContext, quitar1, vaciarCart } = useCartContext();
  return (
    <div>
      <h1>No hay items seleccionados</h1>
	  <button onClick={vaciarCart}>borrarTodo</button>
      {estadoCartContext.map((productin) => (
        <div key={productin.data.id}>
          <h2>{productin.data.name}</h2>
          <h2>{productin.cantidad} x ${productin.data.price}</h2>
          <button onClick={() => quitar1(productin.data.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
 

export default Cart