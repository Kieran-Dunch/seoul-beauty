import { Col, Container, Nav, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col className="px-4">
          <span><em>© 2023 Seoul Beauty</em></span>
        </Col>
        <Col md={{ span: 3, offset: 6 }}>
          <Nav>
            <Nav.Link href="#home" className="text-secondary">Home</Nav.Link>
            <Nav.Link href="#about" className="text-secondary">About</Nav.Link>
            <Nav.Link href="#products" className="text-secondary">Products</Nav.Link>
            <Nav.Link href="#sign-up" className="text-secondary">Sign Up</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
