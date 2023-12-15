import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap/";
import { useParams } from "react-router-dom";

import { traerDatosDeUsiarioPorID } from "../utils/funciones";

const Ver = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const traerDatos = async () => {
    const respuesta = await traerDatosDeUsiarioPorID(id);
    if (respuesta) {
      setNombre(respuesta.nombre);
      setPassword(respuesta.password);
    } else {
      console.log("No se encontro un usuario con el id" + id);
    }
  };
  useEffect(() => {
    traerDatos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card.Body>
      <Card style={{ width: "80%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>
            {nombre} {password}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the s content.
          </Card.Text>
          <Button variant="primary">Editar</Button>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "60%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Comentarios</Card.Title>
          <Card.Body>
            {
              [...Array(3)].map((item, key) => (
                <div key={key}>
                <Card >
                  <Card.Body>
                    <Card.Title>Usuario</Card.Title>
                    <Card.Text>Este es un comentario</Card.Text>
                    <Button variant="secondary">Editar Comentario</Button>
                    <Button variant="danger">Eliminar Comentario</Button>
                  </Card.Body>
                </Card>
                <br />
                </div>
              ))
            }
          </Card.Body>
        </Card.Body>
      </Card>
    </Card.Body>
  );
};

export default Ver;
