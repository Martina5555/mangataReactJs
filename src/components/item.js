import React, { useEffect, useState} from 'react';

const Item = ({id, categoria, name, description, price, picture}) => {

  return (

  <div>
    <h4>{categoria}</h4>
     <h3>{name}</h3>
     <h3>{description}</h3>
     <h4>$ {price}</h4>                         
     <img src={picture}></img>
  </div>
  )}


export default Item;
