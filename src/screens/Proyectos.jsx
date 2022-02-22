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
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modale = ({ open, cerrar, fotos, texto }) => {
  return (
    <div>
      <Modal open={open} onClose={cerrar}>
        <Box sx={style}>
          <img style={{ width: 400, height: 400 }} src={fotos}></img>

          <Typography>{texto}</Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" color="success">
              Ir al código
            </Button>
            <Button variant="contained" color="success" onClick={cerrar}>
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
  const cartas = [
    {
      imagen: "http://127.0.0.1:8887/enfoque.jpeg",
      alt: "Enfoque Argentina",
      descripcion:
        "Primer proyecto FreeLance para Enfoque Argentina, una página para comercializar sus servicios y darse a conocer",
      id: "1",
    },
    {
      imagen: "http://127.0.0.1:8887/wordle.png",
      alt: "Wordle",
      descripcion: "Recree este reconocido juego en JS con React",
      id: "2",
    },
    {
      imagen: "http://127.0.0.1:8887/polleada.jpeg",
      alt: "Polleada San Pedro",
      descripcion:
        "Primer Sistema creado para mejorar la eficiencia de una parrillada solidaria de la parroquia San Pedro Apóstol",
      id: "3",
    },
    {
      imagen: "http://127.0.0.1:8887/formaciones.png",
      alt: "Formaciones",
      descripcion: "Formaciones de equipos de fútbol / Práctica",
      id: "4",
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
              imagen={item.imagen}
              alt={item.alt}
              descripcion={item.descripcion}
              id={item.id}
              accion={() => {
                setOpen(true);
                setvalor(item.imagen);
                setDescripcion(item.descripcion);
              }}
            />
          );
        })}
      </div>
      <Modale
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
