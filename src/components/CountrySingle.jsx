import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Image, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const CountrySingle = (props) => {
  const location = useLocation();
  const country = props.country || location.state.country;
  const [weather, setWeather] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=d6396cefb7fda507e8e0c956cbab71cf` //${import.meta.env.VITE_WEATHER_API_KEY}
      )
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        setWeather(response.data);
        setIsWeatherLoading(false);
      });
  }, [country.capital]);

  console.log("Weather: ", weather);

  if (isWeatherLoading) {
    return (
      <Col className="text-center m-5">
        <Spinner
          animation="border"
          role="status"
          className="center"
          variant="info"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  return (
    <MDBCol>
      <MDBCard className="h-100" style={{ maxWidth: "350px" }}>
        <MDBCardImage
          src={country.flags.svg}
          alt="Country flag"
          position="top"
          style={{ objectFit: "cover", width: "100%", height: "100%" }} // Smaller image height
        />
        <MDBCardBody>
          <MDBCardTitle style={{ fontSize: "1.2rem" }}>
            {country.name.common}, {country.capital}
          </MDBCardTitle>

          <MDBCardText style={{ fontSize: "0.9rem" }}>
            Right now it is <strong>{parseInt(weather.main.temp)}°C</strong> in{" "}
            {country.capital} and {weather.weather[0].description}
          </MDBCardText>

          <div className="d-flex align-items-center">
            <Image
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              style={{ width: "40px", height: "40px", marginRight: "10px" }} // Smaller image size
            />
            <Button
              variant="light"
              onClick={() => navigate("/countries")}
              size="sm" // Smaller button
            >
              Back to Countries
            </Button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CountrySingle;
