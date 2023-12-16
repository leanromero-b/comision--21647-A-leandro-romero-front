import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useAuthContext } from "../context/authcontext.jsx";

const MiNavBar = () => {
  const { usuario, logout } = useAuthContext();

  return (
    <>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Viajando Ando</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            {usuario ? (
              <>
                <Nav.Link href="/publicacion">Nuevo Post</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}

          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default MiNavBar;
