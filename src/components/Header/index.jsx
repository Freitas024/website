import React from "react";
import { Burguer } from "../Icons/Burguer.jsx";
import {HeaderContainer} from "./styles.js";
import { useCustomNavigate } from "../../hooks/useCustomNavigate.js";

export default function Header({ toggle, setToggle }) {

    const { ToGo } = useCustomNavigate();

    return (
        <HeaderContainer> 
            <h2 onClick={() => ToGo('/')}>viux</h2>
            <div onClick={() => setToggle(!toggle)}>
                <Burguer />
            </div>
        </HeaderContainer>
    )
}