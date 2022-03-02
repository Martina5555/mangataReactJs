import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import '../estilos/style.css';
//import { useParams } from "react-router-dom";
import { collection, docs, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
   // const {categoria} = useParams();

    const [loading, setloading] = useState(true)

    //Anterior getFetch. Llamada a api
useEffect (() => {

   const db = getFirestore()

   const productosCollection = collection (db, 'HelperProductos')
   getDocs (productosCollection)
   .then(respuesta => setProductos (respuesta.docs.map(prod =>({id: prod.id, ...prod.data()}))))
   .catch(err => console.log(err))
   .finally(()=> setloading(false))
}, [])

    return(
        <div>
 { loading ? <h2 className="tituloH2">Cargando ...</h2> : 
 <ItemList productosCollection= {productos} /> 
       }
        </div> 
    )}


export default ItemListContainer 