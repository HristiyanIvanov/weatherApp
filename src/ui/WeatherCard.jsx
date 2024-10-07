/* eslint-disable react/prop-types */
// WeatherCard.js
import styled, { useTheme } from "styled-components";
import IconComponent from "../components/IconComponent";
import getDayFromDate from "../helpers/dateGetter";
import tempRounder from "../helpers/tempRounder";
import getTimeFromDate from "../helpers/timeGetter";

const WeatherCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13%;
  border-radius: 25px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  margin-right: 10px;

  p {
    text-transform: uppercase;
    font-weight: 600;
    line-height: 0;
  }

  h1 {
    margin-top: 0;
  }

  h3 {
    margin-top: 0;
    line-height: 0.5;
  }
`;

function WeatherCard({
  index,
  timeData,
  tempData,
  weatherCodeData,
  weatherIsDayData = "d",
  isHourly = false,
  forceDayImage = false,
}) {
  const isDarkMode = useTheme();
  const { theme } = isDarkMode;
  const timeDisplay = isHourly
    ? getTimeFromDate(timeData[index])
    : getDayFromDate(timeData[index]);

  const weatherCode = weatherCodeData[index];

  const weatherIsDay = forceDayImage ? true : weatherIsDayData[index];

  return (
    <>
      <WeatherCardStyles>
        <p>{timeDisplay}</p>
        <IconComponent
          weatherCode={weatherCode}
          x={weatherIsDay ? "d" : "n"}
          theme={theme}
        />
        {isHourly ? (
          <h3>{tempRounder(tempData[index])}&deg;</h3>
        ) : (
          <>
            <h3>Max: {tempRounder(tempData.max[index])}&deg;</h3>
            <h3>Min: {tempRounder(tempData.min[index])}&deg;</h3>
          </>
        )}
      </WeatherCardStyles>
    </>
  );
}

export default WeatherCard;
