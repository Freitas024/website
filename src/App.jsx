import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/GlobalStyles";
import Home from "./pages/Home/index";
import { ThemeProvider } from "styled-components";
import { List, ButtonToggle } from './styles/App';
import { Button } from './styles/Button';
import { icons } from "./settings";

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Button onClick={handleToggle}>
        <img src={icons.Gear}/>
        </Button>
          {toggle && (
            <List>
              <h4>Tema</h4>
              <ButtonToggle onClick={() => {setIsDarkTheme(true)}}>
                <img src={icons.Moon}/>
                Dark
              </ButtonToggle>
              <ButtonToggle onClick={() => {setIsDarkTheme(false)}}> 
                <img src={icons.Sun}/>
                Light 
              </ButtonToggle>
              <h4>Redes Sociais</h4>
              <a href="https://github.com/Freitas024" target="_blank">
                <ButtonToggle>
                  <img src={icons.Github}/>
                  Github
                </ButtonToggle>
              </a>
              <a href="https://www.linkedin.com/in/vinicius-de-freitas-e-silva-137a02295/" target="_blank">
                <ButtonToggle>
                  <img src={icons.Linkedin}/>
                  Linkedin
                </ButtonToggle>
              </a>
              <a href="https://www.instagram.com/ux_vini/profilecard/?igsh=MXB4eHZuNmd0NHR1dA==" target="_blank">
                <ButtonToggle>
                  <img src={icons.Instagram}/>
                  Instagram
                </ButtonToggle>
              </a>
            </List>
          )}
      </Router>
    </ThemeProvider>
  );
}
