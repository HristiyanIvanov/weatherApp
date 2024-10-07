/* eslint-disable react/prop-types */
import styled from "styled-components";
import { weatherIconMappings } from "../lib/iconsMap";
const Image = styled.img`
  width: 100%;
  filter: ${({ theme }) => (theme === "dark" ? "invert(1)" : "invert(0)")};
`;
function IconComponent({ weatherCode, x, theme }) {
  const iconNameKey = x ? `${weatherCode}${x}` : weatherCode;
  const iconName = weatherIconMappings[iconNameKey];

  return (
    <div>
      <Image
        alt={weatherCode}
        src={`../icons/wi-${iconName}.svg`}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default IconComponent;
