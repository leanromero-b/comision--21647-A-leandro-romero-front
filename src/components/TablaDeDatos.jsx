import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

const TablaDeDatos = (props) => {
  // eslint-disable-next-line react/prop-types
  const { lista, usuario } = props;
  const navigate = useNavigate();

  const editar = (_id) => {
    navigate("/editar/" + _id);
  };

  const ver = (_id) => {
    navigate("/ver/" + _id);
  };

  const eliminar = (_id) => {
    navigate("/eliminar/" + _id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {/* comento el id de mongodb */}
          {/* <th>id</th>  */}
          <th>Titulo</th>
          <th>Autor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          // eslint-disable-next-line react/prop-types
          lista.map((registro, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              {/* <td>{ registro._id }</td> */}
              <td>{registro.titulo}</td>
              <td>{registro.autor.usuario}</td>
              <td>
                {" "}
                <ButtonGroup style={{ maxWidth: "30px" }}>
                  <Button 
                    variant="success"  
                    onClick={() => ver(registro._id)}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV9JREFUSEu1lNFNBDEMROc6gUqASoBfKAIo4viFToBKoBPYd8pE3uDbTVbaSNHtJbZnPLZz0M7rsHN8rQFcSLotJK4lsX/C/prOPsv/lOsSwNPk8dyRIYDvkl4y2wwAlh/BGIZssyUr76uJ/V2xBei+2Fb3FgDH73JLUBxwXFr4kC1A2N5EnxYA5mRAcAx7l2uFpIBc2jECwOBtQ3DHAgR/CEIOkrMu4hIQZKFoXkdJD5JeJT2Ww+yMq38kYwZoDwvSi7r/BjDbZ2eYuYZVph6AkQwAMfgpdgRwgat+vRUOdpYIiZF6BuDLWRcMgphkrWPMAP0w4Jd2SydzAdDBz7ZpLBLfI4Pm9sRv1iTZUxGnGTYGiv3ON/0+/FTEILyifuwgEgepVeqspGvPtVuOoiEDyzPiYVysVS+AGdf26+2uEYD2CenC6AFI3/mu6M2gZT7ofprIrWstg61xq9/uAH+dA1kZfg3hEgAAAABJRU5ErkJggg==" />
                  </Button>{" "}
                  {
                    // eslint-disable-next-line react/prop-types
                    usuario &&  (usuario.id === registro.autor._id) && (
                      <>
                      <Button
                        variant="primary"
                        onClick={() => editar(registro._id)}
                      >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvFlesRwjAMg9VNYBMYhUkYBTaBUdgE7uPqXurGedD2yJ+0qStZspMM2nkMO+NrK4KDpJOku0/YExB0k8QPpXGW9BwDHiM4ry9JfGP+Dk+QBkcEOXADJDGejxHBOyDOkVkyBgg4a8wXs8sraCWIbLH1VQRp5igzW1BCDX+2CCAaIAVJbbEiT/7nihxZlAO3uvhazOrVUoNecBRaCy/a1CuIwKN1wFE0JV5TkJNfUrSwuEbQqsh8X0VQynw1QdoZsz53W/xnBYZTAiemm6D3uvg/QctxXVPFJuNIz94HbJRrcoHUwPx3asRJGu7kXsBq/FZ3cki0O8EHmFFTGdR7G0wAAAAASUVORK5CYII=" />
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => eliminar(registro._id)}
                      >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQJJREFUSEvFlYENwjAMBL+bwCawCUwCTAJMAqOwCeikuDJpShq3FZEQhSp/9b/jdlp5dSvrKwfsJF0lbYLgl6SjpKftzwEPSUDmLCDbMcA73YhaN9ifC/0NcJJ0l0T5LDLCylvmZagCxM9JfJ8EaQQABOohIQBPS/h8UwEfxL/CTOAQwCwxCL9L4vw/C2C2GAC7LBOLIgTAGhP3IXOdQ0KAQwKYLT6TRUKmfDrp4lpy0TZtGRshixYFjA27PFAffP4ATFI7kMVxjd+liWoQBH3LekB1XJfsaDnJg/1Tx7KH/DrJYYAfF1z3L5RaB0ytwHRs4NV0+/utgMnCY6/MZoHahg+wpkkZsI1xnwAAAABJRU5ErkJggg==" />
                      </Button>
                      </>
                    ) 
                  }
                </ButtonGroup>{" "}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default TablaDeDatos;
