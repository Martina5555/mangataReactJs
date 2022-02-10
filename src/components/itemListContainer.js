import React from "react";
import { useEffect, useState } from "react";
import imgProducto from "../AceiteRicino.jpeg";
import ItemCount from "./itemCount";
import ItemList from "./itemList";
import getFetch from "../helpers/getFetch";
function onAdd (cantidad){
console.log (cantidad)
}

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
const [loading, setloading] = useState(true)

useEffect (() => {
    // porque la llamada a api es pesada. Asincronico
    getFetch
    //simulacion de llamado de api
    .then(res => setProductos(res))

    .catch(err => console.log(err))
    //.then(respuesta => console.log(respuesta))
    .finally(()=> setloading(false))   
    //console.log('api')     
}, [])

    return(
        <div>
<a href="index.html">
<img className=" prod1" src={imgProducto} alt="Aceite de ricino"/>
</a>
<button>botoncito</button>

 <ItemCount stock={5} initial = {1} onAdd= {onAdd} />
 { loading ? <h2>Cargando ...</h2> : 
 <ItemList propProd= {productos} />
       }
        </div> 
    )}


export default ItemListContainer 