import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

function ItemCount({initial, stock, onAdd, productillo}) {
const [contador, setContador] = useState(initial);

const handleAumentar=()=>{
    if (contador < stock){
        setContador(contador + 1)
    }
}

const handleRestar =()=>{
    if (contador > initial){
    setContador(contador  - 1)
    }
}

const addToCart =()=>{
    onAdd (contador)
}
const {agregar} = useCartContext();  /*useCartContext evuelve un objeto que devuelve productillo y cantidad*/

 return(
    <div className="container">
    <button className="boton-verde" onClick={handleAumentar}> + </button>
    {contador}
    <button className="boton-verde"onClick={handleRestar}> - </button>
    <button className="boton-verde"onClick={addToCart, agregar(productillo)}> Agregar al carrito </button>
    </div>
)
}

 

export default ItemCount