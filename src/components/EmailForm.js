import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function EmailForm() {
  return (
    <Container id='sign-up' className="body-text rounded my-5">
      <Form className="p-5 m-3">
        <h2>Join our email list to be the first to know about our new products!</h2>
        <Row className="my-3 text-start">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
        </Row>
        <Form.Group controlId="formEmail" className="mb-3 text-start">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Row className="my-3 text-start">
          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
        </Row>
        <Row className="my-3 text-start">
          <Form.Group as={Col}>
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" placeholder="Province" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="Postal Code" />
          </Form.Group>
        </Row>
        <Button type='submit' className="mt-4" size="lg">Submit</Button>
      </Form>
    </Container>
  )
}
