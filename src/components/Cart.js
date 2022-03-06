import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

function Cart() {
    const { estadoCartContext, quitar1, vaciarCart, totalCart, cantidadItems } =
        useCartContext();
    return estadoCartContext.length === 0 ? (
        <>
            <h1 className="tituloH2">No hay items seleccionados</h1>
            <Link to="/productos">
                <button className="boton-verde">Buscar productos</button>
            </Link>
        </>
    ) : (
        <div>
            {estadoCartContext.map((productin) => (
                <div key={productin.data.id}>
                    <h2 className="tituloH2">{productin.data.name}</h2>
                    <h2 className="tituloH3">
                        {productin.cantidad} x ${productin.data.price}
                    </h2>
                    <img
                        className="imgProductos"
                        src={productin.data.imgUrl}
                        alt="fotin"
                    />
                    <button
                        className="boton-verde"
                        onClick={() => quitar1(productin.data.id)}
                    >
                        X
                    </button>

                    <div>
                        <h3 className="tituloH4">{`Total: $${totalCart()}. Hay ${cantidadItems()} items en tu Carrito`}</h3>
                        <button className="boton-verde" onClick={vaciarCart}>
                            Vaciar Carrito
                        </button>
                        <Link to={'/finalizado'}>
                            <button className="boton-verde">Comprar</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
