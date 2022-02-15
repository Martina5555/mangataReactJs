import AceiteRicino from "../imagenes/AceiteRicino.jpeg";
import pepitasDeUva from "../imagenes/pepitasDeUva.png"
import shampooEq from "../imagenes/shampoo.png"

const productos = [
{id: '1', categoria: 'aceites', name: "Aceite de Ricino", description: 'Aceite para acne', price: 320, picture: AceiteRicino, stock: 5},
{id: '2', categoria: 'aceites', name: "Aceite de Pepitas de Uva", description: 'Aceite antiage', price: 320, picture: pepitasDeUva, stock: 10},
{id: '3', categoria: 'cabello', name: "Shampoo", description: 'Cabello equilibrado', price: 320, picture: shampooEq, stock: 9},
{id: '4', categoria: 'skincare', name: "Aceite para rostro", description: 'Aceite para acne', price: 320, picture: AceiteRicino, stock:2},
];

export default productos;
