import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menus from "./components/Menus";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Proyectos from "./screens/Proyectos";
import Contacto from "./screens/Contacto";
import Perfil from "./screens/Perfil";
import Prueba from "./components/Prueba";
import Carrusel from "./components/Carrusel";

const rutas = [
  { ruta: "/proyectos", nombre: "Proyectos" },
  { ruta: "/contacto", nombre: "Contacto" },
  { ruta: "/perfil", nombre: "Mi Perfil" },
];

const routes = [
  { nombre: "/proyectos", componente: <Proyectos></Proyectos> },
  { nombre: "/contacto", componente: <Contacto></Contacto> },
  { nombre: "/perfil", componente: <Perfil></Perfil> },
];

const getRoutes = () => {
  return routes.map((item) => {
    return (
      <Route
        path={item.nombre}
        element={item.componente}
        key={item.nombre}
      ></Route>
    );
  });
};

const Layout = () => {
  return (
    <div>
      <Menus />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {getRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        {/* <Carrusel></Carrusel> */}
      </div>
    </div>
  );
};

export default App;
