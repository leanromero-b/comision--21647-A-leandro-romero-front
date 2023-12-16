import { useState, useEffect } from "react";
import { Card, Button, Form, FloatingLabel, Alert } from "react-bootstrap/";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../context/authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  traerDatosDePostPorID,
  traerComentariosPorId,
} from "../utils/funciones";

const Ver = () => {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errores, setErrores] = useState('')

  const [comentarios, setComentarios] = useState([]);
  const [miComentario, setMiComentario] = useState("");

  const navigate = useNavigate();
  const   {token} = useAuthContext();

  const traerDatos = async () => {
    const respuesta = await traerDatosDePostPorID(id);
    if (respuesta) {
      setTitulo(respuesta.titulo);
      setDescripcion(respuesta.descripcion);
      await traerComentarios();
    } else {
      console.log("No se encontro un el post del usuario " + id);
    }
  };

  const traerComentarios = async () => {
    const respuesta = await traerComentariosPorId(id);

    if (respuesta) {
      setComentarios(respuesta);
    } else {
      console.log("No se encontraron comentarios para el post" + id);
    }
  };

  const enviarComentario = async () => {
    const url = "http://localhost:3000/comentarios";
    const datos = {
      descripcion: miComentario,
      idPost: id,
    };

    const headers = { token: token };

    try {
      const respuesta = await axios.post(url, datos, { headers: headers });
      if (respuesta.status === 200) {
        // return navigate("/");
        traerComentarios ();
        setMiComentario('');
      } else {
        setErrores({ error: "Ocurrio un error al enviar el comentario." });
      }
    } catch (error) {
      setErrores({ error: "Ocurrio un error interno al enviar el comentario ." });
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
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: "60%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Comentarios</Card.Title>
          <Card.Body>
            {comentarios.map((comentario, key) => (
              <div key={key}>
                <Card>
                  <Card.Body>
                    <Card.Title>{comentario.autor.usuario}</Card.Title>
                    <Card.Text>{comentario.descripcion}</Card.Text>
                    {/* <Button variant="secondary" onClick={editar}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvFlesRwjAMg9VNYBMYhUkYBTaBUdgE7uPqXurGedD2yJ+0qStZspMM2nkMO+NrK4KDpJOku0/YExB0k8QPpXGW9BwDHiM4ry9JfGP+Dk+QBkcEOXADJDGejxHBOyDOkVkyBgg4a8wXs8sraCWIbLH1VQRp5igzW1BCDX+2CCAaIAVJbbEiT/7nihxZlAO3uvhazOrVUoNecBRaCy/a1CuIwKN1wFE0JV5TkJNfUrSwuEbQqsh8X0VQynw1QdoZsz53W/xnBYZTAiemm6D3uvg/QctxXVPFJuNIz94HbJRrcoHUwPx3asRJGu7kXsBq/FZ3cki0O8EHmFFTGdR7G0wAAAAASUVORK5CYII=" />
                    </Button>
                    <Button variant="danger">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQJJREFUSEvFlYENwjAMBL+bwCawCUwCTAJMAqOwCeikuDJpShq3FZEQhSp/9b/jdlp5dSvrKwfsJF0lbYLgl6SjpKftzwEPSUDmLCDbMcA73YhaN9ifC/0NcJJ0l0T5LDLCylvmZagCxM9JfJ8EaQQABOohIQBPS/h8UwEfxL/CTOAQwCwxCL9L4vw/C2C2GAC7LBOLIgTAGhP3IXOdQ0KAQwKYLT6TRUKmfDrp4lpy0TZtGRshixYFjA27PFAffP4ATFI7kMVxjd+liWoQBH3LekB1XJfsaDnJg/1Tx7KH/DrJYYAfF1z3L5RaB0ytwHRs4NV0+/utgMnCY6/MZoHahg+wpkkZsI1xnwAAAABJRU5ErkJggg==" />
                    </Button> */}
                  </Card.Body>
                </Card>
                <br />
              </div>
            ))}
          </Card.Body>
        </Card.Body>
      </Card>
      <br />
      <br />
      <Button variant="primary" onClick={enviarComentario}>
        Agregar Comentario
      </Button>{" "}
      <br />
      <br />
      <FloatingLabel controlId="comentario" label="comentario">
        <Form.Control
          onChange={(e) => setMiComentario(e.target.value)}
          as="textarea"
          placeholder="Leave a comment here"
          value = {miComentario}
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      {
            errores.error && (<Alert  variant='warning'>{errores.error}</Alert>)
          }
    </Card.Body>
  );
};

export default Ver;
