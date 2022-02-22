import React, { useState } from "react";
import { useEffect } from "react";


const Carrusel = () => {
  const [imagen, setImagen] = useState(0);

  const item = [
    "http://127.0.0.1:8887/formaciones.png",
    "http://127.0.0.1:8887/fondo.jpg",
    "http://127.0.0.1:8887/polleada.jpeg"
  ];
  const siguiente = (
    <button
      className="botonCarro"
      onClick={() => {
        setImagen(imagen === 3 ? 0 : imagen + 1);
      }}
    >
      Siguiente
    </button>
  );

  const atras = (
    <button
      className="botonCarro"
      onClick={() => {
        setImagen(imagen === 0 ? 3 : imagen - 1);
      }}
    >
      Atrás
    </button>
  );

  useEffect(() => {
    setTimeout(() => {
      setImagen(imagen === 3 ? 0 : imagen + 1);
    }, 3000);
  }, [imagen]);

  return (
    <div className="fotosCarro">
      <img
        src={item}
        style={{ height: 300, width: "100%" }}
      />
    </div>
  );
};

export default Carrusel;
