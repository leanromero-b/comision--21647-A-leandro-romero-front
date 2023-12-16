
import { Card } from "react-bootstrap/";
import { useParams } from "react-router-dom";

import { useAuthContext } from "../context/authcontext.jsx";

import Editar from "../components/formularioEditar.jsx";
// import React from "react";

const VistaEditar = () => {
  const { id } = useParams();

  const { token, usuario } = useAuthContext();
  
  return  <Card.Body>
            <Editar id = {id}  token = {token} usuario= {usuario} />
          </Card.Body>;
};

export default VistaEditar;
