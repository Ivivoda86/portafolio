import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Carrusel from "./Carrusel";

const Carta = (props) => {
  const { imagen, alt, descripcion, id, accion } = props;
  return (
    <Card id={id} sx={{ maxWidth: 345 }} style={{ marginBottom: 50 }}>
      <CardActionArea onClick={accion}>
        <CardMedia component="img" height="140" image={imagen} alt={alt} />
        <CardContent>
          <Typography gutterBottom varian="h5" component="div">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Carta;
