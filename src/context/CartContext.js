import React, { useContext, createContext, useState } from "react";
const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	const [estadoCartContext, setEstadoCartContext] = useState([]);

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

	const evitarDuplicados = (p) => {
		//i hace referencia a los elementos dentro de EstadoCartContext y find devuelve true/false: find es una funcion
		//que tiene otra funcion dentro. Si encuentra devuelve true sino false
		const findProdEnCartContext = estadoCartContext.find((i) => {
			return i.data.id === p.id;
		});
		return findProdEnCartContext;
	};

	const quitar1 = (id) => {
		return setEstadoCartContext(
			estadoCartContext.filter((el) => el.data.id !== id)
		);
	};

	const vaciarCart = () => setEstadoCartContext([]);

	return (
		/*Antes habia generado un loop infinito poniendo CartContextProvider sin el 
. porque llamaba a la funcion del mismo componente y no a la accion .Provider: */
		<CartContext.Provider
			value={{ agregar, estadoCartContext, quitar1, vaciarCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
