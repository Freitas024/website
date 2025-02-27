import React from "react";
import { Burguer } from "../Icons/Burguer.jsx";
import {HeaderContainer} from "./styles.js";

export default function Header({ toggle, setToggle }) {
    return (
        <HeaderContainer> 
            <h2>viux</h2>
            <div onClick={() => setToggle(!toggle)}>
                <Burguer />
            </div>
        </HeaderContainer>
    )
}