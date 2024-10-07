import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <AppLayout />
    </DarkModeProvider>
  );
}

export default App;
