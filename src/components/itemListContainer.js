import React from "react";
import imgProducto from "../AceiteRicino.jpeg";
import ItemCount from "./itemCount";

function onAdd (cantidad){
console.log (cantidad)
}




const ItemListContainer = () => {
    return(
        <>
<a href="index.html">
<img className=" prod1" src={imgProducto} alt="Aceite de ricino"/>
</a>
<button></button>
 <ItemCount stock={5} initial = {1} onAdd= {onAdd} />

</>
    )
}

export default ItemListContainer