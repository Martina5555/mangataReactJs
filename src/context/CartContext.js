import React, {useContext, createContext, useState} from 'react'


const CartContext = createContext([])  
//usecontext
export const useCartContext =()=> useContext(CartContext)



export const CartContextProvider = ({children}) => {
    const [estadoCartContext, setEstadoCartContext] =useState([])
   
    function agregar(productillo, cantidad){
        return setEstadoCartContext([...estadoCartContext, productillo, cantidad])
    }
    const noDuplicados =(parametro)=> {
        //i hace referencia a los elementos entro de EstadoCartContext y find devuelve true/false
        const findEstadoCartContext = estadoCartContext.find ((i) => {
        return i=== parametro})
    }
     return(

           <CartContextProvider value={{agregar, estadoCartContext}}>
            {children}
         </CartContextProvider>
        )
}


