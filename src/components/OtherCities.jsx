import styled from "styled-components";
import CityCard from "../ui/CityCard";
import { useLocation } from "react-router-dom";

const Layout = styled.div`
  display: ${(props) => (props.direction === "row" ? "grid" : "flex")};
  grid-template-columns: ${(props) =>
    props.direction === "row" ? "repeat(2, 1fr)" : "none"};
  flex-direction: ${(props) =>
    props.direction === "row" ? "column" : "column"};
  column-gap: 50px;
  h1 {
    padding: 10px;
    font-size: 24px;
    color: var(--color-grey-900);
  }
`;

function OtherCities({ direction = "column" }) {
  const { pathname } = useLocation();

  const cityObj = {
    Sofia: {
      name: "Sofia",
      lat: "42.6833",
      lng: "23.3167",
    },
    Plovdiv: {
      name: "Plovdiv",
      lat: "42.15",
      lng: "24.75",
    },
    Varna: {
      name: "Varna",
      lat: "43.2167",
      lng: "27.9167",
    },
    Burgas: {
      name: "Burgas",
      lat: "42.5",
      lng: "27.4667",
    },
    Ruse: {
      name: "Ruse",
      lat: "43.8333",
      lng: "25.9667",
    },
    "Stara Zagora": {
      name: "Stara Zagora",
      lat: "42.3833",
      lng: "25.6",
    },
  };

  return (
    <Layout direction={direction}>
      {pathname === "/" && <h1>Other cities</h1>}
      {Object.keys(cityObj).map((cityKey) => (
        <CityCard
          key={cityKey}
          city={cityObj[cityKey].name}
          lat={cityObj[cityKey].lat}
          lng={cityObj[cityKey].lng}
          direction={direction}
        />
      ))}
    </Layout>
  );
}

export default OtherCities;
