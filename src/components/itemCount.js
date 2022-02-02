import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
import ItemListContainer from "./itemListContainer";



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
    <button className="mas" onClick={handleAumentar}> + </button>
    {contador}
    <button className="menos"onClick={handleRestar}> - </button>
    <button className="Addcarrito"onClick={addToCart}> Agregar al carrito </button>
    </div>
)
}

export default ItemCount