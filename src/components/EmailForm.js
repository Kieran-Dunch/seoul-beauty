import { Button, Container, Form } from "react-bootstrap";

export default function EmailForm() {
  return (
    <Container id='sign-up' className="body-text rounded my-5">
      <Form className="p-3">
        <h2>Join our email list to be the first to know!</h2>
        <Form.Group controlId="formEmail" className="mb-3 text-start">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* <Form.Group controlId="formMessage" className="mb-3 text-start">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group> */}
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}
