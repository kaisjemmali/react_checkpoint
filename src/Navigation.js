import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Check-Point</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Prices</Nav.Link>
            <Nav.Link href="#contactus">Contact US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
