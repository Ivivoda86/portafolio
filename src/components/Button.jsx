import React from "react";

const Button = (props) => {
  const { imagen, accion } = props;
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={accion}
    >
      <img className="imagenRedes" src={imagen}></img>
    </button>
  );
};

export default Button;
