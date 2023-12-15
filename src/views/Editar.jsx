
import { Card } from "react-bootstrap/";
import { useParams } from "react-router-dom";

import Editar from "../components/formularioEditar.jsx";
// import React from "react";

const VistaEditar = () => {

  const { id } = useParams();


  return  <Card.Body>
            <Editar id = {id} />
          </Card.Body>;
};

export default VistaEditar;
