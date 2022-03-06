import React from 'react';
import { useState } from 'react';
import ItemCount from './itemCount';
import BotonFinalizarCompra from './BotonFinalizarCompra';
import BotonSeguirComprando from './BotonSeguirComprando';
import { useCartContext } from '../context/CartContext';

//el prop que paso a itemDetail y que le paso a cada etiqueta {} deben coincidir. propProd ambos o productos ambos
const ItemDetail = ({ propProd }) => {
    //en save add se guarda el valor del contador
    const [saveAdd, setSaveAdd] = useState(0);
    const { agregar } = useCartContext();

    function onAdd(cantidad) {
        setSaveAdd(cantidad);
        agregar(propProd, cantidad);
    }
    //ejemplo de lo mismo con destructuring en item
    return (
        <div>
            <div>
                <h1 className="tituloH2"> {propProd.name} </h1>
                <h4 className="tituloH4"> {propProd.category} </h4>
                <h2 className="tituloH3"> $ {propProd.price} </h2>
                <h2 className="tituloH4"> {propProd.description} </h2>
                <img
                    className="imgProductos"
                    alt={propProd.name}
                    src={propProd.imgUrl}
                />
            </div>
            <div>
                {saveAdd === 0 ? (
                    <ItemCount
                        initial={1}
                        onAdd={onAdd}
                        stock={propProd.stock}
                    />
                ) : (
                    <>
                        <BotonFinalizarCompra /> <BotonSeguirComprando />
                    </>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
