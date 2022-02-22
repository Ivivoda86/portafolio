import React from "react";
import Prueba from "../components/Prueba";
import Ejercicio1, { Ejercicio2, Ejercicio3 } from "../Ejercicio1";


const Button = (imagen, accion) => {
  return (
    <button onClick={accion} className="botonRedes">
      <img src={imagen}></img>
    </button>
  );
};

const Contacto = () => {
  return (
    <div>
        <Ejercicio1></Ejercicio1>
        <Ejercicio2></Ejercicio2>
        <Ejercicio3></Ejercicio3>
      {/* <Button
        imagen="http://127.0.0.1:8887/audition.png"
        accion={() => {
          alert("clickeaste");
        }}
      ></Button> */}
      
    </div>
  );
};

export default Contacto;
