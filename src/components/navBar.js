import React from 'react'
import CarritoImg from './carrito'

    function NavBar(){
        return(
            <nav className=" zIndex navbar navbar-expand-lg navbar-light header__fondo">
       <CarritoImg />
        <div className="collapse navbar-collapse zIndex" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item  boton__menu dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                    </a>
                </li>
                <li className="nav-item dropdown  boton__menu">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Informacion importante
                    </a>
                    <div className="zIndex dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item boton__menu" href="./subpaginas/TipoPielCabello.html">Tipos de piel
                            y cabello</a>
                        <a className="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Conservacion
                            de los productos</a>
                        <a className="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Quiero
                            revender</a>
                        <a className="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Preguntas
                            frecuentes</a>
                        <a className="dropdown-item boton__menu"
                            href="./subpaginas/pagEnConstruccion.html">Ubicacion</a>
                    </div>
                </li>
                <li className="nav-item boton__menu">
                    <a className="nav-link" href="./subpaginas/pagEnConstruccion.html">Sobre nosotros</a>
                </li>
                <li className="nav-item  boton__menu">
                    <a className="nav-link" href="./subpaginas/contacto.html">Contactanos</a>
                </li>

            </ul>

         
        </div>
    </nav>
        )
    }


  export default NavBar;