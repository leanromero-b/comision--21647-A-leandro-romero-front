import { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

import { traerDatosDeUsiarioPorID } from './../utils/funciones.js'


const Editar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;
  const url = 'http://localhost:3000/usuario';

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [deshabilitarBoton,setDeshabilitarBoton] = useState(false);
  const [errores, setErrores]= useState({});

  const navigate = useNavigate();
  


  const cambiarNombre = (e) => {
    setNombre(e.target.value);
  };

  const cambiarPassword = (e) => {
    setPassword(e.target.value);
  };

  const verificarDatos = async () => {
    let misErrores = {}

    if (nombre.length === 0) {
      // setErrores( { nombre:'Debe introducir un nombre.' } );
      misErrores.nombre = 'Debe introducir un nombre.'
    }  
    
    if (password.length === 0) {
      // setErrores( { password:'Debe introducir un password.' } );
      misErrores.password = 'Debe introducir un password.'
    }  

    setErrores(misErrores);
         
    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton (true);
      console.log(nombre);
      console.log(password);

      await enviarDatos ()
    }
  };

  const enviarDatos = async() => {
    const datos = {
      id : id,
      nombre: nombre,
      password: password,
    }

    try {
      const respuesta = await axios.put(url, datos);
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


  const traerDatos =  async () => {

    const respuesta = await traerDatosDeUsiarioPorID (id);
    if (respuesta) {
      setNombre(respuesta.nombre);
      setPassword(respuesta.password)
    } else {
      setErrores({ error:'Ocurrio un error al traer los datos del usuario.'}); 
      setDeshabilitarBoton(true);      
    }
    // const endpoint = url + '/' + id
    
    // try {
    //     const respuesta = await axios.get( endpoint );
    //     if (respuesta.status === 200) {
    //       const usuario = respuesta.data
    //       setNombre(usuario.nombre);
    //       setPassword(usuario.password)

    //     } else{
    //       setErrores({ error:'Ocurrio un error al traer los datos del usuario' + {id} + '.'}); 
    //       setDeshabilitarBoton(true);
    //     }
    // } catch (error) {
    //   setErrores({ error:'Ocurrio un error al traer los datos del usuario.'}); 
    //   setDeshabilitarBoton(true);
    //   }
  }

  useEffect(() => {
    traerDatos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarNombre} defaultValue={nombre}/>
          {
            errores.nombre && (<span style={{color:"red"}}>
              {
                errores.nombre
              }</span>)
          }
          
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarPassword} defaultValue={password} />
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
        Editar Datos
      </Button>
    </Form>
  );
};

export default Editar;
