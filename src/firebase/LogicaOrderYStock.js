import React from 'react'
import { useCartContext } from "../context/CartContext";
import { getFirestore, Timestamp, collection, query, where, writeBatch, await, getDocs } from 'firebase/firestore';


const LogicaOrderYStock = () => {
 
  //Order creation
  const {estadoCartContext, sumaTotal} =useCartContext()
  const conexion = getFirestore()

  const crearOrden = async (e) => {
    e.preventDefault()
    let buyingOrder = {}
    buyingOrderUser = {name: 'sandra', email: 'sandrita123@gmail.com', phone: 3543658641}
    buyingOrderTotal = sumaTotal
   
    orderUserInfo = {name: 'Sandra', email: 'sandrita123@gmail.com', phone: '3543629851'}
    orderTotal = sumaTotal();
    orderDate = Timestamp.fromDate(newDate())
    orderItems = estadoCartContext.map(cartItem => {
      const id= cartItem.data.id;
      const name= cartItem.data.name;
      const price= cartItem.data.price * cartItem.cantidad;
      const amount= cartItem.cantidad;
      
      return{ id, name, price, amount}
    })
  }
 
  //Stock Update (creacion de collection nueva)
const ordersCollection = collection (conexion, 'HelperProductos')

const updateStock= query(
  ordersCollection, where( documentId() , 'in', estadoCartContext.map(arrayIds => arrayIds.data.id))
)
const batch = writeBatch(conexion)
await getDocs(updateStock)
.then(res => res.docs.forEach(res2 => batch.update(res2.ref, {
  stock: res2.data().stock - estadoCartContext.find(item =>item.data.id === res2.id).cantidad //o amount?
})
))
.catch(error => console.log (error))
//sin batch no actualiza nunca porque no cierra la accion
.finally(batch.commit(), alert('Compra Finalizada!'))


}


return (
    <div>
   
    </div>
  )


export default LogicaOrderYStock