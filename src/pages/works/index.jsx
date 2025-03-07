import { useState, useEffect } from "react";
import { Wrapper, Ul } from "./styles";

export default function Works() {

    const [ repos, setRepos ] = useState([]);

    const handleFetch = async () => {
        try {
            const response = await fetch('https://api.github.com/users/Freitas024/repos');
            const data = await response.json();

            const reposOrdenado = data.sort((a , b) => new Date(b.updated_at) - new Date(a.updated_at));

            setRepos(reposOrdenado);
        }catch (error) {
            console.log("Erro na requisição: ", error);
        }
    }

    useEffect(() => {
        handleFetch();
    },[]);


    return(
        <Wrapper>
            <input type="search" name="filter" id="filter" placeholder="filtrar projetos ..."/>
            <Ul>
            {
                repos.map((data, index) => (
                    <li key={index}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <ol>
                            <span>Linguagem: { data.language ?? "sem linguagem"}</span>
                            <span>Atualizado em: {new Date(data.updated_at).toLocaleDateString('pt-BR')}</span>
                        </ol>
                        <a href={data.html_url} target="_blank">Veja o codigo</a>
                    </li>
                ))
            }
            </Ul>
        </Wrapper>
    )
}