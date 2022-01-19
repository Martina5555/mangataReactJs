import React from "react";
import App from "../App";

const Greeting = (props) => {
    
    return (
        <div>
            <h2> Hola! {props.mensaje} </h2>
        </div>
    )
}

export default Greeting