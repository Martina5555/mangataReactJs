import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import getFetch from '../helpers/getFetch';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const [loading, setloading] = useState(true)
  function onAdd (cantidad){
    //hay que agregar el id de cada producto en el cLog
    console.log (cantidad)
    }
  const [productos,setProductos] =useState({});
//  const productosId = 1;
  const { PId } = useParams();

  useEffect(() => {
    getFetch().then((data) => {
      setProductos(data.find((item) => item.id === PId))
      //.then(respuesta => console.log(respuesta))
    })
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
  
  }, [PId]);

  return (
    <div>
    { loading ? <h2 className="tituloH2">Cargando ...</h2> : 
    <ItemDetail propProd= {productos} /> }

    
    </div>
  )
}

export default ItemDetailContainer