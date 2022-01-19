import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import NavBar from './components/navBar';
import Titulo from './components/titulo';
import Buscador from './components/buscador';
import Greeting from './components/itemListContainer';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
     <Logo />
     <Titulo />
     <Buscador />
     <NavBar />
     <Greeting mensaje = "consumidor consciente" />
    </div>
  );
}

export default App;
