import { useState, useEffect } from "react";
import { HomeContainer, ProfileContainer, InfoContainer, ProjectContainer } from "./styles";
import { Check } from "../../components/Icons/check";
import { Download } from "../../components/Icons/Download";
import { useDownload } from "../../hooks/useDownload";
import { Icon } from "@iconify/react";
import Highlights from "../../components/ProjetosDestaque";

export default function Home() {

    const [user, setUser] = useState("");
    const { downloadFile } = useDownload();
    
    useEffect(() => { 
        fetch("https://api.github.com/users/Freitas024")
        .then(response => response.json())
        .then(data => setUser(data.avatar_url))
        .catch(error => console.log("Erro: " + error));

    }, []);

    const handleDownload = (e) => {
        e.preventDefault();
        const downloadURL = "/Curriculum.pdf"
        downloadFile(downloadURL, "ViniciusFreitas.pdf");
        console.log("Download");
    }

    return(
        <HomeContainer>
            <ProfileContainer>
                <img src={user} alt="Vinicius de Freitas e Silva" />
                <div>
                    <h3>Vinicius de Freitas e Silva</h3>
                    <p>Desenvolvedor Front-end | UX/UI Designer</p>
                </div>
            </ProfileContainer>
            <InfoContainer>
                <h4>Quem sou ?</h4>
                <br/>
                <p>
                    Desenvolvedor de software com foco em Front-end e UX/UI Design. Apaixonado por tecnologia e inovação,
                    busco sempre aprender e me aprimorar em novas tecnologias e metodologias de desenvolvimento de software,
                    com o objetivo de entregar produtos de qualidade e que atendam as necessidades dos usuários. Atualmente 
                    estou cursando Análise e Desenvolvimento de Sistemas e possuo experiência em desenvolvimento de aplicações
                    web com tecnologias como <span>HTML, CSS, JavaScript, React, Node.js, MongoDB e MySQL.</span>
                </p>
                <br/>
                <button onClick={handleDownload}>
                    <h3>Curriculum</h3>
                    <Download />
                </button>
                <h4>Certificados</h4>
                <ul>
                    <li onClick={() => window.open("https://cursos.alura.com.br/degree/certificate/a84be5bb-1a01-4b18-a3c0-d1f7675a4248?lang=pt_BR", "_blank")}>
                        <h3>Figma</h3>
                        <Check />
                    </li>
                    <li onClick={() => window.open("https://cursos.alura.com.br/degree/certificate/0c0e8901-ba81-45b9-88a5-e801323a9695?lang=pt_BR", "_blank")}>
                        <h3>UX Design</h3>
                        <Check />
                    </li>
                </ul>
                <br/>
                <h4>Tech Stack</h4>
                <ol>
                    <li>
                        <Icon icon="devicon:html5" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:css3" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:javascript" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:react" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:nodejs" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:git" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:mongodb-wordmark" width="50" height="50" />
                    </li>
                    <li>
                        <Icon icon="devicon:mysql" width="50" height="50" />
                    </li>
                </ol>
            </InfoContainer>
            <ProjectContainer>
                <h4>Projetos principais</h4>
                <Highlights />
                <button>Veja Mais ...</button>
            </ProjectContainer>
        </HomeContainer>
    )
}