import styled from "styled-components";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeSwitch = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 15px;
  padding: 10px;
  background-color: var(--color-grey-100);
  position: relative;
  color: ${({ isDarkMode }) =>
    isDarkMode ? "var(--color-grey-0)" : "var(--color-grey-900)"};
`;
const ActiveMode = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 24px;
  cursor: pointer;
  background-color: var(--color-blue-100);
  color: var(--color-grey-100);
  position: absolute;
  transition: all 0.5s ease;
  transform: ${({ isDarkMode }) =>
    isDarkMode ? "translateX(35px)" : "translateX(-5px)"};
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSwitch onClick={toggleDarkMode}>
      <AiOutlineSun />
      <ActiveMode isDarkMode={isDarkMode}>
        {isDarkMode ? <AiOutlineMoon /> : <AiOutlineSun />}
      </ActiveMode>
      <AiOutlineMoon />
    </DarkModeSwitch>
  );
}

export default DarkModeToggle;
