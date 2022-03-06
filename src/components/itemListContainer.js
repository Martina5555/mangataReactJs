import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import '../estilos/style.css';
import { useParams } from "react-router-dom";
import { collection, docs, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    //categoria de UseParams corresponde al nombre luego de : asignado a la ruta en Routes, App.js
    const {categoria} = useParams();

    const [loading, setloading] = useState(true)
    //Anterior getFetch. Llamada a api
useEffect (([categoria]) => {

   const conexion = getFirestore()
   const productosCollection = collection (conexion, 'HelperProductos')
   //este categoria es de useParams con ternario
   const productosFiltro = categoria
    ? query(productosCollection, where ('category', '==', categoria))
    : productosCollection;
   
   getDocs (productosFiltro)
   .then((respuesta) => setProductos (respuesta.docs.map((prod) =>({id: prod.id, ...prod.data() }))
   )
)
   .catch((err) => console.log(err))
   .finally(()=> setloading(false));
}, [categoria])


    return(
        <div>
 { loading ? <h2 className="tituloH2">Cargando ...</h2> : 
 <>
  <ItemList productosCollection= {productos} /> 
 </>

       }
        </div> 
    )}


export default ItemListContainer 