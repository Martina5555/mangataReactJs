import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Routes>
    <Route exact path='/productos' element={<ItemListContainer/>}/>
    <Route exact path='/home' element={<ItemListContainer/>}/>
    <Route exact path='/productos/:categoria' element={<ItemListContainer/>}/>     
    <Route exact path='/productos/detalle/:PId' element={<ItemDetailContainer/>}/>    
    <Route exact path='/carrito' element={<ItemDetailContainer/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
