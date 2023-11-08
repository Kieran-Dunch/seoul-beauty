import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

export default function Content() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <h1>Paragraph About Us</h1>
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
                  <h1>About our products</h1>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <Row>
          <h1>Our Core product</h1>
        </Row>
      </Container>
    </>
  )
}


// make a grid with content on one side and carousel on the other?
