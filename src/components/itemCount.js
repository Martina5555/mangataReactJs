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
 
    </div>
)
}

export default ItemCount