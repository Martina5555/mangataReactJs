import React, {useContext, createContext, useState} from 'react'
import ItemCount from '../components/itemCount'
const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
	const [estadoCartContext, setEstadoCartContext] = useState([])

	
	function agregar(productillo, cantidad) {
		if(evitarDuplicados(productillo)) {
			const cambiarCantidad = [...estadoCartContext]
			cambiarCantidad.map(prod => {            
				if(prod.nombre === productillo ) 
                {prod.cantidad += 1}
			})
			return setEstadoCartContext(cambiarCantidad)
		}
		return setEstadoCartContext([...estadoCartContext, {nombre: productillo, cantidad: 1}])
	}

	const evitarDuplicados = (p) => {
           //i hace referencia a los elementos dentro de EstadoCartContext y find devuelve true/false: find es una funcion 
        //que tiene otra funcion dentro. Si encuentra devuelve true sino false
		const findProdEnCartContext = estadoCartContext.find((i) => {
			return i.nombre === p
		})
		return findProdEnCartContext
	}

	const quitar1 = (productin) => {
		const quitarProducto = [...estadoCartContext]
		const productoQuitado = quitarProducto.filter(prod => prod.nombre !== productin)
		return setEstadoCartContext(productoQuitado)
	}

	const vaciarCart = () => setEstadoCartContext([])
	
	return (
        /*Antes habia generado un loop infinito poniendo CartContextProvider sin el 
. porque llamaba a la funcion del mismo componente y no a la accion .Provider: */
		<CartContext.Provider value={{agregar, estadoCartContext, quitar1, vaciarCart}}>
			{children}
		</CartContext.Provider>
	)
}






