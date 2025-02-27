import React from "react";
import { HomeContainer, ProfileContainer } from "./styles";

export default function Home() {
    return(
        <HomeContainer>
            <ProfileContainer>
                <h3>Vinicius de Freitas e Silva</h3>
                <p>Desenvolvedor Front-end | UX/UI Designer</p>
            </ProfileContainer>
        </HomeContainer>
    )
}