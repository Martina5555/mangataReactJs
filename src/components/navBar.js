import React from 'react'
import { Link } from 'react-router-dom';
import CarritoImg from './carritoWidget'
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
                                <Link to='/productos'className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </Link>
                                <ul className="zIndex dropdown-menu  boton__menu" aria-labelledby="navbarDropdown">
                                    <li className='dropdown-item'>
                            <Link to='/productos' className="dropdown-item boton__menu">Todos los
                                produtos</Link>
                                </li>
                                <li className='dropdown-item'>
                            <Link to='/productos/cabello' className="dropdown-item boton__menu">Cabello
                                </Link>
                                </li>
                                <li className='dropdown-item'>
                            <Link to='/productos/skincare' className="dropdown-item boton__menu">Skincare</Link>
                            </li>
                            <li className='dropdown-item'>
                            <Link to='/productos/aceites' className="dropdown-item boton__menu" >Aceites</Link>
                            </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item  boton__menu">
                                <Link to='/productos/aceites'className="nav-link boton__menu" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Aceites
                                </Link>
                            </li>  
                            <li className="nav-item  boton__menu">
                                <Link to='/productos/skincare' className="nav-link boton__menu" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Skincare
                                </Link>
                            </li>
                            <li className="nav-item  boton__menu">
                                <Link to='/productos/cabello' className="nav-link boton__menu" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Cabello
                                </Link>
                            </li>
                            <li className="nav-item  boton__menu">
                                <Link to='/home'className="nav-link boton__menu" role="button"
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