/* eslint-disable react/prop-types */
import styled from "styled-components";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";
import fetchCityAndCountry from "../services/fetchCityAndCountry";
import { useWeather } from "../context/WeatherContext";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40px;
//   height: 40px;
//   border: none;
//   font-size: 24px;
//   border-radius: 50%;
//   background-color: var(--color-grey-100);
//   color: var(--color-grey-900);
//   &:hover {
//     cursor: pointer;
//     background-color: var(--color-grey-300);
//     transition: all 0.3s ease;
//   }
// `;

const Location = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-grey-900);
  span {
    margin-left: 5px;
    font-size: 16px;
  }
`;

// const ProfilePicture = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
// `;

function Header() {
  const { coordinates, setCoordinates, setLoading } = useWeather();
  const [location, setLocation] = useState({ city: "", country: "" });

  useEffect(() => {
    const getLocation = async () => {
      if (coordinates && coordinates.lat !== null && coordinates.lng !== null) {
        const cityCountry = await fetchCityAndCountry(
          coordinates.lat,
          coordinates.lng
        );
        if (cityCountry) {
          setLocation(cityCountry);
        }
      }
    };

    getLocation();
  }, [coordinates]);

  return (
    <Container>
      <Wrapper>
        {/* <Button>
          <AiOutlineAppstore />
        </Button> */}

        <Location>
          <IoLocationOutline />
          <span>
            {coordinates
              ? `${location.city}, ${location.country}`
              : "No location"}
          </span>
        </Location>
      </Wrapper>
      <SearchBar setCoordinates={setCoordinates} setLoading={setLoading} />

      <Wrapper>
        <DarkModeToggle />
        {/* <Button>
          <ProfilePicture src="https://i.pravatar.cc/30" alt="" />
        </Button> */}
      </Wrapper>
    </Container>
  );
}

export default Header;
