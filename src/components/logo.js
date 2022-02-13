import React from "react";
import LogoMangata from "../LogoMangata.png";
import '../estilos/style.css';
import { Link } from "react-router-dom";

function Logo(){
    return(
<Link to='/home'>
<img className="header__logo" src={LogoMangata} alt="Logo de Mangata cosmética Natural"/>
</Link>
    )
}

export default Logo