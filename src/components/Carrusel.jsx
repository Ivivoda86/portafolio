import React, { useState } from "react";
import { useEffect } from "react";

const Carrusel = (props) => {
  const { fotitos } = props;
  const [imagen, setImagen] = useState(0);

  const item = fotitos;
  const siguiente = (
    <button
      className="botonCarro"
      onClick={() => {
        setImagen(imagen === 3 ? 0 : imagen + 1);
      }}
    >
      <img
        style={{ height: 50, width: 50, backgroundColor: "transparent" }}
        src="http://127.0.0.1:8887/adelante5.png"
      ></img>
    </button>
  );

  const atras = (
    <button
      className="botonCarro"
      onClick={() => {
        setImagen(imagen === 0 ? 3 : imagen - 1);
      }}
    >
      <img
        style={{ height: 50, width: 50, backgroundColor: "transparent" }}
        src="http://127.0.0.1:8887/atras.png"
      ></img>
    </button>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setImagen(imagen === 3 ? 0 : imagen + 1);
  //   }, 3000);
  // }, [imagen]);

  return (
    <div className="fotosCarro">
      <img src={item[imagen]} style={{ height: 300, width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        {atras}
        {siguiente}
      </div>
    </div>
    // <div className="carroFotos">
    // 	<div className="botonCarro2">
    // 		{atras}
    // 		{siguiente}
    // 	</div>
    // </div>
  );
};

export default Carrusel;
