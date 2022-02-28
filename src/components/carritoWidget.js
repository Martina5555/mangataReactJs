import React from "react";
import carritoImagen from "../imagenes/carrito.png";
import { useCartContext } from "../context/CartContext";

function CarritoWidget() {
	const { estadoCartContext, cantidadItems } = useCartContext();
	return (
			(estadoCartContext.length===0
			? <div className="carritoImg">
			<p> {cantidadItems} </p>
			<img className="imgCarrito" src={carritoImagen} alt="boton carrito" />
			</div>
			:<div>
			<img className="imgCarrito" src={carritoImagen} alt="boton carrito" />)
			</div>)
			);
}

export default CarritoWidget;
