import { createBrowserRouter } from "react-router-dom";

//VISTAS

import Inicio from "./views/inicio.jsx";
import Cargar from "./views/Cargar.jsx";
import Registrar from "./views/Registrar.jsx";
import Eliminar from "./views/Eliminar.jsx";



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
  }

]);

export { rutas }