/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";

//VISTAS

import Inicio from "./views/inicio.jsx";
import RegistrarUsuario from "./views/RegistrarUsuario.jsx";
// import Registrar from "./views/Registrar.jsx";
import Eliminar from "./views/Eliminar.jsx";
import Editar from "./views/Editar.jsx"; /* VistaEditar*/
import Ver from "./views/Ver.jsx"
import Login from "./views/Login.jsx";
import CrearPosteo from "./views/CrearPosteo.jsx";



const rutas = createBrowserRouter([
  {
    path: "/",    // ruta de inicio
    element: <Inicio />,
  },{
    path: "/registrarse",
    element: <RegistrarUsuario/>,
  },{
    path: "/eliminar/:id",
    element: <Eliminar />,
  },{
    path: "/editar/:id",
    element: <Editar />, /* */
  },{
    path: "/ver/:id",
    element: <Ver />,
  },{
    path: "/login/",
    element: <Login />,
  },{
    path: "/publicacion/",
    element: <CrearPosteo />,
  },

]);

export { rutas }