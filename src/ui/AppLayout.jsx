import styled from "styled-components";
import Header from "../components/Header";
import DailyForecast from "../components/DailyForecast";
import TodayTomorrowForecast from "../components/TodayTomorrowForecast";
import { Route, Routes, useLocation } from "react-router-dom";
import { WeatherProvider } from "../context/WeatherContext";
import ForecastNav from "./ForecastNav";
import { useRef } from "react";
import RainChance from "../components/RainChance";
import Overview from "../components/Overview";
import OtherCities from "../components/OtherCities";

const Container = styled.div`
  background-color: var(--color-grey-50);
  width: 90%;
  max-width: 1400px;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main = styled.main.withConfig({
  shouldForwardProp: (prop) => prop !== "isSingleColumn",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isSingleColumn ? "1fr" : "2fr 1fr"};
  gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
const WeatherCardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    background-color: var(--color-grey-200);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-grey-200);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-500);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-700);
  }
`;

const MainWeatherLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function AppLayout() {
  const scrollContainerRef = useRef(null);
  const handleScroll = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };
  const { pathname } = useLocation();

  return (
    <WeatherProvider>
      <Container>
        <Header />
        <Main isSingleColumn={pathname !== "/"}>
          <MainWeatherLayout>
            <ForecastNav />
            <WeatherCardContainer
              ref={scrollContainerRef}
              onWheel={handleScroll}
            >
              <Routes>
                <Route
                  path="/today"
                  element={<TodayTomorrowForecast forecastDay="today" />}
                />
                <Route
                  path="/tomorrow"
                  element={<TodayTomorrowForecast forecastDay="tomorrow" />}
                />
                <Route path="/" element={<DailyForecast />} />
              </Routes>
            </WeatherCardContainer>
          </MainWeatherLayout>
          {pathname === "/" && <RainChance />}
          <Overview />
          {pathname === "/" && <OtherCities />}
        </Main>
      </Container>
    </WeatherProvider>
  );
}

export default AppLayout;
