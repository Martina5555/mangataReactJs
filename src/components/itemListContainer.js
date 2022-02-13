import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "./itemCount";
import ItemList from "./itemList";
import getFetch from "../helpers/getFetch";
import '../estilos/style.css';



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
 { loading ? <h2 className="tituloH2">Cargando ...</h2> : 
 <ItemList propProd= {productos} />
       }
        </div> 
    )}


export default ItemListContainer 