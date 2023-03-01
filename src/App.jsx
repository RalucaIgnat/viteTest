import StepperComponent from "./components/Stepper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StepperComponent />
    </ThemeProvider>
  );
}

export default App;
