import { Card, Carousel, Col, Image } from "react-bootstrap";

export default function Content() {
  return (
    <div id='about' className="d-flex flex-column">
      <Carousel className="carousel">
        <Carousel.Item>
          <div className="d-flex carousel-items body-text">
            <Col className="column-text overflow-scroll">
              <h2 className="mt-5 h1">About Us</h2>
              <p className="h4 my-3 p-5 lh-lg large-text">
                Welcome to Seoul Beauty, your trusted gateway to the enchanting
                world of Korean skincare. At Seoul Beauty, we are dedicated to
                simplifying the intricate landscape of Korean skincare for
                Canadians. Our mission is to provide a seamless and enjoyable
                experience, offering a carefully curated selection of premium
                skincare products that embody the essence of Korean beauty
                traditions. We understand that the world of skincare can be
                complex, and our commitment is to demystify it, making it
                accessible and straightforward for all.
              </p>
              <p className="h4 mb-3 p-3 lh-base small-text">
                Welcome to Seoul Beauty, your trusted gateway to the enchanting
                world of Korean skincare. At Seoul Beauty, we are dedicated to
                simplifying the intricate landscape of Korean skincare for
                Canadians.
              </p>
            </Col>
            <Col className="column-image">
              <Image src="brush-photo.jpg" fluid />
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel-items body-text">
            <Col className="column-image">
              <Image src="rocks-photo.jpg" fluid />
            </Col>
            <Col className="carousel-text">
              <h2 className="mt-5 h1">Our Products</h2>
              <p className="h4 my-3 p-5 lh-lg large-text">
                From gentle cleansers to potent serums, each product we offer is
                thoughtfully chosen to bring the best of Korean skincare rituals
                to your daily routine. Seoul Beauty is more than just a skincare
                destination; it's a guiding light on your journey to radiant,
                healthy skin. Join us in discovering the beauty secrets that
                have captivated Korea and let Seoul Beauty be your trusted
                companion in the pursuit of skincare simplicity and excellence.
              </p>
              <p className="h4 mb-3 p-3 lh-base small-text">
                From gentle cleansers to potent serums, each product we offer is
                thoughtfully chosen to bring the best of Korean skincare rituals
                to your daily routine.
              </p>
            </Col>
          </div>
        </Carousel.Item>
      </Carousel>
      <div id='products' className="core-product d-flex align-items-center">
        <Col className="carousel-text">
          <Card className="body-text mx-5">
            <Card.Title>
              <h2 className="mt-5">
                The Subscription
              </h2>
            </Card.Title>
            <Card.Body>
              <p className="lh-lg my-3 h4 large-text">
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
  )
}
