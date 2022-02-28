import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';
import {CartContextProvider} from './context/CartContext';
import CompraFinalizada from './components/CompraFinalizada';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/productos' element={<ItemListContainer/>}/>
        <Route exact path='/productos/:categoria' element={<ItemListContainer/>}/>     
        <Route exact path='/productos/detalle/:PId' element={<ItemDetailContainer/>}/>    
        <Route exact path='/carrito' element={<Cart/>}/> 
        <Route exact path='/finalizado' element={<CompraFinalizada/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider> 
  );
}

export default App;
