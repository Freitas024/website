import React from "react";
import { List, ButtonToggle } from '../../styles/App';
export default function ToggleConfig() {
    return (
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
    )
}