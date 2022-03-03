import React from "react";
import Button from "../components/Button";
import Prueba from "../components/Prueba";
import Ejercicio1, { Ejercicio2, Ejercicio3 } from "../Ejercicio1";

const Contacto = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{position:"absolute", marginTop:90, color: "lightBlue"}}>Redes Sociales</h1>
        <img
          style={{ height: 200, width: 350 }}
          src="http://127.0.0.1:8887/cartel2.png"
        ></img>
      </div>
      {/* <Ejercicio1></Ejercicio1>
        <Ejercicio2></Ejercicio2>
        <Ejercicio3></Ejercicio3> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "200px",
        }}
      >
        <Button
          imagen="http://127.0.0.1:8887/ig.png"
          accion={() => {
            return (location.href = "https://instagram.com/iaanErik");
          }}
        ></Button>
        <Button
          imagen="http://127.0.0.1:8887/tww.png"
          accion={() => {
            return (location.href = "https://twitter.com/IaanErik");
          }}
        ></Button>
        <Button
          imagen="http://127.0.0.1:8887/git.png"
          accion={() => {
            return (location.href = "https://github.com/Ivivoda86");
          }}
        ></Button>
        <Button
          imagen="http://127.0.0.1:8887/wpp.png"
          accion={() => {
            return (location.href = "https://web.whatsapp.com/");
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Contacto;
