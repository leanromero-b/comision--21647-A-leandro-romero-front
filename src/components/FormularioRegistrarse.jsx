import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";


const FormularioRegistrarse = () => {
  const [usuario, setUsuario] = useState ('');
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState("");
  const [deshabilitarBoton,setDeshabilitarBoton] = useState(false);
  const [errores, setErrores]= useState({});

  const navigate = useNavigate();

  const cambiarUsuario = (e) => {
    setUsuario (e.target.value); 
  }

  const cambiarNombre = (e) => {
    setNombre(e.target.value);
  };

  const cambiarApellido = (e) => {
    setApellido(e.target.value);
  };

  const cambiarPassword = (e) => {
    setPassword(e.target.value);
  };

  const verificarDatos = async () => {
    let misErrores = {}

    if (usuario.length === 0) {
      // setErrores( { nombre:'Debe introducir un nombre de usuario.' } );
      misErrores.usuario = 'Debe introducir un nombre de usuario.'
    }  
    if (nombre.length === 0) {
      // setErrores( { nombre:'Debe introducir un nombre.' } );
      misErrores.nombre = 'Debe introducir un nombre.'
    }  
    if (apellido.length === 0) {
      // setErrores( { nombre:'Debe introducir un nombre.' } );
      misErrores.apellido = 'Debe introducir un apellido.'
    }  
    
    if (password.length === 0) {
      // setErrores( { password:'Debe introducir un password.' } );
      misErrores.password = 'Debe introducir un password.'
    }  

    setErrores(misErrores);
         
    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton (true);
      console.log(usuario);
      console.log(nombre);
      console.log(apellido);
      console.log(password);

      await enviarDatos ()
    }
  };

  // useEffect(()=> {
  //   console.log(errores)
  // }, [errores])

  // useEffect(() => {
  //   cargarDatos();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  const enviarDatos = async() => {
    const url = 'http://localhost:3000/usuario';
    const datos = {
      usuario: usuario,
      nombre: nombre,
      apellido: apellido,
      password: password,
    }

    try {
      const respuesta = await axios.post(url, datos);
      if (respuesta.status === 200){
       return navigate('/');
      } else{
        setErrores({ error:'Ocurrio un error al enviar los datos.'});
      }
    } catch (error) {
      setErrores({ error:'Ocurrio un error al enviar los datos.'});    
    }

    setDeshabilitarBoton(false);

  }

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarUsuario} />
          {
            errores.usuario && (<span style={{color:"red"}}>
              {
                errores.usuario
              }</span>)
          }
          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarNombre} />
          {
            errores.nombre && (<span style={{color:"red"}}>
              {
                errores.nombre
              }</span>)
          }
          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Apellido
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarApellido} />
          {
            errores.apellido && (<span style={{color:"red"}}>
              {
                errores.apellido
              }</span>)
          }
          
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" onInput={cambiarPassword} />
          {
            errores.password && (<span style={{color:"red"}}>
              {
                errores.password
              }
            </span>)
          }
        </Col>
      </Form.Group>
          {
            errores.error && (<Alert  variant='warning'>{errores.error}</Alert>)
          }
      <Button variant="primary" onClick={verificarDatos} disabled ={deshabilitarBoton} >
        Registrarse
      </Button>
    </Form>
  );
};

export default FormularioRegistrarse;
