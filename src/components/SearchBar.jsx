import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import handleSearch from "../services/fetchCityCoords";
const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  font-size: 16px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  padding: 10px;
  border-radius: 15px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
`;

const SearchIcon = styled.div`
  cursor: pointer;
  margin-top: 5px;
`;

function SearchBar({ setCoordinates, setLoading }) {
  const [city, setCity] = useState("");
  const searchCity = async () => {
    setLoading(true);
    const result = await handleSearch(city);
    if (result) {
      setCoordinates(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchCity();
    }
  };

  return (
    <SearchBox>
      <SearchIcon onClick={searchCity}>
        <AiOutlineSearch />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search city..."
        onChange={(e) => setCity(e.target.value)}
        onKeyUp={handleKeyPress}
        value={city}
      />
    </SearchBox>
  );
}

export default SearchBar;
