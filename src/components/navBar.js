import React from 'react'
import { Link } from 'react-router-dom';
import CarritoImg from './carrito'
import Logo from './logo';
import Buscador from './buscador';


    function NavBar(){
        return(
                <nav className=" zIndex navbar navbar-expand-lg navbar-light header__fondo">
                <Logo />
                <Buscador />
                <Link to='/carrito'><CarritoImg /></Link>
                
                    <div className="collapse navbar-collapse zIndex" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item  boton__menu dropdown">
                                <Link to='/productos'className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Productos
                                </Link>
                                <div className="zIndex dropdown-menu  boton__menu" aria-labelledby="navbarDropdown">
                            <Link to='/productos' className="dropdown-item boton__menu" href="productos.html">Todos los
                                produtos</Link>
                            <Link to='/productos/:categoria' className="dropdown-item boton__menu" href="pagEnConstruccion.html">Cabello
                                </Link>
                            <Link to='/productos/:categoria' className="dropdown-item boton__menu" href="pagEnConstruccion.html">Skincare</Link>
                            
                                </div>
                            </li>
                            <li className="nav-item  boton__menu dropdown">
                                <Link to='/home'className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home
                                </Link>
                            </li>   
                        </ul>
                    </div>
                </nav>
                    )
                }


  export default NavBar;