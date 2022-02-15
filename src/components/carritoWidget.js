import React from "react";
import { Link } from "react-router-dom";
import carritoImagen from "../imagenes/carrito.png"

function CarritoImg(){
    return (
    <div className="carritoImg">
    <Link to="/Carrito">
    <img className="imgCarrito" src={carritoImagen} alt="boton carrito"/>
    </Link>
    </div>
    )
        }

        export default CarritoImg
        