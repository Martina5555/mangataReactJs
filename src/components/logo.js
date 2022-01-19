import React from "react";
import LogoMangata from "../LogoMangata.png"

function Logo(){
    return(
<a href="index.html">
<img className="header__logo" src={LogoMangata} alt="Logo de Mangata cosmética Natural"/>
</a>
    )
}

export default Logo