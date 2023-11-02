import { Navbar } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="mx-2">SEUOL BEAUTY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
