import { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

import { traerDatosDePostPorID } from "./../utils/funciones.js";


const Editar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;
  const url = 'http://localhost:3000/post';

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [deshabilitarBoton,setDeshabilitarBoton] = useState(false);
  const [errores, setErrores]= useState({});

  const navigate = useNavigate();
  


  const cambiarTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const cambiarDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const verificarDatos = async () => {
    let misErrores = {}

    if (titulo.length === 0) {
   
      misErrores.titulo = 'Debe introducir un titulo.'
    }  
    
    if (descripcion.length === 0) {

      misErrores.descripcion = 'Debe introducir una descripcion.'
    }  

    setErrores(misErrores);
         
    if (Object.entries(misErrores).length === 0) {
      setDeshabilitarBoton (true);
      console.log(titulo);
      console.log(descripcion);

      await enviarDatos ()
    }
  };

  const enviarDatos = async() => {
    const datos = {
      id : id,
      titulo: titulo,
      descripcion: descripcion,
    }

    try {
      const respuesta = await axios.put(url, datos);
      if (respuesta.status === 200){
       return navigate('/');
      } else{
        setErrores({ error:'Ocurrio un error al enviar los datos.'});
      }
    } catch (error) {
      setErrores({ error:'Ocurrio un error interno al enviar los datos.'});    
    }

    setDeshabilitarBoton(false);

  }


  const traerDatos =  async () => {

    const respuesta = await traerDatosDePostPorID (id);
    if (respuesta) {
      setTitulo(respuesta.titulo);
      setDescripcion(respuesta.descripcion)
    } else {
      setErrores({ error:'Ocurrio un error al traer los datos del posteo.'}); 
      setDeshabilitarBoton(true);      
    }
  }

  useEffect(() => {
    traerDatos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Titulo
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarTitulo} defaultValue={titulo}/>
          {
            errores.titulo && (<span style={{color:"red"}}>
              {
                errores.titulo
              }</span>)
          }
          
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Descripcion
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" onInput={cambiarDescripcion} defaultValue={descripcion} />
          {
            errores.descripcion && (<span style={{color:"red"}}>
              {
                errores.descripcion
              }
            </span>)
          }
        </Col>
      </Form.Group>
          {
            errores.error && (<Alert  variant='warning'>{errores.error}</Alert>)
          }
      <Button variant="primary" onClick={verificarDatos} disabled ={deshabilitarBoton} >
        Editar Post
      </Button>
    </Form>
  );
};

export default Editar;
