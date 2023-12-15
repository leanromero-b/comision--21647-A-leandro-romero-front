// import { useNavigate } from "react-router-dom";
// import { guardarDatos, guardarToken } from "../utils/login.js";

import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap/";
import axios from "axios";

import { useAuthContext } from "../context/authcontext.jsx";



const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});

  // const navigate = useNavigate();

  const {login} = useAuthContext();

  const setearUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const setearPassword = (e) => {
    setPassword(e.target.value);
  };

  const verificarDatos = async () => {
    let misErrores = {};

    if (usuario.length === 0) {
      // setErrores( { nombre:'Debe introducir un nombre de usuario.' } );
      misErrores.usuario = "Debe introducir un nombre de usuario.";
    }

    if (password.length === 0) {
      // setErrores( { password:'Debe introducir un password.' } );
      misErrores.password = "Debe introducir un password.";
    }

    setErrores(misErrores);

    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton(true);
      // console.log(usuario);
      // console.log(password);

      await enviarDatos();
    }
  };

  const enviarDatos = async () => {
    const url = "http://localhost:3000/autenticar";
    const datos = {
      usuario: usuario,
      password: password,
    };

    try {
      const respuesta = await axios.post(url, datos);
      if (respuesta.status === 200) {
        const {datos, token} = respuesta.data;

       login(datos, token);
        // return navigate("/");
      } else {
        setErrores({ error: "Ocurrio un error al verificar los datos." });
      }
    } catch (error) {
      setErrores({ error: "Ocurrio un error inesperado." });
    }

    setDeshabilitarBoton(false);
  };

  return (
    <Card.Body>
      <Form>
        <Form.Group className="mb-3" controlId="Usuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Usuario"
            onInput={setearUsuario}
          />
          {/* <Form.Text className="text-muted">Ingresar Usuario</Form.Text> */}
          {errores.usuario && (
            <Form.Text  style={{ color: "red" }}>
              {errores.usuario}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onInput={setearPassword}
          />
          {/* <Form.Text className="text-muted">Ingresar Contraseña</Form.Text> */}
          {errores.password && (
            <Form.Text  style={{ color: "red" }}>
              {errores.password}
            </Form.Text>
          )}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        {errores.error && <Alert variant="warning">{errores.error}</Alert>}
        <Button
          variant="primary"
          type="submit"
          onClick={verificarDatos}
          disabled={deshabilitarBoton}
        >
          ingresar
        </Button>
      </Form>
    </Card.Body>
  );
};

export default Login;
