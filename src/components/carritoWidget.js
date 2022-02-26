import React from "react";
import carritoImagen from "../imagenes/carrito.png";

function CarritoImg() {
	return (
		<div className="carritoImg">
			<img className="imgCarrito" src={carritoImagen} alt="boton carrito" />
		</div>
	);
}

export default CarritoImg;
