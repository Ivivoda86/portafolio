import React, { useState } from "react";

const Prueba = () => {
  const [valor, setValor] = useState();
  return (
    <div>
      <input id="input" />
      <button
        onClick={() => {
          setValor(document.getElementById("input").value);
        }}
      >
        Ingresar edad
      </button>
      <h1 style={{backgroundColor:"white"}}>Mi edad es : {valor}</h1>
      {valor >= 18 ? "Podes manejar" : "No podes manejar"}
      
    </div>
  );
};

export default Prueba;
