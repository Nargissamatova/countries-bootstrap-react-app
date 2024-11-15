import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing the icon
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import { auth, logout } from "../auth/firebase";

const Layout = () => {
  const [user] = useAuthState(auth);
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-end">
            <Navbar.Brand href="#home">
              <FaMapMarkerAlt style={{ marginRight: "10px" }} /> CountriesInfo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link>Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link>Favourites</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                {user && <Button onClick={logout}>Logout</Button>}
                {/*
                  <div className="align-items-center">
                    {user && `Hello ${user?.email}`}
                  </div>
                */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
