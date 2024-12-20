import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../store/favouritesSlice";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Col key={country.name.official}>
        <Card className="h-100">
          <Link
            to={`/countries/${country.name.common}`}
            state={{ country: country }}
          >
            <Card.Img
              variant="top"
              src={country.flags.svg}
              alt={country.name.common}
              className="rounded h-50"
              style={{
                objectFit: "cover",
                minHeight: "200px",
                maxHeight: "200px",
              }}
            />
          </Link>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{country.name.common}</Card.Title>
            <Card.Subtitle classname="mb-5 text-muted">
              {country.name.official}
            </Card.Subtitle>
            <ListGroup
              variant="flush"
              className="flex-grow-1 justify-content-center"
            >
              <ListGroup.Item>
                <i className="bi bi-people me-2"> </i>

                {country.population.toLocaleString()}
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi-currency-dollar me-2"></i>
                {Object.values(country.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ") || "No currency"}
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bi-translate me-2"></i>
                {Object.values(country.languages || {})
                  .map((language) => language)
                  .join(", ") || "No currency"}
              </ListGroup.Item>
            </ListGroup>
            <Row xs={2}>
              <Button
                size="sm"
                variant="success"
                onClick={() => dispatch(addFavourite(country.name.common))}
              >
                Add Favourite
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => dispatch(removeFavourite(country.name.common))}
              >
                Remove Favourite
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CountryCard;
