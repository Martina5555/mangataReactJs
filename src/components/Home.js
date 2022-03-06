import React from 'react';
import foto from '../imagenes/Agus.jpg';

const Home = () => {
    return (
        <div className="main">
            <h1 className="tituloH1">Bienvenida!</h1>
            <h2 className="tituloH2">Te estábamos esperando...</h2>
            <img className="carrusel" src={foto} alt="home" />
            <p className="texto">
                Somos Mangata, productores de cosmética natural, vegana y
                ecológica. Encontrá productos que te reconecten con tu mejor
                versión.
            </p>
        </div>
    );
};

export default Home;
