import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ForecastNavStyles = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 0 20px 0;
  margin: 0;
`;

const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 15px;
  font-size: 18px;
  text-decoration: none;
  background-color: inherit;
  color: inherit;
  border: none;

  &.active {
    color: var(--color-blue-100);
  }

  &:hover {
    cursor: pointer;
    color: var(--color-blue-100);
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  color: var(--color-grey-900);
`;

function ForecastNav() {
  return (
    <ForecastNavStyles>
      <NavLinkWrapper>
        <NavItem
          to="/today"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Today
        </NavItem>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavItem
          to="/tomorrow"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Tomorrow
        </NavItem>
      </NavLinkWrapper>
      <NavLinkWrapper>
        <NavItem
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Next 7 Days
        </NavItem>
      </NavLinkWrapper>
    </ForecastNavStyles>
  );
}

export default ForecastNav;
