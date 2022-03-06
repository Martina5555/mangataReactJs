import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/style.css';

//ahora vienen props desde prod en ItemListCOntainer y no desde propProd
const Item = ({ id, category, name, description, price, imgUrl }) => {
    //BACKSTICKS ej mas abajo
    return (
        <div>
            <h4 className="tituloH4">{category}</h4>
            <h3 className="tituloH2">{name}</h3>
            <h3 className="tituloH3">{description}</h3>
            <h4 className="tituloH4">$ {price}</h4>
            <img className="imgProductos" src={imgUrl} alt="producto"></img>
            <Link to={`/productos/detalle/${id}`}>
                <button className="boton-verde">Detalle </button>
            </Link>
        </div>
    );
};

export default Item;
