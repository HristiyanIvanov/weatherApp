import { useWeather } from "../context/WeatherContext";
import OverviewCard from "../ui/OverviewCard";
import styled from "styled-components";
import getCurrentInfo from "../helpers/getInfoOfCurrentData";
import { cardsObject } from "../lib/cardsObject";
import { useLocation } from "react-router-dom";
import OtherCities from "./OtherCities";

const OverviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    padding: 10px;
    font-size: 24px;
    color: var(--color-grey-900);
  }

  @media (max-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 800px) {
    gap: 10px;
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const MainOverviewLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    gap: 20px;
    justify-content: start;
  }
  @media (max-width: 800px) {
    gap: 10px;
    justify-content: start;
  }
`;

const OtherCitiesStyle = styled.div`
  width: 590px;
  height: 255px;
  border-radius: 25px;
  color: var(--color-grey-900);
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

function Overview() {
  const { weatherData } = useWeather();
  const { pathname } = useLocation();

  if (!weatherData) {
    return null;
  }

  const currVisibilty = getCurrentInfo(
    weatherData.current.time,
    weatherData.hourly.time,
    weatherData.hourly.visibility
  );
  const currPressure = getCurrentInfo(
    weatherData.current.time,
    weatherData.hourly.time,
    weatherData.hourly.pressure_msl
  );

  return (
    <OverviewLayout>
      <h1>Today&apos;s Overview</h1>
      <MainOverviewLayout>
        {Object.keys(cardsObject(weatherData, currVisibilty, currPressure)).map(
          (key) => (
            <OverviewCard
              key={key}
              {...cardsObject(weatherData, currVisibilty, currPressure)[key]}
            />
          )
        )}
        {pathname !== "/" && (
          <OtherCitiesStyle>
            <OtherCities direction="row" />
          </OtherCitiesStyle>
        )}
      </MainOverviewLayout>
    </OverviewLayout>
  );
}

export default Overview;
