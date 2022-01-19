import React from 'react'
import LogoMangata from "../LogoMangata.png"
import carritoImagen from "../carrito.png"
    /*  <nav class=" zIndex navbar navbar-expand-lg navbar-light header__fondo">
        <div id="div__logo">
            <a href="index.html">
            <img class="header__logo" src="./imagenes/logosSinFondo.png" alt="Logo de Mangata cosmética Natural">
            </a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse zIndex" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item  boton__menu dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Productos
                    </a>
                    <div class="zIndex dropdown-menu  boton__menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item boton__menu" href="./subpaginas/productos.html">Todos los
                            produtos</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Cuidado
                            capilar</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Skincare</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Cuidado
                            corporal</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Cuidado
                            bucal</a>
                        <a class="dropdown-item boton__menu" href="subpaginas/pagEnConstruccion.html">Kits y
                            promociones</a>
                        <a class="dropdown-item boton__menu " href="./subpaginas/pagEnConstruccion.html"></a>
                    </div>
                </li>
                <li class="nav-item dropdown  boton__menu">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Informacion importante
                    </a>
                    <div class="zIndex dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item boton__menu" href="./subpaginas/TipoPielCabello.html">Tipos de piel
                            y cabello</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Conservacion
                            de los productos</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Quiero
                            revender</a>
                        <a class="dropdown-item boton__menu" href="./subpaginas/pagEnConstruccion.html">Preguntas
                            frecuentes</a>
                        <a class="dropdown-item boton__menu"
                            href="./subpaginas/pagEnConstruccion.html">Ubicacion</a>
                    </div>
                </li>
                <li class="nav-item boton__menu">
                    <a class="nav-link" href="./subpaginas/pagEnConstruccion.html">Sobre nosotros</a>
                </li>
                <li class="nav-item  boton__menu">
                    <a class="nav-link" href="./subpaginas/contacto.html">Contactanos</a>
                </li>

            </ul>
            <a href="./subpaginas/carrito.html" class="p-2 mr-5 rounded-circle bg-info">
                <img class="imgCarrito" src="../Mangata Proyecto Final Granato/imagenes/carrito.png" alt="boton carrito"></a>
            <form class="zIndex form-inline my-2 my-lg-0">
                <input class="zIndex form-control mr-sm-2 boton__menu" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0 boton__menu"
                    type="submit">Buscar</button>
            </form>
        </div>
    </nav>*/

    

    function NavBar(){
        return(
            <nav className=" zIndex navbar navbar-expand-lg navbar-light header__fondo">
       
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