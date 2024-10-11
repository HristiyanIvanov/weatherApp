import styled from "styled-components";
import fetchCityAndCountry from "../services/fetchCityAndCountry";
import { useWeather } from "../context/WeatherContext";

const CityCardStyles = styled.button`
  height: 72px;
  width: ${(props) => (props.direction === "row" ? "270px" : "100%")};
  border-radius: 25px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  margin-bottom: 16px;
  text-align: start;
  padding: 0 20px;
  line-height: 1;
  border: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
  &:hover {
    background-color: var(--color-grey-200);
    transition: 0.3s;
  }
`;

function CityCard({ city, lat, lng, direction }) {
  const { setCoordinates, setLoading } = useWeather();
  const handleClick = () => {
    const changeCity = async (city) => {
      setLoading(true);
      const result = await fetchCityAndCountry(city.lat, city.lng);
      if (result) {
        setCoordinates({ lat: city.lat, lng: city.lng });
      }
      setLoading(false);
    };

    changeCity({ lat, lng });
  };

  return (
    <CityCardStyles onClick={handleClick} direction={direction}>
      <h1>{city}</h1>
    </CityCardStyles>
  );
}

export default CityCard;
