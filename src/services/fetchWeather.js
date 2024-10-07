const fetchWeather = async (lat, lng) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,is_day,pressure_msl,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=auto`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fetchWeather;
