import { useState, useEffect } from "react";
import { HomeContainer, ProfileContainer } from "./styles";

export default function Home() {

    const [user, setUser] = useState("");
    
    useEffect(() => { 
        fetch("https://api.github.com/users/Freitas024")
        .then(response => response.json())
        .then(data => setUser(data.avatar_url))
        .catch(error => console.log("Erro: " + error));

    }, []);

    return(
        <HomeContainer>
            <ProfileContainer>
                <img src={user} alt="Vinicius de Freitas e Silva" />
                <div>
                    <h3>Vinicius de Freitas e Silva</h3>
                    <p>Desenvolvedor Front-end | UX/UI Designer</p>
                </div>
            </ProfileContainer>
        </HomeContainer>
    )
}