import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import getFetch from "../helpers/getFetch";
import '../estilos/style.css';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {categoria} = useParams();

    const [loading, setloading] = useState(true)

useEffect (() => {
    // porque la llamada a api es pesada. Asincronico
    getFetch()
    //simulacion de llamado de api
    //ternario filtro
    .then(res => 
        setProductos(categoria ? res.filter ((productos) => productos.categoria === categoria) : res))
    .catch(err => console.log(err))
    //.then(respuesta => console.log(respuesta))
    .finally(()=> setloading(false))   
    //console.log('api')     
}, [categoria])

    return(
        <div>
 { loading ? <h2 className="tituloH2">Cargando ...</h2> : 
 <ItemList propProd= {productos} /> 
       }
        </div> 
    )}


export default ItemListContainer 