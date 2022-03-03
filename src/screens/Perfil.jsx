import { flexbox } from "@mui/system";
import React from "react";

const Perfil = () => {
  return (
    <div>
      {/* <h1 className="tituloPerfil">¿Quien soy?</h1> */}
      <div className="texto">
        <h3 className="descripcionPerfil">
          Me llamo Ian Vivoda, tengo 25 años, soy desarrollador Front End,
          me gusta el trabajo en equipo y descubri que en esta profesion puedo
          aplicar mi creatividad, capacidad de analisis y resolucion de
          problemas.
        </h3>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <img
          style={{ height: 600, width: 600 }}
          src="http://127.0.0.1:8887/pizarra3.png"
        ></img>
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <img
          style={{ height: 200, width: 200 }}
          src="http://127.0.0.1:8887/casla.png"
        ></img>
        <img
          style={{ height: 200, width: 200 }}
          src="http://127.0.0.1:8887/croatia.png"
        ></img>
      </div>
    </div>
  );
};

export default Perfil;
