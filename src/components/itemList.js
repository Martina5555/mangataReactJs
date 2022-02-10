import React from 'react';
import Item from './item';
import ItemDetail from './ItemDetail';


const ItemList = ({propProd}) => {
  return (
  <div>
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
