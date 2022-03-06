import React from 'react';
import { Link } from 'react-router-dom';

const BotonSeguirComprando = () => {
    return (
        <div>
            <Link to={'/productos'}>
                <button className="boton-verde">Seguir Comprando</button>
            </Link>
        </div>
    );
};

export default BotonSeguirComprando;
