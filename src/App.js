import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import NavBar from './components/navBar';
import Titulo from './components/titulo';
import CarritoImg from './components/carrito';
import Buscador from './components/buscador';

function App() {
  return (
    <div className="App">
     <CarritoImg />
     <Titulo />
     <Buscador />
     <NavBar />
    </div>
  );
}

export default App;
