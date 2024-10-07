import TodayWeather from "../ui/TodayWeather";
import WeatherCard from "../ui/WeatherCard";
import { useWeather } from "../context/WeatherContext";
import Spinner from "../ui/Spinner";

function DailyForecast() {
  const { weatherData } = useWeather();
  return (
    <>
      {weatherData ? <TodayWeather weatherData={weatherData} /> : ""}
      {weatherData ? (
        weatherData?.daily?.time?.map((time, index) => (
          <WeatherCard
            key={time}
            weatherData={weatherData}
            index={index}
            timeData={weatherData.daily.time}
            tempData={{
              max: weatherData.daily.temperature_2m_max,
              min: weatherData.daily.temperature_2m_min,
            }}
            weatherCodeData={weatherData.daily.weather_code}
            forceDayImage={true}
            isHourly={false}
          />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default DailyForecast;
