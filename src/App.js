import './App.css';
import React, { Component }  from 'react';
import NavBar from './components/navBar';
import Titulo from './components/titulo';
import Buscador from './components/buscador';
import ItemListContainer from './components/itemListContainer';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
     <Logo />
     <Titulo />
     <Buscador />
     <NavBar />
    <ItemListContainer />
    </div>
  );
}

export default App;
