import WeatherCard from "../ui/WeatherCard";
import { useWeather } from "../context/WeatherContext";
import getHourlyWeatherStartingFromNow from "../helpers/getHourlyWeatherStartingFromNow";
import { addDays, startOfDay } from "date-fns";
import Spinner from "../ui/Spinner";

function TodayTomorrowForecast({ forecastDay }) {
  const { weatherData } = useWeather();
  return (
    <>
      {weatherData ? (
        (() => {
          const currentDateTime = new Date();
          const forecastDate =
            forecastDay === "tomorrow"
              ? addDays(startOfDay(currentDateTime), 1)
              : currentDateTime;

          const filteredHourlyTimes = getHourlyWeatherStartingFromNow(
            weatherData.hourly.time,
            forecastDate
          );

          return filteredHourlyTimes.map((time) => (
            <WeatherCard
              key={time}
              weatherData={weatherData}
              index={weatherData.hourly.time.indexOf(time)}
              timeData={weatherData.hourly.time}
              tempData={weatherData.hourly.temperature_2m}
              weatherCodeData={weatherData.hourly.weather_code}
              weatherIsDayData={weatherData.hourly.is_day}
              isHourly={true}
            />
          ));
        })()
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default TodayTomorrowForecast;
