import { useState } from "react";
import { Card } from "react-bootstrap/";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Eliminar = () => {
  const [error, setError] = useState(false)
  const [deshabilitarBoton,setDeshabilitarBoton] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  
  const volver = () => {
    navigate("/");
  };
  const eliminar = async () => {
    setError(false);
    setDeshabilitarBoton (true);
    
    const url = 'http://localhost:3000/usuario';
    // const datos = {id: id}
    
    try {
      const respuesta = await axios.delete(url, {data :{id: id}});
      if (respuesta.status === 200){
        // return navigate('/');
      } else{
        setError('Ocurrio un error al intentar eliminar el usuario.');
      }
    } catch (error) {
      setError('Ocurrio un error al intentar eliminar el usuario.');    
    }
       
    setDeshabilitarBoton (false);
    // navigate("/");
  };

   return (
    <Card.Body>
      <Alert variant="warning">
        Esta seguro que desea eliminar el usuario? {id}
      </Alert>

      {
        error && (
          <Alert variant="danger">
             {error}
          </Alert>)
      }
      <ButtonGroup>
        <Button variant="primary" onClick={volver} disabled ={deshabilitarBoton}>
          Volver
        </Button>
        <Button variant="danger" onClick={eliminar} disabled ={deshabilitarBoton}>
          Eliminar
        </Button>
      </ButtonGroup>
    </Card.Body>
  );
};

export default Eliminar;
