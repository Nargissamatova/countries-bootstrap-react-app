import { Col, Container, Image, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Row
          sm={1}
          md={2}
          className="mt-5 d-flex align-items-center justify-content-center"
        >
          <Col md={4}>
            <strong>Welcome to CountriesInfo</strong>, your go-to platform for
            discovering fascinating details about every nation around the globe.
            Explore the world with our easy-to-navigate country cards, offering
            quick access to essential facts like currency, population, and more.
            Dive deeper into each country's dedicated page, where you can learn
            about current weather conditions, local cultures, and key historical
            insights. Whether you're planning a trip or just curious about the
            world, CountriesInfo brings the globe to your fingertips! Start
            exploring and expand your knowledge of the countries that shape our
            world!
          </Col>
          <Col>
            <Image src="public/worldmap.png" rounded className="w-100" />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <CardGroup className="m-5 g-3">
          <Card bg="dark" text="light">
            <Card.Img variant="top" src="public/signup.png" />
            <Card.Body>
              <Card.Title>Sign Up to Explore Countries</Card.Title>
              <Card.Text>
                Create an account to gain access to detailed information about
                countries worldwide. Discover new places, save your favorites,
                and customize your experience.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Join us and start your journey!
              </small>
            </Card.Footer>
          </Card>
          <Card bg="dark" text="light">
            <Card.Img variant="top" src="public/signin.png" />
            <Card.Body>
              <Card.Title>Sign In to Continue</Card.Title>
              <Card.Text>
                Already have an account? Sign in to continue exploring your
                favorite countries and stay updated with the latest information.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Welcome back!</small>
            </Card.Footer>
          </Card>
          <Card bg="dark" text="light">
            <Card.Img variant="top" src="public/singlecountry.png" />
            <Card.Body>
              <Card.Title>Explore Country Details</Card.Title>
              <Card.Text>
                Click on any country's flag to see detailed information,
                including cultural insights and real-time weather forecasts for
                the capital city.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Discover more about the world around you!
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>

      <Container className="mt-5 mb-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What can I do on the CountryInfo platform?
            </Accordion.Header>
            <Accordion.Body>
              On the CountryInfo platform, you can explore detailed information
              about countries worldwide, including key facts such as population,
              languages, and currencies. You can also create an account to save
              your favorite countries for easy access and view real-time weather
              forecasts for any country's capital city.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How do I view more information about a country?
            </Accordion.Header>
            <Accordion.Body>
              To view more information about a country, simply click on the card
              displaying the country’s flag. This will take you to a dedicated
              page where you can find comprehensive details about the country
              and a live weather forecast for the capital city. You can also add
              the country to your list of favorites for quick access later.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Home;
