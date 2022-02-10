import React from 'react'
import productos from '../helpers/productos'

const ItemDetail = ({productos}) => {
    //ejemplo de lo mismo con destructuring en item
  return (
    <div>
<h1> {productos.name} </h1>
<h4> {productos.categoria} </h4>
<h2> {productos.price} </h2>
<img src='{productos.picture}'></img>
    </div>
  )
}

export default ItemDetail