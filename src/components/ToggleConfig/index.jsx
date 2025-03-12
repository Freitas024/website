import React from "react";
import { Wrapper } from "./toggleStyles";

export default function ToggleConfig({setIsDarkTheme}) {
    return (
      <Wrapper>
        <li>
          <h4>Trocar tema</h4>
          <div onClick={() => setIsDarkTheme(true)}>Dark Mode</div>
          <div onClick={() => setIsDarkTheme(false)}>Light Mode</div>
        </li>
    </Wrapper>
    )
}