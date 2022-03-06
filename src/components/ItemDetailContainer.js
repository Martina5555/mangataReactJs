import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [loading, setloading] = useState(true);
  const [producto, setProducto] = useState({});
  const { PId } = useParams();

  //anterior getFetch con use params y pId
  useEffect(() => {
    const conexion = getFirestore();

    const productoItem = doc(conexion, "HelperProductos", PId);
    getDoc(productoItem)
      .then((respuesta) =>
        setProducto({ id: respuesta.id, ...respuesta.data() })
      )
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [PId]);

  return (
    <div>
      {loading ? (
        <h2 className="tituloH2">Cargando ...</h2>
      ) : (
        <ItemDetail propProd={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
