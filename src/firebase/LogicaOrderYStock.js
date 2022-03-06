import React from 'react'
import { useCartContext } from "../context/CartContext";
import { getFirestore, Timestamp, collection, query, where, writeBatch, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const LogicaOrderYStock = () => {
 
  //Order creation
  const {estadoCartContext, sumaTotal} =useCartContext()
  const conexion = getFirestore()
  const [dataForm, setDataForm] = useState({
    email: '',
    phone: '',
    name: ''
})
  const crearOrden = async (e) => {
    e.preventDefault()
    //nuevo objeto de orders
    let buyingOrder = {}

    buyingOrder.orderUserInfo = dataForm
    buyingOrder.orderDate = Timestamp.fromDate(newDate())
    buyingOrder.orderItems = estadoCartContext.map(cartItem => {
      const id= cartItem.data.id;
      const name= cartItem.data.name;
      const price= sumaTotal;
      const amount= cartItem.cantidad;
    
    })
  //esa llavecita que esta abajo estaba acá y el error era que await no estaba definido 
  //porque quedaba separado del componente con async
 
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

.finally (() =>{setDataForm({
  email: '',
  phone: '',
  name: ''
})
vaciarCarrito()
batch.commit()
})  

}//esta llavecita estaba más arriba y acá deja de salir el error de await pero me saleque todo es undefined practicamente 
//que con la llave arriba no pasaba
const handleChange = (event) => {    
  setDataForm({ 
      ...dataForm,
      [event.target.name]: event.target.value
  })
}}

const formularioCompra =()=>
          
          <form 
              onSubmit={realizarCompra}>
              <input 
                  type='text' 
                  name='name' 
                  placeholder='Nombre y Apellido' 
                  onChange={handleChange}
                  value={dataForm.name}/>
              <br />
              <input 
                  type='number' 
                  name='phone'
                  placeholder='Número de teléfono' 
                  onChange={handleChange}
                  value={dataForm.phone}/>
              <br/>
              <input 
                  type='email' 
                  name='email'
                  placeholder='email' 
                  onChange={handleChange}
                  value={dataForm.email}/>
              <input 
                  type='email' 
                  name='validarEmail'
                  placeholder='Repetir Email' 
                  onChange={handleChange}/>
                  //value={}
              <br/>
              <p className=''>Por favor, controlar información antes de confirmar</p>
              <Link to={'/productos'}>
              <button className='boton-verde' onClick={alert('Felicitaciones! Compra finalizada')}>Confirmar compra</button>
              </Link>
          </form>
   

export default formularioCompra