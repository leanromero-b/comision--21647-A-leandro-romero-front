import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authcontext";

const FormularioCrearPost = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // const [autor, setautor] = useState('');

  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});

  const navigate = useNavigate();

  const { token } = useAuthContext();

  const cambiarTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const cambiarDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const verificarDatos = async () => {
    let misErrores = {};

    if (titulo.length === 0) {
      misErrores.titulo = "Debe introducir un Titulo.";
    }
    if (descripcion.length === 0) {
      misErrores.descripcion = "Debe escribir un mensaje.";
    }

    setErrores(misErrores);

    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton(true);
      console.log(titulo);
      console.log(descripcion);

      await enviarDatos();
    }
  };

  const enviarDatos = async () => {
    const url = "http://localhost:3000/post";
    const datos = {
      titulo: titulo,
      descripcion: descripcion,
      autor:  1
    };

    const headers = { token: token };

    try {
      const respuesta = await axios.post(url, datos, {headers: headers});
      if (respuesta.status === 200) {
        return navigate("/");
      } else {
        setErrores({ error: "Ocurrio un error al enviar los datos." });
      }
    } catch (error) {
      setErrores({ error: "Ocurrio un error interno ." });
    }

    setDeshabilitarBoton(false);
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Titulo
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarTitulo} />
          {errores.titulo && (
            <span style={{ color: "red" }}>{errores.titulo}</span>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Descripcion
        </Form.Label>
        {/* <Form.Control as="textarea" rows={3} /> */}
        <Col sm="10" >
          <Form.Control type="text" onInput={cambiarDescripcion} />
          {errores.descripcion && (
            <span style={{ color: "red" }}>{errores.descripcion}</span>
          )}
        </Col>
      </Form.Group>

      {errores.error && <Alert variant="warning">{errores.error}</Alert>}
      <Button
        variant="primary"
        onClick={verificarDatos}
        disabled={deshabilitarBoton}
      >
        Enviar posteo!
      </Button>
    </Form>
  );
};

export default FormularioCrearPost;
