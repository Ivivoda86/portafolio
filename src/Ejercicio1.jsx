// 1) una función que recibe una edad y verifica si es mayor a 18 años. Si es mayor devuelve true sino false
// 2) una función que recibe una string y devuelve la cantidad de letras de esa string
// 3) una función que recibe un array de números y devuelve un array con los mismos números + 1

import { useState } from "react";

const Ejercicio1 = () => {
  const [edad, setEdad] = useState();
  return (
    <div>
      <input placeholder="Ingrese su edad" id="valor" />
      <button
        onClick={() => {
          setEdad(document.getElementById("valor").value);
        }}
      >
        Ingresar
      </button>
      <h1>Mi edad es {edad}</h1>
      {edad >= 18 ? "Soy mayor" : "Soy Menor"}
    </div>
  );
};

export default Ejercicio1;

// ejercicio 2

const palabra = "hola";

export const Ejercicio2 = () => {
  const cantidad = palabra.length;
  return cantidad;
  console.log("hola");
};

// ejercicio 3

const numbers = [5, 8, 10, 15, 22];

export const Ejercicio3 = () => {
  return (
    <div>
      Mi nuevo array es :{" "}
      {numbers.map((item) => {
        const nuevos = item + 1;
        return nuevos;
        console.log(nuevos);
      })}
    </div>
  );
};
