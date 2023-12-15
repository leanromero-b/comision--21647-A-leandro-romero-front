import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap/";
import { useParams } from "react-router-dom";

import { traerDatosDePostPorID } from "../utils/funciones";

const Ver = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const traerDatos = async () => {
    const respuesta = await traerDatosDePostPorID(id);
    if (respuesta) {
      setTitulo(respuesta.titulo);
      setDescripcion(respuesta.descripcion);
    } else {
      console.log("No se encontro un el post del usuario " + id);
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
            {titulo}
          </Card.Title>
          <Card.Text>
            {descripcion}
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
            {[...Array(3)].map((item, key) => (
              <div key={key}>
                <Card>
                  <Card.Body>
                    <Card.Title>Usuario</Card.Title>
                    <Card.Text>Este es un comentario</Card.Text>
                    <Button variant="secondary">Editar Comentario</Button>
                    <Button variant="danger">Eliminar Comentario</Button>
                  </Card.Body>
                </Card>
                <br />
              </div>
            ))}
          </Card.Body>
        </Card.Body>
      </Card>
    </Card.Body>
  );
};

export default Ver;
