import { useState, useEffect } from "react";
import { Card } from "react-bootstrap/";
// import axios from "axios";

import TablaDeDatos from "./../components/TablaDeDatos";
import { useAuthContext } from "../context/authcontext";

const Inicio = () => {
  const [lista, setLista] = useState([]); // creo una lista vacia y la funcion para llenarla.

  const { usuario } = useAuthContext(); // tomo el usuario del contexto q exporte.

  // cargo la lista con la info que traigo del back
  const cargarLista = async () => {
    const url = "http://localhost:3000/posteos";

    // con axios

    // const respuesta = await axios.get(url);
    // if (respuesta.status === 200) {
    //   setLista(respuesta.data);
    // }

    //  con fetch

    let respuesta = await fetch(url);

    if (respuesta.status === 200) {
      respuesta = await respuesta.json();

      setLista(respuesta);
    }

    // console.log(respuesta);
  };

  // utilizo useEffect para cargar la lista al renderizarse
  useEffect(() => {
    cargarLista();
    // console.log(authContext)
  }, []);

  return (
    <Card.Body>
      <h2 style={{ color: "grey" }}>
        {usuario ? "Bienvenido " + usuario.nombre : ""}
      </h2>
      <br />
      <TablaDeDatos lista={lista} usuario={usuario} />
    </Card.Body>
  );
};

export default Inicio;
