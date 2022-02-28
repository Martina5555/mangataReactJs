import React from "react";
import carritoImagen from "../imagenes/carrito.png";
import { useCartContext } from "../context/CartContext";

function CarritoWidget() {
	const { estadoCartContext, cantidadItems } = useCartContext();
	return (
		<>	{estadoCartContext.length===0
			? <div className="carritoImg">
			<img className="imgCarrito" src={carritoImagen} alt="boton carrito" />
			</div>
			:<div>
			<img className="imgCarrito" src={carritoImagen} alt="boton carrito" />
			<p> Hay {cantidadItems()} productos en el Carrito </p>
			</div>}
			</>)
			
}

export default CarritoWidget;
