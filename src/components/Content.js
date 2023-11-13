import { Card, Carousel, Col, Image } from "react-bootstrap";

export default function Content() {
  return (
    <>
      <div className="d-flex flex-column">
        <Carousel>
          <Carousel.Item>
            <div className="d-flex carousel-items body-text">
              <Col>
                <h2>Paragraph About Us</h2>
              </Col>
              <Col>
                <Image src="brush-photo.jpg" fluid />
              </Col>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex carousel-items body-text">
              <Col>
                <Image src="rocks-photo.jpg" fluid />
              </Col>
              <Col>
                <h2>About our products</h2>
              </Col>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="core-product d-flex align-items-center">
          <Col md={6}>
            <Card className="body-text mx-5">
              <Card.Title>
                <h2 className="mt-5">
                  The Subscription
                </h2>
              </Card.Title>
              <Card.Body>
                <p className="lh-lg my-3 h4">
                  Experience the epitome of skincare luxury with our flagship
                  8-week subscription, a transformative journey towards radiant
                  and healthy skin. Indulge in a curated selection of premium
                  Korean skincare products meticulously designed to elevate your
                  beauty regimen.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </>
  )
}


// make a grid with content on one side and carousel on the other?
