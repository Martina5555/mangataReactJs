import React from 'react'
import ItemCount from './itemCount';


const ItemDetail = ({propProd}) => {
  function onAdd (cantidad){
    //hay que agregar el id de cada producto en el cLog
    console.log (cantidad)
    } 
    //ejemplo de lo mismo con destructuring en item
  return (
    <div>
<h1 className='tituloH2'> {propProd.name} </h1>
<h4 className='tituloH4'> {propProd.categoria} </h4>
<h2 className='tituloH3'> $ {propProd.price} </h2>
<h2 className='tituloH4'> {propProd.description} </h2>
<img className='imgProductos' src={propProd.picture}></img>
<ItemCount stock={propProd.stock} initial = {1} onAdd= {onAdd} />
    </div>
  )
}

export default ItemDetail