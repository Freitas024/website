import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Works from "./pages/works";
import { ThemeProvider } from "styled-components";

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [toggle, setToggle ] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
