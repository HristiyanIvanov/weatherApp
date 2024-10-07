import { createContext, useContext, useEffect, useState } from "react";
import fetchWeather from "../services/fetchWeather";

// Create the context
const WeatherContext = createContext();

// Create a provider component
export const WeatherProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (coordinates) {
      setLoading(true);
      const fetchWeatherData = async () => {
        const weather = await fetchWeather(coordinates.lat, coordinates.lng);
        if (weather) {
          setWeatherData(weather);
        }
        setLoading(false);
      };

      fetchWeatherData();
    }
  }, [coordinates]);

  return (
    <WeatherContext.Provider
      value={{
        coordinates,
        setCoordinates,
        weatherData,
        setWeatherData,
        loading,
        setLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};

// export const useWeather = () => {
//   const { setCoordinates, weatherData, loading } = useContext(WeatherContext);

//   // Function to update coordinates and trigger weather fetch
//   const updateCoordinates = (lat, lng) => {
//     setCoordinates({ lat, lng });
//   };

//   return {
//     weatherData,
//     loading,
//     updateCoordinates, // Expose the function to update coordinates
//   };
// };
