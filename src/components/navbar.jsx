import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MiNavBar = () => {
  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Argentina Programa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/cargar">Cargar Datos</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default MiNavBar;
