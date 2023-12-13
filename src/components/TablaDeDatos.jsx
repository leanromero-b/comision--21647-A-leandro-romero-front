import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";


const TablaDeDatos = (props) => {
    // eslint-disable-next-line react/prop-types
    const {lista} = props;
    const navigate = useNavigate();

    const editar = (_id) =>{    
        navigate('/cargar/' + _id)
    }

    const eliminar = (_id) =>{
        navigate('/eliminar/' + _id)
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    {/* comento el id de mongodb */}
                    <th>id</th> 
                    <th>Nombre</th>
                    <th>Password</th>
                    <th >Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line react/prop-types
                    lista.map( (registro, key) =>(
                        <tr key={ key }>
                            <td>{ key }</td>
                            <td>{ registro._id }</td>
                            <td>{ registro.nombre }</td>
                            <td>{ registro.password }</td>
                            <td >   <ButtonGroup style={{maxWidth: '30px'}} >
                                       <Button variant="primary" onClick={() => editar(key)}>Editar</Button>
                                       <Button variant="danger" onClick={() => eliminar(key)}>Eliminar</Button>
                                   </ButtonGroup>  </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
  );
}

export default TablaDeDatos;
