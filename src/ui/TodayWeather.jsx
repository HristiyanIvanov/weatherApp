/* eslint-disable react/prop-types */
import styled, { useTheme } from "styled-components";
import IconComponent from "../components/IconComponent";
import getDayFromDate from "../helpers/dateGetter";
import getTimeFromDate from "../helpers/timeGetter";
import tempRounder from "../helpers/tempRounder";

const Card = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  margin-right: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 0;
    line-height: 0.3;
  }

  h1 {
    font-size: 54px;
    line-height: 0;
  }
`;

const MainOfCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 0 0 5px 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: var(--color-blue-100);
  color: var(--color-grey-50);
`;

const TopOfCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 10px 20px;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: var(--color-blue-700);
  color: var(--color-grey-900);
  h2 {
    font-size: 21px;
    line-height: 0;
    text-transform: uppercase;
  }
`;

const RightOfCard = styled.div`
  text-align: center;
`;

function TodayWeather({ weatherData }) {
  const isDarkMode = useTheme();
  const { theme } = isDarkMode;
  const day = getDayFromDate(weatherData.current.time);
  const time = getTimeFromDate(weatherData.current.time);
  const weatherCode = weatherData.current.weather_code;
  const currTemp = tempRounder(weatherData.current.temperature_2m);
  const feelsLikeTemp = tempRounder(weatherData.current.apparent_temperature);
  const humidity = weatherData.current.relative_humidity_2m;
  const percipitation = weatherData.current.precipitation;
  const windSpeed = weatherData.current.wind_speed_10m;
  const isDay = weatherData.current.is_day;
  const sunrise = getTimeFromDate(weatherData.daily.sunrise[0]);
  const sunset = getTimeFromDate(weatherData.daily.sunset[0]);
  return (
    <Card>
      <TopOfCard>
        <h2>{day}</h2>
        <h2>{time}</h2>
      </TopOfCard>
      <MainOfCard>
        <h1>{currTemp}&deg;</h1>
        {isDarkMode ? (
          <IconComponent
            weatherCode={weatherCode}
            x={isDay === 0 ? "n" : "d"}
            theme={theme === "dark" ? "light" : "dark"}
          />
        ) : (
          <IconComponent
            weatherCode={weatherCode}
            x={isDay === 0 ? "n" : "d"}
            theme={theme === "dark" ? "dark" : "light"}
          />
        )}

        <div>
          <p>Real feel {feelsLikeTemp}&deg;</p>
          <p>Precipitation {percipitation}mm</p>
          <p>Sunrise {sunrise}</p>
        </div>

        <RightOfCard>
          <p>Humidity {humidity}%</p>
          <p>Wind {windSpeed}km/h</p>
          <p>Sunset {sunset}</p>
        </RightOfCard>
      </MainOfCard>
    </Card>
  );
}

export default TodayWeather;
