import React from "react";

function Buscador(){
    return(
    <form className="zIndex form-inline my-2 my-lg-0">
    <input className="zIndex form-control mr-sm-2 boton__menu" type="search" placeholder="Search"
        aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0 boton__menu"
        type="submit">Buscar</button>
</form>
    )
}

export default Buscador