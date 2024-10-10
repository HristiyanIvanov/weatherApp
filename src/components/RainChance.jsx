import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { useWeather } from "../context/WeatherContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDarkMode } from "../context/DarkModeContext";
import getShortDayNames from "../helpers/getShortDayNames";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  @media (max-width: 1000px) {
    justify-content: start;
  }
`;
const RainChanceText = styled.h3`
  color: var(--color-grey-900);
  font-size: 18px;
`;

function RainChance() {
  const { isDarkMode } = useDarkMode();
  const { weatherData } = useWeather();

  const data = weatherData?.daily?.precipitation_probability_max || [];
  const time = weatherData?.daily?.time || [];

  const labels = getShortDayNames(time);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Precipitation Probability (%)",
        data: data,
        backgroundColor: isDarkMode ? "#83cbfb" : "#04558b",
        borderColor: isDarkMode ? "#83cbfb" : "#04558b",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Weekly Precipitation Probability",
        color: isDarkMode ? "#ffffff" : "#292929",
        font: { size: 14 },
      },
      tooltip: {
        enabled: false,
      },
      // tooltip: {
      //   backgroundColor: isDarkMode ? "#ffffff" : "#292929",
      //   bodyColor: isDarkMode ? "#292929" : "#ffffff",
      //   titleColor: isDarkMode ? "#292929" : "#ffffff",
      //   titleFont: { size: 22 },
      // },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode ? "#ffffff" : "#292929",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDarkMode ? "#ffffff" : "#292929",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div>
      <RainChanceText>Rain Chance</RainChanceText>
      <ChartStyles>
        {weatherData ? (
          <Bar
            data={chartData}
            options={options}
            style={{ height: "220px", width: "320px" }}
          />
        ) : null}
      </ChartStyles>
    </div>
  );
}

export default RainChance;
