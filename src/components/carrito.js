import React from "react";
import carritoImagen from "../carrito.png"

function CarritoImg(){
    return (
    <div className="carritoImg">
    <a href="index.html">
    <img className="imgCarrito" src={carritoImagen} alt="boton carrito"/>
    </a>
    </div>
    )
        }

        export default CarritoImg
        