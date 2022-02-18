import React from "react";
import { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
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

 return(
    <div className="container">
    <button className="boton-verde" onClick={handleAumentar}> + </button>
    {contador}
    <button className="boton-verde"onClick={handleRestar}> - </button>
    <button className="boton-verde"onClick={addToCart}> Agregar al carrito </button>
    </div>
)
}

 

export default ItemCount