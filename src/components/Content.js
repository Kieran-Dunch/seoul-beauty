import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

export default function Content() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <h2>Paragraph About Us</h2>
                </Col>
                <Col>
                  <Image src="brush-photo.jpg" fluid />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <Image src="rocks-photo.jpg" fluid />
                </Col>
                <Col>
                  <h2>About our products</h2>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <Row className="core-product align-items-center">
          <Col md={6}>
            <Card className="body">
              <Card.Title>
                <h2 className="mt-5">
                  The Subscription
                </h2>
              </Card.Title>
              <Card.Body>
                <h4 className="lh-lg my-3">
                  Experience the epitome of skincare luxury with our flagship
                  8-week subscription, a transformative journey towards radiant
                  and healthy skin. Indulge in a curated selection of premium
                  Korean skincare products meticulously designed to elevate your
                  beauty regimen.
                </h4>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  )
}


// make a grid with content on one side and carousel on the other?
