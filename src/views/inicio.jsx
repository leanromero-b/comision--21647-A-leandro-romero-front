import { useState, useEffect } from "react";
import { Card } from "react-bootstrap/";
// import axios from "axios"; 

import TablaDeDatos from './../components/TablaDeDatos';

const Inicio = () => {
  const [lista, setLista] = useState([]); // creo una lista vacia y la funcion para llenarla.

  const cargarLista = async () => {
    const url = 'http://localhost:3000/usuarios'

    // con axios
    
    // const respuesta = await axios.get(url);
      // if (respuesta.status === 200) {
    //   setLista(respuesta.data);
    // }

    //  con fetch

    let respuesta = await fetch(url)

    if (respuesta.status === 200) {
      respuesta = await respuesta.json();

      setLista(respuesta);
    }

    console.log(respuesta);
    
  };

  // utilizo useEffect para cargar la lista al renderizarse
  useEffect( () =>{
    cargarLista();
  },[]);

  return (
    <Card.Body>
      <TablaDeDatos lista={lista}/>    
    </Card.Body>
  );
};

export default Inicio;
