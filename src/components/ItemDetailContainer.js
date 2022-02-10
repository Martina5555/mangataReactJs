import React, { useState, useEffect } from 'react'
import getFetch from '../helpers/getFetch';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const [productos,setProductos] =useState({});
  const productosId = 1;

  useEffect(() => {
    getFetch().then((data) => {
      setProductos(data.find((item) => item.id === productosId));
    });
  }, []);
  

  return (
    <div>
    <ItemDetail productos= {productos} />
    </div>
  )
}

export default ItemDetailContainer