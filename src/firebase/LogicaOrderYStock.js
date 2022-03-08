import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import {
  getFirestore,
  Timestamp,
  collection,
  query,
  where,
  writeBatch,
  getDocs,
  addDoc,
  documentId,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LogicaOrderYStock = () => {
  //Order creation
  const navigate = useNavigate();
  const { estadoCartContext, vaciarCart } = useCartContext();
  const conexion = getFirestore();
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const crearOrden = async (e) => {
    console.log("Creando orden.");
    e.preventDefault();
    //nuevo objeto de orders
    let buyingOrder = {};

    buyingOrder.orderUserInfo = dataForm;
    buyingOrder.orderDate = Timestamp.fromDate(new Date());
    buyingOrder.orderItems = estadoCartContext.map((cartItem) => {
      const id = cartItem.data.id;
      const name = cartItem.data.name;
      const amount = cartItem.cantidad;
      const price = cartItem.data.price * amount;
      return {
        id,
        name,
        price,
        amount,
      };
    });
    

    //(creacion de collection nueva)
    const ordersCollection = collection(conexion, "Orders");
    await addDoc(ordersCollection, buyingOrder)
      .then((resp) => setId(resp.id))
      .finally(() => navigate("/"));

    //Stock Update
    const StockCollection = collection(conexion, "HelperProductos");
    const updateStock = query(
      StockCollection,
      where(
        documentId(),
        "in",
        estadoCartContext.map((arrayIds) => arrayIds.data.id)
      )
    );
    const batch = writeBatch(conexion);
    await getDocs(updateStock)
      .then((res) =>
        res.docs.forEach((res2) =>
          batch.update(res2.ref, {
            stock:
              res2.data.stock -
              estadoCartContext.find((item) => item.data.id === res2.id)
                .cantidad,
          })
        )
      )
      .catch((error) => console.log(error))
      //sin batch no actualiza nunca porque no cierra la accion

      .finally(() => {
        setDataForm({
          email: "",
          phone: "",
          name: "",
        });
        vaciarCart();
      });
    batch.commit();
  }; 

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
          {id !== '' && alert(`El id de la orden es : ${id} `) }

    <form onSubmit={crearOrden}>
      <input className="boton-verde"
        type="text"
        name="name"
        placeholder="Nombre y Apellido"
        onChange={handleChange}
        value={dataForm.name}
      />
      <br />
      <input className="boton-verde"
        type="number"
        name="phone"
        placeholder="Número de teléfono"
        onChange={handleChange}
        value={dataForm.phone}
      />
      <br />
      <input className="boton-verde"
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={dataForm.email}
      />
        <br />
      <input className="boton-verde"
        type="email"
        name="validarEmail"
        placeholder="Repetir Email"
        onChange={handleChange}
      />

      <br />
      <p className="">Por favor, controlar información antes de confirmar</p>

      <button className="boton-verde" type="submit">
        Confirmar compra
      </button>
    </form>
    </div>
  );
};

export default LogicaOrderYStock;
