import React from "react";
import Item from "./item";

//le pasa props a item desde firebase y ya no desde propProd (helpers productos)
const ItemList = ({ productosCollection }) => {
  return (
    <div className="productos">
      {productosCollection.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          name={producto.name}
          category={producto.category}
          description={producto.description}
          price={producto.price}
          imgUrl={producto.imgUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
