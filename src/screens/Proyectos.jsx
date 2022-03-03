import { Box, Button, Modal, Typography } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import { useHref } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import Carta from "../components/Carta";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  backgroundColor: "lightgray"
};

const Modale = ({ open, cerrar, fotos, texto, goToCodigo }) => {
  return (
    <div>
      <Modal open={open} onClose={cerrar}>
        <Box sx={style}>
          {/* <img style={{ width: 400, height: 400 }} src={fotos}></img> */}
          <Carrusel fotitos={fotos}></Carrusel>

          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
              marginTop:40
            }}
          >
            {texto}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                return (location.href = goToCodigo);
              }}
              variant="contained"
              color="success"
            >
              Ir al código
            </Button>
            <Button variant="contained" color="info" onClick={cerrar}>
              Cerrar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const Proyectos = () => {
  const [open, setOpen] = useState(false);
  const [valor, setvalor] = useState({});
  const [descripcion, setDescripcion] = useState({});
  const [rutaGit, setRutaGit] = useState("");
  const cartas = [
    {
      imagenes: [
        "http://127.0.0.1:8887/enfoque.jpeg",
        "http://127.0.0.1:8887/ig.png",
        "http://127.0.0.1:8887/tw.png",
      ],
      alt: "Enfoque Argentina",
      descripcion:
        "Primer proyecto FreeLance para Enfoque Argentina, una página para comercializar sus servicios y darse a conocer",
      id: "1",
      rutaGit: "https://github.com/Ivivoda86/polleadaSP",
    },
    {
      imagenes: [
        "http://127.0.0.1:8887/wordle.png",
        "http://127.0.0.1:8887/ig.png",
        "http://127.0.0.1:8887/tw.png",
      ],
      alt: "Wordle",
      descripcion: "Recree este reconocido juego en JS con React",
      id: "2",
      rutaGit: "https://github.com/Ivivoda86/letters",
    },
    {
      imagenes: [
        "http://127.0.0.1:8887/polleada.jpeg",
        "http://127.0.0.1:8887/git4.png",
        "http://127.0.0.1:8887/wpp.png",
      ],
      alt: "Polleada San Pedro",
      descripcion:
        "Primer Sistema creado para mejorar la eficiencia de una parrillada solidaria de la parroquia San Pedro Apóstol",
      id: "3",
      rutaGit: "https://github.com/Ivivoda86/polleadaSP",
    },
    {
      imagenes: [
        "http://127.0.0.1:8887/formaciones.png",
        "http://127.0.0.1:8887/git1.png",
        "http://127.0.0.1:8887/perfil.jpeg",
      ],
      alt: "Formaciones",
      descripcion: "Formaciones de equipos de fútbol / Práctica",
      id: "4",
      rutaGit: "https://github.com/Ivivoda86/polleadaSP",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          width: 1500,
          justifyContent: "space-between",
          flexFlow: "wrap",
          marginTop: 100,
          marginLeft: 150,
          padding: 30,
        }}
      >
        {cartas.map((item) => {
          return (
            <Carta
              imagen={item.imagenes[0]}
              rutaGit={item.rutaGit}
              alt={item.alt}
              descripcion={item.descripcion}
              id={item.id}
              accion={() => {
                setOpen(true);
                setvalor(item.imagenes);
                setDescripcion(item.descripcion);
                setRutaGit(item.rutaGit);
                console.log(rutaGit);
              }}
            />
          );
        })}
      </div>
      <Modale
        goToCodigo={rutaGit}
        fotos={valor}
        texto={descripcion}
        open={open}
        cerrar={() => {
          setOpen(false);
        }}
      ></Modale>
    </div>
  );
};

export default Proyectos;
