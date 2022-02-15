import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Routes>
    <Route exact path='/productos' element={<ItemListContainer/>}/>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/productos/:categoria' element={<ItemListContainer/>}/>     
    <Route exact path='/productos/detalle/:PId' element={<ItemDetailContainer/>}/>    
    <Route exact path='/Carrito' element={<Cart/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
