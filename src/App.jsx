import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Works from "./pages/works";
import Header from "./components/Header";
import ToggleConfig from "./components/ToggleConfig";  
import { ThemeProvider } from "styled-components";

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [toggle, setToggle ] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <Header toggle={toggle} setToggle={setToggle}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        { toggle && <ToggleConfig setIsDarkTheme={setIsDarkTheme}/>}
      </ThemeProvider>
    </Router>
  );
}
