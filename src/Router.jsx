/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";

//VISTAS

import Inicio from "./views/inicio.jsx";
import Cargar from "./views/Cargar.jsx";
import Registrar from "./views/Registrar.jsx";
import Eliminar from "./views/Eliminar.jsx";
import Editar from "./views/Editar.jsx"; /* VistaEditar*/
import Ver from "./views/Ver.jsx"
import Login from "./views/Login.jsx";



const rutas = createBrowserRouter([
  {
    path: "/",    // ruta de inicio
    element: <Inicio />,
  },{
    path: "/cargar",
    element: <Cargar/>,
  },{
    path: "/registrarse",
    element: <Registrar />,
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
  },

]);

export { rutas }