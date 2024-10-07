import { WiHumidity, WiCloudyGusts } from "react-icons/wi";
import { PiCompass } from "react-icons/pi";
import { TbEye, TbBrandSpeedtest } from "react-icons/tb";

export const cardsObject = (weatherData, currVisibilty, currPressure) => ({
  humidity: {
    title: "Humidity",
    icon: <WiHumidity />,
    data: weatherData.current.relative_humidity_2m,
    description:
      weatherData.current.relative_humidity_2m < 40
        ? "Low humidity. It might feel dry."
        : weatherData.current.relative_humidity_2m < 70
        ? "Moderate humidity. Comfortable conditions."
        : "High humidity. It might feel humid and uncomfortable.",
    metrics: "%",
  },
  wind: {
    title: "Wind",
    icon: <WiCloudyGusts />,
    data: weatherData.current.wind_speed_10m,
    description:
      weatherData.current.wind_speed_10m >= 20
        ? "High wind. Expect changes in the weather."
        : "Normal wind. Good weather conditions.",
    metrics: "km/h",
  },
  gusts: {
    title: "Gusts",
    icon: <WiCloudyGusts />,
    data: weatherData.daily.wind_gusts_10m_max[0],
    description:
      weatherData.daily.wind_gusts_10m_max[0] >= 20
        ? "High gusts. Expect changes in the weather."
        : "Normal gusts. Good weather conditions.",
    metrics: "km/h",
  },
  windDirection: {
    title: "Wind Direction",
    icon: <PiCompass />,
    data: weatherData.daily.wind_direction_10m_dominant[0],
    description:
      weatherData.daily.wind_direction_10m_dominant[0] < 45
        ? "The wind is coming from North"
        : weatherData.daily.wind_direction_10m_dominant[0] < 135
        ? "The wind is coming from East"
        : weatherData.daily.wind_direction_10m_dominant[0] < 225
        ? "The wind is coming from South"
        : weatherData.daily.wind_direction_10m_dominant[0] < 315
        ? "The wind is coming from West"
        : "The wind is coming from North",
    metrics: "°",
  },
  visibility: {
    title: "Visibility",
    icon: <TbEye />,
    data: Math.round(currVisibilty / 1000),
    description:
      currVisibilty >= 10
        ? "It's perfectly clear right now."
        : currVisibilty >= 5
        ? "Good visibility."
        : "Poor visibility. Exercise caution while driving or moving around.",
    metrics: "km",
  },
  pressure: {
    title: "Pressure",
    icon: <TbBrandSpeedtest />,
    data: currPressure,
    description:
      currPressure < 1000
        ? "Low pressure. Expect changes in the weather."
        : currPressure >= 1000 && currPressure <= 1010
        ? "Normal pressure. Typical weather conditions."
        : "High pressure. Expect stable and clear weather.",
    metrics: "hPa",
  },
});
