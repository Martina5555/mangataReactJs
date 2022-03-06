import React, { useContext, createContext, useState } from "react";
const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [estadoCartContext, setEstadoCartContext] = useState([]);

  const evitarDuplicados = (p) => {
    //i hace referencia a los elementos dentro de EstadoCartContext y find devuelve true/false: find es una funcion
    //que tiene otra funcion dentro. Si encuentra devuelve true sino false
    const findProdEnCartContext = estadoCartContext.find((i) => {
      return i.data.id === p.id;
    });
    return findProdEnCartContext;
  };

  function agregar(productillo, cantidad) {
    if (evitarDuplicados(productillo)) {
      let cambiarCantidad = [...estadoCartContext];
      cambiarCantidad = cambiarCantidad.map((prod) =>
        prod.data.id === productillo.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      return setEstadoCartContext(cambiarCantidad);
    }
    return setEstadoCartContext([
      ...estadoCartContext,
      { data: productillo, cantidad: cantidad },
    ]);
  }

  const quitar1 = (id) => {
    return setEstadoCartContext(
      estadoCartContext.filter((el) => el.data.id !== id)
    );
  };

  const vaciarCart = () => setEstadoCartContext([]);

  const totalCart = () => {
    //el 0 le indica a acumulacion el valor de arranque. La funcion .reduce devuelve numero.
    return estadoCartContext.reduce(
      (acumulacion, productete) =>
        acumulacion + productete.data.price * productete.cantidad,
      0
    );
  };
  const cantidadItems = () => {
    return estadoCartContext.reduce(
      (acumulacion, productete) => acumulacion + productete.cantidad,
      0
    );
  };
  //guardar Cart en memoria
  localStorage.setItem("CartStorage", estadoCartContext);

  return (
    /*Antes habia generado un loop infinito poniendo CartContextProvider sin el 
. porque llamaba a la funcion del mismo componente y no a la accion .Provider: */
    <CartContext.Provider
      value={{
        agregar,
        estadoCartContext,
        quitar1,
        vaciarCart,
        totalCart,
        cantidadItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
