import React from 'react';
import Item from './item';
import '../estilos/style.css';


const ItemList = ({propProd}) => {
  return (
  <div className='productos'>
    {propProd.map ((producto)=>
< Item
key={producto.id}
name={producto.name}
categoria={producto.ategoria}
description={producto.description}
price={producto.price}
picture={producto.picture}
/>
    )}

    </div> 
  );
  };

export default ItemList;
