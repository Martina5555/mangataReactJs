import React from 'react';
import LogoMangata from '../imagenes/LogoMangata.png';
import '../estilos/style.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <img
                className="header__logo"
                src={LogoMangata}
                alt="Logo de Mangata cosmética Natural"
            />
        </Link>
    );
}

export default Logo;
