import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
